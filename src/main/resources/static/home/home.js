let page=1;
let slider;
let defaultpos = 0;//slider默认位置
const main = document.querySelector("main");
const Link1Display = document.getElementById("Link1Display");
const Link2Display = document.getElementById("Link2Display");
const Link3Display = document.getElementById("Link3Display");
const Link4Display = document.getElementById("Link4Display");
const Link5Display = document.getElementById("Link5Display");
var advancedsearch=true;
document.addEventListener("DOMContentLoaded", function () {
    slider = document.getElementById("slider1");
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
    link1.addEventListener("click", (event) => {
        loadPage1();
    });
    link2.addEventListener("click", (event) => {
        loadPage2();
    });
    link3.addEventListener("click", (event) => {
        loadPage3();
    });
    link4.addEventListener("click", (event) => {
        loadPage4();
    });
    link5.addEventListener("click", (event) => {
        loadPage5();
    });
    document.getElementById("advancedSearch").addEventListener("click",(event) => {
        if(advancedsearch){
            document.getElementById("advSear").style.display="flex";
            advancedsearch=false;
        }
        else{
            document.getElementById("advSear").style.display="none";
            advancedsearch=true;
        }
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
    defaultpos = 0;
    page = 1;
    slider.style.transform = 'translateX(' + defaultpos + 'px)';
    clearAll();
    Link1Display.style.display="unset";
    setPageParams(1);
}
function loadPage2(){
    console.log("Loading Page2");
    defaultpos = 120;
    page = 2;
    slider.style.transform = 'translateX(' + defaultpos + 'px)';
    clearAll();
    Link2Display.style.display="unset";
    initializeCourseSelectPage();
    setPageParams(2);
}
function loadPage3(){
    console.log("Loading Page3");
    defaultpos = 240;
    page = 3;
    slider.style.transform = 'translateX(' + defaultpos + 'px)';
    clearAll();
    Link3Display.style.display="unset";
    setPageParams(3);
}
function loadPage4(){
    console.log("Loading Page4");
    defaultpos = 360;
    page = 4;
    slider.style.transform = 'translateX(' + defaultpos + 'px)';
    clearAll();
    Link4Display.style.display="unset";
    setPageParams(4);
}
function loadPage5(){
    console.log("Loading Page5");
    defaultpos = 480;
    page = 5;
    slider.style.transform = 'translateX(' + defaultpos + 'px)';
    clearAll();
    Link5Display.style.display="unset";
    setPageParams(5);
}
function clearAll(){
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
                    "status":{
                        "selected":true,
                        "selectednum":1,
                        "maxnum":50
                    },
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
                    "status":{
                        "selected":false,
                        "selectednum":1,
                        "maxnum":50
                    },
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
                    "status":{
                        "selected":true,
                        "selectednum":1,
                        "maxnum":50
                    },
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
                    "status":{
                        "selected":false,
                        "selectednum":1,
                        "maxnum":50
                    },
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
                    "status":{
                        "selected":true,
                        "selectednum":1,
                        "maxnum":50
                    },
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
                    "status":{
                        "selected":false,
                        "selectednum":1,
                        "maxnum":50
                    },
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
            const courseName=document.createElement("h3");
            courseName.textContent=course.CourseName;
            const courseInfo=document.createElement("p");
            const stuNum=document.createElement("p");
            const selectbutton = document.createElement("button");
            selectbutton.textContent="选课";
            if(course.status.selected){

                selectbutton.style.backgroundColor="red";
                selectbutton.textContent="退课";
            }            
            stuNum.textContent=`已选人数: ${course.status.selectednum}/${course.status.maxnum}`;
            stuNum.style="color:gray;";
            selectbutton.onclick=function(){
                //这里记得补上交互逻辑
                
                


                if(course.status.selected){
                    //如果请求成功


                    alert("课程ID"+course.CourseId+"退课成功");
                    course.status.selected=false;
                    console.log(selectbutton.textContent);
                    selectbutton.textContent="选课";
                    stuNum.textContent=`已选人数: ${course.status.selectednum-1}/${course.status.maxnum}`;
                    selectbutton.style.backgroundColor="#f1c40f";
                }else{
                    //如果请求成功
                    
                    //定义一个查询指定课程的接口
                    selectbutton.style.backgroundColor="red";
                    course.status.selected=true;
                    selectbutton.textContent="退课";
                    stuNum.textContent=`已选人数: ${course.status.selectednum+1}/${course.status.maxnum}`;
                alert("课程ID"+course.CourseId+"选课成功");
                }
            }
            courseInfo.textContent=`
        课程ID: ${course.CourseId}
        授课教师: ${course.CourseTeacher}
        上课时间: 周${course.CourseTime.day} ${course.CourseTime.starttime}-${course.CourseTime.endtime}节
        上课周数: ${course.CourseTime.beginweek}-${course.CourseTime.endweek}周
        上课地点: ${course.CoursePlace}
      `;

            courseDiv.appendChild(courseName);
            courseDiv.appendChild(courseInfo);
            courseDiv.appendChild(selectbutton);
            courseDiv.appendChild(stuNum);
            console.log(courseDiv);
            CourseDisplay.appendChild(courseDiv);
        });
    }
    
}
function setPageParams(param){
    const url= new URL(window.location.href);
    const searchParams=url.searchParams;
    if(searchParams.get('Page')===param.toString())
        return;
    searchParams.delete('Page');
    searchParams.set('Page',param);
    const newUrl=url.href;
    //window.location.href = newUrl;
    history.pushState({}, '', newUrl);
}
function getPageParams(){
    const url= new URL(window.location.href);
    const searchParams=url.searchParams;
    var page1=searchParams.get('Page');
    if(page1===null)
    {
        popDiv();
        //这里可以加上第一次加载页面的逻辑






        setPageParams(1);
        page=1;
        return 1;
    }
    else if(page1>0&&page1<6)
    {
        page=page1;
        return page1;
    }
    else
    {
        page=1;
        return 1;
    }

}