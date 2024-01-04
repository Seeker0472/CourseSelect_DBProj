package com.seekerer.courseselect.service;

import com.seekerer.courseselect.Classes.Course_select_info;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class getTotalEnrollments_Excel {

    @Autowired
    private com.seekerer.courseselect.DataAccess.Tadminget Tadminget;
    public Workbook getTotalEnrollments(int deliver_id){
        return createExcel(Tadminget.getTotalEnrollments(deliver_id));
    }

    public Workbook createExcel(List<Course_select_info> entities) {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("选课名单");

        Row headerRow = sheet.createRow(0);
        // 创建表头
        headerRow.createCell(0).setCellValue("学生ID");
        headerRow.createCell(1).setCellValue("名字");
        headerRow.createCell(2).setCellValue("性别");
        headerRow.createCell(3).setCellValue("专业");
        headerRow.createCell(4).setCellValue("电话号码");
        // ...其他表头...

        int rowNum = 1;
        for (Course_select_info entity : entities) {
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(entity.getStudent_id());
            row.createCell(1).setCellValue(entity.getStudent_name());
            row.createCell(2).setCellValue(entity.getGender());
            row.createCell(3).setCellValue(entity.getMajor_name());
            row.createCell(4).setCellValue(entity.getPhone());
            // ...其他单元格...
        }

        // 自动调整列宽
        for (int i = 0; i < entities.size(); i++) {
            sheet.autoSizeColumn(i);
        }

        return workbook;
    }
}
