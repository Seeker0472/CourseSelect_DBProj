let page=1;
let slider;
let defaultpos = 0;//slider位置
let transfrompos = 0;//slider每次transform的值


const Link1Display = document.getElementById("Link1Display");
const Link2Display = document.getElementById("Link2Display");
const Link3Display = document.getElementById("Link3Display");
const Link4Display = document.getElementById("Link4Display");
const Link5Display = document.getElementById("Link5Display");

//每次屏幕大小变化时，重新计算transform的值
window.onresize = function () {
    //console.log("resize"+window.innerWidth);
    if(window.innerWidth<610)
    {
        //console.log("a");
        transfrompos=70;
        slider.style.transform = 'translateX('+transfrompos*(page-1)+'px)';
    }
    else
    {
        //console.log("b");
        transfrompos=120;
        slider.style.transform = 'translateX('+transfrompos*(page-1)+'px)';
    }

}

document.addEventListener("DOMContentLoaded", function () {

    slider = document.getElementById("slider1");


    //计算transform的值
    if(window.innerWidth<610)
    {
        transfrompos=70;
    }
    else
    {
        transfrompos=120;
    }
    //获取page参数,并加载相关页面
    getPageParams();
    defaultpos = transfrompos*(page-1);
    switch (page) {
        case '1':
            slider.style.transform = 'translateX(0)';
            Link1Display.style.display="unset";
            loadPage1();
            break;
        case '2':
            loadPage2();
            slider.style.transform = 'translateX('+transfrompos+'px)';
            Link2Display.style.display="unset";
            break;
        case '3':
            loadPage3();
            slider.style.transform = 'translateX('+transfrompos*2+'px)';
            Link3Display.style.display="unset";
            break;
        case '4':
            loadPage4();
            slider.style.transform = 'translateX('+transfrompos*3+'px)';
            Link4Display.style.display="unset";
            break;
        case '5':
            loadPage5();
            slider.style.transform = 'translateX('+transfrompos*4+'px)';
            Link5Display.style.display="unset";
            break;
        default:
            console.log("Error:Page not found"+page);
    }


    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    const link5 = document.getElementById("link5");

    //设置监听器
    //var link6=document.getElementById("link6");
    link1.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX(0)';
        });
    link2.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX('+transfrompos+'px)';
        });
    link3.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX('+transfrompos*2+'px)';
        });
    link4.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX('+transfrompos*3+'px)';
        });
    link5.addEventListener("mouseenter",
        (event) => {
            slider.style.transform = 'translateX('+transfrompos*4+'px)';
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
        console.log("Loading Page1");
        defaultpos = 0;
        page = 1;
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
        clearAll();
        Link1Display.style.display="unset";
        setPageParams(1);
        loadPage1();
    });
    link2.addEventListener("click", (event) => {
        console.log("Loading Page2");
        defaultpos = transfrompos;
        page = 2;
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
        clearAll();
        Link2Display.style.display="unset";
        setPageParams(2);
        loadPage2();
    });
    link3.addEventListener("click", (event) => {
        console.log("Loading Page3");
        defaultpos = transfrompos*2;
        page = 3;
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
        clearAll();
        Link3Display.style.display="unset";
        setPageParams(3);
        loadPage3();
    });
    link4.addEventListener("click", (event) => {
        console.log("Loading Page4");
        defaultpos = transfrompos*3;
        page = 4;
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
        clearAll();
        Link4Display.style.display="unset";
        setPageParams(4);
        loadPage4();
    });
    link5.addEventListener("click", (event) => {
        console.log("Loading Page5");
        defaultpos = transfrompos*4;
        page = 5;
        slider.style.transform = 'translateX(' + defaultpos + 'px)';
        clearAll();
        Link5Display.style.display="unset";
        setPageParams(5);
        loadPage5();
    });
});
function getPageParams(){
    const url= new URL(window.location.href);
    const searchParams=url.searchParams;
    var page1=searchParams.get('Page');
    if(page1===null)
    {
        console.log("null");
        firstload();
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