package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HeaderUserInfo {
    private String name;
    private String role;
    //加上身份信息
}
