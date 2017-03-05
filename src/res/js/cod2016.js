/**
 * Created by James on 05-Mar-17.
 */

// based on the dom, init the echart object.
var myChart = echarts.init(document.getElementById('main'));

option = {
    title: {
        text: 'Australia\'s International Mechanise Exports by Country 2016',
        subtext:'',
        sublink: 'http://stat.data.abs.gov.au/',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1000,');
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 0,
        max: 10000000,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        bottom: '20%',
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
        }
    },
    series: [
        {
            name: 'Mechanise Export ($Thousands) to ',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name: 'Afghanistan', value: 23022},
                {name: 'Angola', value: 5976},
                {name: 'Albania', value: 2448},
                {name: 'Algeria', value: 8361},
                {name: 'Antarctica', value: 6508},



                {name: 'Argentina', value: 166767},
                {name: 'Armenia', value: 719},

                {name: 'Australia', value: 0},
                {name: 'Austria', value: 48343},
                {name: 'Azerbaijan', value: 3772},

                {name: 'Burundi', value: 0 },
                {name: 'Belgium', value: 951518},
                {name: 'Benin', value: 2005},
                {name: 'Burkina Faso', value: 13853},
                {name: 'Bangladesh', value: 821995},
                {name: 'Bahamas', value: 4645},
                {name: 'Bahrain', value: 752528},
                {name: 'Barbados', value: 3003},
                {name: 'Bosnia and Herzegovina', value: 930},
                {name: 'Belarus', value: 333},
                {name: 'Belize', value: 880},
                {name: 'Bermuda', value: 752},
                {name: 'Bolivia', value: 2070},
                {name: 'Bulgaria', value: 92329},
                {name: 'Botswana', value: 1108},
                {name: 'Brazil', value: 1033893},
                {name: 'Brunei', value: 41639},
                {name: 'Bhutan', value: 171},
                {name: 'Burundi', value: 121},

                {name: 'Cambodia', value: 44921},
                {name: 'Cameroon', value: 4051},
                {name: 'Central African Republic', value: 3694},
                {name: 'Canada', value: 1776156},
                {name: 'Cape Verde', value: 177},

                {name: 'Cayman Islands', value: 482},
                {name: 'Chad', value: 1701},
                {name: 'Chile', value: 453894},
                {name: 'China', value: 80300275},

                {name: 'Christmas Island', value: 35081},

                {name: 'Republic of the Congo', value: 1212},
                {name: 'Democratic Republic of the Congo', value: 3130},

                {name: 'Colombia', value: 48847},

                {name: 'Costa Rica', value: 10676
                },
                {name: 'Cuba', value: 1599
                },
                {name: 'Croatia', value: 15510},
                {name: 'Cyprus', value: 4161
                },
                {name: 'Czech Republic', value: 145332
                },

                {name: 'Cote d\'Ivoire', value: 211093},
                {name: 'Costa Rica', value: 10676},

                {name: 'Denmark', value: 130895},

                {name: 'Germany', value: 83017.404},
                {name: 'Djibouti', value: 4271},
                {name: 'Dominica', value: 295},
                {name: 'Dominican Republic', value: 6580},


                {name: 'East Timor, Dem Rep', value: 36618},
                {name: 'Ecuador', value: 19196},
                {name: 'Egypt', value: 413580},
                {name: 'El Salvador', value: 18580},

                {name: 'Eritrea', value: 2059},
                {name: 'Estonia', value: 10747},
                {name: 'Ethiopia', value: 5086},



                {name: 'Ethiopia', value: 5086},
                {name: 'Falkland Islands', value: 214},
                {name: 'Fiji', value: 420019},
                {name: 'Finland', value: 71964},
                {name: 'Former Yug Rep Macedonia', value: 1440},
                {name: 'France', value: 1175445},
                {name: 'French Guiana', value: 2},
                {name: 'French Polynesia', value: 48689},



                {name: 'Gabon', value: 1802},
                {name: 'Gambia', value: 28},
                {name: 'Georgia', value:4630},
                {name: 'Ghana', value: 28},
                {name: 'Gibraltar', value: 39},
                {name: 'Greece', value: 16213},
                {name: 'Grenada', value: 39},
                {name: 'Guinea', value: 4334},
                {name: 'Guinea Bissau', value: 296},
                {name: 'Equatorial Guinea', value: 65},
                {name: 'Guyana', value: 1993},
                {name: 'Guatemala', value: 5584},



                {name: 'Haiti', value: 2002},
                {name: 'Honduras', value: 586},
                {name: 'Hong Kong (SAR of China)', value: 9966031},
                {name: 'Hungary', value: 31837},

                {name: 'Iceland', value: 217129},
                {name: 'Indonesia', value: 5330273},
                {name: 'India', value: 10620084},
                {name: 'International Waters', value: 30817},

                {name: 'Ireland', value: 103274},
                {name: 'Iran', value: 80416},
                {name: 'Iraq', value: 37346},
                {name: 'Israel', value: 260660},
                {name: 'Italy', value: 694208},

                {name: 'Jamaica', value: 14386},
                {name: 'Jordan', value: 188147},
                {name: 'Japan', value: 35426724},
                {name: 'Kazakhstan', value: 15302},
                {name: 'Kiribati', value: 24837},
                {name: 'Kenya', value: 66870},
                {name: 'Kyrgyzstan', value: 5334.223},
                {name: 'Cambodia', value: 14364.931},
                {name: 'South Korea', value: 17159805},

                {name: 'Kosovo', value: 97.743},

                {name: 'Kuwait', value: 698043},

                {name: 'Laos', value: 22769},
                {name: 'Latvia', value: 41648},
                {name: 'Lebanon', value: 4341.092},
                {name: 'Liberia', value: 1339},
                {name: 'Libya', value: 2163},
                {name: 'Lesotho', value: 32},
                {name: 'Lithuania', value: 8951},
                {name: 'Luxembourg', value: 1898},

                {name: 'Macau (SAR of China ', value: 87647},

                {name: 'Moldova', value: 44},
                {name: 'Madagascar', value: 9961},
                {name: 'Mexico', value: 464202},
                {name: 'Macedonia', value: 507.885},
                {name: 'Mali', value: 11879},
                {name: 'Morocco', value: 23227},
                {name: 'Montenegro', value:69},
                {name: 'Mongolia', value:  15043},
                {name: 'Mozambique', value: 370333},
                {name: 'Myanmar', value: 159476},
                {name: 'Mauritania', value: 11543},
                {name: 'Micronesia', value: 10521},
                {name: 'Mauritania Islands', value: 4742},
                {name: 'Malawi', value: 18682},
                {name: 'Malaysia', value: 4711174},
                {name: 'Maldives', value: 36998},
                {name: 'Malta', value: 4135},
                {name: 'Malta', value: 4135},

                {name: 'Nauru', value: 57504},
                {name: 'Namibia', value: 9024},
                {name: 'New Caledonia', value: 342875},
                {name: 'Niger', value: 2425},
                {name: 'Nigeria', value: 190542},
                {name: 'Nicaragua', value: 1725},
                {name: 'Netherlands', value: 2378023},
                {name: 'Norway', value: 67302},
                {name: 'Nepal', value: 45006},
                {name: 'New Zealand', value: 8667144},
                {name: 'Oman', value: 493849},
                {name: 'Norfolk Island', value: 13059},



                {name: 'Pakistan', value: 647974},
                {name: 'Panama', value: 44920},
                {name: 'Peru', value: 61796},
                {name: 'Philippines', value: 1920255},
                {name: 'Papua New Guinea', value: 1703607},
                {name: 'Poland', value: 339221},
                {name: 'Puerto Rico', value: 4102},
                {name: 'North Korea', value: 1.468},
                {name: 'Portugal', value: 16572},
                {name: 'Paraguay', value: 845},
                {name: 'Qatar', value: 557901},
                {name: 'Romania', value: 54278},
                {name: 'Russia', value: 448377},
                {name: 'Rwanda', value: 10836.732},

                {name: 'Saudi Arabia', value: 1600425},
                {name: 'Sudan', value: 8445},
                {name: 'South Sudan', value: 282},
                {name: 'Senegal', value: 23944},
                {name: 'Solomon Islands', value: 107213},
                {name: 'Sierra Leone', value: 1497},
                {name: 'Spain', value: 517185},
                {name: 'Somalia', value: 1029},
                {name: 'Republic of Serbia', value: 1371},
                {name: 'Suriname', value: 1179},
                {name: 'Slovakia', value: 23934},
                {name: 'Slovenia', value: 48534},
                {name: 'Sweden', value: 278904},
                {name: 'Swaziland', value: 125},
                {name: 'Switzerland', value: 1073378},
                {name: 'Syria', value: 1399},
                {name: 'Singapore', value: 5524292},
                {name: 'South Africa', value: 975561},


                {name: 'Taiwan', value: 7122110},
                {name: 'Togo', value: 4674},
                {name: 'Thailand', value: 3541394},
                {name: 'Tajikistan', value: 186},
                {name: 'Turkmenistan', value: 1315},
                {name: 'Trinidad and Tobago', value: 18188},
                {name: 'Tunisia', value: 9360},
                {name: 'Turkey', value: 539442},

                {name: 'United Arab Emirates', value: 2882904},
                {name: 'United Kingdom', value: 10056976},
                {name: 'United States of America', value: 11991120},
                {name: 'United Republic of Tanzania', value: 52398},
                {name: 'Uganda', value: 8342},
                {name: 'Ukraine', value: 52807},
                {name: 'Uruguay', value: 9473},

                {name: 'Uzbekistan', value: 168},
                {name: 'Venezuela', value: 14747},
                {name: 'Vietnam', value: 3736045},
                {name: 'Vanuatu', value: 87843},
                {name: 'West Bank', value: 13.565},
                {name: 'Yemen', value: 253819},
                {name: 'Zambia', value: 17282},
                {name: 'Zimbabwe', value: 1976}
            ]
        }
    ]
};

// add options to your chart
myChart.setOption(option);

$(function(){
    window.onresize = function(){
        setTimeout("myChart.resize()",100);
    }
})
