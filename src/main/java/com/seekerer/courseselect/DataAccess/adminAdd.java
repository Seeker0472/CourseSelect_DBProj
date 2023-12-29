package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
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
}
