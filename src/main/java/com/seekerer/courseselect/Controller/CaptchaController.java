package com.seekerer.courseselect.Controller;
import com.google.code.kaptcha.Producer;
import com.seekerer.courseselect.Classes.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@RestController
public class CaptchaController {

    @Autowired
    private Producer kaptchaProducer;
    @Autowired
    private com.seekerer.courseselect.DataAccess.LoginAndRegister loginAndRegister;

    @GetMapping(value = "/captcha", produces = MediaType.IMAGE_JPEG_VALUE)
    public StreamingResponseBody getCaptcha(@RequestParam(required = true)String uuid) {//此接口必须传入uuid
        String text = kaptchaProducer.createText();
        BufferedImage image = kaptchaProducer.createImage(text);

        loginAndRegister.insertCode(uuid, text);

        System.out.println("验证码文本：" + text);

        return outputStream -> {
            try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
                ImageIO.write(image, "jpg", baos);
                baos.writeTo(outputStream);
            } catch (IOException e) {
                throw new RuntimeException("生成验证码错误", e);
            }
        };
    }
//    @GetMapping
//    public Result Login(String username, String password){
//        System.out.println(username+":"+password);
//        //return new RedirectView("?error=true");
//        //return new RedirectView("/home/home.html");
//        return Result.success();
//    }
}
