package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LectureInfo {
    private Integer deliverId;
    private String course_name;
    //private String id;
    private String teacher_name;
    private Integer course_id;
    private Integer course_day;
    private  Integer start_time;
    private  Integer end_time;
    private  Integer start_week;
    private  Integer end_week;
    private  Boolean isSelected;
    private  Integer selected;
    private Integer max_enrollment;

//    private String semesterId;
    private String term_name;

    private Double credits;

    private String location;

    private String category_name;


}
