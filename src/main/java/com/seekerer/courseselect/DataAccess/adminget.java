package com.seekerer.courseselect.DataAccess;

import com.seekerer.courseselect.Classes.MajorInfo;
import com.seekerer.courseselect.Classes.collegeInfo;
import com.seekerer.courseselect.Classes.StuInfo;
import com.seekerer.courseselect.Classes.staffInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface adminget {

    @Select("SELECT colleges.college_id,college_name,name,remarks FROM\n" +
            "colleges\n" +
            "LEFT JOIN staff\n" +
            "ON colleges.head_id=staff.account_id\n")
    public List<collegeInfo> getCollegeInfo();

    @Select("SELECT majors.major_id,major_name,name,majors.remarks,credit_limit,college_name FROM\n" +
            "majors\n" +
            "LEFT JOIN staff\n" +
            "ON majors.head_id=staff.account_id\n" +
            "JOIN colleges\n" +
            "ON majors.college_id=colleges.college_id;")
    public List<MajorInfo> getMajorInfo();

    @Select("SELECT * FROM student_info")
    public List<StuInfo> getAllStuInfo();

    @Select("SELECT majors.major_id,major_name,name,majors.remarks,credit_limit,college_name FROM\n" +
            "majors\n" +
            "LEFT JOIN staff\n" +
            "ON majors.head_id=staff.account_id\n" +
            "JOIN colleges\n" +
            "ON majors.college_id=colleges.college_id\n" +
            "and colleges.college_id=#{colId} ;")
    public List<MajorInfo> getCertainMajInfo(String colId);

    @Select("select * from account_passwords\n" +
            "join staff\n" +
            "on account_passwords.account_id=staff.account_id")
    public List<staffInfo> getStaffInfo();

    @Select("select * from aca_Admin_Info")
    public List<Map<String,Object>> getAcaAdminInfo();

    @Select("select * from teacher_Info")
    public List<Map<String,Object>> getTeacherInfo();

    @Select("select * from staff\n" +
            "where account_id not in (select distinct(account_id)from identities) and account_id not in(select head_id from colleges);")
    public List<Map<String,Object>> getEmptyStaff();

    @Select("CALL getSepStaff(#{collegeId,jdbcType=CHAR,mode=IN})")
    public List<Map<String,Object>> getSepStaff(String collegeId);

}
