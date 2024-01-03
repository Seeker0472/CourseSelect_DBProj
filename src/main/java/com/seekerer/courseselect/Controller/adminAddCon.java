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
    @RequestMapping("/api/admin/addMajor")
    public Object addMajor(@RequestParam Map<String,Object> majorInfo) {
        if (majorInfo.get("collegeId") == null)
            return Result.error(400, "学院编号不能为空");
        if (majorInfo.get("majorId") == null)
            return Result.error(400, "专业编号不能为空");
        if (majorInfo.get("majorName") == null)
            return Result.error(400, "专业名称不能为空");
        if (majorInfo.get("majorHeadId") == null)
            return Result.error(400, "专业负责人不能为空");
        if (majorInfo.get("majorCreditLimit") == null)
            return Result.error(400, "专业学分上限不能为空");
        AdminAdd.addMajor(majorInfo);
        //TODO: 加上检测是否返回成功
        return Result.success();
    }

    @RequestMapping("/api/admin/updateStaffInfo")
    public Object upstaInfo(@RequestParam Map<String,Object> info)
    {
        if(info.get("account_id")==null)
            return Result.error(400,"账号不能为空");
        if(info.get("name")==null)
            return Result.error(400,"姓名不能为空");
        if(info.get("gender")==null)
            return Result.error(400,"性别不能为空");
        if(info.get("phone")==null)
            return Result.error(400,"电话不能为空");
        if(info.get("email")==null)
            return Result.error(400,"邮箱不能为空");
        AdminAdd.updateStaffInfo(info);
        if(info.get("password")!=null)
            AdminAdd.updatePassword(info);
        return Result.success();
    }

    @RequestMapping("/api/admin/updateStuInfo")
    public Object upStuInfo(@RequestParam Map<String,Object> Info)
    {
        if(Info.get("account_id")==null)
            return Result.error(400,"账号不能为空");
        if(Info.get("name")==null)
            return Result.error(400,"姓名不能为空");
        if(Info.get("gender")==null)
            return Result.error(400,"性别不能为空");
        if(Info.get("email")==null)
            return Result.error(400,"邮箱不能为空");
        if(Info.get("time")==null)
            return Result.error(400,"入学时间不能为空");
        AdminAdd.updateStuInfo(Info);
        if(Info.get("password")!=null)
            AdminAdd.updatePassword(Info);
        if(Info.get("major_id")!=null)
            AdminAdd.updateStuMajor(Info);
        return Result.success();
    }

    @RequestMapping("/api/admin/updateCollegeInfo")
    public Object upColInfo(@RequestParam Map<String,Object> Info)
    {
        if(Info.get("college_id")==null)
            return Result.error(400,"学院编号不能为空");
        if(Info.get("college_name")==null)
            return Result.error(400,"学院名称不能为空");
        if(Info.get("head_id")==null)
            return Result.error(400,"学院负责人不能为空");
        AdminAdd.updateCollegeInfo(Info);
        return Result.success();
    }

    @RequestMapping("/api/admin/updateMajorInfo")
    public Object upMajInfo(@RequestParam Map<String,Object> Info)
    {
        if(Info.get("major_id")==null)
            return Result.error(400,"专业编号不能为空");
        if(Info.get("major_name")==null)
            return Result.error(400,"专业名称不能为空");
        if(Info.get("head_id")==null)
            return Result.error(400,"专业负责人不能为空");
        if(Info.get("credit_limit")==null)
            return Result.error(400,"专业学分上限不能为空");
        AdminAdd.updateMajorInfo(Info);
        return Result.success();
    }

    @RequestMapping("/api/admin/addCategory")
    public Object addCategory(@RequestParam Integer category_id,@RequestParam String category_name){
        AdminAdd.addCategory(category_id,category_name);
        return Result.success();
    }

    @RequestMapping("/api/admin/updateCategoryInfo")
    public Object updateCategoryInfo(@RequestParam Integer category_id,@RequestParam String category_name){
        AdminAdd.updateCategoryInfo(category_id,category_name);
        return Result.success();
    }
    @RequestMapping("/api/admin/deleteStudent")
    public Object deleteStudent(@RequestParam String account_id){
        AdminAdd.deleteStudent(account_id);
        return Result.success();
    }

    @RequestMapping("/api/admin/deleteCollege")
    public Object deleteCollege(@RequestParam String college_id){
        Map<String,Object> result = new java.util.HashMap<>();
        result.put("college_id",college_id);
        AdminAdd.deleteCollege(result);
        if(result.get("result") == (Object) 1){
            return Result.success();
        }
        else{
            return Result.error(500,"删除失败,请检查是否有相关的学院信息");
        }
    }
    @RequestMapping("/api/admin/deleteMajor")
    public Object deleteMajor(@RequestParam String major_id){
        Map<String,Object> result = new java.util.HashMap<>();
        result.put("major_id",major_id);
        AdminAdd.deleteMajor(result);
        if(result.get("result") == (Object) 1){
            return Result.success();
        }
        else{
            return Result.error(500,"删除失败,请检查是否有相关的专业信息");
        }
    }

    @RequestMapping("/api/admin/unbindTAdmin")
    public Object unbindTAdmin(@RequestParam String account_id,@RequestParam String college_id){
        AdminAdd.unbindTAdmin(account_id,college_id);
        return Result.success();
    }

    @RequestMapping("/api/admin/unbindTeacher")
    public Object unbindTeacher(@RequestParam String account_id,@RequestParam String college_id){
        AdminAdd.unbindTeacher(account_id,college_id);
        return Result.success();
    }

}
