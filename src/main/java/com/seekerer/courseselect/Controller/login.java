package com.seekerer.courseselect.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class login {
    @RequestMapping("/login")
    public RedirectView loginMe(String username, String password){
        System.out.println(username+":"+password);
        //return new RedirectView("?error=true");

        return new RedirectView("/home/home.html");

    }
}
