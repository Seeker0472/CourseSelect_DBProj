package com.seekerer.courseselect.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class JwtsConfig {

    public String genJwt(String username){
        Map<String,Object> map=new HashMap<>();
        map.put("username",username);

        String jwt= Jwts.builder()
                .setClaims(map)
                .signWith(io.jsonwebtoken.SignatureAlgorithm.HS256,"seekerer")
                .setExpiration(new java.util.Date(System.currentTimeMillis()+60*60*24))//设置过期时间为一天
                .compact();
        return jwt;
    }

    public boolean isJwtOK(String jwt) {
        try{
            Claims claims=Jwts.parser()
                    .setSigningKey("seekerer")
                    .parseClaimsJws(jwt)
                    .getBody();
        }catch (Exception e){
            return false;
        }
        return true;
    }

}
