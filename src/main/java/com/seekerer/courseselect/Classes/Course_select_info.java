package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course_select_info {
    private String phone;
    private String course_name;
    private String student_id;
    private String student_name;
    private String gender;
    private String major_name;
}
