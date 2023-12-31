package com.seekerer.courseselect.DataAccess;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface sysGet {
    @Select("SELECT * FROM sys_stat")
    public Map<String,Object> getSysInfo();

    @Select("select term_id,term_name,(\n" +
            "    case when\n" +
            "    term_id=(select term_now from sys_stat)then true else false end )as stat from terms;")
    public List<Map<String,Object>> getTInfo();
}
