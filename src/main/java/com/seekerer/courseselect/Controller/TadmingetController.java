package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TadmingetController {
    @Autowired
    private com.seekerer.courseselect.DataAccess.Tadminget Tadminget;
    //这里需要加一个权限验证,其中相关信息放在请求头里面,如果头里面没有这些信息,就返回错误信息
    @RequestMapping("/api/acaAdmin/getAllStuInfo")
    public Object getAllStuInfo(@RequestHeader("college_id")String college_id){
        return Result.success(Tadminget.getAllStuInfo(college_id));
    }
    @RequestMapping("/api/acaAdmin/getAllCategories")
    public Object getAllCategories(){
        return Result.success(Tadminget.getAllCategories());
    }

    @RequestMapping("/api/acaAdmin/getAllCourses")
    public Object getAllCourses(@RequestHeader("college_id")String college_id){
        return Result.success(Tadminget.getAllCourses(college_id));
    }

    @RequestMapping("/api/acaAdmin/getMajors")
    public Object getAllMajors(@RequestHeader("college_id")String college_id){
        return Result.success(Tadminget.getAllMajors(college_id));
    }

    @RequestMapping("/api/acaAdmin/getteachers")
    public Object getAllTeachers(@RequestHeader("college_id")String college_id){
        return Result.success(Tadminget.getAllTeachers(college_id));
    }

    @RequestMapping("/api/acaAdmin/getAllTerms")
    public Object getAllTerms(){
        return Result.success(Tadminget.getAllTerms());
    }

    @RequestMapping("/api/acaAdmin/getAllCoursedeliver")
    public Object getAllCourseDeliver(@RequestHeader("college_id")String college_id){
        return Result.success(Tadminget.getAllCourseDeliver(college_id));
    }

    @RequestMapping("/api/acaAdmin/getCourseSelectedStu")
    public Object getCourseSelectedStu(@RequestParam String deliver_id){
        return Result.success(Tadminget.getCourseSelectedStu(deliver_id));
    }

    @RequestMapping("/api/acaAdmin/getStuCourseSimp")
    public Object getStuCourseSimp(@RequestParam String student_id,@RequestParam int term_id){
        return Result.success(Tadminget.getStuCourseSimp(student_id,term_id));
    }

    @RequestMapping("/api/acaAdmin/getSepCourseInfo")
    public Object getSepCourseInfo(@RequestParam String course_id){
        return Result.success(Tadminget.getCourseInfo(course_id));
    }

    @RequestMapping("/api/acaAdmin/getSepCourseDeliverInfo")
    public Object getSepCourseDeliverInfo(@RequestParam String deliver_id){
        return Result.success(Tadminget.getCourseDeliverInfo(deliver_id));
    }


}
