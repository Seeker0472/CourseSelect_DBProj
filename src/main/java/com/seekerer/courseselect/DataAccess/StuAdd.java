package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.Map;

@Mapper
public interface StuAdd {
    @Select("CALL select_Course(#{student_id_in,jdbcType=VARCHAR,mode=IN},#{deliver_id_in,jdbcType=INTEGER,mode=IN})")
    public Map<String,Object> selectCourse(String student_id_in,Integer deliver_id_in);

    @Delete("delete from course_scores where deliver_id=#{deliver_id} and student_id=#{student_id}")
    public void cancelCourse(String student_id,Integer deliver_id);
}
