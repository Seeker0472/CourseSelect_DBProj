var page=1;
const main = document.querySelector("main");
const Link1Display = document.getElementById("Link1Display");
const Link2Display = document.getElementById("Link2Display");
const Link3Display = document.getElementById("Link3Display");
const Link4Display = document.getElementById("Link4Display");
const Link5Display = document.getElementById("Link5Display");
const ClassBody = document.getElementById("ClassBody");
const appliancesBody = document.getElementById("appliances");
const stuTable = document.getElementById("stuTable");
const popTitle = document.getElementById("popTitle");
document.addEventListener("DOMContentLoaded", function () {
    var defaultpos = 0;
    switch (page) {
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
            slider.style.transform = 'translateX(0)';
        });
    link2.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX(120px)';
        });
    link3.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX(240px)';
        });
    link4.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX(360px)';
        });
    link5.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX(480px)';
        });
    link1.addEventListener("mouseleave", (event) => {
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
    });
    link2.addEventListener("mouseleave", (event) => {
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
    });
    link3.addEventListener("mouseleave", (event) => {
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
    });
    link4.addEventListener("mouseleave", (event) => {
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
    });
    link5.addEventListener("mouseleave", (event) => {
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
    });
    link1.addEventListener("click", (event) => {
        defaultpos = 0;
        page = 1;
        loadPage1();
    });
    link2.addEventListener("click", (event) => {
        defaultpos = 120;
        page = 2;
        loadPage2();
    });
    link3.addEventListener("click", (event) => {
        defaultpos = 240;
        page = 3;
        loadPage3();
    });
    link4.addEventListener("click", (event) => {
        defaultpos = 360;
        page = 4;
        loadPage4();
    });
    link5.addEventListener("click", (event) => {
        defaultpos = 480;
        page = 5;
        loadPage5();
    });
});
function loadPage1(){
    console.log("Loading Page1");
    clearAll();
    Link1Display.style.display="unset";
}
function loadPage2(){
    console.log("Loading Page2");
    clearAll();
    Link2Display.style.display="unset";
    initializeClassBody();
}
function loadPage3(){
    console.log("Loading Page3");
    clearAll();
    Link3Display.style.display="unset";
    initializeCheckBody();
}
function loadPage4(){
    console.log("Loading Page4");
    clearAll();
    Link4Display.style.display="unset";
    initializeStuTable();
}
function loadPage5(){
    console.log("Loading Page5");
    clearAll();
    Link5Display.style.display="unset";
}
function clearAll() {
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}
function popDiv(){
    // 获取div元素
    const popBox = document.getElementById("popDiv");
    // 控制两个div的显示与隐藏
    popBox.style.display = "block";
}

function closePop(){
    // 获取弹出窗口元素
    let popDiv = document.getElementById("popDiv");
    popDiv.style.display = "none";
}
function initializeClassBody()
{
    while(ClassBody.hasChildNodes())
    {
        ClassBody.removeChild(ClassBody.firstChild);
    }
    //在这里加一个foreach循环
    {
    const table=document.createElement("tr");
    const classnum=document.createElement("td");
    classnum.innerHTML="课程号";
    const classname=document.createElement("td");
    classname.innerHTML="课程名";
    const credits=document.createElement("td");
    credits.innerHTML="学分";
    const time=document.createElement("td");
    time.innerHTML="学时";
    const action=document.createElement("td");
    const button1=document.createElement("button");
    button1.className="Button001";
    button1.innerHTML="查看详情";
    button1.onclick=function(){
        //记得补充交互逻辑



    }
    action.appendChild(button1);
    table.appendChild(classnum);
    table.appendChild(classname);
    table.appendChild(credits);
    table.appendChild(time);
    table.appendChild(action);
ClassBody.appendChild(table);
    }

    

}
function initializeCheckBody() {
    
    while (appliancesBody.hasChildNodes()) {
        appliancesBody.removeChild(appliancesBody.firstChild);
    }
    //在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const applyID = document.createElement("td");
        applyID.innerHTML = "申请序号";
        const issue = document.createElement("td");
        issue.innerHTML = "申请事件";
        const applicant = document.createElement("td");
        applicant.innerHTML = "申请人";
        const time = document.createElement("td");
        time.innerHTML = "申请时间";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className="Button001";
        button1.innerHTML = "操作";
        button1.onclick = function () {
            //记得补充交互逻辑


        }
        action.appendChild(button1);
        table.appendChild(applyID);
        table.appendChild(issue);
        table.appendChild(applicant);
        table.appendChild(time);
        table.appendChild(action);
        appliancesBody.appendChild(table);
    }
    
    
    
    
}

function initializeStuTable()
{
    while(stuTable.hasChildNodes())
    {
        stuTable.removeChild(stuTable.firstChild);
    }
    //在这里加一个foreach循环
    {
    const table=document.createElement("tr");
    const stuid=document.createElement("td");
    stuid.innerHTML="学号";
    const stuname=document.createElement("td");
    stuname.innerHTML="姓名";
    const enrollTime=document.createElement("td");
    enrollTime.innerHTML="入学时间";
    const college=document.createElement("td");
    college.innerHTML="学院";
    const action=document.createElement("td");
    const button1=document.createElement("button");
        button1.className="Button001";
    button1.innerHTML="查看详情";
    button1.onclick=function() {
        //记得补充交互逻辑


    }
    action.appendChild(button1);
    table.appendChild(stuname);
    table.appendChild(stuid);
    table.appendChild(enrollTime);
    table.appendChild(college);
    table.appendChild(action);
stuTable.appendChild(table);
    }
    
}
function clearPop(){
    const popMain = document.getElementById("popMain");
    while(popMain.hasChildNodes())
    {
        popMain.removeChild(popMain.firstChild);
    }
    popTitle.innerHTML="NULL";
}
