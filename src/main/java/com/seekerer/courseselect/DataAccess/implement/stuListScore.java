package com.seekerer.courseselect.DataAccess.implement;

import com.seekerer.courseselect.DataAccess.stuScore;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class stuListScore implements com.seekerer.courseselect.DataAccess.stuScore {

    @Override
    public List<com.seekerer.courseselect.Classes.stuScore> ListScore(Integer stu_id) {

        List<com.seekerer.courseselect.Classes.stuScore> stuScoreList = new ArrayList<>();
        com.seekerer.courseselect.Classes.stuScore stuScore = new com.seekerer.courseselect.Classes.stuScore("12","Seeker","1234","元素反应","派蒙",100.0,10.0,2022,1,"必修",12.0);
        stuScoreList.add(stuScore);


        return stuScoreList;
    }
}
