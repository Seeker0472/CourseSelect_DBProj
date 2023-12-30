package com.seekerer.courseselect.DataAccess;

import com.seekerer.courseselect.Classes.StuInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface Tadminget {
    //TODO:需要修改!教务管理员应该只能看到自己学院的学生!!!
    @Select("SELECT * FROM student_info")
    public List<StuInfo> getAllStuInfo();
}
