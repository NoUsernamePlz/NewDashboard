import React from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';


// interface LinegraphProps {
//   data:  number[] ;
//   // Define the type for your filtered data here
// }

function GreenLinegraph() {
//   const fillValue1 = 60; // Change this value to set the fill value for the first progress
//   const maxProgressValue = 100; // Maximum value for the progress


const option = {
  
    grid: {
          left: '2%',   // Adjust left margin
          right: '2%',  // Adjust right margin
          top: '10%',    // Adjust top margin
          bottom: '10%', // Adjust bottom margin
          width: '100%',  // Set width of the chart
          height: '80%'  // Set height of the chart
      },
    
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      show:false,
      boundaryGap: false,
      // prettier-ignore
      data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '1:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
      show:false,
      min: 0,       // Set minimum value
      max: 1000,
      type: 'value',
      axisLabel:{ 
     
        formatter: '{value} W'
      },
      axisPointer: {
        show:false,
        snap: false,
      }
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: 'green'
        },
        {
          gt: 6,
          lte: 8,
          color: 'red'
        },
        {
          gt: 8,
          lte: 14,
          color: 'green'
        },
        {
          gt: 14,
          lte: 17,
          color: 'red'
        },
        {
          gt: 17,
          color: 'green'
        }
      ]
    },
  series: [
      {
          name: 'Electricity',
          type: 'line',
          smooth: true,
          symbol: 'none', // Remove the small circles
          lineStyle: {
              color:{
                
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#8AFF6C' // color at 0%
    }, {
        offset: 1, color: '#02C751' // color at 100%
    }],
    global: false // default is false
  
              },
              width: 1.5 // Adjust the line width as needed
          },
          // prettier-ignore
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
      }
  ]
  
  
  
  
  
  };

  return <ReactEcharts option={option} style={{ height: '20%',width:'100%' }}  />;
}

export default GreenLinegraph;
