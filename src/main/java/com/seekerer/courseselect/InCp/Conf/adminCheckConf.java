package com.seekerer.courseselect.InCp.Conf;

import com.seekerer.courseselect.InCp.adminCheck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@CrossOrigin
//@Configuration
//public class adminCheckConf implements WebMvcConfigurer {
//    @Autowired
//    private com.seekerer.courseselect.InCp.adminCheck adminCheck;
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(adminCheck)
//                .addPathPatterns("/api/admin/**"); // 指定拦截的路径
////                .excludePathPatterns("/login", "/error"); // 指定不拦截的路径
//    }
//
//}
