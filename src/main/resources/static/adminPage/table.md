```sql
create table if not exists account_passwords
(
    account_id varchar(11)  not null
        primary key,
    password   varchar(255) null
);

create table if not exists colleges
(
    college_id   char(3)      not null
        primary key,
    college_name varchar(255) null,
    head_id      varchar(11)  null,
    remarks      text         null
);

create table if not exists course_categories
(
    category_id   int          not null
        primary key,
    category_name varchar(255) null
);

create table if not exists identities
(
    account_id varchar(11) not null,
    identity   int         not null,
    college_id char(3)     null,
    major_id   char(3)     null,
    primary key (account_id, identity)
);

create table if not exists staff
(
    account_id varchar(11)          not null
        primary key,
    name       varchar(255)         null,
    gender     char charset utf8mb3 null,
    phone      varchar(20)          null,
    email      varchar(255)         null,
    constraint staff_ibfk_1
        foreign key (account_id) references account_passwords (account_id)
            on update cascade on delete cascade
);

create table if not exists majors
(
    major_id     char(3)       not null
        primary key,
    major_name   varchar(255)  null,
    head_id      varchar(11)   null,
    remarks      text          null,
    credit_limit decimal(5, 2) null,
    college_id   char(3)       null,
    constraint majors_ibfk_1
        foreign key (head_id) references staff (account_id)
);

create table if not exists courses
(
    course_id    int           not null
        primary key,
    course_name  varchar(255)  null,
    credits      decimal(3, 1) null,
    category_id  int           null,
    is_mandatory tinyint(1)    null,
    Intro        text          null,
    major_id     char(3)       null,
    constraint courses_ibfk_1
        foreign key (category_id) references course_categories (category_id),
    constraint courses_majors_major_id_fk
        foreign key (major_id) references majors (major_id)
            on update cascade
);

create index category_id
    on courses (category_id);

create index head_id
    on majors (head_id);

create table if not exists students
(
    account_id      varchar(11)          not null
        primary key,
    student_name    varchar(255)         null,
    gender          char charset utf8mb3 null,
    phone           varchar(20)          null,
    enrollment_time date                 null,
    email           varchar(255)         null,
    constraint students_ibfk_1
        foreign key (account_id) references account_passwords (account_id)
            on update cascade on delete cascade,
    check (`gender` in ('男', '女'))
);

create table if not exists course_scores
(
    student_id varchar(11)   not null,
    course_id  int           not null,
    score      decimal(5, 2) null,
    primary key (student_id, course_id),
    constraint course_scores_ibfk_1
        foreign key (student_id) references students (account_id)
            on update cascade on delete cascade,
    constraint course_scores_ibfk_2
        foreign key (course_id) references courses (course_id)
            on update cascade on delete cascade
);

create index course_id
    on course_scores (course_id);

create table if not exists terms
(
    term_id   int          not null
        primary key,
    term_name varchar(255) null,
    status    varchar(50)  null
);

create table if not exists course_deliver
(
    deliverId      int auto_increment
        primary key,
    course_id      int          null,
    teacher_id     varchar(11)  null,
    start_week     int          null,
    end_week       int          null,
    start_time     int          null,
    end_time       int          null,
    location       varchar(255) null,
    class_hours    int          null,
    term_id        int          null,
    max_enrollment int          null,
    course_status  varchar(50)  null,
    constraint course_deliver_ibfk_1
        foreign key (teacher_id) references staff (account_id),
    constraint course_deliver_ibfk_2
        foreign key (course_id) references courses (course_id),
    constraint course_deliver_ibfk_3
        foreign key (term_id) references terms (term_id)
);

create index course_id
    on course_deliver (course_id);

create index teacher_id
    on course_deliver (teacher_id);

create index term_id
    on course_deliver (term_id);

create table if not exists verification_codes
(
    uuid       char(36)                            not null
        primary key,
    code       varchar(6)                          null,
    created_at timestamp default CURRENT_TIMESTAMP null
);

create or replace definer = root@`%` view aca_Admin_Info as
select `courseSelect`.`staff`.`account_id`      AS `account_id`,
       `courseSelect`.`staff`.`name`            AS `name`,
       `courseSelect`.`staff`.`gender`          AS `gender`,
       `courseSelect`.`staff`.`phone`           AS `phone`,
       `courseSelect`.`staff`.`email`           AS `email`,
       `courseSelect`.`colleges`.`college_name` AS `college_name`
from (((`courseSelect`.`account_passwords` join `courseSelect`.`staff`
        on ((`courseSelect`.`account_passwords`.`account_id` =
             `courseSelect`.`staff`.`account_id`))) join `courseSelect`.`identities`
       on ((`courseSelect`.`account_passwords`.`account_id` =
            `courseSelect`.`identities`.`account_id`))) join `courseSelect`.`colleges`
      on ((`courseSelect`.`identities`.`college_id` = `courseSelect`.`colleges`.`college_id`)))
where (`courseSelect`.`identities`.`identity` = 2);

create or replace definer = root@`%` view course_cate as
select `courseSelect`.`courses`.`course_id`               AS `course_id`,
       `courseSelect`.`majors`.`major_id`                 AS `major_id`,
       `courseSelect`.`majors`.`college_id`               AS `college_id`,
       `courseSelect`.`courses`.`course_name`             AS `course_name`,
       `courseSelect`.`courses`.`credits`                 AS `credits`,
       `courseSelect`.`courses`.`is_mandatory`            AS `is_mandatory`,
       `courseSelect`.`courses`.`Intro`                   AS `Intro`,
       `courseSelect`.`course_categories`.`category_name` AS `category_name`
from ((`courseSelect`.`courses` join `courseSelect`.`course_categories` on ((`courseSelect`.`courses`.`category_id` =
                                                                             `courseSelect`.`course_categories`.`category_id`))) join `courseSelect`.`majors`
      on ((`courseSelect`.`majors`.`major_id` = `courseSelect`.`courses`.`major_id`)));

create or replace definer = root@`%` view staff_identity as
select `courseSelect`.`identities`.`identity`   AS `identity`,
       `courseSelect`.`identities`.`college_id` AS `college_id`,
       `courseSelect`.`staff`.`account_id`      AS `account_id`,
       `courseSelect`.`colleges`.`college_name` AS `college_name`,
       `courseSelect`.`staff`.`name`            AS `name`
from ((`courseSelect`.`identities` join `courseSelect`.`staff` on ((`courseSelect`.`identities`.`account_id` =
                                                                    `courseSelect`.`staff`.`account_id`))) left join `courseSelect`.`colleges`
      on ((`courseSelect`.`identities`.`college_id` = `courseSelect`.`colleges`.`college_id`)));

create or replace definer = root@`%` view student_info as
select `courseSelect`.`students`.`account_id`      AS `account_id`,
       `courseSelect`.`students`.`student_name`    AS `student_name`,
       `courseSelect`.`majors`.`major_id`          AS `major_id`,
       `courseSelect`.`majors`.`major_name`        AS `major_name`,
       `courseSelect`.`majors`.`college_id`        AS `college_id`,
       `courseSelect`.`colleges`.`college_name`    AS `college_name`,
       `courseSelect`.`students`.`phone`           AS `phone`,
       `courseSelect`.`majors`.`credit_limit`      AS `credit_limit`,
       `courseSelect`.`students`.`enrollment_time` AS `enrollment_time`,
       `courseSelect`.`students`.`gender`          AS `gender`
from ((((`courseSelect`.`account_passwords` join `courseSelect`.`identities`
         on (((`courseSelect`.`account_passwords`.`account_id` = `courseSelect`.`identities`.`account_id`) and
              (`courseSelect`.`identities`.`identity` = 1)))) left join `courseSelect`.`students`
        on ((`courseSelect`.`account_passwords`.`account_id` =
             `courseSelect`.`students`.`account_id`))) join `courseSelect`.`majors`
       on ((`courseSelect`.`identities`.`major_id` =
            `courseSelect`.`majors`.`major_id`))) join `courseSelect`.`colleges`
      on ((`courseSelect`.`majors`.`college_id` = `courseSelect`.`colleges`.`college_id`)));

create or replace definer = root@`%` view teacher_Info as
select `courseSelect`.`staff`.`account_id`      AS `account_id`,
       `courseSelect`.`staff`.`name`            AS `name`,
       `courseSelect`.`staff`.`gender`          AS `gender`,
       `courseSelect`.`colleges`.`college_name` AS `college_name`,
       `courseSelect`.`staff`.`phone`           AS `phone`,
       `courseSelect`.`staff`.`email`           AS `email`
from (((`courseSelect`.`account_passwords` join `courseSelect`.`identities`
        on (((`courseSelect`.`identities`.`account_id` = `courseSelect`.`account_passwords`.`account_id`) and
             (`courseSelect`.`identities`.`identity` = 4)))) join `courseSelect`.`staff`
       on ((`courseSelect`.`staff`.`account_id` =
            `courseSelect`.`account_passwords`.`account_id`))) join `courseSelect`.`colleges`
      on ((`courseSelect`.`colleges`.`college_id` = `courseSelect`.`identities`.`college_id`)));

create
    definer = root@`%` procedure LoginConfirm(IN uuidin char(36), IN codein varchar(6), IN id varchar(255),
                                              IN passwd varchar(255), OUT result int, OUT account_id_out varchar(255),
                                              OUT identity_out int)
sp:begin
DECLARE code_count INT;
SELECT COUNT(*) INTO code_count FROM verification_codes
WHERE verification_codes.uuid=uuidin AND verification_codes.code = codein;

IF code_count > 0 THEN
SET result=code_count;
ELSE
SET result=code_count;
LEAVE sp;
END IF;

SELECT identities.identity, identities.account_id INTO  identity_out,account_id_out
from
    account_passwords
join -- 不应该使用LeftJoin
    identities
on
    account_passwords.account_id=identities.account_id
and account_passwords.account_id=id
where
    account_passwords.password=passwd
LIMIT 1;
end;

create
    definer = root@`%` procedure addCollege(IN collegeId char(3), IN collegeName varchar(255),
                                            IN collegeHeadId varchar(11), IN collegeRemarks varchar(255),
                                            OUT addStat int)
adds:begin
        if(select COUNT(*) from colleges where college_id=collegeId)!=0 -- 如果学院已存在则直接返回
            then
                set addStat =2;
                leave adds;
        end if;
        if(select COUNT(*) from staff where account_id=collegeHeadId)!=1 -- 如果负责人不存在则直接返回
            then
                set addStat =3;
                leave adds;
        end if;
        insert into colleges (college_id, college_name, head_id, remarks) VALUES (collegeId,collegeName,collegeHeadId,collegeRemarks);
        set addStat=1;
    end;

create
    definer = root@`%` procedure addMajor(IN collegeId char(3), IN majorId char(3), IN majorName varchar(255),
                                          IN majorHeadId varchar(11), IN majorRemarks varchar(255),
                                          IN majorCreditLimit int, OUT addStat int)
adds:begin
        if(select COUNT(*) from majors where major_id=majorId)!=0 -- 如果专业已存在则直接返回
            then
                set addStat =2;
                leave adds;
        end if;
        if(select COUNT(*) from colleges where college_id=collegeId)!=1 -- 如果学院不存在则直接返回
            then
                set addStat =3;
                leave adds;
        end if;
        if(select COUNT(*) from staff where account_id=majorHeadId)!=1 -- 如果负责人不存在则直接返回
            then
                set addStat =4;
                leave adds;
        end if;
        -- 如果负责人不属于该学院则直接返回
        if(select COUNT(*) from staff where account_id=majorHeadId and account_id not in (select staff.account_id from staff
join identities
on staff.account_id=identities.account_id and college_id= collegeId
union
select head_id from colleges where college_id=collegeId))!=0
            then
                set addStat =5;
                leave adds;
        end if;
         insert into majors (major_id, major_name, head_id, remarks, credit_limit,college_id) VALUES (majorId,majorName,majorHeadId,majorRemarks,majorCreditLimit,collegeId);
        set addStat=1;
    end;

create
    definer = root@`%` procedure addStaff(IN accId varchar(11), IN passWd varchar(255), IN staffName varchar(255),
                                          IN staffGender char, IN staffPhone varchar(20), IN staffEmail varchar(255),
                                          OUT insertStat int)
adds:begin
        if(select COUNT(*) from account_passwords where account_id=accId)!=0 -- 如果账号已存在则直接返回
            then
                set insertStat =2;
                leave adds;
        end if;
        insert into account_passwords (account_id, password) VALUES (accId,passWd);
        insert into staff (account_id, name, gender, phone, email) VALUES (accId,staffName,staffGender,staffPhone,staffEmail);
        set insertStat=1;
    end;

create
    definer = root@`%` procedure addStu(IN accId varchar(11), IN passWd varchar(255), IN majId char(3),
                                        IN stuName varchar(255), IN stuGender char, IN stuPhone varchar(20),
                                        IN stuEmail varchar(255), IN stuEnrollDate date, OUT insertStat int)
this:begin
    if(select COUNT(*) from account_passwords where account_id=accId)!=0 -- 如果账号已存在则直接返回
        then
            set insertStat =2;
            leave this;
    end if;
    if(select COUNT(*) from majors where major_id=majId)!=1 -- 如果专业不存在则直接返回
        then
        set insertStat=3;
        leave this;
    end if;

    insert into account_passwords (account_id, password) VALUES (accId,passWd);
    insert into identities (account_id, identity, college_id, major_id) VALUES (accId,1,null,majId);
    insert into students (account_id, student_name, gender, phone, enrollment_time,email) VALUES (accId,stuName,stuGender,stuPhone,stuEnrollDate,stuEmail);
    set insertStat=1;

end;

create
    definer = root@`%` procedure bindIdentity(IN accId varchar(11), IN identityId int, IN collegeId char(3),
                                              OUT bindStat int)
binds:begin
        if(select COUNT(*) from account_passwords where account_id=accId)!=1 -- 如果账号不存在则直接返回
            then
                set bindStat =2;
                leave binds;
        end if;
        if(select COUNT(*) from identities where account_id=accId and identity=identityId and college_id=collegeId)!=0 -- 如果身份已存在则直接返回
            then
                set bindStat =3;
                leave binds;
        end if;
        if(select COUNT(*) from colleges where college_id=collegeId)!=1 -- 如果学院不存在则直接返回
            then
                set bindStat =4;
                leave binds;
        end if;
        if identityId = 3 then
            insert into identities (account_id, identity, college_id) VALUES (accId,identityId,null);
            set bindStat=1;
            leave binds;
        end if;
        insert into identities (account_id, identity, college_id) VALUES (accId,identityId,collegeId);
        set bindStat=1;
    end;

create
    definer = root@`%` procedure getSepStaff(IN collegeId char(3))
select * from staff where account_id in
(select staff.account_id from staff
join identities
on staff.account_id=identities.account_id and college_id= collegeId
union
select head_id from colleges where college_id=collegeId);

```