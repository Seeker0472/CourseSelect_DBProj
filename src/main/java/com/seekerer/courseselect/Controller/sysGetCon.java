package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class sysGetCon {
    @Autowired
    private com.seekerer.courseselect.DataAccess.sysGet sysGet;

    @RequestMapping("/api/all/getStat")
    private Object getstat()
    {
        return Result.success(sysGet.getSysInfo());
    }

    @RequestMapping("/api/all/getTerms")
    private Object getT()
    {
        return Result.success(sysGet.getTInfo());
    }
}
