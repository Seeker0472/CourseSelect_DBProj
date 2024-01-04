// import { fetchWithAuth } from '../jwtRequest.js'

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

    document.getElementById("stuColll").onchange = function () { initaddMaj(); }//改变学院选择框
    document.getElementById("Bindidentity").onchange = function () {
        if (document.getElementById("Bindidentity").value === "3") {
            document.getElementById("BindidentityColl").style.display = "none";
            document.getElementById("BindidentityCollDes").style.display = "none";
        }
        else {
            document.getElementById("BindidentityColl").style.display = "unset";
            document.getElementById("BindidentityCollDes").style.display = "unset";
        }
    }
    document.getElementById("majColl").onchange = function () { getAllStaffForCollege(); }//改变学院选择框
    //完成各个页面逻辑
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


    {


        const url = window.location.href;
        const urlObj = new URL(url);
        const account = urlObj.searchParams.get('account');
        const identitySwitchContent = document.getElementById("identityDrop");
        const name = document.getElementById("userName");
        popDiv();
        let account_id = 'Adm';
        fetch("https://api.seekerer.com/api/admin/getIdentity?accountId=" + account, {
            method: 'GET'
        }).then(response => { return response.json(); })
            .then(response => {
                if (response.code === 200) {
                    response.data.forEach(element => {
                        name.innerHTML = element.name;
                        switch (element.identity) {
                            case '1':
                                //学生,目前应该不会出现这种情况
                                break;
                            case '2':
                                let identity = document.createElement("a");
                                identity.innerHTML = element.college_name + "的教务管理员";
                                identity.href = "/adminPage/admin.html?account=" + element.account_id + "&college=" + element.college_id;
                                identitySwitchContent.appendChild(identity);
                                //教务管理员
                                break;
                            case '3':
                                //管理员
                                let identity1 = document.createElement("a");
                                identity1.innerHTML = "管理员";
                                identity1.href = "/adminmaster/admin.html?account=" + element.account_id;
                                identitySwitchContent.appendChild(identity1);
                                break;
                            case '4':
                                //教师,目前不跳转
                                let identity2 = document.createElement("a");
                                identity2.innerHTML = element.college_name + "的教师";
                                identitySwitchContent.appendChild(identity2);

                                break;
                        }
                    });

                }
            });

    }


});


function clearAll() {
    //const main = document.querySelector("main");
    const alldiv = document.querySelectorAll('main > div');
    alldiv.forEach((div) => {
        div.style = "display:none;";
    });
}

function getAllStaffForCollege() {
    let college = document.getElementById("majColl").value;
    fetchWithAuth("https://api.seekerer.com/api/admin/getSepStaff?ColId=" + college, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            console.log(response);
            if (response.code === 200) {
                const admin = document.getElementById("majAdmin");
                while (admin.hasChildNodes()) {
                    admin.removeChild(admin.firstChild);
                }
                response.data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerHTML = element.name;
                    option.value = element.account_id;
                    admin.appendChild(option);
                });
            }
            else {
                alert("获取职工列表失败");
            }
        });
}

//初始化学生表格
function initializeStuTable() {
    while (stuTable.hasChildNodes()) {
        stuTable.removeChild(stuTable.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/admin/getAllStuInfo", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (stuTable.hasChildNodes()) {
                stuTable.removeChild(stuTable.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const stuid = document.createElement("td");
                stuid.innerHTML = element.account_id;
                const stuname = document.createElement("td");
                stuname.innerHTML = element.student_name;
                const college = document.createElement("td");
                college.innerHTML = element.college_name;
                const major = document.createElement("td");
                major.innerHTML = element.major_name;
                const sex = document.createElement("td");
                sex.innerHTML = element.gender;
                const phone = document.createElement("td");
                phone.innerHTML = element.phone;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                const button2 = document.createElement("button");
                button1.className = "ButtonEdit";
                button1.innerHTML = "修改学生信息";
                button2.innerHTML = "删除学生";
                button2.className = "ButtonDelete";
                let account_id = element.account_id;
                button1.onclick = function () {
                    popDiv(5, "学生详情");
                    updateStuInfo(account_id);


                }
                button2.onclick = function () {
                    //记得补充交互逻辑
                    // window.alert("功能正在开发中");
                    if (window.confirm("确定要删除嘛"))
                        deleteStu(account_id);

                }
                action.appendChild(button1);
                action.appendChild(button2);
                table.appendChild(stuname);
                table.appendChild(stuid);
                table.appendChild(college);
                table.appendChild(major);
                table.appendChild(sex);
                table.appendChild(phone);

                table.appendChild(action);
                stuTable.appendChild(table);
            });
        }
        );

}

