

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginPlace").addEventListener("mouseenter", function () {
        document.body.style.opacity = "100%"
    });
    document.getElementById("loginPlace").addEventListener("mouseleave", function () {
        document.body.style.opacity = "50%"
    });
    const praseUrl = new URL(window.location.href);
    const error = praseUrl.searchParams.get("error");
    if (error === "true") {
        alert("用户名或密码错误");
    }


    document.getElementById("LoginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        fetch("./login", {
            method: 'POST',
            body: formData
        }).then(response => { return response.json(); })
            .then(response => {
                if (response.code === 200) {
                    // 登录成功，可以执行相应操作
                    //alert("登录成功");
                    window.location.href = "./home/home.html";
                } else {
                    // 登录失败，处理错误
                    alert("登录失败");
                }
            })
            .catch(error => {
                console.error('登录请求出错:', error);
            });
    });
});

function closePop() {
    // 获取弹出窗口元素
    let popDiv = document.getElementById("popDiv");
    popDiv.style.display = "none";
    document.body.style.opacity = "30%"
    document.body.classList.remove('popup-active');
}
function popDiv() {
    // 获取div元素
    const popBox = document.getElementById("popDiv");
    // 控制两个div的显示与隐藏
    popBox.style.display = "block";
    document.body.style.opacity = "100%"
    document.body.classList.add('popup-active');
}

function gotoRegister(event) {
    event.preventDefault();
    window.location.href = "./enroll/enroll.html";
}
