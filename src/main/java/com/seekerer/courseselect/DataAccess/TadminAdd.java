package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TadminAdd {
    @Insert("insert into courses (course_id, course_name, credits, category_id, major_id, is_mandatory,Intro) values (#{course_id}, #{course_name}, #{credits}, #{category_id}, #{major_id}, #{is_mandatory},#{Intro})")
    public void addCourse(String course_id, String course_name, int credits, String category_id, String major_id, boolean is_mandatory,String Intro);

    //TODO:不能重复,最好做成一个存储过程什么的
    @Insert("insert into course_deliver (course_id, teacher_id, start_week, end_week, start_time, end_time, location, class_hours, term_id, max_enrollment, course_status) VALUES (#{course_id}, #{teacher_id}, #{start_week}, #{end_week}, #{start_time}, #{end_time}, #{location}, #{class_hours}, #{term_id}, #{max_enrollment}, #{course_status})")
    public void addCourseDeliver(String course_id, String teacher_id, int start_week, int end_week, int start_time, int end_time, String location, int class_hours, int term_id, int max_enrollment, String course_status);
}
