package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class staffIdentityInfo {
    private String identity;
    private String account_id;
    private String name;
    private String college_name;
    private String college_id;
}
