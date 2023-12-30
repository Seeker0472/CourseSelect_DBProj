package com.seekerer.courseselect.Controller;


import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TadminAddController {
    @Autowired
    private com.seekerer.courseselect.DataAccess.TadminAdd TadminAdd;
    @RequestMapping("/api/acaadmin/addCourse")
    public Object addCourse(@RequestParam String course_id, @RequestParam String course_name, int credits,@RequestParam  String category_id,@RequestParam  String major_id,@RequestParam  boolean is_mandatory , String Intro){
        TadminAdd.addCourse(course_id, course_name, credits, category_id, major_id, is_mandatory,Intro);
        return Result.success();
    }

    //TODO:需要完成数据约束,和维护class_hours,course_status
    @RequestMapping("/api/acaadmin/addCourseDeliver")
    public Object addCourseDeliver(@RequestParam String course_id, @RequestParam String teacher_id, @RequestParam int start_week, @RequestParam int end_week, @RequestParam int start_time,
                                   @RequestParam int end_time, String location, @RequestParam int term_id,@RequestParam int max_enrollment){
        TadminAdd.addCourseDeliver(course_id, teacher_id, start_week, end_week, start_time, end_time, location, 0, term_id, max_enrollment, null);
        return Result.success();
    }

}
