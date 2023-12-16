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
    private  Integer starttime;
    private  Integer endtime;
    private  Integer beginweek;
    private  Integer endweek;
    private  Boolean selected;
    private  Integer selectednum;
    private Integer maxnum;

    private String semesterid;
    private String semestername;

    private Double credit;

    private String place;


}
