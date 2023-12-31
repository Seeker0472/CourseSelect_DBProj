let stuid = 0;//学生id
const main = document.querySelector("main");
let advs

let term_id;

fetch("https://api.seekerer.com/api/all/getStat", {
    method: 'GET',
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        term_id = data.data.term_now;
        // DrawClassTable();
    });

document.addEventListener("DOMContentLoaded", function () {
    advs = document.getElementById("advSear");
    document.getElementById("TermSelect").onchange = function () {
        initCourseTable4(document.getElementById("TermSelect").value);
    };
    const url = new URL(window.location.href);
    stuid = url.searchParams.get('account');
    fetchWithAuth("https://api.seekerer.com/api/stu/GetAccountInfo?account_id=" + stuid, {
        method: 'get',
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                const data = response.data;
                const userName = document.getElementById("userName");
                userName.textContent = data.student_name;

            }
        })

});
function clearAll() {
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}

function showadvs() {
    if (advs.style.display === "none")
        advs.style.display = "flex";
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
    fetchWithAuth("https://api.seekerer.com/api/stu/getCourseSelectList", {
        //这个地方需要大改!!!!!!!!!

        method: 'get',
        //body:
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                //这里可以加上加载页面的逻辑
                console.log(response);

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
                    courseName.textContent = course.course_name;
                    const courseInfo = document.createElement("p");//课程信息
                    const stuNumDesc = document.createElement("p");//人数
                    const stuNum = document.createElement("p");//人数
                    const stuNumTotal = document.createElement("p");//人数

                    const selectbutton = document.createElement("button");
                    selectbutton.textContent = "选课";
                    if (course.isSelected) {

                        selectbutton.style.backgroundColor = "red";
                        selectbutton.textContent = "退课";
                    }
                    else if (course.selected >= course.max_enrollment) {
                        selectbutton.style.backgroundColor = "gray";
                        selectbutton.disabled = true;
                        selectbutton.textContent = "已满";
                    }
                    courseInfo.textContent = `
        课程ID: ${course.course_id}
        学分: ${course.credits}
        授课教师: ${course.teacher_name}
        上课时间: 周${course.course_day} ${course.start_time}-${course.end_time}节
        学期: ${course.term_name}
        上课周数: ${course.start_week}-${course.end_week}周
        上课地点: ${course.location}
        课程类别: ${course.category_name}
      `;
                    let deliverId = course.deliverId;
                    stuNumDesc.textContent = `已选人数: `;
                    stuNum.textContent = `${course.selected}`;
                    stuNum.id = "#course_selected_num" + course.deliverId;
                    stuNum.style = "color:gray;";
                    stuNumTotal.textContent = `/${course.max_enrollment}`;
                    stuNumTotal.style = "color:gray;";
                    selectbutton.id = "#course_selected_button" + course.deliverId;
                    selectbutton.onclick = function () {
                        //这里记得补上交互逻辑
                        if (!course.selected) {
                            fetchWithAuth("https://api.seekerer.com/api/stu/SelectCourse", {
                                method: 'post',
                                body:
                                    JSON.stringify({
                                        "deliverId": deliverId,
                                    })
                            })
                                .then(response => { return response.json(); })
                                .then(response => {
                                    if (response.code != 200) {
                                        alert("选课失败");
                                    } else {
                                        //如果请求成功

                                        //定义一个查询指定课程的接口
                                        selectbutton.style.backgroundColor = "red";
                                        course.selected = true;
                                        selectbutton.textContent = "退课";
                                        // stuNum.textContent = `已选人数: ${course.selectednum + 1}/${course.maxnum}`;
                                        flushSelectedNum();
                                        alert("课程  " + course.course_name + "  选课成功");

                                    }
                                })
                                .catch(error => {
                                    console.error('选课请求出错:', error);
                                })
                        } else {
                            fetchWithAuth("https://api.seekerer.com/api/stu/cancelCourse", {
                                method: 'post',
                                body:
                                    JSON.stringify({
                                        "deliverId": deliverId,
                                    })
                            })
                                .then(response => { return response.json(); })
                                .then(response => {
                                    if (response.code != 200) {
                                        alert("退课失败");
                                    } else {
                                        alert("课程  " + course.course_name + "  退课成功");
                                        course.selected = false;
                                        console.log(selectbutton.textContent);
                                        selectbutton.textContent = "选课";
                                        // stuNum.textContent = `已选人数: ${course.selectednum - 1}/${course.maxnum}`;
                                        flushSelectedNum();
                                        selectbutton.style.backgroundColor = "#f1c40f";

                                    }
                                });

                        }
                    }
                    courseDiv.appendChild(courseName);
                    courseDiv.appendChild(courseInfo);
                    courseDiv.appendChild(selectbutton);
                    courseDiv.appendChild(stuNumDesc);
                    courseDiv.appendChild(stuNum);
                    courseDiv.appendChild(stuNumTotal);
                    console.log(courseDiv);
                    CourseDisplay.appendChild(courseDiv);
                });









            }
            else {
                alert("获取课程信息失败");
            }
        })
        .catch(error => {
            console.error('获取课程信息请求出错:', error);
        });

}


