package com.seekerer.courseselect.DataAccess;

import com.seekerer.courseselect.Classes.StuInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface Tadminget {
    //TODO:需要修改!教务管理员应该只能看到自己学院的学生!!!
    @Select("SELECT * FROM student_info where college_id=#{college_id}")
    public List<StuInfo> getAllStuInfo(String college_id);

    @Select ("SELECT * FROM course_categories")
    public List<Map<String,Object>> getAllCategories();

    @Select("SELECT * FROM course_cate where college_id=#{college_id}")
    public List<Map<String,Object>> getAllCourses(String college_id);

    @Select("SELECT * FROM majors where college_id=#{college_id}")
    public List<Map<String,Object>> getAllMajors(String college_id);

    @Select("select * from staff\n" +
            "    join identities\n" +
            "on staff.account_id=identities.account_id\n" +
            "where identity=2 and college_id=#{college_id}")
    public List<Map<String,Object>> getAllTeachers(String college_id);

    @Select("select * from terms")
    public List<Map<String,Object>> getAllTerms();

    @Select("select * from course_detail where course_id=#{course_id} and college_id=#{college_id}")
    public List<Map<String,Object>> getCourseDetail(String course_id,String college_id);

    @Select("select * from course_detail_simplified where college_id=#{college_id}")
    public List<Map<String,Object>> getAllCourseDeliver(String college_id);

    @Select("    select student_id,student_name,deliver_id from course_scores join students\n" +
            "on course_scores.student_id=students.account_id" +
            " where course_scores.deliver_id=#{deliver_id}")
    public List<Map<String,Object>> getCourseSelectedStu(String deliver_id);

    @Select("select  * from stu_course_simp where student_id=#{student_id} and term_id=#{term_id}")
    public List<Map<String,Object>> getStuCourseSimp(String student_id,Integer term_id);




}
