package com.seekerer.courseselect.Controller;


import com.seekerer.courseselect.Classes.LectureInfo;
import com.seekerer.courseselect.Classes.Result;
import com.seekerer.courseselect.Classes.stuScore;
import com.seekerer.courseselect.service.stuClassSelectList;
import com.seekerer.courseselect.service.stuScoreList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
@CrossOrigin
@RestController
public class StuCon {
    @Autowired
    private stuClassSelectList stuClassSelectList;
    @Autowired
    private stuScoreList stuScoreList;
    @RequestMapping("/api/stuSelectClassList")
    public Result stuSelectClass(){
        List<LectureInfo> LectureSelectList;
        LectureSelectList=stuClassSelectList.ListLecture();

        return  Result.success(LectureSelectList);
    }

    @RequestMapping("/api/selectClass")
    public Result selectClass(String lectureId,String stuId){
        System.out.println("lectureId:"+lectureId+"stuId:"+stuId);
        //记得加上逻辑判断，如果已经选过了，就不能再选了


        return Result.success();
    }
    @RequestMapping("/api/cancelClass")
    public Result cancelClass(String lectureId,String stuId) {
        System.out.println("lectureId:" + lectureId + "stuId:" + stuId);


        //记得加上逻辑判断，如果已经选过了，就不能再选了
        return Result.success();
    }
    @RequestMapping("/api/ScoreList")
    public Result ScoreList(@RequestParam String stuId){
        System.out.println("stuId:"+stuId);
        List<stuScore> scoreList=stuScoreList.ListScore(Integer.parseInt(stuId));

        //记得加上查询逻辑

        return Result.success(scoreList);
    }
}