function flushSelectedNum() {
    console.log("flushing");
    const isOpen = document.getElementById("Link2Display");
    if (isOpen.style.display === "none")
        return;
    fetchWithAuth("https://api.seekerer.com/api/stu/GetAllSelectedNum", {
        method: 'get'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                console.log(response);
                response.data.forEach((course) => {
                    const stuNum = document.getElementById("#course_selected_num" + course.deliver_id);
                    if (stuNum) {
                        const button = document.getElementById("#course_selected_button" + course.deliver_id);
                        stuNum.textContent = `${course.selected_num}`;
                        if (course.selected_num >= course.max_enrollment && stuNum.style.backgroundColor != "red") {
                            button.style.backgroundColor = "gray";
                            button.disabled = true;
                            button.textContent = "已满";

                        }
                        else if (stuNum.style.backgroundColor != "red") {
                            stuNum.style.backgroundColor = "f1c40f";
                            button.disabled = false;
                            button.textContent = "选课";

                        }
                    }
                });
            }
        });
    console.log("flushed");

}

//ToDo: 要修改!
//初始化成绩表
function initializeScoreTable() {
    const scoreTable = document.getElementById("stuTable");
    while (scoreTable.firstChild) {
        scoreTable.removeChild(scoreTable.firstChild);
    }
    fetchWithAuth("/api/ScoreList?stuId=" + stuid, {
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
        DrawClassTable();
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
    getTerms();
    if (!term_id)
        fetch("https://api.seekerer.com/api/all/getStat", {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                console.log(data);
                term_id = data.data.term_now;
                return term_id;
            }).then(term => {
                initCourseTable4(term);
            });
    else
        initCourseTable4(term_id);
}
function loadPage5() {

}
function firstload() {


}

function getTerms() {
    fetchWithAuth('https://api.seekerer.com/api/all/getTerms', {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log(data);
            const terms = data.data;
            const termSelect = document.getElementById("TermSelect");
            terms.forEach(term => {
                const option = document.createElement("option");
                option.value = term.term_id;
                option.textContent = term.term_name;
                if (term.stat === 1)
                    option.selected = true;
                termSelect.appendChild(option);
            });
        });
}

function initCourseTable4(term) {

    fetchWithAuth('https://api.seekerer.com/api/stu/GetAllSelectedClass?term_id=' + term, {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {

            console.log(term + "class:" + data.data);
            const classes = data.data;
            for (let i = 1; i <= 7; i++)
                for (let j = 1; j <= 10; j++) {
                    const box = document.getElementById("" + i + "-" + j);
                    box.innerHTML = "";
                    box.style.backgroundColor = "";
                    box.style.color = "";
                    classes.forEach(cla => {
                        if (cla.course_day === i && (cla.start_time <= j && cla.end_time >= j)) {
                            box.innerHTML = cla.course_name + "<br>" + "地点:" + cla.location + "<br>" + "教师:" + cla.name + "<br>" + "周数:" + cla.start_week + "-" + cla.end_week;
                            box.style.backgroundColor = "rgb(241, 196, 15)";
                            box.style.color = "black";
                        }
                    });





                }


        });

}



window.setInterval(flushSelectedNum, 1000 * 10);