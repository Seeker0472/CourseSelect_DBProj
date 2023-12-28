package com.seekerer.courseselect.Classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MajorInfo {
    String major_id;
    String major_name;
    String name;
    String remarks;
    String credit_limit;
    String college_name;
}
