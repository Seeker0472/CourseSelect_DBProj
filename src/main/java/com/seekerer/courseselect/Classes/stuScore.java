package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
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
}
