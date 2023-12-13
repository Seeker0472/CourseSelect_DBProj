package com.seekerer.courseselect.DataAccess.implement;

import com.seekerer.courseselect.Classes.LectureInfo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
@Repository
public class Select_Require implements com.seekerer.courseselect.DataAccess.Select_Require {

    @Override
    public ArrayList<LectureInfo> ListLecture() {
        ArrayList<LectureInfo> arr=new ArrayList();
        LectureInfo lectureInfo=new LectureInfo("高等数学","123","文涛",2,1,2,3,19,false,10,10);
        arr.add(lectureInfo);


        return arr;
    }
}
