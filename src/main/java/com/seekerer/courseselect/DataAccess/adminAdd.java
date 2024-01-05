package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.StatementType;

import java.util.Map;

@Mapper
public interface adminAdd {
    @Select("CALL addStu(#{accId, jdbcType=VARCHAR,mode=IN},#{passWd, jdbcType=VARCHAR,mode=IN},#{majId, jdbcType=CHAR,mode=IN}," +
            "#{stuName, jdbcType=VARCHAR,mode=IN},#{stuGender, jdbcType=CHAR,mode=IN},#{stuPhone, jdbcType=VARCHAR,mode=IN}," +
            "#{stuEmail, jdbcType=VARCHAR,mode=IN},#{stuEnrollDate, jdbcType=VARCHAR,mode=IN},#{insertStat, jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void addSTU(Map<String,Object> stuInfo);

    @Select("CALL addStaff(#{accId, jdbcType=VARCHAR,mode=IN},#{passWd, jdbcType=VARCHAR,mode=IN},#{staffName, jdbcType=VARCHAR,mode=IN}," +
            "#{staffGender, jdbcType=CHAR,mode=IN},#{staffPhone, jdbcType=VARCHAR,mode=IN},#{staffEmail, jdbcType=VARCHAR,mode=IN}," +
            "#{insertStat, jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void addStaff(Map<String,Object> staffInfo);

    @Select("CALL bindIdentity(#{accId, jdbcType=VARCHAR,mode=IN},#{identity, jdbcType=VARCHAR,mode=IN}," +
            "#{collegeId,jdbcType=CHAR,mode=IN},#{insertStat, jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void bindIdentity(Map<String,Object> bindInfo);

    @Select("CALL addCollege(#{collegeId, jdbcType=CHAR,mode=IN},#{collegeName, jdbcType=VARCHAR,mode=IN},#{collegeHeadId, jdbcType=VARCHAR,mode=IN}," +
            "#{collegeRemarks, jdbcType=VARCHAR,mode=IN},#{addStat, jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void addCollege(Map<String,Object> colInfo);

    @Select("CALL addMajor(#{collegeId, jdbcType=CHAR,mode=IN},#{majorId, jdbcType=CHAR,mode=IN},#{majorName, jdbcType=VARCHAR,mode=IN},#{majorHeadId, jdbcType=VARCHAR,mode=IN}," +
            "#{majorRemarks, jdbcType=VARCHAR,mode=IN},#{majorCreditLimit, jdbcType=INTEGER,mode=IN}," +
            "#{addStat, jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void addMajor(Map<String,Object> majInfo);

    @Insert("insert into course_categories (category_id, category_name) VALUES (#{category_id},#{category_name})")
    public void addCategory(Integer category_id,String category_name);

    @Update("update staff set name=#{name},gender=#{gender},phone=#{phone},email=#{email} where account_id=#{account_id}")
    public void updateStaffInfo(Map<String,Object> staffInfo);

    @Update("update account_passwords set password=#{password} where account_id=#{account_id}")
    public void updatePassword(Map<String,Object> passwordInfo);

    @Update("update students set student_name=#{name},gender=#{gender},phone=#{phone},email=#{email}," +
            "enrollment_time=#{time} where account_id=#{account_id}")
    public void updateStuInfo(Map<String,Object> stuInfo);
    @Update("update identities set major_id=#{major_id} where account_id=#{account_id} and identity=1")
    public void updateStuMajor(Map<String,Object> stuInfo);

    @Update("update colleges set college_name=#{college_name},head_id=#{head_id},remarks=#{remarks} where college_id=#{college_id}")
    public void updateCollegeInfo(Map<String,Object> colInfo);

    @Update("update majors set major_name=#{major_name},head_id=#{head_id},remarks=#{remarks},credit_limit=#{credit_limit} where major_id=#{major_id}")
    public void updateMajorInfo(Map<String,Object> majInfo);

    @Update("update course_categories set category_name=#{category_name} where category_id=#{category_id}")
    public void updateCategoryInfo(Integer category_id,String category_name);

    @Delete("delete from identities where account_id = #{account_id} and identity = 1")
    public void deleteStudent(String account_id);

    @Delete("call delete_college(#{college_id,jdbcType=CHAR,mode=IN},#{result,jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void deleteCollege(Map<String,Object> maps);

    @Delete("call delete_major(#{major_id,jdbcType=CHAR,mode=IN},#{result,jdbcType=INTEGER,mode=OUT})")
    @Options(statementType = StatementType.CALLABLE)
    public void deleteMajor(Map<String,Object> maps);

    @Delete("delete from identities where account_id = #{account_id} and college_id=#{college_id} and identity = 2")
    public void unbindTAdmin(String account_id,String college_id);

    @Delete("delete from identities where account_id = #{account_id} and college_id=#{college_id} and identity = 4")
    public void unbindTeacher(String account_id,String college_id);
}
