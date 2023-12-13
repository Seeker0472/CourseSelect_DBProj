package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class login {
    @RequestMapping("/login")
    public Object loginMe(String username, String password){
        System.out.println(username+":"+password);
        //return new RedirectView("?error=true");
        //return new RedirectView("/home/home.html");
        return Result.success();
    }
}
