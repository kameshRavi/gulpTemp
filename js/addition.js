// addition.js
function add(){
var firstNum  = +document.getElementById('boxOne').value;
var secondNum = +document.getElementById('boxTwo').value;

document.getElementById('result').innerHTML=firstNum+secondNum;
}

// var callsPerMonth    = 30;
// var averageDuration  = 2;

// var averageUsagePerMonth = callsPerMonth * averageDuration;

// var SUBSCRIPTION = 29.99;

// var monthNames = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

// function splitBasedOnCurrentMonth(index) {
//     return monthNames.split(','+moment().format('MMM')+',')[index].split(',');
// }

// var beforeCurentMonth = splitBasedOnCurrentMonth(0);

// var afterCurentMonth = splitBasedOnCurrentMonth(1);

// var xAxisLabel = [moment().format('MMM')];

// xAxisLabel = xAxisLabel.concat(afterCurentMonth.concat(beforeCurentMonth));

// var multiplier = [1,1.3,1.2,0.8,1.7,0.6,2,0,1.6,1.5,0,1.9];

// var payAsYouGo = [];

// var sumOfAllMonths = 0;

// for (var i = 0; i < multiplier.length;i++) {
// 	 payAsYouGo.push((multiplier[i] * averageUsagePerMonth) + SUBSCRIPTION);
// 	 sumOfAllMonths = sumOfAllMonths + payAsYouGo[i];
// }


// var flatPlan   = [300,300,300,300,300,300,300,300,300,300,300,300]; 

// var tooltipString = 'This is calculated based on a average monthly fees of \u00A3 300 a month.';


// // for(var i =0 ; i<payAsYouGo.length;i++) {
// // 	sumOfAllMonths = sumOfAllMonths + payAsYouGo[i];
// // }

// var usingFlatPlan    = 300.00 * 12 ;
// var usingPayAsYouGo  = (sumOfAllMonths * 0.99).toFixed(2);

// var legendTextForFlatPlan   = 'Flat plan - \u00A3 '+usingFlatPlan;
// var legendTextForPayAsYouGo = 'Pay as you go -  \u00A3 '+usingPayAsYouGo;


// var myChart = echarts.init(document.getElementById('chart'));
// var option  = {

// 	title : {
// 		show : false,
// 		text : 'Answerforce'
// 	},

// 	legend : {
// 		show : true,
// 		itemGap : 80,
// 		data : [legendTextForFlatPlan,legendTextForPayAsYouGo]
// 	},

// 	tooltip : {
// 		show : true,
// 		 trigger : 'item'
// 	},


// 	toolbox : {
// 		show : true,
// 		feature : {
// 			dataView : {
// 				show : true,
// 				title : 'TextView',
// 				readOnly : true,
// 				lang : ['DataView','close'],
// 				optionToContent : function() {
//                     var table = '<table style="width:100%;text-align:right"><thead><tr>' + '<th> Month </th> <th>'+legendTextForPayAsYouGo+'</th><th>'+legendTextForFlatPlan+'</th>' + '</tr></thead><tbody>';
//                     for (var i = 0 ; i < payAsYouGo.length; i++) {
//                           table += '<tr>' + '<td>' + xAxisLabel[i] + '</td><td>' + payAsYouGo[i] + '</td>' + '<td>' + flatPlan[i] + '</td>' + '</tr>';   
//                         }
//                     table += '</tbody></table>';
//                     return table;
//                 }
      
// 			},
// 			magicType : {
// 				show : true,
// 				title : {
// 					line : 'Line',
// 					bar  : 'Bar',
// 				},
// 				type : ['line','bar']
// 			},
// 			restore : {
// 				show  : true,
// 				title : 'Reset'
// 			},
// 			saveAsImage : {
// 				show  : true,
// 				title : 'Save'
// 			}
// 		}
// 	},
	
// 	xAxis : [
// 	    {
             
//             boundaryGap : true,
// 	        data :xAxisLabel,

// 			splitLine : {
// 			    show : false	
// 		    },

// 			axisLine : {
// 			    show : false
// 			},

// 			axisTick : {
// 			    show:false
// 			}
// 		}
//     ],

//     yAxis : [
// 		{

//             axisLabel : {
//             	formatter :  '\u00A3  {value} '
//             },	

//             splitLine : {
// 		       	show : false	
// 		    },

// 		    axisLine : {
// 		      	show:false
// 		    },

// 		    axisTick : {
// 		        show:false
// 		    }
// 		}
// 	],

//     series: [
//        {

//     	    name : legendTextForPayAsYouGo,
//     	    type : 'line',
//     	    symbol : 'circle',
//     		data : payAsYouGo,
//     		smooth : true,
//     		tooltip : {
//     			formatter : tooltipString
//     		},
//     		itemStyle : {
//     			normal : {
//     				color : '#3992CD'
//     			}
//     		}
//     	},

//     	{
//     		name : legendTextForFlatPlan,
//     		type : 'line',
//     		symbol : 'circle',
//     		symbolSize : 0,
//     		tooltip : {
//     			show : false
//     		},
//     		data : flatPlan,
//     		itemStyle : {
//     			normal : {
//     				color : '#FF8400'
//     			}
//     		}
//     	}  
//     ]
// };
// myChart.setOption(option);