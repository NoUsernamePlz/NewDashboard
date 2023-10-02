import React from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';



interface BubblegraphProps {
  data: any[];
  // Define the type for your filtered data here
}

function Bubblegraph({ data }: BubblegraphProps) {
//   const fillValue1 = 60; // Change this value to set the fill value for the first progress
//   const maxProgressValue = 100; // Maximum value for the progress

// const data =[
//     [
//       [28604, 77, 570968699, 'Investment', 1990],
//       [30163, 81.4, 396624401, 'Bussiness', 1990],
//       [13670, 74.7, 10582082, 'Funds', 1990],
//       [17599, 79, 198670529, 'Development', 1990],
//       [20476, 75.1, 199432991, 'Profit', 1990],
//       [39476, 78.4, 289582371, 'Growth', 1990],
//       [28666, 78.1, 254830, 'Product', 1990],
     
//       [23550, 80.5, 172249283, 'Growth', 1990],
  
   
//       [19021, 77.4, 13975341, 'Study', 1990],
//       [43296, 76.8, 4240375, 'Capital', 1990],
  
  
  
//       [29424, 73.7, 99110117, 'Trends', 1990],
//       [37062, 75.4, 252847810, 'Analysis', 1990]
//     ],
//     [
  
//       [10291, 78.5, 11389562, 'Cuba', 2015],
//       [28923, 83.8, 5503457, 'Finland', 2015],
//       [44053, 79.1, 80688545, 'Germany', 2015],
//       [42182, 82.8, 329425, 'Iceland', 2015],
  
   
//       [11644, 80.7, 50293439, 'South Korea', 2015],
//       [24186, 82.6, 25285269, 'New Zealand', 2015],
     
//       [11787, 77.3, 38611794, 'Poland', 2015],
//       [23038, 73.13, 143456918, 'Russia', 2015],
//       [9360, 75.5, 78665830, 'Turkey', 2015],
//       [38225, 81.4, 64715810, 'United Kingdom', 2015],
     
//     ]
//   ];






const option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [  //background color
    //   {
        
    //     offset: 0,
    //     color: '#191932'
    //   },
    //   {
    //     offset: 1,
    //     color: '#191932',
       
    //   }
    // ]),
  
   
    grid: {
      left: '8%',
      top: '10%'
    },
    xAxis: {
      type: 'value',
      min: 0, // Set the minimum value for the xAxis
      max: 13000, // Set the maximum value for the xAxis
      show:false,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      show:false,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      scale: true
    },
    series: [
      {
        name: '1990',
        // data: data[0],
        data: data, 
        type: 'scatter',
        symbolSize: function (data:any) {
          return Math.sqrt(data[2]);
        },
        emphasis: {
          
          label: {
            show: true,
            fontSize:12,
            fontFamily:'sans-serif',
            fontWeight:'lighter',
            color:'#fff',
            
            
            formatter: function (param:any) {
              return param.data[3]+'\n'+ '\n'+'$'+ Math.round(((param.data[2])/1000)*100)/100 +'k' ;  // Display the second and third index inside the sphere
            },
            
            position: ['25%', '35%']
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color:{
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.5,
    colorStops: [{
        offset: 0, color: '#3247E5' // color at 0%
    },
    
    {
        offset: 0.4, color: '#030092' // color at 100%
    },
    
    {
        offset: 0.9, color: '#BA0004' // color at 100%
    },
     
    
    {
        offset: 0.99, color: '#EB0001' // color at 100%
    }
    ],
    global: false // default is false
  }
        }
      },
  //     {
  //       name: '2015',
  //       data: data[1],
  //       type: 'scatter',
  //       symbolSize: function (data:any) {
  //         return Math.sqrt(data[2]) / 2e2;
  //       },
  //       emphasis: {
  //         focus: 'series',
  //         label: {
  //           show: false,
  //           formatter: function (param:any) {
  //             return param.data[3];
  //           },
            
  //         }
  //       },
  //       itemStyle: {
  //         shadowBlur: 10,
  //         shadowColor: 'rgba(25, 100, 150, 0.5)',
  //         shadowOffsetY: 5,
  //         color:{
  //   type: 'radial',
  //   x: 0.5,
  //   y: 0.5,
  //   r: 0.5,
  //   colorStops: [{
  //       offset: 0, color: '#3247E5' // color at 0%
  //   },
    
  //    {
  //       offset: 0.72, color: '#030092' // color at 100%
  //   },
    
    
    
  //   {
  //       offset: 0.99, color: '#8205FF' // color at 100%
  //   }
  //   ],
  //   global: false // default is false
  // }
  //       }
  //     }
    ]
  };

  return <ReactEcharts option={option} style={{ height: '90%',width:'100%' }}  />;
}

export default Bubblegraph;
