package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AdminGet {
    @Autowired
    private com.seekerer.courseselect.DataAccess.adminget adminget;
    @RequestMapping("/api/admin/getCollegeList")
    public Object getCollegeList(){
        return Result.success(adminget.getCollegeInfo());
    }
    @RequestMapping("/api/admin/getMajorList")
    public Object getMajorList(){
        return Result.success(adminget.getMajorInfo());
    }
    @RequestMapping("/api/admin/getAllStuInfo")
    public Object getAllStuInfo(){
        return Result.success(adminget.getAllStuInfo());
    }
    @RequestMapping("/api/admin/getSepMajorList")
    public Object getSepMajLi(@RequestParam String ColId){
        return Result.success(adminget.getCertainMajInfo(ColId));
    }

    @RequestMapping("/api/admin/getStaffInfo")
    public Object getStaffInfo(){
        return Result.success(adminget.getStaffInfo());
    }
    @RequestMapping("/api/admin/getAcaAdminInfo")
    public Object getAcaAdminInfo(){
        return Result.success(adminget.getAcaAdminInfo());
    }
    @RequestMapping("/api/admin/getTeacherInfo")
    public Object getTeacherInfo(){
        return Result.success(adminget.getTeacherInfo());
    }



}
