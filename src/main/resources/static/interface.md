# 选课系统API接口文档

> By Seeker \
> Version 1.0 \
> 2023.12.18

## 写在前面

为了规范接口的格式,每次返回值必须把按照如下编写,其中相应内容放在data中,这篇文档以后的"响应参数"将只列出data中的规定

| **参数名**  | **类型**   | **必须?** | **备注**             |
| ----------- | ---------- | --------- | -------------------- |
| **status**  | String     | Yes       | 响应码               |
| **message** | string     | No        | 提示信息             |
| **data**    | Object\[\] | No        | 返回的数据(响应内容) |

## 0.登录页面

>TODO: 登录页面的接口

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