function deleteStu(stuID) {
    fetchWithAuth("https://api.seekerer.com/api/admin/deleteStudent?account_id=" + stuID, {
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                alert("删除成功");
                initializeStuTable();
            }
            else {
                alert("删除失败");
            }
        });
}

//初始化单个学生详情
function updateStuInfo(stuId) {
    const UpstuInfo = document.getElementById("UpstuInfo");
    fetchWithAuth("https://api.seekerer.com/api/admin/getSepStuInfo?studentId=" + stuId, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取学生信息失败");
            const data = response.data;
            UpstuInfo.UpstuName.value = data.student_name;
            UpstuInfo.UpstuID.value = data.account_id;
            major_id = data.major_id;
            college_id = data.college_id;
            UpstuInfo.UpstuSex.value = data.gender;
            UpstuInfo.UpstuPhone.value = data.phone;
            UpstuInfo.UpstuEmail.value = data.email;
            UpstuInfo.UpentryYear.value = data.enrollment_time;
            return {
                major_id: major_id,
                college_id: college_id
            };

        }).then(Info => {
            fetchWithAuth('https://api.seekerer.com/api/admin/getCollegeList', {
                method: 'GET'
            })
                .then(response => { return response.json(); })
                .then(response => {
                    if (response.code !== 200)
                        throw new Error("获取学院列表失败");
                    const college = document.getElementById("UpstuColl");
                    while (college.hasChildNodes()) {
                        college.removeChild(college.firstChild);
                    }
                    response.data.forEach(element => {
                        const option = document.createElement("option");
                        option.innerHTML = element.college_name;
                        option.value = element.college_id;
                        if (element.college_id === Info.college_id)
                            option.selected = true;
                        college.appendChild(option);
                    });
                })

            getSepCol(Info.college_id, Info.major_id);
            document.getElementById("UpstuColl").onchange = function () { getSepCol(document.getElementById("UpstuColl").value); };




        })

}
//初始化单个学生详情的专业部分
function getSepCol(college_id, major_id) {
    fetchWithAuth('https://api.seekerer.com/api/admin/getSepMajorList?ColId=' + college_id, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取专业列表失败");
            const major = document.getElementById("UpstuMajor");
            while (major.hasChildNodes()) {
                major.removeChild(major.firstChild);
            }
            response.data.forEach(element => {
                const option = document.createElement("option");
                option.innerHTML = element.major_name;
                option.value = element.major_id;
                if (element.major_id === major_id)
                    option.selected = true;
                major.appendChild(option);
            });
        });
}


//初始化员工表格
function initializeStaTable() {
    const staTable = document.getElementById("staTable");
    while (staTable.hasChildNodes()) {
        staTable.removeChild(staTable.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/admin/getStaffInfo", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (staTable.hasChildNodes()) {
                staTable.removeChild(staTable.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const name = document.createElement("td");
                name.innerHTML = element.name;
                const id = document.createElement("td");
                id.innerHTML = element.account_id;
                const sex = document.createElement("td");
                sex.innerHTML = element.gender;
                const phone = document.createElement("td");
                phone.innerHTML = element.phone;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonAdd";
                button1.innerHTML = "绑定身份";
                button1.onclick = function () {
                    //记得补充交互逻辑
                    // popDiv(6, "职工详情");
                    popDiv(3, '绑定身份');
                    const bindIdenID = document.getElementById("bindIdenID");
                    bindIdenID.value = element.account_id;

                }
                const button2 = document.createElement("button");
                button2.className = "ButtonDelete";
                button2.innerHTML = "删除账号";
                button2.onclick = function () {
                    //记得补充交互逻辑
                    if (window.confirm("确定要删除嘛"))
                        delstaff(element.account_id);

                }
                const button3 = document.createElement("button");
                button3.className = "ButtonEdit";
                button3.innerHTML = "修改信息";
                let account_id = element.account_id;
                button3.onclick = function () {
                    //记得补充交互逻辑
                    // window.alert("功能正在开发中");
                    popDiv(6, "职工详情");
                    initUpStaffInfo(account_id);

                }

                action.appendChild(button1);
                action.appendChild(button3);
                action.appendChild(button2);
                table.appendChild(name);
                table.appendChild(id);
                table.appendChild(sex);
                table.appendChild(phone);
                table.appendChild(action);
                staTable.appendChild(table);

            })
        });
}

