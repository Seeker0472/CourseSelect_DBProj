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

    @Autowired
    private com.seekerer.courseselect.DataAccess.IsIdentityOk isIdentityOk;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        System.out.println("preHandle: 请求前调用");
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            // 提取JWT
            String jwt = authHeader.substring(7);
            // 这里可以添加请求处理前的逻辑
            System.out.println(jwt);
            try {
                Claims claims = Jwts.parser()
                        .setSigningKey("seekerer")
                        .parseClaimsJws(jwt)
                        .getBody();
                if (isIdentityOk.isAdmin(claims.get("username").toString()) == 0)
                    return false;
            } catch (Exception e) {
                return false;
            }
            return true;
        }
        return false;
    }
}
