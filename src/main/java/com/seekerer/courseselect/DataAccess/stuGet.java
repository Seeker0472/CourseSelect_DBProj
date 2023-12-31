package com.seekerer.courseselect.DataAccess;

import com.seekerer.courseselect.Classes.LectureInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface stuGet {
    @Select("CALL get_course_deliver_info(#{student_id,jdbcType=VARCHAR,mode=IN})")
    List<LectureInfo> getCourseSelectList(String student_id);

    @Select("select * from course_select_num")
    List<Map<String,Object>> getAllSelectedNum();

    @Select("select * from stu_course_table where student_id=#{student_id} and term_id=#{term_id}")
    List<Map<String,Object>> getAllCourse(String student_id,Integer term_id);

    @Select("select * from students where account_id=#{account_id}")
    Map<String,Object> getAccountInfo(String account_id);



}
