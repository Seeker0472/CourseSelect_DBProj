package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin
@RestController
public class adminAddCon {
    @Autowired com.seekerer.courseselect.DataAccess.adminAdd AdminAdd;
    @RequestMapping("/api/admin/AddStu")
    public Object AddStu(@RequestParam Map<String,Object> stuInfo)
    {
        System.out.println(stuInfo.get("Test"));

        //TODO: 加上检测数据合法性
        AdminAdd.addSTU(stuInfo);
        //TODO: 加上检测是否返回成功

        return Result.success();
    }
    @RequestMapping("/api/admin/AddStaff")
    public Object AddStaff(@RequestParam Map<String,Object> staffInfo) {
        //TODO: 加上检测数据合法性
        AdminAdd.addStaff(staffInfo);

        return Result.success();
    }
    @RequestMapping("/api/admin/BindIdentity")
    public Object BindIdentity(@RequestParam Map<String,Object> bindInfo) {
        if(bindInfo.get("accId")==null)
            return Result.error(400,"账号不能为空");
        if(bindInfo.get("identity")==null)
            return Result.error(400,"身份不能为空");
        if(bindInfo.get("collegeId")==null&&!(bindInfo.get("identity").equals((Object)3)))
            return Result.error(400,"学院不能为空");
        //TODO: 加上检测数据合法性
        AdminAdd.bindIdentity(bindInfo);

        return Result.success();
    }

    @RequestMapping("/api/admin/addCollege")
    public Object addCollege(@RequestParam Map<String,Object> collegeInfo){
        if(collegeInfo.get("collegeId")==null)
            return Result.error(400,"学院编号不能为空");
        if(collegeInfo.get("collegeName")==null)
            return Result.error(400,"学院名称不能为空");
        if(collegeInfo.get("collegeHeadId")==null)
            return Result.error(400,"学院负责人不能为空");
        AdminAdd.addCollege(collegeInfo);
        //TODO: 加上检测是否返回成功
        return Result.success();

    }

}
