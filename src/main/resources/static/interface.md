# 选课系统API接口文档

> By Seeker \
> Version 1.0 \
> 2023.12.25

## 写在前面

为了规范接口的格式,每次返回值必须把按照如下编写,其中相应内容放在data中,这篇文档以后的"响应参数"将只列出data中的规定

| **参数名**  | **类型**   | **必须?** | **备注**             |
| ----------- | ---------- | --------- | -------------------- |
| **status**  | String     | Yes       | 响应码               |
| **message** | string     | No        | 提示信息             |
| **data**    | Object\[\] | No        | 返回的数据(响应内容) |

## -1.需求分析

### 0.登录页面

使用jwt令牌,后端验证合法性,不合法则跳转回登录页面

所有用户登录的界面应该是同一个,根据后端返回值判断用户类型,跳转到不同的页面

学生需要能自行注册,注册后需要等待管理员审核

### 1.学生选课页面

学生可以查看课程列表,并且可以选课,退课

需要能看到 指定学期/当前学期 所有课程信息

课程最好加上评论区/评分

可以看成绩

可以改密码

可以查看当前用户历史登录ip

学生不能切换身份

需要头像,名字,学号,专业,学院,年级,班级,性别,生日,邮箱,电话,地址,个人简介

数据可视化: 
 - 进度条: 选课进度,学分进度
 - 日期热力图: 每周选课数量

### 2.教务管理员页面

可以查看所有课程信息(按学期)

可以添加课程

可以修改课程信息

可以删除课程

可以查看所有学生信息

可以查看指定学生详细信息---分页!

可以修改指定学生信息(账号密码,学号,专业,学院,年级,班级,性别,生日,邮箱,电话,地址,个人简介)

可以给指定学生指派课程,或者删除选课

可以导出选课信息为excel表格

可以导出学生信息为excel表格

可以修改密码

可以查看当前用户和学生历史登录ip

可以查阅申请审核

数据可视化:
 - 按学院总体选课学分---盒须图
 - 选课的时间段---折线图(评估服务器压力)
 - 每个学生或者各学院班级选课趋势(类型)
 - 各个学生选课情况(矩阵-旭日图互转)

### 3.管理员页面

可以查看所有课程信息 (注意和教务管理员的区别)

可以增删改用户信息和身份

可以增删改课程类别,专业,学院信息

可以修改密码

可以查看当前用户和学生历史登录ip

可以备份数据库

数据可视化:
 - 按学院总体选课学分---(矩形树图-旭日图)
 - 课程评分(男,女,成绩,分数)---散点合并为柱状图
 - 账号登录地区---记录每次登录(也许可以用热力图?--调用百度地图api)

## 0.登录页面

>请求路径: /api/login \
>请求方式: POST \
>描述: 登录

#### 0.1.请求参数

| 参数名   | 类型   | 必须? | 备注     |
| -------- | ------ | ----- | -------- |
| username | String | Yes   | 用户名   |
| password | String | Yes   | 用户密码 |


## 1.学生选课页面

### 1.1.获取课程列表

>请求路径: /api/stu/getCourseList \
>请求方式: POST \
>描述: 获取课程列表

#### 1.1.1.请求参数

| **参数名**     | **类型** | **必须?** | **备注**            |
| -------------- | -------- | --------- | ------------------- |
| **courseID**   | String   | No        | 课程代码            |
| **leftOver**   | Boolean  | No        | 是否有余量          |
| **selected**   | Boolean  | No        | 是否已选            |
| **semesterId** | String   | No        | 学期编号            |
| **courseName** | String   | No        | 课程名,支持模糊搜索 |
| **professor**  | String   | No        | 教授名,支持模糊搜索 |

#### 1.1.2.响应参数

- **状态码:** 200 OK
- **内容:**

    | 参数名      | 类型    | 必须?      | 备注             |
    | ----------- | ------- | ---------- | ---------------- |
    | name        | String  | IfSuccess  | 课程名称         |
    | courseId    | String  | IfSusccess | 课程代码         |
    | description | String  | IfSuccess  | 课程的详细信息   |
    | selected    | Boolean | IfSuccess  | 是否已经选了     |
    | selectedNum | Integer | IfSuccess  | 已选人数         |
    | maxNum      | Integer | IfSuccess  | 课程限制最大人数 |

PS. 课程详细信息应该包括教师,课程在礼拜几,课程是从第几节课到第几节课,第几周到第几周,哪个学期,有几个学分,和上课的地点

响应数据样例

