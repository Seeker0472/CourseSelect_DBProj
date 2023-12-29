package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface IsIdentityOk {
    @Select("select count(*) from identities where account_id = #{accId} and identity = 3")
    public Integer isAdmin(String accId);
}
