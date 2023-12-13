


const main = document.querySelector("main");

/*
document.getElementById("test").addEventListener("click", (event) => {
    event.preventDefault();
    // 获取当前页面的URL
    var currentUrl = window.location.href;

    // 添加参数到查询字符串
    var newUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'param1=value1&param2=value2';
    // 更新页面URL
    var url = new URL(currentUrl);
    var params = url.searchParams;
    params.delete('param1');
    params.set('param1', 'value1');
    params.set('param1', 'value2');
    var newUrl = url.toString();
    window.location.href = newUrl;
});
*/
const ClassBody = document.getElementById("ClassBody");
const appliancesBody = document.getElementById("appliances");
const stuTable = document.getElementById("stuTable");
const popTitle = document.getElementById("popTitle");


function clearAll() {
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}




//初始化课程表格
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
    const teacher=document.createElement("td");
    teacher.innerHTML="教师";
    const compulsory=document.createElement("td");
    compulsory.innerHTML="是否必修";
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
    table.appendChild(teacher);
    table.appendChild(compulsory);
    table.appendChild(action);
    ClassBody.appendChild(table);
    }

    

}



//初始化申请表格
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
        button1.innerHTML = "查看详情";
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


//初始化学生表格

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


//清除弹出框内容
function clearPop(){
    const popMain = document.getElementById("popMain");
    while(popMain.hasChildNodes())
    {
        popMain.removeChild(popMain.firstChild);
    }
    popTitle.innerHTML="NULL";
}


//设置页面参数

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

//获取页面参数

function loadPage1(){

}
function loadPage2(){

    initializeClassBody();

}
function loadPage3(){

    initializeCheckBody();

}
function loadPage4(){

    initializeStuTable();

}
function loadPage5(){

}
function firstload() {
    popDiv();
}