```json
{
    "status": "success",
    "message": "获取课程列表成功",
    "data": [
        {
            "name": "高等数学",
            "courseId": "C001",
            "description": "教师: 张三 上课时间: 周一 1-2节 上课地点: 东九楼 101 学分: 4 学期: 2020-2021-1 ",
            "selected": false,
            "selectedNum": 0,
            "maxNum": 100
        },
        {
            "name": "线性代数",
            "courseId": "C002",
            "description": "教师: 李四 上课时间: 周二 3-4节 上课地点: 东九楼 102 学分: 4 学期: 2020-2021-1 ",
            "selected": false,
            "selectedNum": 0,
            "maxNum": 100
        }
    ]
}
```

PS. 我本来是想这样设计的,但是本着接口简洁的原则,部分逻辑应该放在后端处理

```Java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LectureInfo {
    private String Name;
    private String id;
    private String Teacher;
    private Integer day;
    private  Integer startTime;
    private  Integer endTime;
    private  Integer beginWeek;
    private  Integer endWeek;
    private  Boolean selected;
    private  Integer selectedNum;
    private Integer maxNum;
    private String semesterId;
    private String semesterName;
    private Double credit;
    private String place;
}
```

### 1.2.选课

>请求路径: /api/stu/selectCourse \
>请求方式: GET \
>描述: 点击选课按钮后,发送请求,选课

#### 请求参数

| 参数名     | 类型   | 描述                             |
| ---------- | ------ | -------------------------------- |
| `courseId` | string | 课程ID，表示欲选修的课程唯一标识 |

#### 响应参数

- **成功响应：**

  - **状态码:** 200 OK
  - **内容:**

    | 参数名      | 类型    | 必须?      | 备注             |
    | ----------- | ------- | ---------- | ---------------- |
    | name        | String  | IfSuccess  | 课程名称         |
    | courseId    | String  | IfSusccess | 课程代码         |
    | description | String  | IfSuccess  | 课程的详细信息   |
    | selected    | Boolean | IfSuccess  | 是否已经选了     |
    | selectedNum | Integer | IfSuccess  | 已选人数         |
    | maxNum      | Integer | IfSuccess  | 课程限制最大人数 |

```json
    {
      "status": "success",
      "message": "选课成功。",
      "data":{
            "name": "高等数学",
            "courseId": "C001",
            "description": "教师: 张三 上课时间: 周一 1-2节 上课地点: 东九楼 101 学分: 4 学期: 2020-2021-1 ",
            "selected": true,
            "selectedNum": 0,
            "maxNum": 100
        }
    }
```

#### 错误情况

- **课程ID缺失：**
  - **状态码:** 400 Bad Request
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "缺少课程ID参数。"
    }
    ```

- **课程未找到：**
  - **状态码:** 404 Not Found
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "未找到指定的课程。"
    }
    ```

- **课程冲突：**
  - **状态码:** 409 Conflict
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "课程冲突，无法选修。"
    }
    ```

- **课程已满：**
- **状态码:** 409 Conflict
- **内容:**

    ```json
    {
    "status": "error",
    "message": "课程已满，无法选修。"
    }
    ```

- **已选过该课程：**
- **状态码:** 409 Conflict
- **内容:**

    ```json
    {
    "status": "error",
    "message": "已选过该课程，无法重复选修。"
    }
    ```

- **学分超出限制：**
- **状态码:** 409 Conflict
- **内容:**

    ```json
    {
    "status": "error",
    "message": "学分超出限制，无法选修。"
    }
    ```

- **服务器错误：**
- **状态码:** 500 Internal Server Error
- **内容:**

    ```json
    {
    "status": "error",
    "message": "服务器错误，无法完成选课操作。"
    }
    ```

### 1.3. 退课

#### 请求

- **路径:** `/api/stu/dropCourse`
- **请求方式:** `GET`

#### 参数

| 参数名     | 类型   | 描述                             |
| ---------- | ------ | -------------------------------- |
| `courseId` | string | 课程ID，表示欲退选的课程唯一标识 |

#### 响应参数

- **成功响应：**

  - **状态码:** 200 OK
  - **内容:**

    | **参数名**     | **类型** | **必须?** | **备注** |
    | -------------- | -------- | --------- | -------- |
    | **courseId**   | String   | IfSuccess | 学期id   |
    | **courseName** | String   | IfSuccess | 学期名   |

    ```json
    {
      "status": "success",
      "message": "退课成功。",
      "data": {
        "courseId": "123456",
        "courseName": "计算机网络",
      }
    }
    ```

#### 错误情况

- **课程ID缺失：**
  - **状态码:** 400 Bad Request
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "缺少课程ID参数。"
    }
    ```

- **课程未找到：**
  - **状态码:** 404 Not Found
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "未找到指定的课程。"
    }
    ```

- **未选修该课程：**
  - **状态码:** 409 Conflict
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "未选修该课程，无法进行退课操作。"
    }
    ```

