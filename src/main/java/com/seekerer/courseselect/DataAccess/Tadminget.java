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




}
