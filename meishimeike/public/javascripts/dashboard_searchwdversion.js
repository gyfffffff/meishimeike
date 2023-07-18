// 立即执行函数

// 柱状图
(function () {
    var axisLabelColor = 'darkmagenta'
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    option = {
        color: ['#87CEEB', '#FFB6C1', '#F0E68C', '#ADD8E6', '#D8BFD8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            }
        },
        grid: {
            right: 10,
            left: 30,
            bottom: 30,
            top: 10,
            containLable: true
        },
        xAxis: {
            type: 'category',
            // data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            data:['西餐','中餐','日料','泰式','韩式','意式'],
            axisLabel: {
                fontSize: 12,
                color: axisLabelColor
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },

        yAxis: {
            type: 'value',
            axisLabel: {
                fontSize: 12,
                color: axisLabelColor
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(150, 150, 150,.3)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(150, 150, 150,.1)'
                }
            }
        },
        series: [
            {
                // data: [50,20,17,90,177,1378,73,0,0,375,28,64],
                data:[152, 98,91,75,54,46],
                type: 'bar',
                barWidth: '35%',
                name: '数据量',
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);

    // 适应屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();



// 柱状图2
(function () {
    var axisLabelColor = 'darkmagenta'
    var myColor = ['#ADD8E6', '#FFB6C1', '#87CEEB', '#F0E68C', '#AFEEEE', '#FFDAB9', '#E6E6FA', '#D8BFD8'];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            left: '22%',
            bottom: '10%',
            top: '10%',
            // containLabel: true
        },
        xAxis: {
            show: false,
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['广州', '长沙', '武汉','西安','杭州','佛山'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: axisLabelColor
                }
            },
            {
                type: 'category',
                inverse: true,
                data: ['1', '2', '3', '4', '5', '6'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: axisLabelColor
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [55,40,38,35,34,23],
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex]
                    }
                },
                label: {
                    show: true,
                    formatter: '{c}条'
                },
                yAxisIndex: 0
            },
            {
                name: '框',
                type: 'bar',
                barWidth: 15,
                barCategoryGap: 50,
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100, 100]
            }
        ]
    };
    myChart.setOption(option)
    // 适应屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();


// 折线图1
(function () {
    var axisLabelColor = 'darkmagenta'
    // var yearData = [
    //     {
    //         year: "2022.10-2023.2", // 年份
    //         data: [ // 两个数组是因为有两名线
    //             [2,1,2,2,0],
    //             [2,2,3,2,1]
    //         ]
    //     },
    //     {
    //         year: '2023.3-2023.7', // 年份
    //         data: [ // 两个数组是因为有两条线
    //             [1,2,16,80,6],
    //             [0, 0, 6, 81, 6]
    //         ]
    //     }
    // ];
    var myChart = echarts.init(document.querySelector('.line .chart'));
    option = {
        color: ['#65A54C', '#FC6CD5'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: '#4c9bfc'
            },
            right: '10%'
        },
        // 设置网格样式
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            show: true,// 显示边框 0
            bottom: "3%",
            borderColor: 'rgba(150, 150, 150,.1)',  //边
            containLabel: true // 包含刻度文字在内
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Oct", "Nov", "Dec"],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: axisLabelColor
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: axisLabelColor
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(150, 150, 150,.2)'
                }
            }
        },
        series: [
            {
                name: '中餐',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                data: [2,1,2,2,0,1,2,16,80,6]
            },
            {
                name: '西餐',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                data: [2,2,3,2,1,0,0,6,81,6]
            },
        ]
    };
    myChart.setOption(option);
    // 适应屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })


    // 点击切换效果
    $('.line h2').on('click', 'a', function () {
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];

        // 别忘记重新渲染！！！
        myChart.setOption(option);
    })
})();

// 折线图2
(function () {
    var axisLabelColor = 'darkmagenta'
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: '0%',
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: '#4c9bfc'
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    textStyle: {
                        color: axisLabelColor,
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(200, 190, 190,.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: axisLabelColor
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(150, 150, 150,.2)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#FFA500',
                    width: 3,
                },
                areaStyle: {
                    // 渐变固定写法
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: 'rgba(144, 238, 144, 0.6)'
                            // color:'red'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 165, 0, 0.6)'
                            // color:'green'
                        },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,0,0,.2)'
                },
                symbol: 'rect',
                symbolSize: 10,
                showSymbol: false,
                itemStyle: {
                    color: 'rgba(255, 165, 0, 0.98)',
                    borderColor: 'rgba(255, 165, 0, 0.3)',
                    borderWidth: 8
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#90EE90',
                    width: 3,
                },
                areaStyle: {
                    // 渐变固定写法
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: 'rgba(144, 238, 144, 0.6)'
                            // color:'red'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 165, 0, 0.6)'
                            // color:'green'
                        },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,0,0,.2)'
                },
                symbol: 'circle',
                symbolSize: 10,
                showSymbol: false,
                itemStyle: {
                    color: 'rgba(144, 238, 144, 0.98)',
                    borderColor: 'rgba(144, 238, 144, 0.3)',
                    borderWidth: 8
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
        ]
    };
    myChart.setOption(option)
    // 适应屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();

// 饼图1
(function () {
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'purple',
                fontSize: 12
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['65%', '92%'],
                center: ['60%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 0
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                ]
            }
        ]
    };
    myChart.setOption(option);
    // 适应屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();


// 饼图2
(function () {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
        color: ['#ADD8E6', '#FFB6C1', '#87C2E8', '#F0E68C', '#AFEE1E', '#F2DAB9', '#E6E6FA', '#D8BFD8'],
        legend: {
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'purple',
                fontSize: 10
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '35%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 0
                },
                label: {
                    fontSize: 12
                },
                labelLine: {
                    length: 6,  // 连接图形
                    length2: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 60, name: 'rose 6' }
                ]
            }
        ]
    };
    myChart.setOption(option)
})();

(function () {
    var myChart = echarts.init(document.querySelector('.map .chart'), null, {
        width : '580px',
        height : '560px',
    });
    var keywords = '<!-- REPLACE_THIS_WITH_SQLRES -->'
    var data = []
    for (var name in keywords) {
        data.push({
            name: name,
            value: Math.sqrt(keywords[name])
        })
    }

    var maskImage = new Image();

    var option = {
        grid:{
            top:"20%"
        },
        series: [{
            type: 'wordCloud',
            sizeRange: [4, 150],
            rotationRange: [0, 0],
            gridSize: 0,
            shape: 'circle',
            maskImage: maskImage,
            drawOutOfBound: false,
            // layoutAnimation: true,
            keepAspect: true,
            textStyle: {
                fontWeight: 'bold',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 200) + 50,
                        Math.round(Math.random() * 50),
                        Math.round(Math.random() * 50) + 50
                    ].join(',') + ')';
                }
            },
            emphasis: {
                textStyle: {
                    color: '#528'
                }
            },
            data: data.sort(function (a, b) {
                return b.value - a.value;
            })
        }]
    };

    maskImage.onload = function () {
        option.series[0].maskImage
        myChart.setOption(option);
    }

    maskImage.src = '../images/peach-logo.png';
    window.onresize = myChart.resize;
})();