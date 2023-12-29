let uuid;

document.addEventListener("DOMContentLoaded", function () {
    initverimg();
    document.getElementById("loginPlace").addEventListener("mouseenter", function () {
        document.body.style.opacity = "100%"
    });
    document.getElementById("loginPlace").addEventListener("mouseleave", function () {
        document.body.style.opacity = "50%"
    });
    document.getElementById("varify-key").addEventListener("click", function () {
        getVarifyPic();
    });
    const praseUrl = new URL(window.location.href);
    const error = praseUrl.searchParams.get("error");
    if (error === "true") {
        alert("用户名或密码错误");
    }


    document.getElementById("LoginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let account = document.getElementById("usernameInput").value;
        console.log(account);

        const formData = new FormData(event.target);
        formData.append("uuid", uuid)
        fetch("https://api.seekerer.com/login", {
            method: 'POST',
            body: formData
        }).then(response => { return response.json(); })
            .then(response => {
                if (response.data.jwt) {
                    localStorage.setItem('jwt', response.data.jwt); // 存储JWT
                }
                if (response.code === 200) {
                    if (response.data.redirectTo === 1)
                        window.location.href = "./home/home.html?account=" + account;
                    else if (response.data.redirectTo === 2)
                        window.location.href = "./adminPage/admin.html?account=" + account;
                    else if (response.data.redirectTo === 3)
                        window.location.href = "./adminmaster/admin.html?account=" + account;
                    else
                        throw new Error("未知的用户类型");
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

function generateRandomUUID() {
    let uuid = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 36; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uuid += characters.charAt(randomIndex);
    }

    return uuid;
}
function initverimg() {
    uuid = generateRandomUUID();
    fetch('https://api.seekerer.com/captcha?uuid=' + uuid, {
        method: 'GET'
    })
        .then(response => {
            // 获取图片的blob数据
            return response.blob();
        })
        .then(blob => {
            // 创建一个本地URL用于图片
            const imageUrl = URL.createObjectURL(blob);
            // 设置<img>标签的src属性来显示验证码
            document.getElementById('varify-key').src = imageUrl;
        })
        .catch(error => {
            console.error('Fetching captcha failed:', error);
        });

}



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

//TODO:在这里加上后端访问逻辑
function getVarifyPic() {
    console.log("getVarifyPic");
    const pic = document.getElementById("varify-key");
    // pic.src = "";


}

function Fibonacci() {
    let i = 1, j = 2, temp, t = 1;
    while (t <= 200) {
        console.log(t + ":" + i + "..." + Math.log(i) / Math.log(2));
        temp = i + j;
        i = j;
        j = temp;
        t++;
    }
}