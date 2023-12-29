package com.seekerer.courseselect.InCp;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin
@Component
public class adminCheck implements HandlerInterceptor {
    @Autowired
    private com.seekerer.courseselect.service.JwtsConfig jwtsConfig;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("preHandle: 请求前调用");

        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            // 提取JWT
            String jwt = authHeader.substring(7);

            // 这里可以添加请求处理前的逻辑
            System.out.println(jwt);

        try{
            Claims claims= Jwts.parser()
                    .setSigningKey("seekerer")
                    .parseClaimsJws(jwt)
                    .getBody();
        }catch (Exception e){
            return false;
        }
        return true;
        }
        return false;
    }

//    @Override
//    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
//        // 这里可以添加请求处理后的逻辑，但在视图渲染前
//        System.out.println("postHandle: 请求后调用，视图渲染前");
//    }
//
//    @Override
//    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//        // 这里可以添加视图渲染后的逻辑
//        System.out.println("afterCompletion: 请求完成后调用");
//    }

}