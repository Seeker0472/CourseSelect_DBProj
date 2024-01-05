// import { fetchWithAuth } from '../jwtRequest.js'

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

document.addEventListener('DOMContentLoaded', function () {
    {
        var script = document.createElement('script');
        script.type = 'text/javaScript';
        script.src = '../loadCharts.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    const courseWeekStart = document.getElementById("courseWeekStart");
    const courseWeekEnd = document.getElementById("courseWeekEnd");
    const courseTimeStart = document.getElementById("courseTimeStart");
    const courseTimeEnd = document.getElementById("courseTimeEnd");
    const Upend_week = document.getElementById("Upend_week");
    const Upstart_week = document.getElementById("Upstart_week");
    const Upstart_time = document.getElementById("Upstart_time");
    const Upend_time = document.getElementById("Upend_time");

    courseWeekStart.onchange = function () {
        console.log(courseWeekStart.value);
        while (courseWeekEnd.hasChildNodes()) {
            courseWeekEnd.removeChild(courseWeekEnd.firstChild);
        }
        for (let i = courseWeekStart.value; i <= 20; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            courseWeekEnd.appendChild(option);
        }
    }

    courseTimeStart.onchange = function () {
        console.log(courseTimeStart.value);
        while (courseTimeEnd.hasChildNodes()) {
            courseTimeEnd.removeChild(courseTimeEnd.firstChild);
        }
        for (let i = courseTimeStart.value; i <= 10; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            courseTimeEnd.appendChild(option);
        }
    }
    Upstart_week.onchange = function () {
        console.log(Upstart_week.value);
        while (Upend_week.hasChildNodes()) {
            Upend_week.removeChild(Upend_week.firstChild);
        }
        for (let i = Upstart_week.value; i <= 20; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            Upend_week.appendChild(option);
        }
    }
    Upstart_time.onchange = function () {
        console.log(Upstart_time.value);
        while (Upend_time.hasChildNodes()) {
            Upend_time.removeChild(Upend_time.firstChild);
        }
        for (let i = Upstart_time.value; i <= 10; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            Upend_time.appendChild(option);
        }
    }


    {

        const url = window.location.href;
        const urlObj = new URL(url);
        const account = urlObj.searchParams.get('account');
        const identitySwitchContent = document.getElementById("identityDrop");
        const name = document.getElementById("userName");
        //popDiv();
        let account_id = 'Adm';
        fetchWithAuth("https://api.seekerer.com/api/admin/getIdentity?accountId=" + account, {
            method: 'GET'
        }).then(response => { return response.json(); })
            .then(response => {
                if (response.code === 200) {
                    if (response.data.length === 0) {
                        window.location.href = "../login.html";
                    }
                    while (identitySwitchContent.hasChildNodes()) {
                        identitySwitchContent.removeChild(identitySwitchContent.firstChild);
                    }
                    //TODO:这个是为什么?
                    // const URL = new URL(window.location.href);
                    const params = urlObj.searchParams;
                    params.set("college_id", response.data[0].college_id);
                    const newUrl = urlObj.href;
                    history.pushState(null, null, newUrl);

                    response.data.forEach(element => {
                        name.innerHTML = element.name;
                        switch (element.identity) {
                            case '1':
                                //学生,目前应该不会出现这种情况
                                break;
                            case '2':
                                let identity = document.createElement("a");
                                identity.innerHTML = element.college_name + "的教务管理员";
                                identity.href = "../adminPage/admin.html?account=" + element.account_id + "&college=" + element.college_id;
                                identitySwitchContent.appendChild(identity);
                                //教务管理员
                                break;
                            case '3':
                                //管理员
                                let identity1 = document.createElement("a");
                                identity1.innerHTML = "管理员";
                                identity1.href = "../adminmaster/admin.html?account=" + element.account_id;
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



//初始化课程表格
function initializeClassBody() {
    while (ClassBody.hasChildNodes()) {
        ClassBody.removeChild(ClassBody.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllCoursedeliver", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (ClassBody.hasChildNodes()) {
                ClassBody.removeChild(ClassBody.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const classnum = document.createElement("td");
                classnum.innerHTML = element.course_id;
                const classname = document.createElement("td");
                classname.innerHTML = element.course_name;
                const credits = document.createElement("td");
                credits.innerHTML = element.credits;
                const teacherId = document.createElement("td");
                teacherId.innerHTML = element.teacher_id;
                const teacherName = document.createElement("td");
                teacherName.innerHTML = element.name;
                const TargetMajor = document.createElement("td");
                TargetMajor.innerHTML = element.major_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonEdit";
                button1.innerHTML = "查看已选";

                const button2 = document.createElement("button");
                button2.innerHTML = "删除开课计划";
                button2.className = "ButtonDelete";
                const button3 = document.createElement("button");
                button3.innerHTML = "修改信息";
                button3.className = "ButtonEdit";
                const button4 = document.createElement("button");
                button4.innerHTML = "导出";
                button4.className = "ButtonAdd";
                button4.onclick = function () {
                    //记得补充交互逻辑
                    // popDiv(6);
                    getExcel(element.deliverId);

                }

                //Test
                button1.onclick = function () {
                    popDiv(2);
                    initializeSelectedClassBody(element.deliverId);

                }
                button2.onclick = function () {
                    //记得补充交互逻辑
                    deleteCourseDeliver(element.deliverId);
                }
                button3.onclick = function () {
                    popDiv(7);
                    initUpdateCourse_DeliverInfo(element.deliverId);

                }
                action.appendChild(button1);
                action.appendChild(button2);
                action.appendChild(button3);
                action.appendChild(button4);
                table.appendChild(classnum);
                table.appendChild(classname);
                table.appendChild(credits);
                table.appendChild(teacherId);
                table.appendChild(teacherName);
                table.appendChild(TargetMajor);
                table.appendChild(action);
                ClassBody.appendChild(table);
            });
        });



}

function getExcel(course_id) {
    window.location.href = "https://api.seekerer.com/api/acaAdmin/getTotalEnrollments?deliver_id=" + course_id;
}

function deleteCourseDeliver(deliver_id) {
    fetchWithAuth("https://api.seekerer.com/api/acaadmin/deleteCourseDeliver?deliver_id=" + deliver_id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code != 200)
                alert("删除失败");
            else
                alert("删除成功");
        });

}

function initUpdateCourse_DeliverInfo(deliver_id) {
    const upform = document.getElementById("UpCourseDeliver_info");
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getSepCourseDeliverInfo?deliver_id=" + deliver_id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code != 200)
                throw new Error("获取开课信息失败");

            upform.UpCourse_diliver_id.value = response.data.deliverId;
            upform.Upstart_week.value = response.data.start_week;
            upform.Upend_week.value = response.data.end_week;
            upform.Upstart_time.value = response.data.start_time;
            upform.Upend_time.value = response.data.end_time;
            upform.Upcourse_day.value = response.data.course_day;
            upform.Uplocation.value = response.data.location;
            upform.Upmax_enrollment.value = response.data.max_enrollment;

            return {
                term_id: response.data.term_id,
                teacher_id: response.data.teacher_id,
            }
        }).then(data => {
            fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllTerms", {
                method: 'GET'
            }).then(response => { return response.json(); })
                .then(response => {
                    if (response.code != 200)
                        throw new Error("获取学期信息失败");
                    while (upform.Upterm_id.hasChildNodes()) {
                        upform.Upterm_id.removeChild(upform.Upterm_id.firstChild);
                    }
                    response.data.forEach(element => {
                        let option = document.createElement("option");
                        option.value = element.term_id;
                        option.innerHTML = element.term_name;
                        if (element.term_id === data.term_id) option.selected = true;
                        upform.Upterm_id.appendChild(option);
                    });
                });
            fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getteachers", {
                method: 'GET'
            }).then(response => { return response.json(); })
                .then(response => {
                    if (response.code != 200)
                        throw new Error("获取教师信息失败");
                    while (upform.UPteacher_id.hasChildNodes()) {
                        upform.UPteacher_id.removeChild(upform.UPteacher_id.firstChild);
                    }
                    response.data.forEach(element => {
                        let option = document.createElement("option");
                        option.value = element.account_id;
                        option.innerHTML = element.name;
                        if (element.account_id === data.teacher_id) option.selected = true;
                        upform.UPteacher_id.appendChild(option);
                    });
                });
        })

}

//初始化已选课程表格
function initializeSelectedClassBody(deliver_id) {
    console.log(deliver_id);
    const SelectedClassBody = document.getElementById("SelectedClassBody");
    while (SelectedClassBody.hasChildNodes()) {
        SelectedClassBody.removeChild(SelectedClassBody.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getCourseSelectedStu?deliver_id=" + deliver_id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (SelectedClassBody.hasChildNodes()) {
                SelectedClassBody.removeChild(SelectedClassBody.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const stuid = document.createElement("td");
                stuid.innerHTML = element.student_id;
                const stuname = document.createElement("td");
                stuname.innerHTML = element.student_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonDelete";
                button1.innerHTML = "删除";
                button1.onclick = function () {
                    //记得补充交互逻辑
                    popDiv(5);
                }
                action.appendChild(button1);
                table.appendChild(stuid);
                table.appendChild(stuname);
                table.appendChild(action);
                SelectedClassBody.appendChild(table);
            });
        });
}



