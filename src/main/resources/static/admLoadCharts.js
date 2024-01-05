var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
var option;

// 加载 external script 的函数
function loadScript(url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}





// 使用 Promise.all
Promise.all([
    fetch('https://api.seekerer.com/api/admin/getTotalCreditsInfo').then(response => response.json()),
    loadScript('../ecSimpleTransform.min.js')
]).then(function (results) {
    run(results[0]);
}).catch(function (error) {
    console.error('There was an error loading the data or script:', error);
});

function run(_rawData) {
    // 注册 transform
    echarts.registerTransform(ecSimpleTransform.aggregate);

    const rawData = _rawData.data.slice(1).map(item => ({
        student_id: item[0],
        student_name: item[1],
        total_credits: item[2],
        major_name: item[3]
    }));

    // ECharts 配置
    const option = {
        dataset: [
            {
                id: 'raw',
                source: rawData
            },
            {
                id: 'aggregate',
                fromDatasetId: 'raw',
                transform: [
                    {
                        type: 'ecSimpleTransform:aggregate',
                        config: {

                            resultDimensions: [
                                { name: 'major_name', from: 'major_name' },
                                // 对每个专业的总学分进行求和
                                { name: 'min', from: 'total_credits', method: 'min' },
                                { name: 'Q1', from: 'total_credits', method: 'Q1' },
                                { name: 'median', from: 'total_credits', method: 'median' },
                                { name: 'Q3', from: 'total_credits', method: 'Q3' },
                                { name: 'max', from: 'total_credits', method: 'max' },
                                // { name: 'count', from: 'total_credits', method: 'count' }

                            ], groupBy: 'major_name', // 按专业名称分组
                        },


                    },
                    {
                        type: 'sort',
                        config: {
                            dimension: 'median',
                            order: 'desc'
                        }
                    }
                ]
            }
        ],
        title: {
            text: '每个学院的选课情况'
        },
        tooltip: {
            trigger: 'axis',
            confine: true
        },
        xAxis: {
            name: '已选总学分',
            nameLocation: 'middle',
            nameGap: 1,
            scale: true
        },
        yAxis: {
            type: 'category',
            name: '专业',
            nameLocation: 'end'
        },
        grid: {
            bottom: 100
        },
        legend: {
            selected: { detail: false }
        },
        dataZoom: [
            {
                type: 'inside'
            },
            {
                type: 'slider',
                height: 20
            }
        ],
        series: [
            {
                type: 'boxplot',
                name: '盒须图',
                datasetId: 'aggregate',
                itemStyle: {
                    color: '#b8c5f2'
                },
                // emphasis: {
                //     itemStyle: {
                //         borderColor: '#6cb041'
                //     }
                // },
                encode: {
                    x: ['min', 'Q1', 'median', 'Q3', 'max'],
                    y: 'major_name',
                    itemName: ['major_name'],
                    //tooltip: ['count'],
                    tooltip: ['min', 'Q1', 'median', 'Q3', 'max']

                }
            },
            {
                type: 'scatter',
                name: '散点图',
                datasetId: 'raw',
                symbolSize: 6,
                tooltip: {
                    trigger: 'item'
                },
                label: {
                    show: true,
                    position: 'top',
                    align: 'left',
                    verticalAlign: 'middle',
                    rotate: 90,
                    fontSize: 12
                },
                itemStyle: {
                    color: '#d00000'
                },
                encode: {
                    x: 'total_credits',
                    y: 'major_name',
                    label: 'student_name',
                    itemName: 'student_name',
                    tooltip: ['major_name', 'student_name', 'total_credits']
                }
            }

        ]
    };

    myChart.setOption(option);
}


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

