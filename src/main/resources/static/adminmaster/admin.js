
const main = document.querySelector("main");

const ClassBody = document.getElementById("ClassBody");
// const appliancesBody = document.getElementById("appliances");
const stuTable = document.getElementById("stuTable");
const popTitle = document.getElementById("popTitle");


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider2");
    const stuManage = document.getElementById("stuManage");
    const tsaManage = document.getElementById("tsaManage");
    const teaManage = document.getElementById("teaManage");

    //TODO:完成各个页面逻辑
    // stuManage.addEventListener("click", function () {
    //     slider.style.transform = 'translateX(0)';
    //     console.log("stuManage");
    // });
    // tsaManage.addEventListener("click", function () {
    //     slider.style.transform = 'translateX(118px)';
    //     console.log("tsaManage");
    // });
    // teaManage.addEventListener("click", function () {
    //     slider.style.transform = 'translateX(240px)';
    //     console.log("teaManage");
    // });

});


function clearAll() {
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}




//初始化课程表格
function initializeClassBody() {
    // while (ClassBody.hasChildNodes()) {
    //     ClassBody.removeChild(ClassBody.firstChild);
    // }
    // //在这里加一个foreach循环
    // {
    //     const table = document.createElement("tr");
    //     const classnum = document.createElement("td");
    //     classnum.innerHTML = "课程号";
    //     const classname = document.createElement("td");
    //     classname.innerHTML = "课程名";
    //     const credits = document.createElement("td");
    //     credits.innerHTML = "学分";
    //     const time = document.createElement("td");
    //     time.innerHTML = "学时";
    //     const teacher = document.createElement("td");
    //     teacher.innerHTML = "教师";
    //     const compulsory = document.createElement("td");
    //     compulsory.innerHTML = "是否必修";
    //     const action = document.createElement("td");
    //     const button1 = document.createElement("button");
    //     button1.className = "Button001";
    //     button1.innerHTML = "查看详情";

    //     button1.onclick = function () {
    //         //记得补充交互逻辑



    //     }
    //     action.appendChild(button1);
    //     table.appendChild(classnum);
    //     table.appendChild(classname);
    //     table.appendChild(credits);
    //     table.appendChild(time);
    //     table.appendChild(teacher);
    //     table.appendChild(compulsory);
    //     table.appendChild(action);
    //     ClassBody.appendChild(table);
    // }



}



//初始化申请表格
function initializeCheckBody() {

    // while (appliancesBody.hasChildNodes()) {
    //     appliancesBody.removeChild(appliancesBody.firstChild);
    // }
    // //在这里加一个foreach循环
    // {
    //     const table = document.createElement("tr");
    //     const applyID = document.createElement("td");
    //     applyID.innerHTML = "申请序号";
    //     const issue = document.createElement("td");
    //     issue.innerHTML = "申请事件";
    //     const applicant = document.createElement("td");
    //     applicant.innerHTML = "申请人";
    //     const time = document.createElement("td");
    //     time.innerHTML = "申请时间";
    //     const action = document.createElement("td");
    //     const button1 = document.createElement("button");
    //     button1.className = "Button001";
    //     button1.innerHTML = "查看详情";
    //     button1.onclick = function () {
    //         //记得补充交互逻辑


    //     }
    //     action.appendChild(button1);
    //     table.appendChild(applyID);
    //     table.appendChild(issue);
    //     table.appendChild(applicant);
    //     table.appendChild(time);
    //     table.appendChild(action);
    //     appliancesBody.appendChild(table);
    // }




}


//初始化学生表格
function initializeStuTable() {
    while (stuTable.hasChildNodes()) {
        stuTable.removeChild(stuTable.firstChild);
    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const stuid = document.createElement("td");
        stuid.innerHTML = "学号";
        const stuname = document.createElement("td");
        stuname.innerHTML = "姓名";
        const college = document.createElement("td");
        college.innerHTML = "学院";
        const major = document.createElement("td");
        major.innerHTML = "专业";
        const sex = document.createElement("td");
        sex.innerHTML = "性别";
        const phone = document.createElement("td");
        phone.innerHTML = "电话";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //TODO:记得补充交互逻辑
            popDiv(5, "学生详情");


        }
        action.appendChild(button1);
        table.appendChild(stuname);
        table.appendChild(stuid);
        table.appendChild(college);
        table.appendChild(major);
        table.appendChild(sex);
        table.appendChild(phone);

        table.appendChild(action);
        stuTable.appendChild(table);
    }

}

//初始化员工表格
function initializeStaTable() {
    const staTable = document.getElementById("staTable");
    while (staTable.hasChildNodes()) {
        staTable.removeChild(staTable.firstChild);
    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const name = document.createElement("td");
        name.innerHTML = "姓名";
        const id = document.createElement("td");
        id.innerHTML = "工号";
        const sex = document.createElement("td");
        sex.innerHTML = "性别";
        const phone = document.createElement("td");
        phone.innerHTML = "电话";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //记得补充交互逻辑
            popDiv(6, "职工详情");

        }
        action.appendChild(button1);
        table.appendChild(name);
        table.appendChild(id);
        table.appendChild(sex);
        table.appendChild(phone);
        table.appendChild(action);
        staTable.appendChild(table);

    }
}

