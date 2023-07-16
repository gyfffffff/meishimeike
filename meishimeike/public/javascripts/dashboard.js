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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                barWidth: '35%',
                name: '直接访问',
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
                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
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
                data: ['1', '1', '1', '4', '5', '6'],
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
                data: [18, 29, 20, 34, 40, 44, 23],
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
                    formatter: '{c}%'
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
    var yearData = [
        {
            year: "2020", // 年份
            data: [ // 两个数组是因为有两名线
                [24, 40, 101, 134, 90, 236, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 90, 0, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021', // 年份
            data: [ // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                name: 'Email',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: 'Union Ads',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                data: yearData[0].data[1]
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

(function(){
    var myChart = echarts.init(document.querySelector('.map .chart'));

    var keywords = {
        "visualMap": 22199,
        "continuous": 10288,
        "contoller": 620,
        "series": 274470,
        "gauge": 12311,
        "detail": 1206,
        "piecewise": 4885,
        "textStyle": 32294,
        "markPoint": 18574,
        "pie": 38929,
        "roseType": 969,
        "label": 37517,
        "emphasis": 12053,
        "yAxis": 57299,
        "name": 15418,
        "type": 22905,
        "gridIndex": 5146,
        "normal": 49487,
        "itemStyle": 33837,
        "min": 4500,
        "silent": 5744,
        "animation": 4840,
        "offsetCenter": 232,
        "inverse": 3706,
        "borderColor": 4812,
        "markLine": 16578,
        "line": 76970,
        "radiusAxis": 6704,
        "radar": 15964,
        "data": 60679,
        "dataZoom": 24347,
        "tooltip": 43420,
        "toolbox": 25222,
        "geo": 16904,
        "parallelAxis": 4029,
        "parallel": 5319,
        "max": 3393,
        "bar": 43066,
        "heatmap": 3110,
        "map": 20285,
        "animationDuration": 3425,
        "animationDelay": 2431,
        "splitNumber": 5175,
        "axisLine": 12738,
        "lineStyle": 19601,
        "splitLine": 7133,
        "axisTick": 8831,
        "axisLabel": 17516,
        "pointer": 590,
        "color": 23426,
        "title": 38497,
        "formatter": 15214,
        "slider": 7236,
        "legend": 66514,
        "grid": 28516,
        "smooth": 1295,
        "smoothMonotone": 696,
        "sampling": 757,
        "feature": 12815,
        "saveAsImage": 2616,
        "polar": 6279,
        "calculable": 879,
        "backgroundColor": 9419,
        "excludeComponents": 130,
        "show": 20620,
        "text": 2592,
        "icon": 2782,
        "dimension": 478,
        "inRange": 1060,
        "animationEasing": 2983,
        "animationDurationUpdate": 2259,
        "animationDelayUpdate": 2236,
        "animationEasingUpdate": 2213,
        "xAxis": 89459,
        "angleAxis": 5469,
        "showTitle": 484,
        "dataView": 2754,
        "restore": 932,
        "timeline": 10104,
        "range": 477,
        "value": 5732,
        "precision": 878,
        "target": 1433,
        "zlevel": 5361,
        "symbol": 8718,
        "interval": 7964,
        "symbolSize": 5300,
        "showSymbol": 1247,
        "inside": 8913,
        "xAxisIndex": 3843,
        "orient": 4205,
        "boundaryGap": 5073,
        "nameGap": 4896,
        "zoomLock": 571,
        "hoverAnimation": 2307,
        "legendHoverLink": 3553,
        "stack": 2907,
        "throttle": 466,
        "connectNulls": 897,
        "clipOverflow": 826,
        "startValue": 551,
        "minInterval": 3292,
        "opacity": 3097,
        "splitArea": 4775,
        "filterMode": 635,
        "end": 409,
        "left": 6475,
        "funnel": 2238,
        "lines": 6403,
        "baseline": 431,
        "align": 2608,
        "coord": 897,
        "nameTextStyle": 7477,
        "width": 4338,
        "shadowBlur": 4493,
        "effect": 929,
        "period": 225,
        "areaColor": 631,
        "borderWidth": 3654,
        "nameLocation": 4418,
        "position": 11723,
        "containLabel": 1701,
        "scatter": 10718,
        "areaStyle": 5310,
        "scale": 3859,
        "pieces": 414,
        "categories": 1000,
        "selectedMode": 3825,
        "itemSymbol": 273,
        "effectScatter": 7147,
        "fontStyle": 3376,
        "fontSize": 3386,
        "margin": 1034,
        "iconStyle": 2257,
        "link": 1366,
        "axisPointer": 5245,
        "showDelay": 896,
        "graph": 22194,
        "subtext": 1442,
        "selected": 2881,
        "barCategoryGap": 827,
        "barGap": 1094,
        "barWidth": 1521,
        "coordinateSystem": 3622,
        "barBorderRadius": 284,
        "z": 4014,
        "polarIndex": 1456,
        "shadowOffsetX": 3046,
        "shadowColor": 3771,
        "shadowOffsetY": 2475,
        "height": 1988,
        "barMinHeight": 575,
        "lang": 131,
        "symbolRotate": 2752,
        "symbolOffset": 2549,
        "showAllSymbol": 942,
        "transitionDuration": 993,
        "bottom": 3724,
        "fillerColor": 229,
        "nameMap": 1249,
        "barMaxWidth": 747,
        "radius": 2103,
        "center": 2425,
        "magicType": 3276,
        "labelPrecision": 248,
        "option": 654,
        "seriesIndex": 935,
        "controlPosition": 121,
        "itemGap": 3188,
        "padding": 3481,
        "shadowStyle": 347,
        "boxplot": 1394,
        "labelFormatter": 264,
        "realtime": 631,
        "dataBackgroundColor": 239,
        "showDetail": 247,
        "showDataShadow": 217,
        "x": 684,
        "valueDim": 499,
        "onZero": 931,
        "right": 3255,
        "clockwise": 1035,
        "itemWidth": 1732,
        "trigger": 3840,
        "axis": 379,
        "selectedOffset": 670,
        "startAngle": 1293,
        "minAngle": 590,
        "top": 4637,
        "avoidLabelOverlap": 870,
        "labelLine": 3785,
        "sankey": 2933,
        "endAngle": 213,
        "start": 779,
        "roam": 1738,
        "fontWeight": 2828,
        "fontFamily": 2490,
        "subtextStyle": 2066,
        "indicator": 853,
        "sublink": 708,
        "zoom": 1038,
        "subtarget": 659,
        "length": 1060,
        "itemSize": 505,
        "controlStyle": 452,
        "yAxisIndex": 2529,
        "edgeLabel": 1188,
        "radiusAxisIndex": 354,
        "scaleLimit": 1313,
        "geoIndex": 535,
        "regions": 1892,
        "itemHeight": 1290,
        "nodes": 644,
        "candlestick": 3166,
        "crossStyle": 466,
        "edges": 369,
        "links": 3277,
        "layout": 846,
        "barBorderColor": 721,
        "barBorderWidth": 498,
        "treemap": 3865,
        "y": 367,
        "valueIndex": 704,
        "showLegendSymbol": 482,
        "mapValueCalculation": 492,
        "optionToContent": 264,
        "handleColor": 187,
        "handleSize": 271,
        "showContent": 1853,
        "angleAxisIndex": 406,
        "endValue": 327,
        "triggerOn": 1720,
        "contentToOption": 169,
        "buttonColor": 71,
        "rotate": 1144,
        "hoverLink": 335,
        "outOfRange": 491,
        "textareaColor": 58,
        "textareaBorderColor": 58,
        "textColor": 60,
        "buttonTextColor": 66,
        "category": 336,
        "hideDelay": 786,
        "alwaysShowContent": 1267,
        "extraCssText": 901,
        "effectType": 277,
        "force": 1820,
        "rippleEffect": 723,
        "edgeSymbolSize": 329,
        "showEffectOn": 271,
        "gravity": 199,
        "edgeLength": 193,
        "layoutAnimation": 152,
        "length2": 169,
        "enterable": 957,
        "dim": 83,
        "readOnly": 143,
        "levels": 444,
        "textGap": 256,
        "pixelRatio": 84,
        "nodeScaleRatio": 232,
        "draggable": 249,
        "brushType": 158,
        "radarIndex": 152,
        "large": 182,
        "edgeSymbol": 675,
        "largeThreshold": 132,
        "leafDepth": 73,
        "childrenVisibleMin": 73,
        "minSize": 35,
        "maxSize": 35,
        "sort": 90,
        "funnelAlign": 61,
        "source": 336,
        "nodeClick": 200,
        "curveness": 350,
        "areaSelectStyle": 104,
        "parallelIndex": 52,
        "initLayout": 359,
        "trailLength": 116,
        "boxWidth": 20,
        "back": 53,
        "rewind": 110,
        "zoomToNodeRatio": 80,
        "squareRatio": 60,
        "parallelAxisDefault": 358,
        "checkpointStyle": 440,
        "nodeWidth": 49,
        "color0": 62,
        "layoutIterations": 56,
        "nodeGap": 54,
        "color(Array": 76,
        "<string>)": 76,
        "repulsion": 276,
        "tiled": 105,
        "currentIndex": 145,
        "axisType": 227,
        "loop": 97,
        "playInterval": 112,
        "borderColor0": 23,
        "gap": 43,
        "autoPlay": 123,
        "showPlayBtn": 25,
        "breadcrumb": 119,
        "colorMappingBy": 85,
        "id": 18,
        "blurSize": 85,
        "minOpacity": 50,
        "maxOpacity": 54,
        "prevIcon": 12,
        "children": 21,
        "shape": 98,
        "nextIcon": 12,
        "showNextBtn": 17,
        "stopIcon": 21,
        "visibleMin": 83,
        "visualDimension": 97,
        "colorSaturation": 56,
        "colorAlpha": 66,
        "emptyItemWidth": 10,
        "inactiveOpacity": 4,
        "activeOpacity": 4,
        "showPrevBtn": 19,
        "playIcon": 26,
        "ellipsis": 19,
        "gapWidth": 19,
        "borderColorSaturation": 10,
        "handleIcon": 2,
        "handleStyle": 6,
        "borderType": 1,
        "constantSpeed": 1,
        "polyline": 2,
        "blendMode": 1,
        "dataBackground": 1,
        "textAlign": 1,
        "textBaseline": 1,
        "brush": 3
    };

    var data = [];
    for (var name in keywords) {
        data.push({
            name: name,
            value: Math.sqrt(keywords[name])
        })
    }

    var maskImage = new Image();

    var option = {
        series: [{
            type: 'wordCloud',
            sizeRange: [4, 150],
            rotationRange: [0, 0],
            gridSize: 0,
            shape: 'pentagon',
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

    maskImage.src = '../images/logo.png';
    window.onresize = myChart.resize;
})();