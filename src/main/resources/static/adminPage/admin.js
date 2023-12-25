
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
function initializeClassBody() {
    while (ClassBody.hasChildNodes()) {
        ClassBody.removeChild(ClassBody.firstChild);
    }
    //TODO:等后端完成之后在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const classnum = document.createElement("td");
        classnum.innerHTML = "课程号";
        const classname = document.createElement("td");
        classname.innerHTML = "课程名";
        const credits = document.createElement("td");
        credits.innerHTML = "学分";
        const teacherId = document.createElement("td");
        teacherId.innerHTML = "教师编号";
        const teacherName = document.createElement("td");
        teacherName.innerHTML = "教师";
        const TargetMajor = document.createElement("td");
        TargetMajor.innerHTML = "面向专业";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";

        const button2 = document.createElement("button");
        button2.innerHTML = "删除课程";
        const button3 = document.createElement("button");
        button3.innerHTML = "修改信息";

        //Test
        button1.onclick = function () {
            popDiv(2);
        }
        button2.onclick = function () {
            //记得补充交互逻辑
        }
        button3.onclick = function () {
            popDiv(3);

        }
        action.appendChild(button1);
        action.appendChild(button2);
        action.appendChild(button3);
        table.appendChild(classnum);
        table.appendChild(classname);
        table.appendChild(credits);
        table.appendChild(teacherId);
        table.appendChild(teacherName);
        table.appendChild(TargetMajor);
        table.appendChild(action);
        ClassBody.appendChild(table);
    }



}


//TODO:修改为选课管理表格逻辑
//初始化申请表格
function initializeCheckBody() {

    while (appliancesBody.hasChildNodes()) {
        appliancesBody.removeChild(appliancesBody.firstChild);
    }
    //TODO:等后端完成之后在这里加一个foreach循环
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
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //TODO:记得补充交互逻辑
            popDiv(4);


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
function initializeStuTable() {
    while (stuTable.hasChildNodes()) {
        stuTable.removeChild(stuTable.firstChild);
    }
    //TODO:等后端完成之后在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const stuid = document.createElement("td");
        stuid.innerHTML = "学号";
        const stuname = document.createElement("td");
        stuname.innerHTML = "姓名";
        const enrollTime = document.createElement("td");
        enrollTime.innerHTML = "入学时间";
        const college = document.createElement("td");
        college.innerHTML = "学院";
        const major = document.createElement("td");
        major.innerHTML = "专业";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //记得补充交互逻辑
            popDiv(5);


        }
        action.appendChild(button1);
        table.appendChild(stuname);
        table.appendChild(stuid);
        table.appendChild(enrollTime);
        table.appendChild(college);
        table.appendChild(major);
        table.appendChild(action);
        stuTable.appendChild(table);
    }

}


//清除弹出框内容
function clearPop() {
    const popMain = document.getElementById("popMain");
    while (popMain.hasChildNodes()) {
        popMain.removeChild(popMain.firstChild);
    }
    popTitle.innerHTML = "NULL";
}




//弹出窗口
function popDiv(page) {
    // 获取div元素
    const popBox = document.getElementById("popDiv");
    const popMain = document.getElementById("popMain");
    const addCourse = document.getElementById("addCourse");
    const showDetail = document.getElementById("showDetail");
    const editInfo = document.getElementById("editInfo");
    const applyCheck = document.getElementById("applyCheck");
    const stuInfo = document.getElementById("stuInfo");

    for (Object of popMain.children) {
        Object.style = "display:none;";
    }
    switch (page) {
        case 1:
            popTitle.innerHTML = "添加课程";
            addCourse.style = "display:block;";
            break;
        case 2:
            popTitle.innerHTML = "课程详情";
            showDetail.style = "display:block;";
            break;
        case 3:
            popTitle.innerHTML = "修改信息";
            editInfo.style = "display:block;";
            break;
        case 4:
            popTitle.innerHTML = "申请详细信息";
            applyCheck.style = "display:block;";
            break;
        case 5:
            popTitle.innerHTML = "学生详细信息";
            stuInfo.style = "display:block;";
            break;

    }

    // 控制两个div的显示与隐藏
    popBox.style.display = "block";
}

function closePop() {
    // 获取弹出窗口元素
    let popDiv = document.getElementById("popDiv");
    popDiv.style.display = "none";
}

function loadPage31() {
    editPageParam3(1);
    const Link3Display = document.getElementById("Link3Display");
    for (Object of Link3Display.children) {
        Object.style = "display:none;";
    }
    const Link31 = document.getElementById("Link31");
    Link31.style.display = "block"
}
function loadPage32() {
    initializeCheckBody();
    editPageParam3(2);
    const Link3Display = document.getElementById("Link3Display");
    for (Object of Link3Display.children) {
        Object.style = "display:none;";
    }
    const Link32 = document.getElementById("Link32");
    Link32.style.display = "block"
}

function editPageParam3(pagenum) {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const exparam = params.get("exparam");
    if (exparam === pagenum) {
        return;
    }
    params.delete("exparam");
    params.set("exparam", pagenum);
    const newUrl = url.href;
    history.pushState(null, null, newUrl);
}

function phasePageParam3() {
    const url = new URL(window.location.href);
    const exparam = url.searchParams.get("exparam");
    if (exparam === null) {
        loadPage31();
        return;
    }
    switch (exparam) {
        case "1":
            loadPage31();
            break;
        case "2":
            loadPage32();
            break;
    }

}
//加载页面是执行的函数
function loadPage1() {

}
function loadPage2() {

    initializeClassBody();

}
function loadPage3() {
    phasePageParam3();


}
function loadPage4() {

    initializeStuTable();

}
function loadPage5() {

}
//第一次加载
function firstload() {
    popDiv();
}