function delstaff(id) {
    fetchWithAuth("https://api.seekerer.com/api/acaadmin/deleteStaff?id=" + id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                alert("删除成功");
                initializeStaTable();
            }
            else {
                alert('删除失败:' + response.msg);
            }
        });

}

function initUpStaffInfo(account_id) {
    const UpStaffInfo = document.getElementById("UpStaffInfo");
    fetchWithAuth("https://api.seekerer.com/api/admin/getSepStaffInfo?accountId=" + account_id, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取职工信息失败");
            const data = response.data;
            UpStaffInfo.UpstaName.value = data.name;
            UpStaffInfo.UpstaID.value = data.account_id;
            UpStaffInfo.UpstaSex.value = data.gender;
            UpStaffInfo.UpstaPhone.value = data.phone;
            UpStaffInfo.UpstaEmail.value = data.email;


        })

}

//初始化教务表格
function initializetsaTable() {
    const tsaTable = document.getElementById("tsaTable");
    while (tsaTable.hasChildNodes()) {
        tsaTable.removeChild(tsaTable.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/admin/getAcaAdminInfo", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (tsaTable.hasChildNodes()) {
                tsaTable.removeChild(tsaTable.firstChild);
            }
            response.data.forEach(element => {
                let userid = element.account_id;
                const table = document.createElement("tr");
                const name = document.createElement("td");
                name.innerHTML = element.name;
                const id = document.createElement("td");
                id.innerHTML = element.account_id;
                const phone = document.createElement("td");
                phone.innerHTML = element.phone;
                const sex = document.createElement("td");
                sex.innerHTML = element.gender;
                const college = document.createElement("td");
                college.innerHTML = element.college_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonDelete";
                button1.innerHTML = "解绑教务身份";
                button1.onclick = function () {
                    if (window.confirm("确定要解绑嘛"))
                        unBindTSA(element.account_id, element.college_id);


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
            });
        });
}

function unBindTSA(userid, collegeid) {
    fetchWithAuth("https://api.seekerer.com/api/admin/unbindTAdmin?account_id=" + userid + "&college_id=" + collegeid, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                alert("解绑成功");
                initializetsaTable();
            }
            else {
                alert("解绑失败");
            }
        });

}

//初始化教师表格
function initializeTeaTable() {
    const teaTable = document.getElementById("teaTable");
    while (teaTable.hasChildNodes()) {
        teaTable.removeChild(teaTable.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/admin/getTeacherInfo", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (teaTable.hasChildNodes()) {
                teaTable.removeChild(teaTable.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const name = document.createElement("td");
                name.innerHTML = element.name;
                const id = document.createElement("td");
                id.innerHTML = element.account_id;
                const phone = document.createElement("td");
                phone.innerHTML = element.phone;
                const sex = document.createElement("td");
                sex.innerHTML = element.gender;
                const college = document.createElement("td");
                college.innerHTML = element.college_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonDelete";
                button1.innerHTML = "解绑教师身份";
                button1.onclick = function () {
                    //记得补充交互逻辑
                    if (window.confirm("确定要解绑嘛"))
                        unbindTeacher(element.account_id, element.college_id);
                }
                action.appendChild(button1);
                table.appendChild(name);
                table.appendChild(id);
                table.appendChild(phone);
                table.appendChild(sex);
                table.appendChild(college);
                table.appendChild(action);
                teaTable.appendChild(table);
            });
        });

}

