package com.seekerer.courseselect.DataAccess;

import com.seekerer.courseselect.Classes.LectureInfo;
import org.springframework.stereotype.Component;

import java.util.ArrayList;


public interface Select_Require {
    ArrayList<LectureInfo> ListLecture();
}
