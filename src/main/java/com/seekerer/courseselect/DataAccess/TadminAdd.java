package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TadminAdd {
    @Insert("insert into courses (course_id, course_name, credits, category_id, major_id, is_mandatory,Intro) values (#{course_id}, #{course_name}, #{credits}, #{category_id}, #{major_id}, #{is_mandatory},#{Intro})")
    public void addCourse(String course_id, String course_name, int credits, String category_id, String major_id, boolean is_mandatory,String Intro);

}
