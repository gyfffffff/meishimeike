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
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
                data: [2, 0, 1, 2, 16, 80, 6, 0, 0, 2, 1, 2]
            },
            {
                name: '西餐',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                data: [2, 1, 0, 0, 6, 81, 6, 0, 0, 2, 2, 3]
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
            data: ['日料', '韩料'],
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
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Oct", "Nov", "Dec"],
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
                name: '日料',
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
                data: [3, 0, 5, 8, 22, 139, 9, 0, 0, 5, 0, 0]
            },
            {
                name: '韩料',
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
                data: [0, 0, 2, 2, 1, 52, 9, 0, 0, 1, 0, 0]
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
                    show: false,
                    position: 'center'
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
                    { value: 2912, name: '大众点评' },
                    { value: 280, name: '企鹅吃喝指南' },
                    { value: 63, name: 'ShanghaiBUYBUY' },
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
                    { value: 286, name: '￥10-29/人' },
                    { value: 245, name: '￥30-49/人' },
                    { value: 240, name: '￥50-69/人' },
                    { value: 243, name: '￥70-89/人' },
                    { value: 263, name: '￥90-109/人' },
                    { value: 143, name: '￥110-129/人' }
                ]
            }
        ]
    };
    myChart.setOption(option)
    // 适应屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();

