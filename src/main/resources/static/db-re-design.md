

学生表：账号（主键） 学生姓名 专业编号 学院编号 性别 电话 入学时间 |
职工表：账号（主键） 姓名 性别 电话 学院编号   |

账号密码: 账号（主键） 密码  | 
身份表: 账号（主键） 身份（主键）（学生，老师，管理员，教务管理员） |

课程类别：课程类别编号（主键） 课程类别名（） 备注 |
选课分数表：学号（主键） 课程号（主键） 分数 |  
课程表：课程号（主键） 课程名 学分 课程类别编号  老师编号（账号） 课程开始周数 课程结束周数 课程开始时间(第几节课) 课程结束的时间(第几节课) 地点 学时 学分 学期编号 是否必修 最大选课人数 学院编号 学期编号 课程状态|
专业表：专业编号（主键） 专业名 专业负责人编号（账号）备注 学分上限  |
学院表：学院编号（主键） 学院名 学院负责人编号（账号） 备注 |
验证码: uuid（主键） 验证码 |
学期表: 学期编号（主键） 学期名 状态 |

```sql
create database courseSelect;
use courseSelect;


-- 课程类别表
CREATE TABLE IF NOT EXISTS course_categories (
                                                 category_id INT PRIMARY KEY,
                                                 category_name VARCHAR(255)
);
-- 学院表
CREATE TABLE IF NOT EXISTS colleges (
                                        college_id CHAR(3) PRIMARY KEY,
                                        college_name VARCHAR(255),
                                        head_id varchar(11),
                                        remarks TEXT
#                                         FOREIGN KEY (head_id) REFERENCES staff(account_id)
);

-- 验证码表
CREATE TABLE IF NOT EXISTS verification_codes (
                                                  uuid CHAR(36) PRIMARY KEY,
                                                  code VARCHAR(6),
                                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 学期表
CREATE TABLE IF NOT EXISTS terms (
                                     term_id INT PRIMARY KEY,
                                     term_name VARCHAR(255),
                                     status VARCHAR(50)
);
-- 账号密码表
CREATE TABLE IF NOT EXISTS account_passwords (
                                                 account_id varchar(11) PRIMARY KEY,
                                                 password VARCHAR(255)
);
-- 职工表
CREATE TABLE IF NOT EXISTS staff (
                                     account_id varchar(11) PRIMARY KEY,
                                     name VARCHAR(255),
                                     gender NCHAR(1) ,
                                     phone VARCHAR(20),
                                     college_id CHAR(3),
                                     FOREIGN KEY (account_id) REFERENCES account_passwords(account_id)
                                         ON DELETE CASCADE
                                         ON UPDATE CASCADE,
                                     FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);
-- 专业表
CREATE TABLE IF NOT EXISTS majors (
                                      major_id CHAR(3) PRIMARY KEY,
                                      major_name VARCHAR(255),
                                      head_id varchar(11),
                                      remarks TEXT,
                                      credit_limit DECIMAL(5, 2),
                                      FOREIGN KEY (head_id) REFERENCES staff(account_id)
);
-- 学生表
CREATE TABLE IF NOT EXISTS students (
                                        account_id varchar(11) PRIMARY KEY,
                                        student_name VARCHAR(255),
                                        major_id CHAR(3),
                                        college_id CHAR(3),
                                        gender NCHAR(1) CHECK ( gender IN ('男', '女') ),
                                        phone VARCHAR(20),
                                        enrollment_time DATE,
                                        FOREIGN KEY (account_id) REFERENCES account_passwords(account_id)
                                            ON DELETE CASCADE
                                            ON UPDATE CASCADE,
                                        FOREIGN KEY (major_id) REFERENCES majors(major_id),
                                        FOREIGN KEY (college_id) REFERENCES colleges(college_id)

);




-- 身份表
CREATE TABLE IF NOT EXISTS identities (
                                          account_id varchar(11),
                                          identity INT,
                                          PRIMARY KEY (account_id, identity)
);
-- 课程表
CREATE TABLE IF NOT EXISTS courses (
                                       course_id INT PRIMARY KEY,
                                       course_name VARCHAR(255),
                                       credits DECIMAL(3, 1),
                                       category_id INT,
                                       teacher_id varchar(11),
                                       start_week INT,
                                       end_week INT,
                                       start_time INT,
                                       end_time INT,
                                       location VARCHAR(255),
                                       class_hours INT,
                                       term_id INT,
                                       is_mandatory BOOLEAN,
                                       max_enrollment INT,
                                       college_id CHAR(3),
                                       course_status VARCHAR(50),
                                       FOREIGN KEY (category_id) REFERENCES course_categories(category_id),
                                       FOREIGN KEY (teacher_id) REFERENCES staff(account_id),
                                       FOREIGN KEY (college_id) REFERENCES colleges(college_id),
                                       FOREIGN KEY (term_id) REFERENCES terms(term_id)
);
-- 选课分数表
CREATE TABLE IF NOT EXISTS course_scores (
                                             student_id varchar(11),
                                             course_id INT,
                                             score DECIMAL(5, 2),
                                             PRIMARY KEY (student_id, course_id),
                                             FOREIGN KEY (student_id) REFERENCES students(account_id)
                                                 ON DELETE CASCADE
                                                 ON UPDATE CASCADE,
                                             FOREIGN KEY (course_id) REFERENCES courses(course_id)
                                                 ON DELETE CASCADE
                                                 ON UPDATE CASCADE
);

use courseSelect;

drop procedure if exists LoginConfirm;
create procedure LoginConfirm(
    in uuidin CHAR(36),
    in codein VARCHAR(6),
    in id varchar(255),
    in passwd varchar(255),
    out result int,
    out account_id_out varchar(255),
    out identity_out int
)
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
left join
    identities
on
    account_passwords.account_id=identities.account_id
and account_passwords.account_id=id
where
    account_passwords.password=passwd;
end;



CALL LoginConfirm('123456','nyye','20222111000','Passwd');


CALL LoginConfirm('123456','nyye','20222111000','Passwd', @result, @account_id_out, @identity_out);
SELECT @result, @account_id_out, @identity_out;

``````