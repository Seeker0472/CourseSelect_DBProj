package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.StatementType;

import java.util.Map;

@Mapper
public interface TadminAdd {
    @Insert("insert into courses (course_id, course_name, credits, category_id, major_id, is_mandatory,Intro) values (#{course_id}, #{course_name}, #{credits}, #{category_id}, #{major_id}, #{is_mandatory},#{Intro})")
    public void addCourse(String course_id, String course_name, int credits, String category_id, String major_id, boolean is_mandatory,String Intro);

    //TODO:不能重复,最好做成一个存储过程什么的
    @Insert("insert into course_deliver (course_id, teacher_id, start_week, end_week, start_time, end_time, location, class_hours, term_id, max_enrollment, course_status) VALUES (#{course_id}, #{teacher_id}, #{start_week}, #{end_week}, #{start_time}, #{end_time}, #{location}, #{class_hours}, #{term_id}, #{max_enrollment}, #{course_status})")
    public void addCourseDeliver(String course_id, String teacher_id, int start_week, int end_week, int start_time, int end_time, String location, int class_hours, int term_id, int max_enrollment, String course_status);

    @Delete("delete from course_scores where deliver_id=#{deliver_id} and student_id=#{student_id}")
    public void cancelCourse(String student_id,Integer deliver_id);

    @Select("call delete_staff(#{id,jdbcType=VARCHAR,mode=IN},#{result,jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void deleteStaff(Map<String,Object> maps);

    @Update("update courses set course_name=#{course_name},credits=#{credits},category_id=#{category_id},is_mandatory=#{is_mandatory},Intro=#{Intro} where course_id=#{course_id}")
    public void UpdateCourseInfo(String course_id,String course_name,int credits,String category_id,boolean is_mandatory,String Intro);

    @Update("update course_deliver set teacher_id=#{teacher_id},start_week=#{start_week},end_week=#{end_week},start_time=#{start_time}," +
            "end_time=#{end_time},location=#{location},term_id=#{term_id},max_enrollment=#{max_enrollment},course_day=#{course_day} where deliverId=#{deliver_id}")
    public void UpdateCourseDeliver(String deliver_id,String teacher_id,int start_week,int end_week,int start_time,int end_time,String location,int term_id,int max_enrollment,String course_day);

}