function unbindTeacher(userid, collegeid) {
    fetchWithAuth("https://api.seekerer.com/api/admin/unbindTeacher?account_id=" + userid + "&college_id=" + collegeid, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                alert("解绑成功");
                initializeTeaTable();
            }
            else {
                alert("解绑失败");
            }
        });
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
    const addCol = document.getElementById("addCol");
    const addMaj = document.getElementById("addMaj");
    const editCollInfo = document.getElementById("editCollInfo");
    const UpMajorInfo = document.getElementById("UpMajorInfo");
    const addCourseCategory = document.getElementById("addCourseCategory");
    const editCourseCatInfo = document.getElementById("editCourseCatInfo");

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
            initaddStu();
            break;
        case 2:
            popTitle.innerHTML = "添加职工";
            addSTA.style.display = "unset";
            break;
        case 3:
            popTitle.innerHTML = "绑定身份";
            bindTSA.style.display = "unset";
            initbindIdenColl();
            break;
        case 4:
            //unsed
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
            popTitle.innerHTML = "添加学院";
            addCol.style.display = "unset";
            initaddCol();
            break;
        case 8:
            popTitle.innerHTML = "添加专业";
            addMaj.style.display = "unset";
            initAddMajor();
            break;
        case 9:
            popTitle.innerHTML = "学院信息";
            editCollInfo.style.display = "unset";
            break;
        case 10:
            popTitle.innerHTML = "修改专业信息";
            UpMajorInfo.style.display = "unset";
            break;
        case 11:
            popTitle.innerHTML = "添加课程类别";
            addCourseCategory.style.display = "unset";
            break;
        case 12:
            popTitle.innerHTML = "修改课程类别";
            editCourseCatInfo.style.display = "unset";
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
//添加专业,初始化学院列表
function initAddMajor() {
    fetchWithAuth('https://api.seekerer.com/api/admin/getCollegeList', {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {

                const college = document.getElementById("majColl");
                while (college.hasChildNodes()) {
                    college.removeChild(college.firstChild);
                }
                response.data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerHTML = element.college_name;
                    option.value = element.college_id;
                    college.appendChild(option);
                });
                // initaddMaj();
                getAllStaffForCollege();
            }
        });
}
//添加添加学院,初始化职工列表
function initaddCol() {
    fetchWithAuth("https://api.seekerer.com/api/admin/getEmptyStaff", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                const admin = document.getElementById("colAdmin");
                while (admin.hasChildNodes()) {
                    admin.removeChild(admin.firstChild);
                }
                response.data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerHTML = element.name;
                    option.value = element.account_id;
                    admin.appendChild(option);
                });
            }
            else {
                alert("获取职工列表失败");
            }
        });
}

//添加学生,初始化学院列表
function initaddStu() {
    fetchWithAuth('https://api.seekerer.com/api/admin/getCollegeList', {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {

                const college = document.getElementById("stuColll");
                while (college.hasChildNodes()) {
                    college.removeChild(college.firstChild);
                }
                response.data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerHTML = element.college_name;
                    option.value = element.college_id;
                    college.appendChild(option);
                });
                initaddMaj();
            }
            else {
                alert("获取学院列表失败");
            }
        });

}

//添加学生,初始化学院列表
function initaddMaj() {
    console.log("initaddMaj");
    let college = document.getElementById("stuColll").value;
    console.log(college);
    if (college === "") {
        return;
    }
    fetchWithAuth('https://api.seekerer.com/api/admin/getSepMajorList?ColId=' + college, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                const major = document.getElementById("stuMajorSel");
                while (major.hasChildNodes()) {
                    major.removeChild(major.firstChild);
                }
                response.data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerHTML = element.major_name;
                    option.value = element.major_id;
                    major.appendChild(option);
                });
            }
            else {
                alert("获取专业列表失败");
            }
        });


}

//初始化绑定省份页面,初始化学院列表
function initbindIdenColl() {
    fetchWithAuth('https://api.seekerer.com/api/admin/getCollegeList', {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {

                const college = document.getElementById("BindidentityColl");
                while (college.hasChildNodes()) {
                    college.removeChild(college.firstChild);
                }
                response.data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerHTML = element.college_name;
                    option.value = element.college_id;
                    college.appendChild(option);
                });
                //initaddMaj();
            }
            else {
                alert("获取学院列表失败");
            }
        });

}


function closePop() {
    // 获取弹出窗口元素
    let popDiv = document.getElementById("popDiv");
    popDiv.style.display = "none";
    document.body.classList.remove('popup-active');
}
function LoadPage21() {
    const page21 = document.getElementById("stuManageDisplay");
    console.log("LoadPage21");
    clearPage2();
    page21.style.display = "unset";
    editPageParm2(1);

    initializeStuTable();

}

function LoadPage22() {
    initializeStaTable();
    const page22 = document.getElementById("staManageDisplay");
    console.log("LoadPage22");
    clearPage2();
    page22.style.display = "unset";
    editPageParm2(2);



}

