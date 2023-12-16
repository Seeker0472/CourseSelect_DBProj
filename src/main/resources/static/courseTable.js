//调用已选课程列表接口返回的数据
let response = {
    "body": [
        {
            "courseName": "高等数学",
            "courseId": "1",
            "courseTeacher": "张三",
            "day": 1,
            "starttime": 1,
            "endtime": 2,
            "beginweek": 1,
            "endweek": 16,
            "coursePlace": "教学楼A101",
            "credit": 4,
            "semestername": "大一上学期",
            "semesterid": "1",
            "Teacher": "1",
        },
        {
            "courseName": "线性代数",
            "courseId": "2",
            "courseTeacher": "李四",
            "day": 1,
            "starttime": 3,
            "endtime": 4,
            "beginweek": 1,
            "endweek": 16,
            "coursePlace": "教学楼A101",
            "credit": 4,
            "semestername": "大一上学期",
            "semesterid": "1",
            "Teacher": "2",
        },
        {
            "courseName": "大学物理",
            "courseId": "3",
            "courseTeacher": "王五",
            "day": 1,
            "starttime": 5,
            "endtime": 6,
            "beginweek": 1,
            "endweek": 16,
            "coursePlace": "教学楼A101",
            "credit": 4,
            "semestername": "大一上学期",
            "semesterid": "1",
            "Teacher": "3",
        },
        {
            "courseName": "大学物理",
            "courseId": "3",
            "courseTeacher": "王五",
            "day": 2,
            "starttime": 5,
            "endtime": 6,
            "beginweek": 1,
            "endweek": 16,
            "coursePlace": "教学楼A101",
            "credit": 4,
            "semestername": "大一上学期",
            "semesterid": "1",
            "Teacher": "3",
        },
        {
            "courseName": "大学物理",
            "courseId": "3",
            "courseTeacher": "王五",
            "day": 2,
            "starttime": 5,
            "endtime": 6,
            "beginweek": 19,
            "endweek": 20,
            "coursePlace": "教学楼A101",
            "credit": 4,
            "semestername": "大一上学期",
            "semesterid": "1",
            "Teacher": "3",
        },

    ]


};

const Days = [document.getElementById("Day1"), document.getElementById("Day2"), document.getElementById("Day3"), document.getElementById("Day4"), document.getElementById("Day5"), document.getElementById("Day6"), document.getElementById("Day7")];

// Todo:有空加上显示课程详细信息的逻辑
//TODO:以后加上后端请求逻辑
// 这个函数要实现加载课程表,目前打算实现比较直观地显示每一周的课程情况
// classBox放置一个时间段的课程,如果为空则是classBoxEmpty,满则为classBoxFilled
function renderClassTable() {
    clearALLCourse();
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 10; j++) {
            let classes = response.body;

            console.log(classes)


            let box = document.createElement("span");
            box.className = "classBox";

            let start = 1, end = 20;
            let flag = 0;
            while (flag === 0) {
                let min = 21, minend = 21;
                classes.forEach(cla => {
                    if (cla.day === i && (cla.starttime <= j && cla.endtime >= j)) {
                        if (cla.beginweek < min && cla.beginweek >= start) {
                            min = cla.beginweek;//min是start(当前时间段是有课的)或者start之后的最小开始时间(当前时间段是空的)
                            if (min != start) {
                                minend = min - 1;//minend是start之后的最小开始时间-1(当前时间段是空的)
                            }
                            else {
                                minend = cla.endweek;//minend是start之后的最小开始时间-1(当前时间段是有课的)

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
                        box.appendChild(clas);
                    }
                } else {
                    //渲染
                    if (min === start) {//渲染有课的时间段
                        let clas = document.createElement("span");
                        clas.className = "classBoxFilled";
                        clas.style.width = (8) * (minend - min + 1) + "px";
                        //TODO:有空加上一个描述什么的
                        box.appendChild(clas);
                    } else {
                        let clas = document.createElement("span");
                        clas.className = "classBoxEmpty";
                        clas.style.width = (8) * (min - start) + "px";
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