//初始化课程表格
function initCourseTable() {
    const courseTable = document.getElementById("CoursesTable");
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllCourses", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (courseTable.hasChildNodes()) {
                courseTable.removeChild(courseTable.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const classnum = document.createElement("td");
                classnum.innerHTML = element.course_id;
                const classname = document.createElement("td");
                classname.innerHTML = element.course_name;
                const credits = document.createElement("td");
                credits.innerHTML = element.credits;
                const category = document.createElement("td");
                category.innerHTML = element.category_name;
                const mandatory = document.createElement("td");
                mandatory.innerHTML = element.is_mandatory ? "必修" : "选修";

                const action = document.createElement("td");

                const button2 = document.createElement("button");
                button2.className = "ButtonDelete";
                button2.innerHTML = "删除课程信息";
                const button3 = document.createElement("button");
                button3.innerHTML = "修改信息";
                button3.className = "ButtonEdit";

                button2.onclick = function () {
                    deleteCourse(element.course_id);
                    //记得补充交互逻辑
                }
                button3.onclick = function () {
                    popDiv(3);
                    initUpdateCourseInfo(element.course_id);


                }
                action.appendChild(button2);
                action.appendChild(button3);
                table.appendChild(classnum);
                table.appendChild(classname);
                table.appendChild(credits);
                table.appendChild(category);
                table.appendChild(mandatory);
                table.appendChild(action);
                courseTable.appendChild(table);
            });

        });
}