- **服务器错误：**
  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法完成退课操作。"
    }
    ```

### 1.4. 获取课程列表

#### 请求

- **路径:** `/api/courses`
- **请求方式:** `GET`

#### 参数

*无*

#### 请求示例

```http
GET /api/courses
```

#### 响应

- **成功响应：**

  - **状态码:** 200 OK
  - **内容:**

    | **参数名**       | **类型** | **必须?** | **备注**           |
    | ---------------- | -------- | --------- | ------------------ |
    | **name**         | String   | IfSuccess | 课程名称           |
    | **description**  | String   | IfSuccess | 课程的详细信息     |
    | **id**           | String   | IfSuccess | 课程id             |
    | **day**          | Integer  | IfSuccess | 课程在哪天         |
    | **startTime**    | Integer  | IfSuccess | 课程从第几节课开始 |
    | **endTime**      | Integer  | IfSuccess | 课程从第几节课结束 |
    | **beginWeek**    | Integer  | IfSuccess | 课程从第几周开始   |
    | **endWeek**      | Integer  | IfSuccess | 课程从第几节课结束 |
    | **semesterName** | String   | IfSuccess | 课程所在的学期名   |

    ```json
    {
      "status": "success",
      "message": "获取课程列表成功。",
      "data": [
        {
          "name": "计算机网络",
          "description": "description",
          "id": "123456",
          "day": 1,
          "startTime": 1,
          "endTime": 3,
          "beginWeek": 1,
          "endWeek": 16,
          "semesterName": "2023春季学期"
        },
        {
          "name": "数据库管理",
          "description": "description",
          "id": "789012",
          "day": 3,
          "startTime": 4,
          "endTime": 6,
          "beginWeek": 1,
          "endWeek": 16,
          "semesterName": "2023春季学期"
        }
        // 可能有多个课程信息
      ]
    }
    ```

#### 错误情况

- **服务器错误：**
  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法获取课程列表。"
    }
    ```

### 1.5. 获取学期信息

#### 请求

- **路径:** `/api/semester`
- **请求方式:** `GET`

#### 参数

*无*

#### 请求示例

```http
GET /api/semester
```

#### 响应

- **成功响应：**

  - **状态码:** 200 OK
  - **内容:**

    | **参数名**       | **类型** | **必须?** | **备注** |
    | ---------------- | -------- | --------- | -------- |
    | **semesterId**   | String   | IfSuccess | 学期id   |
    | **semesterName** | String   | IfSuccess | 学期名   |

    ```json
    {
      "status": "success",
      "message": "获取学期信息成功。",
      "data": {
        "semesterId": "202301",
        "semesterName": "2023春季学期"
      }
    }
    ```

- **错误响应：**

  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法获取学期信息。"
    }
    ```

#### 错误情况

- **服务器错误：**
  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法获取学期信息。"
    }
    ```

>TODO: 选课系统的其他接口(数据可视化等)

## 2.教务管理员页面  

### 2.1.获取课程列表

>请求路径: /api/eduadmin/getCourseList \
>请求方式: POST \
>描述: 获取课程列表

#### 2.1.1.请求参数

| 参数名     | 类型   | 必须? | 备注                |
| ---------- | ------ | ----- | ------------------- |
| courseID   | String | No    | 课程编号            |
| semesterId | String | No    | 学期编号            |
| courseName | String | No    | 课程名,支持模糊搜索 |
| professor  | String | No    | 教授名,支持模糊搜索 |
| majorid    | String | No    | 专业id              |

#### 2.1.2.响应参数

- **成功响应：**

  - **状态码:** 200 OK
  - **内容**

    | 参数名      | 类型    | 必须?      | 备注             |
    | ----------- | ------- | ---------- | ---------------- |
    | name        | String  | IfSuccess  | 课程名称         |
    | courseId    | String  | IfSusccess | 课程编号         |
    | teacherID   | String  | IfSuccess  | 教师编号         |
    | teacherName | String  | IfSuccess  | 教师姓名         |
    | selectedNum | Integer | IfSuccess  | 已选人数         |
    | maxNum      | Integer | IfSuccess  | 课程限制最大人数 |
    | major       | String  | IfSuccess  | 课程面向专业     |

#### 错误情况

