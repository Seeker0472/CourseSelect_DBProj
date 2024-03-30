package com.seekerer.courseselect.Controller;

import com.seekerer.courseselect.Classes.LoginResult;
import com.seekerer.courseselect.Classes.Result;
import com.seekerer.courseselect.DataAccess.LoginAndRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin
@RestController
public class login {
    @Autowired
    private com.seekerer.courseselect.DataAccess.LoginAndRegister loginAndRegister;
    @Autowired
    private com.seekerer.courseselect.service.JwtsConfig jwtsConfig;

    @RequestMapping(value="/login",method = RequestMethod.POST)
    public Object loginMe(String username, String password,String uuid,String code){
        Map<String, Object> params = new java.util.HashMap<>();
        params.put("uuid", uuid);
        params.put("code", code);
        params.put("id", username);
        params.put("password", password);

        loginAndRegister.Login(params);
        String jwt=jwtsConfig.genJwt(username);
        if(params.get("result") != (Object)1){
            return Result.error(500, "登录失败");
        }
        else{
            return Result.success(new LoginResult((int)params.get("identity_out"), jwt));
        }
    }

}
