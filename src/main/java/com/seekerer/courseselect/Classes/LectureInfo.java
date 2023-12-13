package com.seekerer.courseselect.Classes;

public class LectureInfo {
    private String Name;
    private String id;
    private String Teacher;
    private Integer day;
    private  Integer starttime;
    private  Integer endtime;
    private  Integer beginweek;
    private   Integer endweek;
    private  Boolean selected;
    private  Integer selectednum;
    private Integer maxnum;

    public LectureInfo(String name, String id, String teacher, Integer day, Integer starttime, Integer endtime, Integer beginweek, Integer endweek, Boolean selected, Integer selectednum, Integer maxnum) {
        Name = name;
        this.id = id;
        Teacher = teacher;
        this.day = day;
        this.starttime = starttime;
        this.endtime = endtime;
        this.beginweek = beginweek;
        this.endweek = endweek;
        this.selected = selected;
        this.selectednum = selectednum;
        this.maxnum = maxnum;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTeacher() {
        return Teacher;
    }

    public void setTeacher(String teacher) {
        Teacher = teacher;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getStarttime() {
        return starttime;
    }

    public void setStarttime(Integer starttime) {
        this.starttime = starttime;
    }

    public Integer getEndtime() {
        return endtime;
    }

    public void setEndtime(Integer endtime) {
        this.endtime = endtime;
    }

    public Integer getBeginweek() {
        return beginweek;
    }

    public void setBeginweek(Integer beginweek) {
        this.beginweek = beginweek;
    }

    public Integer getEndweek() {
        return endweek;
    }

    public void setEndweek(Integer endweek) {
        this.endweek = endweek;
    }

    public Boolean getSelected() {
        return selected;
    }

    public void setSelected(Boolean selected) {
        this.selected = selected;
    }

    public Integer getSelectednum() {
        return selectednum;
    }

    public void setSelectednum(Integer selectednum) {
        this.selectednum = selectednum;
    }

    public Integer getMaxnum() {
        return maxnum;
    }

    public void setMaxnum(Integer maxnum) {
        this.maxnum = maxnum;
    }
}
