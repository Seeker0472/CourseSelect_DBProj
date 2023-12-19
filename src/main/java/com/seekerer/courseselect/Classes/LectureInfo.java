package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LectureInfo {
    private String Name;
    private String id;
    private String Teacher;
    private Integer day;
    private  Integer startTime;
    private  Integer endTime;
    private  Integer beginWeek;
    private  Integer endWeek;
    private  Boolean selected;
    private  Integer selectedNum;
    private Integer maxNum;

    private String semesterId;
    private String semesterName;

    private Double credit;

    private String place;


}
