package com.seekerer.courseselect.service.implement;

import com.seekerer.courseselect.Classes.LectureInfo;
import com.seekerer.courseselect.DataAccess.Select_Require;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class stuClassSelectedList1 implements com.seekerer.courseselect.service.stuClassSelectList {
@Autowired
    Select_Require select_require;

    @Override
    public List<LectureInfo> ListLecture() {



        return select_require.ListLecture();
    }
}