function deleteCourse(course_id) {
    fetchWithAuth("https://api.seekerer.com/api/acaadmin/deleteCourse?course_id=" + course_id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code != 200)
                alert("删除失败");
            else
                alert("删除成功");
        });


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
//TODO:要实现按学院查询,只能查询该学院的学生
function initializeStuTable() {
    while (stuTable.hasChildNodes()) {
        stuTable.removeChild(stuTable.firstChild);
    }
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllStuInfo", {
        method: 'POST'
    }).then(response => { return response.json(); })
        .then(responces => {
            while (stuTable.hasChildNodes()) {
                stuTable.removeChild(stuTable.firstChild);
            }
            responces.data.forEach(element => {
                let studentId = element.account_id;
                const table = document.createElement("tr");
                const stuid = document.createElement("td");
                stuid.innerHTML = element.account_id;
                const stuname = document.createElement("td");
                stuname.innerHTML = element.student_name;
                const enrollTime = document.createElement("td");
                enrollTime.innerHTML = element.enrollment_time;
                const college = document.createElement("td");
                college.innerHTML = element.college_name;
                const major = document.createElement("td");
                major.innerHTML = element.major_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonEdit";
                button1.innerHTML = "选课信息";
                button1.onclick = function () {
                    //记得补充交互逻辑
                    popDiv(5);
                    initselectedTable(studentId)


                }
                action.appendChild(button1);
                table.appendChild(stuname);
                table.appendChild(stuid);
                table.appendChild(enrollTime);
                table.appendChild(college);
                table.appendChild(major);
                table.appendChild(action);
                stuTable.appendChild(table);
            });

        });
}

