/**
 * Created by James on 05-Mar-17.
 */
var countries = ['China','Japan','South Korea', 'New Zealand', 'India', 'United Kingdom', 'United States of America'];

var years = ['2012', '2013', '2014', '2015', '2016'];


var coords = [
    [14.550072, 47.516231, 0, 'China'],
    [4.469936, 50.503887, 0, 'United States of America'],
    [-106.346771, 56.130366, 0, 'United Kingdom'],
    [-71.542969, -35.675147, 0, 'Japan'],
    [104.195397, 35.86166, 0, 'South Korea'],
    [15.472962, 49.817492, 0, 'India'],
    [10.451526, 51.165691, 0, 'New Zealand'],

];

var data = [



    [
        [68067260, 27.47, 650039027],
        [47793947, 19.29, 650039027],
        [19799614, 7.99, 650039027],
        [7413706, 2.83, 650039027],
        [12212842, 4.93, 650039027],
        [6698671, 2.7, 650039027],
        [9380192, 3.78, 650039027]
    ],

    [
        [86269737, 32.93, 650039027],
        [47051082, 17.96, 650039027],
        [19240832, 7.345, 650039027],
        [7326637, 2.79, 650039027],
        [9501986, 3.62, 650039027],
        [3791391, 1.45, 650039027],
        [9270633, 3.54, 650039027]
    ],

    [
        [82411751, 30.99, 650039027],
        [47617905, 17.09, 650039027],
        [19836422, 7.45, 650039027],
        [7982992, 3.00, 650039027],
        [8818526, 3.32, 650039027],
        [3671521, 1.38, 650039027],
        [11252938, 4.23, 650039027]
    ],

    [
        [75235151, 30.14, 650039027],
        [39541782, 15.84, 650039027],
        [17673618, 7.08, 650039027],
        [8339691, 3.34, 650039027],
        [10338520, 4.14, 650039027],
        [3689603, 1.48, 650039027],
        [13605337, 5.45, 650039027]
    ],

    [
            [80300275, 34.3, 650039027],
            [35426724, 13.86, 650039027],
            [17159805, 6.72, 650039027],
            [8667144, 3.39, 650039027],
            [10620084, 4.08, 650039027],
            [10056976, 3.93, 650039027],
            [11991120, 4.69, 650039027]
    ]
];


// get max export by country by year
function getMax(dim) {
    var max = 0;
    data.forEach(function (dataByYear) {
        dataByYear.forEach(function (item) {
            if (item[dim] > max) {
                max = item[dim];
            }
        });
    });
    var exp = Math.round(Math.log(max) / Math.log(10));
    var exp10 = Math.pow(10, exp);
    max = Math.ceil(max / exp10 * 10) / 10 * exp10;

    return max;
}

//get portion by country by year
function getMaxRate() {
    var max = 0;
    data.forEach(function (dataByYear) {
        dataByYear.forEach(function (item) {
            if ((item[0]/item[1]) > max) {
                max = item[0]/item[1];
            }
        });
    });
    var exp = Math.round(Math.log(max) / Math.log(10));
    var exp10 = Math.pow(10, exp);
    max = Math.ceil(max / exp10 * 10) * exp10;

    return max;
}


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};


option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'horizontal',
            autoPlay: true,
            inverse: false,
            playInterval: 3000,

            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: years
        },
        backgroundColor: '#333',
        title: {
            text: '',
            textAlign: 'center',
            right: '5%',
            bottom: '20%',
            textStyle: {
                fontSize: 70,
                color: 'rgba(255, 255, 255, 0.9)'
            }
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1
        },
        xAxis: {
            // type: 'log',
            type: 'value',
            name: 'Export($ Thousands)',
            nameGap: 25,
            min: 0,
            max: getMax(0),
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 14
            },
            splitLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'proportion',
            nameGap: 25,
            min: 0,
            max: getMax(1),
            nameTextStyle: {
                color: '#ccc',
                fontSize: 14
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        grid: {
            top: '20%',
            left: '10%',
            right: '10%',
            bottom: '15%'
        },


        visualMap: [{
            type: 'piecewise',
            dimension: 3,
            orient: 'horizontal',
            categories: countries,
            right: '5%',
            top: '10%',
            calculable: true,
            precision: 0.1,
            textGap: 10,
            itemGap: 3,
            itemHeight: 10,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                color: ['##ff0000', '#e88f70', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489']
            },
            outOfRange: {
                color: '#555'
            }
        }, {
            show: false,
            type: 'continuous',
            dimension: 2,
            min: 0,
            max: 5,
            inRange: {
                symbolSize: [10, 50]
            }
        }],
        series: [{
            type: 'scatter',
            id: 'gridScatter',
            itemStyle: itemStyle,
            data: [],
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
                        + 'Export：' + value[0] + '<br>'
                        + 'Rate：' +   value[1]  + ' %<br>'

                }
            }
        }],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};

for (var n = 0; n < years.length; n++) {
    option.options.push({
        title: {
            text: years[n]
        },
        series: {
            id: 'gridScatter',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data[n].map(function (item, index) {
                return  item.concat(countries[index]);
            }),
            symbolSize: 10
        }
    });
}



// based on the dom, init the echart object.
var myChart = echarts.init(document.getElementById('main'));

// add options to your chart
myChart.setOption(option);

$(function(){
    window.onresize = function(){
        setTimeout("myChart.resize()",100);
    }
})