//初始化教务表格
function initializetsaTable() {
    const tsaTable = document.getElementById("tsaTable");
    while (tsaTable.hasChildNodes()) {
        tsaTable.removeChild(tsaTable.firstChild);
    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const name = document.createElement("td");
        name.innerHTML = "姓名";
        const id = document.createElement("td");
        id.innerHTML = "工号";
        const phone = document.createElement("td");
        phone.innerHTML = "电话";
        const sex = document.createElement("td");
        sex.innerHTML = "性别";
        const college = document.createElement("td");
        college.innerHTML = "学院";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情,也许可以改成解绑?";
        button1.onclick = function () {
            //记得补充交互逻辑

        }

        action.appendChild(button1);
        table.appendChild(name);
        table.appendChild(id);
        table.appendChild(phone);
        table.appendChild(sex);
        table.appendChild(college);
        table.appendChild(action);
        tsaTable.appendChild(table);
    }
}

//初始化教师表格
function initializeTeaTable() {
    const teaTable = document.getElementById("teaTable");
    while (teaTable.hasChildNodes()) {
        teaTable.removeChild(teaTable.firstChild);
    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const name = document.createElement("td");
        name.innerHTML = "姓名";
        const id = document.createElement("td");
        id.innerHTML = "工号";
        const phone = document.createElement("td");
        phone.innerHTML = "电话";
        const sex = document.createElement("td");
        sex.innerHTML = "性别";
        const college = document.createElement("td");
        college.innerHTML = "学院";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情,也许可以改成解绑?";
        button1.onclick = function () {
            //记得补充交互逻辑

        }
        action.appendChild(button1);
        table.appendChild(name);
        table.appendChild(id);
        table.appendChild(phone);
        table.appendChild(sex);
        table.appendChild(college);
        table.appendChild(action);
        teaTable.appendChild(table);
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
function popDiv(page, title) {
    //清除弹出框内容
    const popMain = document.getElementById("popMain");
    const popTitle = document.getElementById("popTitle");
    const addStu = document.getElementById("addStu");
    const addSTA = document.getElementById("addSTA");
    const bindTSA = document.getElementById("bindTSA");
    const bindTEA = document.getElementById("bindTEA");
    const stuInfo = document.getElementById("stuInfo");
    const staInfo = document.getElementById("staInfo");

    // popMain.forEach((div) => {
    //     div.style = "display:none;";
    // });
    for (Object of popMain.children) {
        Object.style.display = "none";
    }

    switch (page) {
        case 1:
            popTitle.innerHTML = "添加学生";
            addStu.style.display = "unset";
            break;
        case 2:
            popTitle.innerHTML = "添加职工";
            addSTA.style.display = "unset";
            break;
        case 3:
            popTitle.innerHTML = "绑定教务身份";
            bindTSA.style.display = "unset";
            break;
        case 4:
            popTitle.innerHTML = "绑定教师身份";
            bindTEA.style.display = "unset";
            break;
        case 5:
            popTitle.innerHTML = "学生详情";
            stuInfo.style.display = "unset";

            break;
        case 6:
            popTitle.innerHTML = "职工详情";
            staInfo.style.display = "unset";
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        default:
            console.log("POPDIV:page Parameter Not Found");
            break;
    }
    // 获取div元素
    const popBox = document.getElementById("popDiv");
    // 控制两个div的显示与隐藏
    popBox.style.display = "block";
    document.body.classList.add('popup-active');
}

function closePop() {
    // 获取弹出窗口元素
    let popDiv = document.getElementById("popDiv");
    popDiv.style.display = "none";
    document.body.classList.remove('popup-active');
}
//TODO:加上加载页面的逻辑和前后端交互
function LoadPage21() {
    const page21 = document.getElementById("stuManageDisplay");
    console.log("LoadPage21");
    clearPage2();
    page21.style.display = "unset";
    editPageParm2(1);

    initializeStuTable();

}
//TODO:加上加载页面的逻辑和前后端交互

function LoadPage22() {
    initializeStaTable();
    const page22 = document.getElementById("staManageDisplay");
    console.log("LoadPage22");
    clearPage2();
    page22.style.display = "unset";
    editPageParm2(2);



}
//TODO:加上加载页面的逻辑和前后端交互

function LoadPage23() {
    initializetsaTable();
    const page23 = document.getElementById("tsaManageDisplay");
    console.log("LoadPage23");
    clearPage2();
    page23.style.display = "unset";
    editPageParm2(3);


}
//TODO:加上加载页面的逻辑和前后端交互
function LoadPage24() {
    initializeTeaTable();
    const page24 = document.getElementById("teaManageDisplay");
    console.log("LoadPage24");
    clearPage2();
    page24.style.display = "unset";
    editPageParm2(4);


}
function clearPage2() {
    const Link2Display = document.getElementById("Link2Display");
    for (Object of Link2Display.children) {
        Object.style.display = "none";
    }
}

function editPageParm2(pagenum) {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    let accountpage = params.get('accm');
    if (accountpage === pagenum.toString())
        return;
    params.delete('accm');
    params.set('accm', pagenum);
    const newUrl = url.href;
    //window.location.href = newUrl;
    history.pushState({}, '', newUrl);//设置参数但是不刷新页面
}
function pahsePageParm2() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    let accountpage = params.get('accm');
    if (accountpage === null) {
        LoadPage21();
        return;
    }
    switch (accountpage) {
        case "1":
            LoadPage21();
            break;
        case "2":
            LoadPage22();
            break;
        case "3":
            LoadPage23();
            break;
        case "4":
            LoadPage24();
            break;
        default:
            LoadPage21();
            break;
    }
}

function initcourseMangeTasble() {
    const courseManageTable = document.getElementById("courseTable");
    while (courseManageTable.hasChildNodes()) {
        courseManageTable.removeChild(courseManageTable.firstChild);
    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const classid = document.createElement("td");
        classid.innerHTML = "课程号";
        const classname = document.createElement("td");
        classname.innerHTML = "课程名";
        const credits = document.createElement("td");
        credits.innerHTML = "课程备注";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //记得补充交互逻辑

        }
        action.appendChild(button1);
        table.appendChild(classid);
        table.appendChild(classname);
        table.appendChild(credits);
        table.appendChild(action);
        courseManageTable.appendChild(table);


    }
}
function editPageParm4(pagenum) {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    let accountpage = params.get('acam');
    if (accountpage === pagenum.toString())
        return;
    params.delete('acam');
    params.set('acam', pagenum);
    const newUrl = url.href;
    //window.location.href = newUrl;
    history.pushState({}, '', newUrl);//设置参数但是不刷新页面
}
function pahsePageParm4() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    let accountpage = params.get('acam');
    if (accountpage === null) {
        LoadPage41();
        return;
    }
    switch (accountpage) {
        case "1":
            LoadPage41();
            break;
        case "2":
            LoadPage42();
            break;
        default:
            LoadPage41();
            break;
    }
}

