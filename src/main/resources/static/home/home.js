let stuid = 0;//学生id
const main = document.querySelector("main");
let advs

document.addEventListener("DOMContentLoaded", function () {
    advs = document.getElementById("advSear");
})
function clearAll() {
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}

function showadvs() {
    if (advs.style.display === "none")
        advs.style.display = "unset";
    else
        advs.style.display = "none";
}

//ToDo: 要修改!
function initializeCourseSelectPage() {
    //到时候处理请求逻辑
    /*const responce={
        "Body":{
            "CourseList":[
                {
                    "CourseName":"高等数学",
                    "CourseId":"1",
                    "CourseTeacher":"张三",

                        "selected":true,
                        "selectednum":1,
                        "maxnum":50,

                        "day":1,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16,

                    "CoursePlace":"教学楼A101"
                }
            ]
        }
    }*/
    fetch("/api/stuSelectClassList", {
        //这个地方需要大改!!!!!!!!!




        method: 'POST',
        //body:
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                //这里可以加上加载页面的逻辑
                console.log(response);




                {
                    const courseLists = response.data;

                    const CourseDisplay = document.getElementById("CourseList");
                    //清除之前加载的选课信息
                    while (CourseDisplay.firstChild) {
                        CourseDisplay.removeChild(CourseDisplay.firstChild);
                    }
                    //将新的选课信息加载到页面上
                    courseLists.forEach((course) => {
                        const courseDiv = document.createElement("div");//课程
                        courseDiv.className = "course";
                        const courseName = document.createElement("h3");//课程名
                        courseName.textContent = course.name;
                        const courseInfo = document.createElement("p");//课程信息
                        const stuNum = document.createElement("p");//人数
                        const selectbutton = document.createElement("button");
                        selectbutton.textContent = "选课";
                        if (course.selected) {

                            selectbutton.style.backgroundColor = "red";
                            selectbutton.textContent = "退课";
                        }
                        courseInfo.textContent = `
        课程ID: ${course.id}
        学分: ${course.credit}
        授课教师: ${course.teacher}
        上课时间: 周${course.day} ${course.starttime}-${course.endtime}节
        学期: ${course.semestername}
        上课周数: ${course.beginweek}-${course.endweek}周
        上课地点: ${course.place}
      `;
                        stuNum.textContent = `已选人数: ${course.selectednum}/${course.maxnum}`;
                        stuNum.style = "color:gray;";
                        selectbutton.onclick = function () {
                            //这里记得补上交互逻辑





                            if (course.selected) {
                                //如果请求成功


                                alert("课程ID" + course.id + "退课成功");
                                course.selected = false;
                                console.log(selectbutton.textContent);
                                selectbutton.textContent = "选课";
                                stuNum.textContent = `已选人数: ${course.selectednum - 1}/${course.maxnum}`;
                                selectbutton.style.backgroundColor = "#f1c40f";
                            } else {
                                //如果请求成功

                                //定义一个查询指定课程的接口
                                selectbutton.style.backgroundColor = "red";
                                course.selected = true;
                                selectbutton.textContent = "退课";
                                stuNum.textContent = `已选人数: ${course.selectednum + 1}/${course.maxnum}`;
                                alert("课程ID" + course.id + "选课成功");
                            }
                        }


                        courseDiv.appendChild(courseName);
                        courseDiv.appendChild(courseInfo);
                        courseDiv.appendChild(selectbutton);
                        courseDiv.appendChild(stuNum);
                        console.log(courseDiv);
                        CourseDisplay.appendChild(courseDiv);
                    });

                }






            }
            else {
                alert("获取课程信息失败");
            }
        })
        .catch(error => {
            console.error('获取课程信息请求出错:', error);
        });

}

//ToDo: 要修改!
//初始化成绩表
function initializeScoreTable() {
    const scoreTable = document.getElementById("stuTable");
    while (scoreTable.firstChild) {
        scoreTable.removeChild(scoreTable.firstChild);
    }
    fetch("/api/ScoreList?stuId=" + stuid, {
        method: 'POST'

    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {//请求成功
                console.log(response);
                const data = response.data;
                data.forEach((course) => {
                    const tr = document.createElement("tr");
                    const lectureName = document.createElement("td");
                    lectureName.textContent = course.lectureName;
                    const lectureId = document.createElement("td");
                    lectureId.textContent = course.lectureId;
                    const year = document.createElement("td");
                    year.textContent = course.year;
                    const semester = document.createElement("td");
                    semester.textContent = course.semester;
                    const type = document.createElement("td");
                    type.textContent = course.type;
                    const credit = document.createElement("td");
                    credit.textContent = course.credit;
                    const score = document.createElement("td");
                    score.textContent = course.score;
                    const jd = document.createElement("td");
                    jd.textContent = course.jd;
                    const teacher = document.createElement("td");
                    teacher.textContent = course.teacher;
                    const xfjd = document.createElement("td");
                    xfjd.textContent = (course.credit * course.jd).toFixed(2);
                    tr.appendChild(lectureName);
                    tr.appendChild(lectureId);
                    tr.appendChild(year);

                    tr.appendChild(semester);
                    tr.appendChild(type);
                    tr.appendChild(credit);
                    tr.appendChild(score);
                    tr.appendChild(jd);
                    tr.appendChild(teacher);
                    tr.appendChild(xfjd);
                    scoreTable.appendChild(tr);

                })







            }
        })

}

//显示/隐藏侧边栏
function setSideBar() {
    const SideBar = document.getElementById("SideBar");
    if (SideBar.style.width === '') {
        renderClassTable();
        SideBar.style.width = '100%';
    }
    else
        SideBar.style.width = '';

}

function loadPage1() {

}
function loadPage2() {
    initializeCourseSelectPage();
}
function loadPage3() {
    initializeScoreTable();
}
function loadPage4() {

}
function loadPage5() {

}
function firstload() {

}