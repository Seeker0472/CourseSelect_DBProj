package com.seekerer.courseselect.Classes;

public class stuScore {
    String stuId;//学号
    String stuName;//姓名
    String lectureId;//课程代码
    String lectureName;//课程名
    String teacher;//教师
    Double score;//成绩
    Double credit;//学分
    Integer year;//学年
    Integer semester;//学期
    String type;//课程类型
    Double jd;//绩点


    public stuScore(String stuId, String stuName, String lectureId, String lectureName, String teacher, Double score, Double credit, Integer year, Integer semester, String type,Double jd) {
        this.stuId = stuId;
        this.stuName = stuName;
        this.lectureId = lectureId;
        this.lectureName = lectureName;
        this.teacher = teacher;
        this.score = score;
        this.credit = credit;
        this.year = year;
        this.semester = semester;
        this.type = type;
        this.jd=jd;
    }
    public stuScore() {
    }

    public String getStuId() {
        return stuId;
    }

    public void setStuId(String stuId) {
        this.stuId = stuId;
    }

    public String getStuName() {
        return stuName;
    }

    public void setStuName(String stuName) {
        this.stuName = stuName;
    }

    public String getLectureId() {
        return lectureId;
    }

    public void setLectureId(String lectureId) {
        this.lectureId = lectureId;
    }

    public String getLectureName() {
        return lectureName;
    }

    public void setLectureName(String lectureName) {
        this.lectureName = lectureName;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Double getCredit() {
        return credit;
    }

    public void setCredit(Double credit) {
        this.credit = credit;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getJd() {
        return jd;
    }

    public void setJd(Double jd) {
        this.jd = jd;
    }
}
