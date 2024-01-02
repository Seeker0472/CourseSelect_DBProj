package com.seekerer.courseselect.Controller;


import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

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

    @RequestMapping("/api/acaadmin/cancelCourse")
    public Object cancelCourse(@RequestParam String student_id,@RequestParam Integer deliver_id){
        TadminAdd.cancelCourse(student_id,deliver_id);
        return Result.success();
    }

    @RequestMapping("/api/acaadmin/deleteStaff")
    public Object deleteStaff(@RequestParam String id){
        Map<String,Object> result = new java.util.HashMap<>();
        result.put("id",id);
        TadminAdd.deleteStaff(result);
        if(result.get("result") == (Object) 3){
            return Result.success();
        }
        else{
            return Result.error(500,"删除失败,请检查是否有相关的身份信息");
        }
    }



}