function initselectedTable(stuId) {
    let defaultTermId = 0;
    const term = document.getElementById("stu_terms");
    fetchWithAuth("https://api.seekerer.com/api/all/getTerms", {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {

            while (term.hasChildNodes()) {
                term.removeChild(term.firstChild);
            }
            response.data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.term_id;
                option.innerHTML = element.term_name;
                if (element.stat === 1) { option.selected = true; defaultTermId = element.term_id; }
                term.appendChild(option);

            });
        }).then(() => { getStuCourse(stuId, defaultTermId) });
    term.onchange = function () {
        getStuCourse(stuId, term.value);
    }

}

function getStuCourse(stuId, term_id) {
    const stuInfoBody = document.getElementById("stuInfoBody");
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getStuCourseSimp?student_id=" + stuId + "&term_id=" + term_id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code != 200)
                throw new Error("获取学生课程失败");
            while (stuInfoBody.hasChildNodes()) {
                stuInfoBody.removeChild(stuInfoBody.firstChild);
            }
            response.data.forEach(element => {
                const table = document.createElement("tr");
                const classnum = document.createElement("td");
                classnum.innerHTML = element.course_id;
                const classname = document.createElement("td");
                classname.innerHTML = element.course_name;
                const action = document.createElement("td");
                const button1 = document.createElement("button");
                button1.className = "ButtonDelete";
                button1.innerHTML = "推选";
                button1.onclick = function () {
                    if (window.confirm("确定推选该课程吗?"))
                        cancelCourse(element.deliver_id, stuId);
                }
                table.appendChild(classnum);
                table.appendChild(classname);
                action.appendChild(button1);
                table.appendChild(action);
                stuInfoBody.appendChild(table);

            })
        });

}

function cancelCourse(deliver_id, stu_id) {
    fetchWithAuth("https://api.seekerer.com/api/acaadmin/cancelCourse?deliver_id=" + deliver_id + "&student_id=" + stu_id, {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            if (response.code != 200)
                throw new Error("退课失败");
            alert("退课成功");
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
function popDiv(page) {
    // 获取div元素
    const popBox = document.getElementById("popDiv");
    const popMain = document.getElementById("popMain");
    const addCourse = document.getElementById("addCourse");
    const showDetail = document.getElementById("showDetail");
    const editInfo = document.getElementById("editInfo");
    const applyCheck = document.getElementById("applyCheck");
    const stuInfo = document.getElementById("stuInfo");
    const offerCourse = document.getElementById("offerCourse");
    const UpdateCourse_diliver_info = document.getElementById("UpdateCourse_diliver_info");

    for (Object of popMain.children) {
        Object.style = "display:none;";
    }
    switch (page) {
        case 1:
            popTitle.innerHTML = "添加开课信息";
            offerCourse.style = "display:block;";
            getCourseProfessorAndTerm();
            break;
        case 2:
            popTitle.innerHTML = "课程详情";
            showDetail.style = "display:block;";
            break;
        case 3:
            popTitle.innerHTML = "修改课程信息";
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
        case 6:
            popTitle.innerHTML = "添加课程";
            addCourse.style = "display:block;";
            initCourseCategory();
            getCollegeNow();
            break;
        case 7:
            popTitle.innerHTML = "修改开课信息";
            UpdateCourse_diliver_info.style = "display:block;";
            break;

    }

    // 控制两个div的显示与隐藏
    popBox.style.display = "block";
}

//获取课程信息,用来初始化修改课程信息页面
function initUpdateCourseInfo(course_id) {
    const upform = document.getElementById("UpCourse_info");
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getSepCourseInfo?course_id=" + course_id, {
        method: 'GET'
    })
        .then(response => { return response.json(); })
        .then(response => {
            if (response.code != 200)
                throw new Error("获取课程信息失败");
            upform.UpCourse_id.value = response.data.course_id;
            upform.UpCourse_name.value = response.data.course_name;
            upform.UpCourse_credit.value = response.data.credits;
            //upform.category.value = response.data.category_id;
            upform.Upis_mandatory.value = response.data.is_mandatory ? 1 : 0;
            if (!typeof (response.data.Intro) === "undefined")
                upform.UpCourse_Intro.value = response.data.Intro;
            else
                response.data.Intro = "";
            return {
                major_id: response.data.major_id,
                category_id: response.data.category_id
            }
        }).then(data => {
            fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllCategories", {
                method: 'GET'
            })
                .then(response => { return response.json(); })
                .then(response => {
                    if (response.code != 200)
                        throw new Error("获取课程信息失败");
                    while (upform.UpCourse_category.hasChildNodes())
                        upform.UpCourse_category.removeChild(upform.UpCourse_category.firstChild);
                    response.data.forEach(element => {
                        let option = document.createElement("option");
                        option.value = element.category_id;
                        option.innerHTML = element.category_name;
                        if (element.category_id === data.category_id) option.selected = true;
                        upform.UpCourse_category.appendChild(option);
                    });
                });
        })

}


