var page=1;
const main = document.querySelector("main");
const Link1Display = document.getElementById("Link1Display");
const Link2Display = document.getElementById("Link2Display");
const Link3Display = document.getElementById("Link3Display");
const Link4Display = document.getElementById("Link4Display");
const Link5Display = document.getElementById("Link5Display");
document.addEventListener("DOMContentLoaded", function () {
    var defaultpos=0;
    switch(page){
        case 1:
            loadPage1();
            break;
        case 2:
            loadPage2();
            break;
        case 3:
            loadPage3();
            break;
        case 4:
            loadPage4();
            break;
        case 5:
            loadPage5();
            break;
    }
    const slider = document.getElementById("slider1");
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    const link5 = document.getElementById("link5");
    //var link6=document.getElementById("link6");
    link1.addEventListener("mouseenter",
        (event) => {
            slider.style.transform='translateX(0)';
        });
    link2.addEventListener("mouseenter",
        (event) => {
            slider.style.transform='translateX(120px)';
        });
    link3.addEventListener("mouseenter",
        (event) => {
            slider.style.transform='translateX(240px)';
        });
    link4.addEventListener("mouseenter",
        (event) => {
            slider.style.transform='translateX(360px)';
        });
    link5.addEventListener("mouseenter",
        (event) => {
            slider.style.transform='translateX(480px)';
        });
    link1.addEventListener("mouseleave",(event) => {
        slider.style.transform='translateX('+defaultpos+'px)';
    });
    link2.addEventListener("mouseleave",(event) => {
        slider.style.transform='translateX('+defaultpos+'px)';
    });
    link3.addEventListener("mouseleave",(event) => {
        slider.style.transform='translateX('+defaultpos+'px)';
    });
    link4.addEventListener("mouseleave",(event) => {
        slider.style.transform='translateX('+defaultpos+'px)';
    });
    link5.addEventListener("mouseleave",(event) => {
        slider.style.transform='translateX('+defaultpos+'px)';
    });
    link1.addEventListener("click",(event) => {
        defaultpos=0;
        page=1;
        loadPage1();
    });
    link2.addEventListener("click",(event) => {
        defaultpos=120;
        page=2;
        loadPage2();
    });
    link3.addEventListener("click",(event) => {
        defaultpos=240;
        page=3;
        loadPage3();
    });
    link4.addEventListener("click",(event) => {
        defaultpos=360;
        page=4;
        loadPage4();
    });
    link5.addEventListener("click",(event) => {
        defaultpos=480;
        page=5;
        loadPage5();
    });
});
/*
function load(){
    var url="http://localhost:8080/api/v1.0.0/news?page="+page;
    var request=new XMLHttpRequest();
    request.open("GET",url);
    request.send();
    request.onreadystatechange=function () {
        if(request.readyState===4){
            if(request.status===200){
                var data=JSON.parse(request.responseText);
                var news=document.getElementById("news");
                var newslist=news.getElementsByClassName("newslist")[0];
                var newslistul=newslist.getElementsByTagName("ul")[0];
                var newslistli=newslistul.getElementsByTagName("li");
                for(var i=0;i<newslistli.length;i++){
                    newslistul.removeChild(newslistli[i]);
                }
                for(var i=0;i<data.length;i++){
                    var li=document.createElement("li");
                    var a=document.createElement("a");
                    a.href="http://localhost:8080/news/"+data[i].id;
                    a.innerHTML=data[i].title;
                    li.appendChild(a);
                    newslistul.appendChild(li);
                }
            }
        }
    }
}*/
function loadPage1(){
    console.log("Loading Page1");
    clearall();
    Link1Display.style.display="unset";
}
function loadPage2(){
    console.log("Loading Page2");
    clearall();
    Link2Display.style.display="unset";
    initializeCourseSelectPage();
}
function loadPage3(){
    console.log("Loading Page3");
    clearall();
    Link3Display.style.display="unset";
}
function loadPage4(){
    console.log("Loading Page4");
    clearall();
    Link4Display.style.display="unset";
}
function loadPage5(){
    console.log("Loading Page5");
    clearall();
    Link5Display.style.display="unset";
}
function clearall(){
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}
function initializeCourseSelectPage(){
    //到时候处理请求逻辑
    const responce={
        "Body":{
            "CourseList":[
                {
                    "CourseName":"高等数学",
                    "CourseId":"1",
                    "CourseTeacher":"张三",
                    "CourseTime":{
                        "day":1,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16
                    },
                    "CoursePlace":"教学楼A101"
                },
                {
                    "CourseName":"大学物理",
                    "CourseId":"2",
                    "CourseTeacher":"张三",
                    "CourseTime":{
                        "day":2,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16
                    },
                    "CoursePlace":"教学楼A101"
                },
                {
                    "CourseName":"线性代数",
                    "CourseId":"3",
                    "CourseTeacher":"张三",
                    "CourseTime":{
                        "day":1,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16
                    },
                    "CoursePlace":"教学楼A101"
                },
                {
                    "CourseName":"高等数学",
                    "CourseId":"4",
                    "CourseTeacher":"张三",
                    "CourseTime":{
                        "day":1,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16
                    },
                    "CoursePlace":"教学楼A101"
                },
                {
                    "CourseName":"高等数学",
                    "CourseId":"5",
                    "CourseTeacher":"张三",
                    "CourseTime":{
                        "day":1,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16
                    },
                    "CoursePlace":"教学楼A101"
                },
                {
                    "CourseName":"高等数学",
                    "CourseId":"6",
                    "CourseTeacher":"张三",
                    "CourseTime":{
                        "day":1,
                        "starttime":1,
                        "endtime":2,
                        "beginweek":1,
                        "endweek":16
                    },
                    "CoursePlace":"教学楼A101"
                }
            ]
        }
    }
    {
        const courseLists=responce.Body.CourseList;

        const CourseDisplay=document.getElementById("CourseList");
        //清除之前加载的选课信息
        while(CourseDisplay.firstChild){
        CourseDisplay.removeChild(CourseDisplay.firstChild);
    }
    //将新的选课信息加载到页面上
        courseLists.forEach((course)=>{
            const courseDiv=document.createElement("div");
            courseDiv.className="course";
            courseDiv.textContent=`
        课程名称: ${course.CourseName}
        课程ID: ${course.CourseId}
        授课教师: ${course.CourseTeacher}
        上课时间: 周${course.CourseTime.day} ${course.CourseTime.starttime}-${course.CourseTime.endtime}节
        上课周数: ${course.CourseTime.beginweek}-${course.CourseTime.endweek}周
        上课地点: ${course.CoursePlace}
      `;
            console.log(courseDiv);
            CourseDisplay.appendChild(courseDiv);
        });
    }
    
}