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

}