//获取课程,教师,学期信息,用来初始化下拉框
function getCourseProfessorAndTerm() {
    const course_id = document.getElementById("course_id");
    const professor_id = document.getElementById("professor_id");

    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllCourses", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (course_id.hasChildNodes()) {
                course_id.removeChild(course_id.firstChild);
            }
            response.data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.course_id;
                option.innerHTML = element.course_name;
                course_id.appendChild(option);
            });


        });

    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getteachers", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (professor_id.hasChildNodes()) {
                professor_id.removeChild(professor_id.firstChild);
            }
            response.data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.account_id;
                option.innerHTML = element.name;
                professor_id.appendChild(option);
            });
        });

    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllTerms", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            const term = document.getElementById("terms");
            while (term.hasChildNodes()) {
                term.removeChild(term.firstChild);
            }
            response.data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.term_id;
                option.innerHTML = element.term_name;
                term.appendChild(option);
            });
        });
}

function getCollegeNow() {
    //学院编号已经在header里面了
    const url = new URL(window.location.href);
    const college_id = url.searchParams.get('college_id');
    const major_id = document.getElementById("major_id");
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getMajors", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (major_id.hasChildNodes()) {
                major_id.removeChild(major_id.firstChild);
            }
            response.data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.major_id;
                option.innerHTML = element.major_name;
                major_id.appendChild(option);
            });

        });
}

function initCourseCategory() {
    const courseCategory = document.getElementById("category");
    fetchWithAuth("https://api.seekerer.com/api/acaAdmin/getAllCategories", {
        method: 'GET'
    }).then(response => { return response.json(); })
        .then(response => {
            while (courseCategory.hasChildNodes()) {
                courseCategory.removeChild(courseCategory.firstChild);
            }
            response.data.forEach(element => {
                let option = document.createElement("option");
                option.value = element.category_id;
                option.innerHTML = element.category_name;
                courseCategory.appendChild(option);
            });

        });
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

function loadPage21() {

    initializeClassBody();

    editPageParam2(1);
    const Link2Display = document.getElementById("Link2Display");
    for (Object of Link2Display.children) {
        Object.style = "display:none;";
    }
    const Link21 = document.getElementById("Link21");
    Link21.style.display = "block";

}

function loadPage22() {
    editPageParam2(2);
    initCourseTable();

    const Link2Display = document.getElementById("Link2Display");
    for (Object of Link2Display.children) {
        Object.style = "display:none;";
    }
    const Link22 = document.getElementById("Link22");
    Link22.style.display = "block";

}

function editPageParam2(pagenum) {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const exparam = params.get("coadminparam");
    if (exparam === pagenum) {
        return;
    }
    params.delete("coadminparam");
    params.set("coadminparam", pagenum);
    const newUrl = url.href;
    history.pushState(null, null, newUrl);
}

function phasePageParam2() {
    const url = new URL(window.location.href);
    const exparam = url.searchParams.get("coadminparam");
    if (exparam === null) {
        loadPage21();
        return;
    }
    switch (exparam) {
        case "1":
            loadPage21();
            break;
        case "2":
            loadPage22();
            break;
    }

}

//加载页面是执行的函数
function loadPage1() {
    {
        var script = document.createElement('script');
        script.type = 'text/javaScript';
        script.src = '../admLoadCharts.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    if (typeof myChart != "undefined")
        myChart.resize();
}
function loadPage2() {
    phasePageParam2();



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
    //popDiv();

}