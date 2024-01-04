//调用已选课程列表接口返回的数据me
let courseTable = {
    "body": [
        {
            "name": "高等数学",
            "id": "1",
            "courseTeacher": "张三",
            "course_day": 1,
            "start_time": 1,
            "end_time": 2,
            "start_week": 1,
            "end_week": 16,
            "coursePlace": "教学楼A101",
            "credit": 4,
            "semesterName": "大一上学期",
            "semesterid": "1",
            "Teacher": "1",
        }
    ]


};

var timeout;

// let term_id = 1;

const Days = [document.getElementById("Day1"), document.getElementById("Day2"), document.getElementById("Day3"), document.getElementById("Day4"), document.getElementById("Day5"), document.getElementById("Day6"), document.getElementById("Day7")];

function DrawClassTable() {
    fetchWithAuth('https://api.seekerer.com/api/stu/GetAllSelectedClass?term_id=' + term_id, {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(classes => { renderClassTable(classes.data) });
}

// Todo:有空加上显示课程详细信息的逻辑
//TODO:以后加上后端请求逻辑
// 这个函数要实现加载课程表,目前打算实现比较直观地显示每一周的课程情况
// classBox放置一个时间段的课程,如果为空则是classBoxEmpty,满则为classBoxFilled
function renderClassTable(classes) {
    clearALLCourse();
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 10; j++) {

            console.log(classes)


            let box = document.createElement("span");
            box.className = "classBox";

            let start = 1, end = 20;
            let flag = 0;
            while (flag === 0) {
                let min = 21, minend = 21;
                let classDetail = null;
                classes.forEach(cla => {
                    if (cla.course_day === i && (cla.start_time <= j && cla.end_time >= j)) {
                        if (cla.start_week < min && cla.start_week >= start) {
                            min = cla.start_week;//min是start(当前时间段是有课的)或者start之后的最小开始时间(当前时间段是空的)
                            if (min != start) {
                                minend = min - 1;//minend是start之后的最小开始时间-1(当前时间段是空的)
                            }
                            else {
                                minend = cla.end_week;//minend是start之后的最小开始时间-1(当前时间段是有课的)
                                classDetail = cla;

                            }
                        }
                    }
                });
                if (min === 21) {
                    flag = 1;
                    if (start <= 20) {//如果结尾是空的就在后面补上空时间段
                        let clas = document.createElement("span");
                        clas.className = "classBoxEmpty";
                        clas.style.width = (8) * (20 - start + 1) + "px";
                        clas.addEventListener("mouseover", function () {
                            showTextTimeOut('恭喜你,第' + start + '周到第' + 20 + '周的礼拜' + i + '的第' + j + '节课没课!', 1000);

                        });
                        // clas.onclick = showHideDesc();
                        box.appendChild(clas);
                    }
                } else {
                    //渲染
                    if (min === start) {//渲染有课的时间段
                        let showmsg = '第' + start + '周到第' + minend + '周的礼拜' + i + '的第' + j + '节课是:' + classDetail.course_name;
                        let clas = document.createElement("span");
                        clas.className = "classBoxFilled";
                        clas.style.width = (8) * (minend - min + 1) + "px";
                        clas.addEventListener("mouseover", function () {
                            showTextTimeOut(showmsg, 1000);

                        });
                        box.appendChild(clas);
                    } else {
                        let showmsg = '恭喜你,第' + start + '周到第' + minend + '周的礼拜' + i + '的第' + j + '节课没课!'
                        let clas = document.createElement("span");
                        clas.className = "classBoxEmpty";
                        clas.style.width = (8) * (min - start) + "px";
                        clas.addEventListener("mouseover", function () {
                            showTextTimeOut(showmsg, 1000);
                        });
                        box.appendChild(clas);
                    }
                    start = minend + 1;



                }
            }
            // box.style.height = (50) + "px";
            Days[i - 1].appendChild(box);
        }
    }


    // let test = document.createElement("span");
    // let n = 3;
    // // test.className="classBoxEmpty";
    // test.className = "classBox";
    // // test.style.height=(50*n+(n-1))+"px";
    // Days[0].appendChild(test);

}
function clearALLCourse() {
    Days.forEach(day => {
        while (day.firstChild) {
            day.removeChild(day.firstChild);
        }
    });
}

function showHideDesc(text) {
    const floatDesc = document.getElementById("float-desc");
    const floatContent = document.getElementById("float-desc-inner");
    if (floatDesc.style.display === "none") {
        floatDesc.style.display = "unset";
        if (text === null) {
            floatContent.innerHTML = "undefined";
        }
        else {
            floatContent.innerHTML = text;
        }
    } else {
        floatDesc.style.display = "none";
    }

}

function showTextTimeOut(text, time) {
    const floatDesc = document.getElementById("float-desc");
    const floatContent = document.getElementById("float-desc-inner");
    if (floatDesc.style.display === "none" || floatDesc.style.display === "") {
        clearTimeout(timeout);
        floatDesc.style.display = "unset";
        if (text === null) {
            floatContent.innerHTML = "undefined";
        }
        else {
            floatContent.innerHTML = text;
        }
        timeout = setTimeout(function () {
            floatDesc.style.display = "none";
        }, time);

    } else {
        clearTimeout(timeout);
        if (text === null) {
            floatContent.innerHTML = "undefined";
        }
        else {
            floatContent.innerHTML = text;
        }
        timeout = setTimeout(function () {
            floatDesc.style.display = "none";
        }, time);
    }
}