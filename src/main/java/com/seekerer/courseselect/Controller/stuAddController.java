package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
public class stuAddController {

    @Autowired
    private com.seekerer.courseselect.DataAccess.StuAdd stuAdd;

    @RequestMapping("/api/stu/SelectCourse")
    public Object selectCourse(@RequestHeader("account")String student_id,@RequestBody Map<String,Object> body)
    {
        if(body.get("deliverId")==null)
            return Result.error("请选择课程");
        Map<String,Object> result=stuAdd.selectCourse(student_id,(Integer) body.get("deliverId"));
        if(!result.get("msg").equals("选课成功"))
            return Result.error(result.get("msg").toString());
        else
            return Result.success();
    }
    @RequestMapping("/api/stu/cancelCourse")
    public Object cancelCourse(@RequestHeader("account")String student_id, @RequestBody Map<String,Object> body)
    {
        if(body.get("deliverId")==null)
            return Result.error();

        stuAdd.cancelCourse(student_id,(Integer) body.get("deliverId"));
        return Result.success();
    }



}