(function () {
    var myChart = echarts.init(document.querySelector('.map .chart'), null, {
        width : '580px',
        height : '560px',
    });
    var keywords = {"姐妹":1,"芒果":3,"鲜虾":2,"河粉":2,"拍照":2,"氛围":3,"超级":2,"泰国":8,"到位":1,"特别":1,"适合":2,"宝子":3,"牛肉汤":1,"爽滑":1,"劲道":1,"仿佛":1,"泰式":63,"五颗星":1,"泰裤":1,"我要":1,"排骨":4,"餐厅":23,"疫情":2,"火山":2,"长沙":2,"冬荫功":2,"泰国菜":25,"但是":2,"不错":3,"很泰":2,"喜欢":3,"真的":8,"很棒":2,"唧唧":2,"哈哈哈哈":2,"祝愿":2,"平价":4,"最最":2,"探店":5,"娜娜":1,"烤牛肉":1,"西安":1,"薯条":2,"倒杯水":1,"烤半鸡":1,"意式":1,"黑松":1,"野菇":1,"出片":2,"服务态度":1,"沙拉":5,"西餐":1,"薄荷":1,"美式":2,"香草":1,"奶油":2,"鸡肉":5,"咖喱":32,"好吃":10,"萨瓦迪":1,"卡泰餐":1,"泰味":1,"配着":1,"新店":2,"正宗":4,"菠萝":3,"而且":1,"牛肉":3,"味道":5,"面包片":1,"特色美食":1,"粒粒":1,"同款":2,"象神":1,"招牌":3,"沙田":2,"keep":2,"蝦球":2,"肉汁":4,"試吓":2,"算易":2,"大學出":2,"個黃底":2,"紅字":2,"遠遠":2,"馳名":2,"一鍋":2,"雞件":2,"微黃油":2,"添香":2,"夠綿滑":2,"口味":3,"辣椒粉":1,"酸梅":1,"光看":1,"爆汁":1,"很嫩":1,"炫光":1,"现烘":1,"很绝":1,"我选":1,"特调":2,"辣辣的":4,"蘸上":3,"烤鸡":18,"酸酸":2,"馅料":1,"酱汁":2,"放題":1,"日式":1,"小時":1,"任食":1,"海鮮":1,"壽司":1,"飲品":1,"自助":1,"香港":1,"沙律":2,"刺身":1,"蒜蓉":3,"雪糕":1,"APM":1,"隔離":1,"魚恤":1,"冷盤":1,"帶子":1,"橄榄":1,"柠檬茶":3,"夏日":6,"清爽":2,"香茅":1,"兰德":2,"柠檬":4,"天花板":1,"回魂":1,"甜腻":1,"春莱":1,"望平":1,"街店":1,"高颜值":1,"橄清":1,"颜值":2,"粉粉":1,"超酸爽":1,"汤底":3,"麻辣烫":2,"港惠":1,"红荔村":1,"冬阴功":24,"小推车":1,"汤汁":1,"西区":1,"豆腐":3,"对面":1,"藕片":1,"空盘":1,"芝士":4,"凑上":1,"门口":1,"打卡":4,"很爽":1,"星人":1,"牛寿喜":1,"漳州":1,"安格斯":2,"虾片":3,"快冲":1,"店名":9,"兀锅":1,"牛板腱":1,"关东煮":1,"天妇":1,"罗虾":1,"腹肉":1,"肥牛":1,"拼盘":1,"胶原":1,"万达":1,"芭堤":2,"青梅竹马":2,"朋友圈":1,"泰绿":2,"得奶":1,"宝子们":1,"SM":1,"越溪":1,"清甜":2,"袋装":1,"企划":1,"春日":1,"好喝":1,"奶茶":19,"大排档":4,"潮庭":1,"佛山":1,"海鲜":4,"烤生":1,"顿城":1,"鸡翅":2,"入味":1,"口感":11,"鲜甜":8,"外焦里嫩":1,"禅城区":1,"酱料":4,"每款":1,"潮汕":2,"皮皮虾":2,"肉肠":2,"DU":2,"捞汁":2,"一口":5,"上头":2,"这家":5,"新鲜":2,"专门店":3,"整排":2,"泥灰":2,"白粥":2,"戒不掉":2,"鲜到":2,"茶餐厅":1,"牛腩":3,"香甜":1,"可口":1,"沈阳":1,"吐司":5,"铁西":1,"汇五楼":1,"太食":1,"弹牙":1,"玛黄":1,"鲜香":1,"酸辣":4,"虾球":1,"料理":3,"青柠":1,"海悦":1,"鱼片":1,"凤爪":1,"面包":3,"好看":1,"东南亚":3,"嫩嫩":1,"龙津":1,"露营":2,"扇贝":4,"吃生":1,"TukTuks":1,"吃货":1,"生鲜":1,"嘟嘟":1,"份量":1,"那家":1,"打车":1,"室外":1,"番禺":1,"大悦":1,"城店":2,"南开":1,"青木瓜":2,"带回家":1,"逛逛":1,"小丑鱼":1,"尼莫":1,"纯纯":1,"康康":2,"不了":1,"我来":1,"不腻":3,"春鸡":1,"甜品":2,"五彩斑斓":1,"澳门":1,"玉米片":1,"冰冰凉":2,"椰汁":18,"街里":1,"越式":1,"豆蝶花":1,"爆珠":1,"逛累":1,"炸物":1,"冰柜":1,"辣酱":1,"小吃店":1,"解渴":1,"长隆":1,"通菜":1,"长隆店":1,"号线":1,"木莲":1,"鲈鱼":2,"道菜":1,"他家":1,"越南":1,"卡座":1,"杨生":1,"咖喱鸡":2,"焦香":1,"太会":1,"美食家":1,"里脊肉":1,"小囡":1,"家新出":1,"椰口":1,"椰香":1,"皮薄肉":1,"光吃生":1,"song":1,"老惨":1,"不活":1,"巨巨":1,"虾仁":1,"猪肉":1,"枫糖":1,"先吸":1,"美的":1,"高水":1,"泰餐":2,"泰料":2,"放块":1,"虾里":1,"QQ":1,"特特特特":1,"碎末":1,"宝安":1,"NaNa":1,"六七十":1,"开胃":1,"菜品":2,"十足":1,"人均":1,"别错过":1,"扶墙":1,"明炉":1,"柠海":1,"泰北":1,"hin":3,"四色":1,"食堂":1,"浓郁":2,"在育德":1,"汤有":1,"蛮鲜":1,"炒花":1,"花螺":1,"yyds":1,"鸡脚":1,"美食":4,"和谐":1,"脆爽":2,"香茅草":17,"Get":1,"感拉满":1,"新菜":1,"酸爽":1,"酥里":1,"有股":1,"普吉岛":2,"香辣虾":1,"虾炸得":1,"紧实":1,"泰棒":1,"街头":1,"腰果":1,"浓浓的":1,"封神":1,"微辣":1,"椰奶":2,"辣度":1,"点份":1,"炒饭":3,"普颗":1,"沙爹":1,"小酒馆":1,"烧烤":2,"滨江":1,"园区":1,"龙骨":1,"徐来":1,"强推":1,"嘎嘣脆":1,"吃饭":1,"江南":1,"星光点点":1,"美到":1,"style":1,"屋坐":1,"里鹿":1,"萤季":1,"宝龙店":1,"沿街道":1,"泰妃":1,"虾饼":1,"多拿超":1,"糯芋":1,"手卷":1,"太大":1,"青口":2,"虹悦城":1,"外脆":1,"意面":2,"汉堡":1,"出品":1,"禅城":1,"挺舒服":1,"超人气":1,"趁人少":1,"香脆":1,"鸡翼":1,"喇沙":1,"吸晒":1,"食好":1,"辣虾":1,"三明治":2,"配色":1,"搭配":1,"坎昆":1,"十号":1,"还有":1,"Pantry":1,"PANTRY":1,"酒品":1,"人会":1,"点小二":1,"点小浪":1,"低脂":1,"低卡":2,"食间":1,"比基尼":1,"摇滚":1,"爽口":2,"鲜美":1,"滋味":1,"十里香":1,"软乎乎":1,"土豆泥":2,"酸酸甜甜":3,"花胶":1,"胶汁":1,"胃里":1,"娇嫩嫩":1,"炸过":1,"咬开":1,"手打":2,"茶底":1,"巷店":1,"brunch":1,"大学城":1,"益菌":1,"小姐姐":2,"牛油果":1,"鸡胸肉":2,"特色小吃":1,"Brunch":1,"人点":1,"炫完":1,"旺角":1,"入面":1,"牛舌":1,"三人行":1,"燒到":1,"白鱔":1,"燒得":1,"皮燒":1,"煙肉":1,"珍寶菇":1,"包豚":1,"生菜":2,"加好":1,"马场":1,"八爪":1,"咕噜":1,"葱头":1,"新晋":1,"粤菜馆":1,"真滴":1,"粤菜":1,"腐竹":1,"私房":1,"甜椒":1,"高汤":4,"...":1,"网红":1,"鬼马":1,"云南菜":1,"重庆":1,"光环":1,"山岚":1,"爆浆":1,"鸡汤":1,"购物中心":1,"云南旅游":1,"焦脆":3,"云南":1,"每道菜":2,"配菜":1,"生日快乐":1,"万象":1,"入口":1,"香味":1,"快乐":1,"甜而不腻":2,"一整块":1,"碳水":2,"正街":1,"L558":1,"它家":1,"贵刁":1,"焦糖":1,"套餐":1,"玫瑰":1,"咖啡":9,"工作日":1,"中午":1,"南新":1,"cafe":1,"太多人":1,"窗边":1,"定食":1,"饭类":1,"加钱":1,"拋菜":1,"拋肉":1,"碎饭":1,"肉碎":1,"颐堤":1,"大虾":1,"干饭":1,"选中":1,"优雅":1,"大开":1,"胃口":1,"小小":1,"点汤":1,"榴莲":1,"捞奶":1,"成都":1,"春武里":1,"控都":1,"我点":1,"奶味蛮":1,"浓稠":1,"冰摇":1,"ju":1,"青酱":1,"辣八爪":1,"口令":4,"原价":2,"盲盒":2,"到手":2,"低至":2,"零食":3,"专区":4,"司令":2,"直降":2,"补漏":2,"city":1,"super":1,"奶酪":1,"货架":1,"超市":1,"蛋卷":1,"调味":3,"蔬菜":1,"火腿":1,"熟成":1,"牛排":3,"品牌":1,"推荐":17,"独家":1,"选品":1,"如果":1,"相当":1,"巧克力":2,"大促":2,"M9":2,"SOE":2,"只要":2,"任选":2,"冷泡":2,"精品":2,"速食":2,"羊肉":3,"部位":3,"滩羊":3,"脂肪":3,"毛豆":3,"胸口":3,"老板":3,"横膈膜":3,"肉冻":3,"中式":3,"瘦肉":3,"椒盐":3,"羊羔":3,"食材":6,"菲力":3,"烤串":4,"Carpaccio":3,"每口":3,"推荐人":3,"燕麦片":3,"红酒":3,"披萨":4,"米粉":3,"购买":3,"配料表":3,"常州":3,"企鹅":3,"朋友":3,"风味":6,"方式":3,"盒马":4,"莓果":3,"天德":1,"甘苦":1,"广场":1,"杯中":1,"洄游":1,"鲨鱼":1,"杯中物":1,"脚程":1,"浓咖啡":1,"成景":1,"漫觀":1,"随享":1,"一靜旎":1,"閒適":1,"漫活":1,"Harpooner":1,"青梅":1,"甜甜的":1,"老挝":1,"一提":1,"人手":1,"错过":1,"地铁口":1,"喝冰":1,"泰剧":1,"蛋糕":2,"芭芭厘":1,"正佳":1,"蜜桃":1,"浪漫":1,"犹如":1,"炭烧":2,"优惠期":1,"创作":1,"花花草草":1,"肉质":3,"避风塘":1,"青龙":2,"潮安":1,"火锅":2,"潮汕人":1,"膏蟹":1,"对半":1,"日料":1,"半鸡":1,"居石捞":1,"虾生":1,"庵埠店":1,"可冲":1,"鲍鱼":1,"大气":1,"升级":1,"无国界":1,"小炒":1,"夏天":1,"香水":1,"一杯":1,"凉凉":1,"爆爽":1,"解腻":1,"清清爽爽":1,"就是":1,"三阳":1,"当然":1,"喝上":1,"饮品":1,"红茶":1,"苦涩":1,"YCC":1,"好爽":1,"虾油":1,"油香":1,"超正":1,"回甘":1,"薄体":1,"虾头":1,"满是":1,"虾膏":1,"滑大颗":1,"牙好":1,"爱喝":16,"糯米饭":16,"哈哈哈":16,"浅试":16,"top":16,"普艾斯":16,"POETS":16,"Thai":16,"雷的品":16,"nan":16,"腌渍":1,"分钟":1,"可以":2,"洋葱":2,"增味":1,"凤梨":1,"烹饪":1,"健康":1,"切片":1,"凉拌":1,"盐渍":1,"鸡大胸":1,"版麦乐":1,"拆丝":1,"番茄":1,"三文鱼":1,"肉酱":1,"放入":1,"花菜":1,"替换成":1,"菜梗":1,"工坊":1,"新品":1,"这盒":1,"乳鸽":1,"桃酥":1,"单品":1}
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