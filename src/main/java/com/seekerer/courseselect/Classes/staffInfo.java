package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class staffInfo {
    private String account_id;
    private String name;
    private String gender;
    private String phone;
    private String email;
}