function LoadPage41() {
    console.log("LoadPage41");
    editPageParm4(1);
    initCollManTable();
    const page41 = document.getElementById("collAdmin");
    const page42 = document.getElementById("majorAdmin");
    page41.style.display = "unset";
    page42.style.display = "none";


}
function LoadPage42() {
    console.log("LoadPage42");
    editPageParm4(2);

    initMajorManTable();

    const page41 = document.getElementById("collAdmin");
    const page42 = document.getElementById("majorAdmin");
    page41.style.display = "none";
    page42.style.display = "unset";


}

function initCollManTable() {
    const collManTable = document.getElementById("collAdminTable");
    while (collManTable.hasChildNodes()) {
        collManTable.removeChild(collManTable.firstChild);
    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const collid = document.createElement("td");
        collid.innerHTML = "学院号";
        const collname = document.createElement("td");
        collname.innerHTML = "学院名";
        const admin = document.createElement("td");
        admin.innerHTML = "学院负责人";
        const appendx = document.createElement("td");
        appendx.innerHTML = "备注";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //记得补充交互逻辑

        }
        action.appendChild(button1);
        table.appendChild(collid);
        table.appendChild(collname);
        table.appendChild(admin);
        table.appendChild(appendx);
        table.appendChild(action);
        collManTable.appendChild(table);
    }
}


function initMajorManTable() {
    const majorManTable = document.getElementById("majorAdminTable");
    while (majorManTable.hasChildNodes()) {
        majorManTable.removeChild(majorManTable.firstChild);

    }
    //TODO:在这里加一个foreach循环
    {
        const table = document.createElement("tr");
        const majorid = document.createElement("td");
        majorid.innerHTML = "专业号";
        const majorname = document.createElement("td");
        majorname.innerHTML = "专业名";
        const belong = document.createElement("td");
        belong.innerHTML = "所属学院";
        const admin = document.createElement("td");
        admin.innerHTML = "专业负责人";
        const appendx = document.createElement("td");
        appendx.innerHTML = "备注";
        const action = document.createElement("td");
        const button1 = document.createElement("button");
        button1.className = "Button001";
        button1.innerHTML = "查看详情";
        button1.onclick = function () {
            //记得补充交互逻辑

        }
        action.appendChild(button1);
        table.appendChild(majorid);
        table.appendChild(majorname);
        table.appendChild(belong);
        table.appendChild(admin);
        table.appendChild(appendx);
        table.appendChild(action);
        majorManTable.appendChild(table);

    }
}


//加载页面是执行的函数
function loadPage1() {

}
function loadPage2() {
    pahsePageParm2();

}
function loadPage3() {

    initcourseMangeTasble();

}
function loadPage4() {
    pahsePageParm4();


}
function loadPage5() {

}
//第一次加载
function firstload() {
    popDiv();
}
function addStudent() {
    const addForm = document.getElementById("addStu");
    addForm.style.display = "unset";
}