function LoadPage23() {
    initializetsaTable();
    const page23 = document.getElementById("tsaManageDisplay");
    console.log("LoadPage23");
    clearPage2();
    page23.style.display = "unset";
    editPageParm2(3);


}
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


    fetchWithAuth("https://api.seekerer.com/api/admin/getAllCourseCategories", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取课程列表失败");
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const classid = document.createElement("td");
                classid.innerHTML = element.category_id;
                const classname = document.createElement("td");
                classname.innerHTML = element.category_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonEdit";
                button1.innerHTML = "修改";
                let category_id = element.category_id;
                let category_name = element.category_name;
                button1.onclick = function () {
                    popDiv(12, "修改课程类别");
                    //记得补充交互逻辑
                    document.getElementById("UpCourseCatInfo").UpcourseCategoryID.value = category_id;
                    document.getElementById("UpCourseCatInfo").UpcourseCategoryName.value = category_name;

                }
                action.appendChild(button1);
                table.appendChild(classid);
                table.appendChild(classname);
                table.appendChild(action);
                courseManageTable.appendChild(table);


            });

        });
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

    fetchWithAuth('https://api.seekerer.com/api/admin/getCollegeList', {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                while (collManTable.hasChildNodes()) {
                    collManTable.removeChild(collManTable.firstChild);
                }
                console.log(response.data);
                response.data.forEach(element => {
                    const table = document.createElement("tr");
                    const collid = document.createElement("td");
                    collid.innerHTML = element.college_id;
                    const collname = document.createElement("td");
                    collname.innerHTML = element.college_name;
                    const admin = document.createElement("td");
                    admin.innerHTML = element.name;
                    const appendx = document.createElement("td");
                    appendx.innerHTML = element.remarks;
                    const action = document.createElement("td");
                    const button1 = document.createElement("button");
                    button1.className = "ButtonEdit";
                    button1.innerHTML = "修改学院信息";
                    let collId = element.college_id;
                    button1.onclick = function () {
                        popDiv(9, "学院信息");
                        initeditCollTable(collId);
                    }
                    // const button2 = document.createElement("button");
                    // button2.className = "Button001";
                    // button2.innerHTML = "修改学院信息";
                    // button2.onclick = function () {
                    // };
                    const button3 = document.createElement("button");
                    button3.className = "ButtonDelete";
                    button3.innerHTML = "删除学院";
                    button3.onclick = function () {
                        if (window.confirm("确定要删除该学院吗?"))
                            delCollege(element.college_id);
                    }
                    action.appendChild(button1);
                    // action.appendChild(button2);
                    action.appendChild(button3);
                    table.appendChild(collid);
                    table.appendChild(collname);
                    table.appendChild(admin);
                    table.appendChild(appendx);
                    table.appendChild(action);
                    collManTable.appendChild(table);
                });
            }
            else {
                alert("获取学院列表失败");
            }
        });
}

function delCollege(CollId) {
    fetchWithAuth("https://api.seekerer.com/api/admin/deleteCollege?college_id=" + CollId, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                alert("删除成功");
                initCollManTable();
            }
            else {
                alert("删除失败");
            }
        });

}

//初始化修改学院详情
function initeditCollTable(collId) {
    fetchWithAuth('https://api.seekerer.com/api/admin/getSepCollegeInfo?collegeId=' + collId, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取学院信息失败");
            const data = response.data;
            const UpCollInfo = document.getElementById("UpCollInfo");
            UpCollInfo.UpcollName.value = data.college_name;
            UpCollInfo.UpcollID.value = data.college_id;
            data.name;
            UpCollInfo.UpcollRemark.value = data.remarks;
            return {
                headId: data.head_id,
                CollId: data.college_id
            }
        }).then(ret => {
            initUpCollHeadSelect(ret.headId, ret.CollId);
        })
}

function initUpCollHeadSelect(headId, collId) {
    fetchWithAuth("https://api.seekerer.com/api/admin/getSepStaff?ColId=" + collId, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取职工列表失败");
            const admin = document.getElementById("UpcollAdmin");
            while (admin.hasChildNodes()) {
                admin.removeChild(admin.firstChild);
            }
            response.data.forEach(element => {
                const option = document.createElement("option");
                option.innerHTML = element.name;
                option.value = element.account_id;
                if (element.account_id === headId)
                    option.selected = true;
                admin.appendChild(option);
            });
        })

}


