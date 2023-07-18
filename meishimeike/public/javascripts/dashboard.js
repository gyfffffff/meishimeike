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
    var keywords = {
        '甜品': 126,
        '宝子们': 32,
        '蛋糕': 63,
        '麻辣': 42,
        '配菜': 80,
        '真的': 302,
        '小区': 34,
        '打卡': 562,
        '好吃': 412,
        '甜而不腻': 32,
        '入味': 98,
        '鲜嫩': 38,
        '味道': 303,
        '广州': 55,
        '创意': 35,
        '一杯': 47,
        '这家': 211,
        '不错': 72,
        '佛山': 23,
        '咖啡': 186,
        '周末': 32,
        '咖啡店': 62,
        '奶油': 25,
        '下午茶': 100,
        '春日': 66,
        '招牌': 51,
        '香辣': 42,
        '牛排': 24,
        '意面': 21,
        '酱汁': 37,
        '黄油': 21,
        '店员': 21,
        '口感': 259,
        '美食': 276,
        get: 22,
        '朋友': 36,
        '小寨': 20,
        '鸡翅': 21,
        '夜宵': 23,
        '烤肉': 82,
        '烧烤': 99,
        '口味': 97,
        '新鲜': 117,
        '烧烤店': 28,
        '美味': 32,
        '性价比': 33,
        '烤串': 25,
        '肉质': 66,
        '特色美食': 28,
        '低卡': 23,
        '成都': 43,
        '汤底': 45,
        '酱料': 45,
        '探店': 301,
        '武汉': 38,
        '小吃': 51,
        '攻略': 38,
        '酸酸甜甜': 86,
        '很甜': 23,
        '颜值': 94,
        '生菜': 31,
        '拼盘': 42,
        '刺身': 41,
        '海鲜': 78,
        '火锅': 150,
        '招牌菜': 27,
        '日式': 47,
        '自助': 39,
        '惊艳': 35,
        '不腻': 80,
        '芝士': 154,
        '炸鸡': 23,
        '他家': 69,
        '海苔': 20,
        '啊啊啊': 32,
        '韩式': 36,
        '年糕': 28,
        '小姐姐': 119,
        nice: 57,
        '食材': 124,
        '豆花': 47,
        '精酿': 28,
        '鸡爪': 26,
        '一口': 87,
        '啤酒': 33,
        '必点': 65,
        '蒜蓉': 45,
        '夏天': 38,
        '羊肉串': 21,
        '太香': 27,
        '辣椒': 27,
        '可以': 76,
        '脆爽': 24,
        '鲜虾': 31,
        '沙拉': 42,
        '芒果': 43,
        '餐厅': 137,
        '鲜甜': 65,
        '西安': 35,
        '牛腩': 21,
        '超级': 94,
        '吼吼': 23,
        '料理': 57,
        '花园': 26,
        '私房': 26,
        '咖喱': 52,
        '黑松': 36,
        '城店': 47,
        '新晋': 33,
        '喝咖啡': 24,
        '春天': 39,
        '食间': 43,
        '锅底': 22,
        '五一': 170,
        '喜欢': 81,
        '大厦': 26,
        '杭州': 34,
        '网红': 250,
        '菜品': 125,
        '入口': 32,
        '微辣': 21,
        '很足': 48,
        '卤味': 28,
        '汇店': 25,
        coffee: 41,
        '特色': 58,
        '北京': 23,
        '同款': 45,
        '脆皮': 33,
        '小伙伴': 34,
        '酥脆': 43,
        '酒吧': 26,
        '氛围': 39,
        '黑椒': 23,
        '份量': 27,
        '好喝': 52,
        '柠檬茶': 34,
        '千层': 22,
        '开心果': 26,
        '奶香': 26,
        '浪漫': 50,
        '游玩': 22,
        '潮汕': 42,
        '雪花': 28,
        '牛舌': 31,
        '脆脆': 24,
        '豆腐': 25,
        '比较': 38,
        '广场': 98,
        '无国界': 22,
        '露营': 37,
        '粉粉': 26,
        '烘焙': 25,
        '好看': 27,
        '拍照': 296,
        '特别': 61,
        '宝子': 27,
        '爽滑': 55,
        '拌面': 20,
        '正宗': 37,
        '团建': 20,
        '太会': 28,
        '出片': 78,
        '哈哈哈': 50,
        '街店': 23,
        '包包': 53,
        '万达': 44,
        '安利': 59,
        '咖啡馆': 22,
        '可爱': 27,
        '薯条': 23,
        '即化': 22,
        '意式': 21,
        '三文鱼': 83,
        '服务': 31,
        '风味': 26,
        '还有': 41,
        '长沙': 40,
        '泰式': 51,
        '大排档': 44,
        '寿司': 32,
        '牛油果': 49,
        '鳗鱼': 33,
        '中式': 25,
        '网红店': 23,
        '高颜值': 42,
        '牛肉': 180,
        '泡菜': 20,
        '宁波': 23,
        '水果': 29,
        '推荐': 56,
        '微醺': 21,
        '闺蜜': 45,
        '小聚': 22,
        '奶茶': 67,
        '万象': 33,
        '日料': 46,
        '寿喜锅': 26,
        '姐妹': 35,
        '肥牛': 30,
        '外卖': 29,
        '一份': 20,
        '鲍鱼': 34,
        '美式': 53,
        '新品': 30,
        '紧实': 26,
        '超有': 26,
        '套餐': 30,
        '面包': 28,
        '特调': 30,
        '心水': 25,
        '话题': 32,
        '桂花': 30,
        '吃货': 22,
        '草莓': 26,
        '宝藏': 34,
        '牛杂': 23,
        '顺德': 26,
        '糯米饭': 21,
        '榴莲': 30,
        '新店': 69,
        '菠萝': 29,
        '浓郁': 33,
        '椰子': 33,
        '排队': 21,
        '鸡肉': 26,
        '毛肚': 43,
        '重庆': 75,
        '手工': 42,
        '肥肠': 36,
        '焦糖': 53,
        '点小二': 277,
        Bistro: 24,
        '很多': 29,
        '西餐': 30,
        '它家': 21,
        '餐廳': 27,
        '小馆': 31,
        '薄荷': 23,
        '清爽': 46,
        '深圳': 28,
        '一家': 33,
        '服务态度': 21,
        '下饭': 33,
        '搭配': 64,
        '爆汁': 21,
        '解腻': 40,
        '炒肉': 23,
        '五花肉': 49,
        '超爱': 21,
        '爆珠': 27,
        '小炒': 24,
        '柠檬': 42,
        '点单': 21,
        '店铺': 33,
        '香味': 27,
        '真滴': 22,
        '路店': 50,
        '秘制': 32,
        '果酱': 20,
        '冰淇淋': 45,
        '免费': 21,
        '原味': 27,
        '串串': 22,
        '装修': 30,
        '咕嘟': 23,
        '旅游': 39,
        '满满': 22,
        '寻味': 36,
        '老板': 45,
        '油焖': 26,
        '重庆火锅': 22,
        '妥妥': 26,
        '小龙虾': 42,
        '龙虾': 32,
        '创作': 54,
        '烤全羊': 21,
        '菜馆': 21,
        '蟹肉': 24,
        '海胆': 24,
        '吃饭': 28,
        '薯片': 20,
        '酒场': 30,
        DIY: 31,
        '低糖': 20,
        '宵夜': 29,
        '汤汁': 58,
        '制作': 38,
        '复古': 35,
        '酒屋': 28,
        '环境': 24,
        '大虾': 39,
        '鲜美': 41,
        '预约': 28,
        '提前': 23,
        '鸟店': 26,
        '鱼肉': 20,
        '精致': 21,
        '锅里': 36,
        '中古': 31,
        '很绝': 21,
        '烤鸡': 27,
        '饮料': 21,
        '每款': 24,
        '港式': 21,
        '猪肉': 35,
        '分钟': 208,
        '咸蛋': 22,
        hin: 36,
        '味蕾': 26,
        '昆明': 21,
        '主厨': 23,
        '火锅店': 24,
        '宫崎骏': 204,
        '感觉': 41,
        '椰汁': 23,
        '小镇': 211,
        zui: 36,
        '聚餐': 36,
        '体验': 23,
        '爱喝': 35,
        '哇塞': 26,
        '感受': 23,
        '边炉': 23,
        '粤菜': 25,
        '店面': 22,
        '简直': 22,
        '吃喝玩乐': 23,
        '惊喜': 22,
        '秋葵': 24,
        '冬阴功': 38,
        '炸蛋': 22,
        '奢侈品': 36,
        '安格斯': 22,
        '民宿': 207,
        '明太子': 26,
        '西葫芦': 28,
        LV: 30,
        '蟹子': 22,
        '鳥勝烧': 22,
        '路北区': 22,
        '大里': 22,
        '乌冬面': 23,
        '虾饼': 21,
        '红酒': 21,
        '米线': 23,
        '调调': 204,
        '滋味': 20,
        '五一广场': 21,
        '古北': 21,
        '油条': 25,
        '粉椰': 20,
        '天涯': 204,
        '打包': 21,
        '清汤': 24,
        '蓝白': 202,
        '镇子': 202,
        '马岭': 203,
        '日漫里': 202,
        '书屋': 202,
        '三亚市': 202,
        '宝藏三亚': 201,
        '一定': 27,
        '龍二': 20
    }
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