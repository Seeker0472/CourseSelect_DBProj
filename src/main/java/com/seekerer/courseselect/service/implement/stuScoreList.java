package com.seekerer.courseselect.service.implement;

import com.seekerer.courseselect.Classes.stuScore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class stuScoreList implements com.seekerer.courseselect.service.stuScoreList{
    @Autowired
    com.seekerer.courseselect.DataAccess.stuScore stuScore;
    @Override
    public List<stuScore> ListScore(Integer stu_id) {

        return stuScore.ListScore(stu_id);
    }
}
