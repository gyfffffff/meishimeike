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
    var keywords = {"三文鱼":15,"日料":58,"寿司":23,"万象":3,"超火":2,"来二刷":1,"寿喜锅":2,"姐妹":2,"日本料理":1,"肥牛":2,"拼盘":5,"鳗鱼":8,"汕头":3,"好吃":23,"厦门":2,"好看":1,"这家":11,"卡座":4,"鲜甜":11,"高级":2,"酒馆":1,"嘎嘎":1,"土豆":1,"苍蝇":1,"牛肉":8,"唐扬":1,"脆脆":1,"紧实":2,"前菜":1,"鸡块":1,"千峰":1,"饱饱":1,"沙拉":2,"甜点":1,"夏日":3,"食材":23,"深圳":5,"吃得开":1,"多巴胺":1,"端午":1,"鬼使神差":1,"露营":1,"说走就走":1,"拐进":1,"十元":1,"新店":4,"多款":1,"美食":10,"出新":1,"宝藏":2,"吃喝":1,"指南":1,"艺伎":2,"怀石":2,"黑松":4,"包间":2,"松叶":3,"搭配":7,"蟹肉":5,"很鲜":2,"日式":10,"海胆":9,"口感":15,"海参":2,"挺好吃":2,"团建":2,"表演":2,"蒸蛋":2,"金鸡湖":1,"晚霞":1,"徒步":1,"午市":1,"真的":13,"师傅":5,"美食街":1,"要康康":1,"NAIL":1,"BAR":1,"搞大点":1,"坐拥":1,"湖景":1,"智霖":1,"哥靓":1,"靓姐":1,"qq":1,"刺身":21,"很肥":1,"寿喜":3,"二刷":1,"入味":2,"百叶窗":1,"每一件":1,"半成品":1,"品味":1,"正宗":1,"艺术品":1,"呜呜":1,"装修":1,"店里":5,"开心":1,"用心":1,"牛柳":2,"手卷":1,"新鲜":6,"烟熏":1,"苹果":1,"底下":1,"外焦里嫩":1,"吃饭":2,"金融区":1,"焦糖":1,"omakase":10,"鰹魚":1,"菜往":1,"魚用":1,"爆油":1,"zui":2,"成都":1,"skp":1,"味道":2,"山葵":1,"家开":1,"牛小排":3,"我点":1,"分熟":1,"劲足":1,"牛片":1,"pin":1,"探店":11,"裹进":1,"鲷鱼":1,"一说到":1,"五一":3,"梵高":1,"假期":1,"日啡夜":1,"拍照":1,"咖啡":7,"调酒":1,"打卡":17,"店名":12,"微醺":1,"还有":1,"背景墙":1,"uu":1,"DJ":1,"西多士":1,"任君":1,"DY":1,"居酒":4,"绫野阁":2,"氛围":5,"秋刀鱼":3,"西葫芦":2,"感日料":2,"蛮大":2,"有板":2,"前位":2,"同款":2,"出片":2,"海威":2,"领界":2,"鸟饭":2,"烧鸟串":2,"淋上":2,"平成":1,"盖浇饭":1,"小姐姐":2,"字绝":1,"五花":1,"一份":1,"世博":1,"忙来忙去":1,"千千万":1,"屋合":1,"绝子":1,"还加":1,"服务态度":1,"今天":1,"鲜美":2,"周到":1,"地道":4,"轻食":1,"鱼米":1,"台柳路":1,"丹青":1,"甜糯":1,"牛油果":3,"天妇":4,"厚切":2,"甜虾":4,"摆盘":4,"舞会":1,"应季":1,"四葉":1,"毛蟹":1,"鱼籽酱":1,"春笋":1,"风物":1,"龙虾":1,"金枪鱼":4,"牡丹":1,"卡尔顿":1,"主厨":3,"品匯":1,"京都":1,"店庆":1,"蓝鳍":1,"大腹":2,"松茸":1,"烧肉":4,"他家":2,"西三环":1,"鲍鱼":2,"一周年":1,"宴请":1,"手握":3,"吃掉":1,"油脂":1,"商务":1,"烤制":1,"杭州":3,"哇塞":2,"吧台":4,"烧鸟":4,"..":1,"TANKAI":1,"藏匿在":1,"小哥":1,"包厢":1,"酒水":1,"不赖":1,"生食":1,"长沙":2,"治愈":1,"鸟店":1,"店内":3,"炸物":2,"叁于":1,"鸟炸物店":1,".#":1,"门头":1,"攻略":2,"街边":1,"市井":1,"映照":1,"满满":3,"猪排":1,"布丁":1,"乐堤":1,"海鲜":4,"远洋":1,"特别":1,"无脑":1,"生鱼片":1,"惊世":1,"当请":1,"可太大":1,"闺蜜来":1,"洽淡":1,"超多":1,"扇贝":5,"比较":1,"芝士":10,"尚白":2,"那种":1,"分享":2,"推荐":3,"很香":1,"江左":1,"鱼翅":1,"有点":1,"权八居":1,"酒屋":3,"尖沙咀":1,"荞麦面":1,"炭烧":2,"牛舌":4,"鸡肉":2,"薄饼":1,"饺子皮":1,"菇类":1,"配菜":1,"Omakase":4,"盲盒":6,"用餐":1,"超级":6,"宝子":2,"料理店":2,"食材来":1,"饱足":1,"匠心":1,"盖饭":3,"香米":1,"板前":1,"新味":1,"籽酱":2,"芥末":1,"泡菜":1,"鲜嫩":3,"中式":4,"厨师":1,"料理":1,"蛮有意思":1,"去腥":1,"初体验":1,"淮扬菜":1,"加持":1,"赏味":1,"Nanotte":1,"Gallery":1,"盐烧":2,"顺联":2,"草莓":3,"公园":2,"青花鱼":4,"制作":5,"酸酸甜甜":2,"南海区":2,"妥妥":2,"国店":2,"小森日":1,"乌冬":1,"黑胡椒":1,"科兴":1,"春日":2,"新品":2,"可口":1,"宫崎骏":1,"炸鸡翅":1,"粤海":1,"必来试":1,"IP":1,"聚聚":1,"大头虾":1,"放题":1,"榴莲":2,"自助":3,"鱼腩":1,"店卷":1,"城店":3,"必点":1,"饱嘴":1,"红虾":1,"脆口":1,"但是":1,"香嫩":1,"烤炙":1,"没话":1,"肝超":1,"藩后":1,"号口":1,"相当":2,"小伙伴":1,"地铁站":1,"百子":1,"酒场":1,"餐厅":3,"三拼":1,"菲力":4,"牛排":6,"满足":2,"更是":1,"停车":2,"瞬间":1,"这道":1,"愉快":1,"牛饭":1,"点小二":4,"店员":1,"部位":4,"玫瑰":1,"牛烧":1,"极上":1,"羽下":1,"肉店":1,"种草":1,"牛堡":1,"不腻":1,"一人前":1,"鳕鱼":1,"没得说":1,"享受":1,"牛肉饼":1,"别错过":1,"很绝":1,"巨香":1,"肝厚":1,"切入口":1,"浓而":1,"肥而":1,"老板":7,"惊艳":5,"非常":5,"店面":3,"不失":3,"感觉":3,"精心":3,"月光":3,"挑选":3,"码头":3,"感受":3,"而成":3,"仙女们":3,"性价比":4,"牛蒡":2,"皇庭":2,"L1":2,"庭上":2,"小熊":2,"福田":2,"创作":3,"笔记":2,"助手":3,"广场":3,"卡鲁比":2,"肉酱":1,"葡萄":1,"披萨":1,"多肉":1,"稀稀拉拉":1,"鱿鱼":1,"果肉":1,"情侣":1,"山楂":1,"约会":2,"创意":1,"一拍":1,"浓郁":1,"随手":1,"居民楼":1,"我区":1,"老客":1,"hin":2,"时遇":1,"漫里":1,"营业时间":2,"不好":1,"健谈":1,"开在":1,"小店":1,"老板娘":1,"几样":1,"免费":1,"津港":1,"讲真":1,"大悦":1,"长风":1,"不贵":1,"还行":1,"兼职":1,"五次":1,"打折":1,"加油":1,"实惠":1,"爱人":1,"地铁":1,"心意":1,"抽象派":1,"上海":2,"餐饮":1,"庭院":1,"大师":1,"于市":1,"Menu":1,"每上":1,"从桌":1,"每口":4,"佛山":1,"饭团":1,"可爱":1,"馅料":1,"一口":2,"精致":2,"万科":1,"鹿林":1,"情报站":1,"芒果":1,"九宫格":1,"海苔":3,"感拉满":1,"鱼籽":1,"饭鹅肝":1,"好鲜":1,"酸甜":4,"富士山":1,"饭盒":1,"火腿":2,"乳鸽":1,"哈密瓜":1,"咸甜":1,"中腹":1,"自助餐":1,"桂花香":1,"心心念念":1,"家必":1,"有股":1,"咸香":1,"颜值":1,"岩田":1,"预订":1,"拉面":2,"酒肴":1,"时令":2,"本馆":1,"红春":1,"春季":1,"清甜":2,"细腻":1,"碗豆":1,"叉烧":1,"熙街":1,"大学城":1,"特地":1,"闺蜜":2,"筋道":1,"vlog":1,"秋山":1,"味蕾":1,"好久没":1,"辣味":1,"好找":1,"物美价廉":1,"大厨":1,"庭院式":1,"青枫":1,"春天":2,"四川北路":1,"隐在":1,"中刷":1,"尽享":1,"盘锦":1,"铁板":1,"咖喱":1,"大勝":1,"南商网":1,"s3":1,"出餐":1,"感解":1,"人均":1,"仪式":1,"可以":1,"八贯":1,"必选":1,"香醇":1,"这周":1,"吃法":1,"菜品":2,"西红门":1,"原心":1,"明太子":1,"鸡翅":1,"酱汁":1,"山姆":1,"食堂":2,"新光":1,"选用":1,"多汁":1,"肉质":2,"一道":1,"特种兵":1,"哈哈":2,"追星":1,"脱口秀":1,"会爱":1,"人来":1,"chic":1,"let":1,"sfun":1,"佛系":1,"春食":1,"大叔":1,"鱼生":1,"放过":1,"故事":1,"桌袱":1,"私厨":1,"直身":1,"络腮":1,"style":1,"芝罘区":1,"酒精类":1,"价不低":1,"wasabi":1,"尽多":1,"山葵家":2,"六种":1,"军舰":1,"六粒":1,"鲜虾":2,"罗虾":1,"虾肉":1,"吃喝玩乐":1,"小包":1,"店家":1,"贴心":1,"生日":1,"孩子":1,"安静":1,"波斯顿":1,"商务楼":1,"对半开":1,"澳门":1,"购物中心":1,"贡多拉":1,"路环":1,"喜乐":1,"伦敦":1,"威尼斯人":1,"全攻略":1,"巴黎":1,"龙环":1,"葡韵":1,"嘉模":1,"teamlab":1,"御莲宫":1,"大三巴":1,"烂鬼":1,"楼巷":1,"洪馨":1,"中山":1,"提前":1,"充分":1,"坠新":1,"booking":1,"晚市":1,"gui":1,"菜式":1,"蛋液":2,"排长队":1,"很爽":1,"可冲":1,"餐品":1,"汤底":2,"菌菇":2,"吃超":1,"玉子":1,"烧该":1,"走过":1,"面包店":1,"mi":1,"更多山":1,"手作":1,".....":1,"但六运":1,"美翻":1,"网红拿铁":1,"chouchou":1,"mini":1,"口直":1,"广州":1,"旧区":1,"西安":1,"樱花":2,"樱花季":1,"胸针":1,"切肉":1,"旅游":1,"口味":3,"无限":2,"慕斯":1,"法餐":1,"Le":1,"Comptoir":1,"风味":5,"小酒馆":1,"元档":1,"菜单":1,"泰安":1,"层次":1,"米其林":4,"邱天":2,"Pierre":1,"西餐厅":1,"冰淇淋":2,"Gelato":2,"榛子":2,"黄油":2,"高知":2,"La":2,"Perla":2,"皮埃蒙特":2,"奶酪":3,"奶油":2,"柚子":2,"......":2,"法甜":2,"老化":2,"酥饼":2,"冰渣":2,"链接":3,"口令":9,"原价":7,"到手":8,"低至":5,"零食":3,"专区":2,"司令":4,"柠檬":2,"直降":2,"补漏":2,"菱角":1,"茭白":1,"鸡头米":1,"辅材":1,"蜜瓜":3,"莲藕":1,"毛豆":4,"糖水":1,"莲子":1,"调味":2,"鸡汤":1,"顶上":1,"分钟":1,"橙子":1,"TT":1,"龟泉":1,"酵母":1,"清酒":7,"酒造":7,"果香":1,"CEL":1,"菠萝":1,"酒米":2,"wI2tdtOQAnE":1,"知县":1,"粘贴":1,"酒款":3,"淘宝":2,"朋友":1,"心动":1,"独家":2,"city":1,"super":1,"货架":1,"超市":1,"蛋卷":1,"蔬菜":1,"熟成":4,"高汤":2,"品牌":1,"选品":1,"如果":1,"甜酒":3,"秒杀":5,"限时":2,"淘口":2,"单支":2,"梅酒":2,"贵腐":2,"獭祭":2,"tb":2,"白葡萄酒":5,"bkkOdqjIJ9F":2,"市集":2,"这支":3,"精米":2,"中后":2,"企鹅":2,"果味":2,"榨取":2,"店铺":2,"田中":2,"酒体":2,"乙天":2,"鲜香":2,"跳转":1,"酒庄":4,"点击":1,"复制":1,"日日":1,"手机":1,"打开":1,"Pingus":1,"满分":1,"新政":1,"年份":1,"全网":1,"波尔多":1,"滴金":1,"一箱":3,"椰子":4,"腰果":1,"坚果":1,"柿种":1,"巧克力":1,"开心果":1,"酥脆":1,"原味":1,"柑橘":1,"增味":1,"鱼虾":1,"青柠":1,"浓浓":1,"杜氏":1,"神之穗":1,"旨味":1,"酿酒":1,"硬核":1,"安利":1,"酿酒师":1,"果汁":1,"酿出":1,"大促":1,"减后":1,"霓虹":1,"羊肉":3,"滩羊":3,"脂肪":3,"胸口":3,"横膈膜":3,"肉冻":3,"瘦肉":3,"椒盐":3,"羊羔":3,"烤串":3,"Carpaccio":3,"九平次":3,"酸度":3,"葡萄酒":3,"低温":3,"田庄":3,"旗舰":3,"一支":3,"特级":3,"登入":3,"酿好":3,"很多":3,"hen":1,"ju":1,"周末":1,"武林":1,"鸟居":1,"liao":1,"鲜咸":1,"炫完":1,"秋刀":1,"宵夜":1,"萤初":1,"高端":1,"四路":1,"高新":1,"花见":1,"王丈":1,"朗臣":1,"口旁":1,"dp":1,"初家":1,"便宜":1,"超爽":1,"七龙珠":1,"洋风":1,"赤焰":1,"小川":1,"会员价":1,"代金券":1,"滑嫩":1,"现烤":1,"青汁":1,"解腻":1,"芥辣":1,"新加坡":1,"罗日料":1,"以天":1,"妇罗":1,"舞茸":1,"Mizuki":1,"松油":1,"鱼子酱":1,"紫苏":1,"老店":1,"自拍":1,"真滴":1,"料蛮":1,"一拌":1,"手鞠":1,"味蛮":1,"银泰":1,"in77A":1,"区店":1,"圆子":1,"恒隆":1,"鲜鱼":1,"昆明":1,"蛏子":1,"双鱼":1,"金桔":1,"迷迭香":1,"买买":1,"店板":1,"塔塔":1,"鸟贝干":1,"避风塘":1,"青龙":1,"蒜蓉":1,"泰式":1,"潮安":1,"火锅":1,"潮汕人":1,"膏蟹":1,"焦脆":1,"对半":1,"半鸡":1,"亲民":1,"香浓":1,"太古":2,"这里":1,"安格斯":1,"优秀":1,"宇治":1,"加贺":1,"原住民":1,"甘醇":1,"雪糕":1,"天河路":1,"Bistro":1,"贵价店":1,"海极":1,"活烤":1,"春熙路":1,"锦江区":1,"不错":1,"里店":1,"号线":1,"E2":1,"nice":1,"食间":1,"冲绳":1,"日料界":1,"南国":1,"川菜":1,"仙霞路":1,"周日":1,"深夜":1,"地址":1,"这些":1}
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