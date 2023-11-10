

document.addEventListener("DOMContentLoaded", function () {
    const praseUrl=new URL(window.location.href);
    const error=praseUrl.searchParams.get("error");
    if(error==="true")
    {
        alert("用户名或密码错误");
    }


    document.getElementById("LoginForm").addEventListener("submit", function (event) {

        const form = new FormData(event.target);
        fetch("./login", {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // 登录成功，可以执行相应操作
                    alert("登录成功");
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