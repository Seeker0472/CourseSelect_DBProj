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
}
