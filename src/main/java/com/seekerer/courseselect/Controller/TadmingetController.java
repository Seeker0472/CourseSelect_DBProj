package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TadmingetController {
    @Autowired
    private com.seekerer.courseselect.DataAccess.Tadminget Tadminget;
    @RequestMapping("/api/acaAdmin/getAllStuInfo")
    public Object getAllStuInfo(){
        return Result.success(Tadminget.getAllStuInfo());
    }

}
