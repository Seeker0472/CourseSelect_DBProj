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
    //返回学院列表
    @RequestMapping("/api/admin/getCollegeList")
    public Object getCollegeList(){
        return Result.success(adminget.getCollegeInfo());
    }
    //返回专业列表
    @RequestMapping("/api/admin/getMajorList")
    public Object getMajorList(){
        return Result.success(adminget.getMajorInfo());
    }
    //返回学生列表
    @RequestMapping("/api/admin/getAllStuInfo")
    public Object getAllStuInfo(){
        return Result.success(adminget.getAllStuInfo());
    }
    //返回某学院专业列表
    @RequestMapping("/api/admin/getSepMajorList")
    public Object getSepMajLi(@RequestParam String ColId){
        return Result.success(adminget.getCertainMajInfo(ColId));
    }
//返回职工列表
    @RequestMapping("/api/admin/getStaffInfo")
    public Object getStaffInfo(){
        return Result.success(adminget.getStaffInfo());
    }
    //返回学院管理员列表
    @RequestMapping("/api/admin/getAcaAdminInfo")
    public Object getAcaAdminInfo(){
        return Result.success(adminget.getAcaAdminInfo());
    }
    //返回教师列表
    @RequestMapping("/api/admin/getTeacherInfo")
    public Object getTeacherInfo(){
        return Result.success(adminget.getTeacherInfo());
    }
    //返回空闲职工列表
    @RequestMapping("/api/admin/getEmptyStaff")
    public Object getEmptyStaff(){
        return Result.success(adminget.getEmptyStaff());
    }
    //返回某学院职工列表
    @RequestMapping("/api/admin/getSepStaff")
    public Object getSepStaff(@RequestParam String ColId){
        return Result.success(adminget.getSepStaff(ColId));
    }

    @RequestMapping("/api/admin/getIdentity")
    public Object getIdentity(@RequestParam String accountId){
        return Result.success(adminget.getIdentity(accountId));
    }



}
