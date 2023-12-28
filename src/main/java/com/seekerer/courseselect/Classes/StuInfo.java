package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StuInfo {
    private String account_id;
    private String student_name;
    private String major_id;
    private String major_name;
    private String college_id;
    private String college_name;
    private String phone;
    private String email;
    private Date enrollment_time;
    private Float credit_limit;
    private String gender;

}