- **服务器错误：**
  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法获取课程信息。"
    }
    ```

#### 2.1.3.响应数据样例
  
  ```json
  {
      "status": "success",
      "message": "获取课程列表成功",
      "data": [
          {
              "name": "高等数学",
              "courseId": "C001",
              "teacherID": "T001",
              "teacherName": "张三",
              "selectedNum": 0,
              "maxNum": 100,
              "major": "计算机科学与技术"
          },
          {
              "name": "线性代数",
              "courseId": "C002",
              "teacherID": "T002",
              "teacherName": "李四",
              "selectedNum": 0,
              "maxNum": 100,
              "major": "计算机科学与技术"
          }
      ]
  }
  ```


### 2.2.修改课程信息

>请求路径: /api/eduadmin/modifyCourse \
>请求方式: POST \
>描述: 修改课程信息

#### 2.2.1.请求参数

| 参数名     | 类型   | 必须? | 备注             |
| ---------- | ------ | ----- | ---------------- |
| courseID   | String | Yes   | 课程编号         |
| semesterId | String | Yes   | 学期编号         |
| courseName | String | Yes   | 课程名           |
| professor  | String | Yes   | 教授名           |
| majorid    | String | Yes   | 专业id           |
| maxNum     | String | Yes   | 课程限制最大人数 |

>TODO: 这里需要修改




### 2.3.删除课程

>请求路径: /api/eduadmin/deleteCourse \
>请求方式: DELETE \
>描述: 删除课程

#### 2.3.1.请求参数

| 参数名   | 类型   | 必须? | 备注     |
| -------- | ------ | ----- | -------- |
| courseID | String | Yes   | 课程编号 |

#### 2.3.2.响应参数

- **成功响应：**

  - **状态码:** 200 OK
  - **内容**

    | 参数名     | 类型   | 必须?     | 备注     |
    | ---------- | ------ | --------- | -------- |
    | courseID   | String | IfSuccess | 课程编号 |
    | courseName | String | IfSuccess | 课程名   |

#### 错误情况

- **服务器错误：**
  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法删除课程。"
    }
    ```

#### 2.3.3.响应数据样例

```json
{
    "status": "success",
    "message": "删除课程成功",
    "data": {
        "courseID": "C001",
        "courseName": "高等数学"
    }
}
```

### 2.4.添加课程

>请求路径: /api/eduadmin/addCourse \
>请求方式: POST \
>描述: 添加课程

#### 2.4.1.请求参数

| 参数名     | 类型   | 必须? | 备注             |
| ---------- | ------ | ----- | ---------------- |
| courseID   | String | Yes   | 课程编号         |
| semesterId | String | Yes   | 学期编号         |
| courseName | String | Yes   | 课程名           |
| professor  | String | Yes   | 教授名           |
| majorid    | String | Yes   | 专业id           |
| maxNum     | String | Yes   | 课程限制最大人数 |

#### 2.4.2.响应参数

- **成功响应：**

  - **状态码:** 200 OK
  - **内容**

    | 参数名     | 类型   | 必须?     | 备注     |
    | ---------- | ------ | --------- | -------- |
    | courseID   | String | IfSuccess | 课程编号 |
    | courseName | String | IfSuccess | 课程名   |

#### 错误情况

- **服务器错误：**
  - **状态码:** 500 Internal Server Error
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "服务器错误，无法添加课程。"
    }
    ```

- **课程已存在：**
  - **状态码:** 409 Conflict
  - **内容:**

    ```json
    {
      "status": "error",
      "message": "课程已存在，无法添加课程。"
    }
    ```

#### 2.4.3.响应数据样例

```json
{
    "status": "success",
    "message": "添加课程成功",
    "data": {
        "courseID": "C001",
        "courseName": "高等数学"
    }
}
```

### 2.5.查看课程详细信息

### 2.5.获取学生列表

### 查看指定学生详细信息

### 2.6.获取选课审核列表

### 2.7.获取申请审核列表(Optional)


## 3.系统管理员

### 3.1.获取账号列表

### 3.2.添加学生

### 3.3.查看学生账号信息

### 3.4.获取职工列表

### 3.4.添加职工

### 3.5.查看职工详细信息

### 3.6.查看教务绑定列表

### 3.7.解绑教务

### 3.8.查看教师身份绑定列表

### 3.9.绑定教师

### 3.10.解绑教师

### 3.11.查看学院列表

>请求路径: /api/admin/getCollegeList \
>请求方式: POST \
>描述: 获取学院列表

#### 3.11.1.请求参数

| 参数名      | 类型   | 必须? | 备注                |
| ----------- | ------ | ----- | ------------------- |
| collegeID   | String | No    | 学院编号            |
| collegeName | String | No    | 学院名,支持模糊搜索 |

#### 3.11.2.响应参数

- **成功响应：**

  - **状态码:** 200 OK
  - **内容**

    | 参数名      | 类型   | 必须?      | 备注       |
    | ----------- | ------ | ---------- | ---------- |
    | collegeID   | String | IfSuccess  | 学院编号   |
    | collegeName | String | IfSusccess | 学院名     |
    | colAdmin    | String | IfSuccess  | 学院管理员 |
    | info        | String | IfSuccess  | 备注       |
    

### 3.12.添加学院

### 3.13.修改学院信息

### 3.14.删除学院

### 3.15.查看专业列表

### 3.16.添加专业

### 3.17.修改专业信息

### 3.18.删除专业

