package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.StatementType;

import java.util.Map;

@Mapper
public interface LoginAndRegister {
//    @Select("{ CALL getUserById(#{uuid, jdbcType=CHAR(36), mode=IN},#{code, jdbcType=VARCHAR(6), mode=IN},#{id, jdbcType=varchar(255), mode=IN},#{password, jdbcType=varchar(255), mode=IN},#{result,jdbcType=INT,mode=OUT},#{account_id_out,jdbcType=varchar(255),mode=OUT},#{identity_out,jdbcType=INT,mode=OUT}) }")
//    @Options(statementType = StatementType.CALLABLE)
//    public void Login(String id, String password, String uuid, String code,Integer result,String account_id_out,Integer identity_out);
//@Select("{ CALL LoginConfirm(#{uuid, jdbcType=CHAR, mode=IN}, #{code, jdbcType=VARCHAR, mode=IN}, #{id, jdbcType=VARCHAR, mode=IN}, #{password, jdbcType=VARCHAR, mode=IN}, #{result, jdbcType=INTEGER, mode=OUT}, #{account_id_out, jdbcType=VARCHAR, mode=OUT}, #{identity_out, jdbcType=INTEGER, mode=OUT}) }")
//@Options(statementType = StatementType.CALLABLE)
//public Map<String, Object> Login(String id, String password, String uuid, String code);

    @Select("{ CALL LoginConfirm(#{uuid, jdbcType=CHAR, mode=IN}, #{code, jdbcType=VARCHAR, mode=IN}, #{id, jdbcType=VARCHAR, mode=IN}, #{password, jdbcType=VARCHAR, mode=IN}, #{result, jdbcType=INTEGER, mode=OUT}, #{account_id_out, jdbcType=VARCHAR, mode=OUT}, #{identity_out, jdbcType=INTEGER, mode=OUT}) }")
    @Options(statementType = StatementType.CALLABLE)
    public Map<String, Object> Login(Map<String, Object> maps);
//    @Select("select * from verification_codes where uuid = #{uuid} and code = #{code}")
//    public boolean isCodeOK(String uuid ,String code);

    @Insert("insert into verification_codes (uuid, code)values(#{uuid},#{code})")
    public void insertCode(String uuid ,String code);



}
