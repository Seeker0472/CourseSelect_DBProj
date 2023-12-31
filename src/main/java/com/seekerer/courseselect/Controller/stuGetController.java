package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class stuGetController {

    @Autowired
    private com.seekerer.courseselect.DataAccess.stuGet StuGet;

    @RequestMapping("/api/stu/getCourseSelectList")
    public Object getCourseSelectList(@RequestHeader("account")String student_id){

        return Result.success( StuGet.getCourseSelectList(student_id));
    }

    @RequestMapping("/api/stu/GetAllSelectedNum")
    public Object getAllNum()
    {
        return Result.success(StuGet.getAllSelectedNum());

    }

    @RequestMapping("/api/stu/GetAllSelectedClass")
    public Object getAllSelectedClass(@RequestHeader("account") String stu_id, @RequestParam Integer term_id)
    {
        return Result.success(StuGet.getAllCourse(stu_id,term_id));
    }

    @RequestMapping("/api/stu/GetAccountInfo")
    public Object getAccountInfo(@RequestParam String account_id)
    {
        return Result.success(StuGet.getAccountInfo(account_id));
    }



}