function initMajorManTable() {
    const majorManTable = document.getElementById("majorAdminTable");
    while (majorManTable.hasChildNodes()) {
        majorManTable.removeChild(majorManTable.firstChild);

    }
    fetchWithAuth('https://api.seekerer.com/api/admin/getMajorList', {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                while (majorManTable.hasChildNodes()) {
                    majorManTable.removeChild(majorManTable.firstChild);
                }
                response.data.forEach(element => {
                    const table = document.createElement("tr");
                    const majorid = document.createElement("td");
                    majorid.innerHTML = element.major_id;
                    const majorname = document.createElement("td");
                    majorname.innerHTML = element.major_name;
                    const belong = document.createElement("td");
                    belong.innerHTML = element.college_name;
                    const admin = document.createElement("td");
                    admin.innerHTML = element.name;
                    const appendx = document.createElement("td");
                    appendx.innerHTML = element.remarks;
                    const action = document.createElement("td");
                    const button1 = document.createElement("button");
                    button1.className = "ButtonEdit";
                    button1.innerHTML = "修改专业信息";
                    let majorId = element.major_id;
                    button1.onclick = function () {
                        popDiv(10, "修改专业信息");
                        //记得补充交互逻辑
                        initUpMajorInfo(majorId);

                    }
                    const button2 = document.createElement("button");
                    button2.className = "ButtonDelete";
                    button2.innerHTML = "删除专业";
                    button2.onclick = function () {
                        if (window.confirm("确定要删除该专业吗?"))
                            delMajor(element.major_id);
                    }
                    action.appendChild(button1);
                    action.appendChild(button2);
                    table.appendChild(majorid);
                    table.appendChild(majorname);
                    table.appendChild(belong);
                    table.appendChild(admin);
                    table.appendChild(appendx);
                    table.appendChild(action);
                    majorManTable.appendChild(table);

                }
                );
            }
            else {
                alert("获取专业列表失败");
            }
        });
}

function delMajor(majorId) {
    fetchWithAuth("https://api.seekerer.com/api/admin/deleteMajor?major_id=" + majorId, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code === 200) {
                alert("删除成功");
                initMajorManTable();
            }
            else {
                alert("删除失败");
            }
        });
}


//初始化修改专业详情
function initUpMajorInfo(majorId) {
    fetchWithAuth("https://api.seekerer.com/api/admin/getSepMajorInfo?major_id=" + majorId, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取专业信息失败");
            const data = response.data;
            const UpMajorInfo = document.getElementById("UpMajInfo");
            // while (UpMajorInfo.hasChildNodes()) {
            //     UpMajorInfo.removeChild(UpMajorInfo.firstChild);
            // }
            UpMajorInfo.UpmajName.value = data.major_name;
            UpMajorInfo.UpmajID.value = data.major_id;
            const option = document.createElement("option");
            option.innerHTML = data.college_name;
            option.value = data.college_id;
            while (UpMajorInfo.UpmajColl.hasChildNodes()) {
                UpMajorInfo.UpmajColl.removeChild(UpMajorInfo.UpmajColl.firstChild);
            }
            UpMajorInfo.UpmajColl.appendChild(option);
            UpMajorInfo.UpmajRemark.value = data.remarks;
            UpMajorInfo.UpcreditLimit.value = data.credit_limit;
            return {
                headId: data.head_id,
                CollId: data.college_id
            }
        }).then(ret => {
            initUpMajorHeadSelect(ret.headId, ret.CollId);
        })
}

function initUpMajorHeadSelect(headId, collId) {
    fetchWithAuth("https://api.seekerer.com/api/admin/getSepStaff?ColId=" + collId, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code !== 200)
                throw new Error("获取职工列表失败");
            const admin = document.getElementById("UpmajAdmin");
            while (admin.hasChildNodes()) {
                admin.removeChild(admin.firstChild);
            }

            response.data.forEach(element => {
                const option = document.createElement("option");
                option.innerHTML = element.name;
                option.value = element.account_id;
                if (element.account_id === headId)
                    option.selected = true;
                admin.appendChild(option);
            });
        })

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

}
function addStudent() {
    const addForm = document.getElementById("addStu");
    addForm.style.display = "unset";
}