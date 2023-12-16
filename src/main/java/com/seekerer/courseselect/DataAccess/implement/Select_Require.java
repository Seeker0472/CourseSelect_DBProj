package com.seekerer.courseselect.DataAccess.implement;

import com.seekerer.courseselect.Classes.LectureInfo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
@Repository
public class Select_Require implements com.seekerer.courseselect.DataAccess.Select_Require {

    @Override
    public ArrayList<LectureInfo> ListLecture() {
        ArrayList<LectureInfo> arr=new ArrayList();
        LectureInfo lectureInfo=new LectureInfo("软件工程","1","张三",1,1,2,1,16,false,0,100,"001","2023年上学期",2.0,"教学楼");
        arr.add(lectureInfo);


        return arr;
    }
}
