import React from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';

function Guagegraph() {
//   const fillValue1 = 60; // Change this value to set the fill value for the first progress
//   const maxProgressValue = 100; // Maximum value for the progress


const  option = {
    angleAxis: {
      show: false,
    },
    radiusAxis: {
      show: false,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed'],
      z: -1,
      min: 0,   // Set minimum value
      max: 1,   // Set maximum value
    },
    polar: {
      radius: ["30%", "100%"]
    },
    series: [
      
      {
        type: 'bar',//purple
        data: [17, 0, 10],
        coordinateSystem: 'polar',
        show: false,
        name: 'A',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          borderRadius: [15, 15, 15, 15], // Rounded corners
          color:{
            
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#E323FF' // color at 0%
    }, {
        offset: 1, color: '#7517F8' // color at 100%
    }],
    global: false // default is false
  
          }
          
        },
        
  
        
        
        
        
      },
      
      {
        type: 'bar',
        data: [0, 15],//blue bar
        coordinateSystem: 'polar',
        show: false,
        name: 'A',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          borderRadius: [15, 15, 15, 15], // Rounded corners
          color:{
            
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#4DFFDF' // color at 0%
    }, {
        offset: 1, color: '#4DA1FF' // color at 100%
    }],
    global: false // default is false
  
          }
          
        },
        
  
        
        
        
        
      },
      
      {
        type: 'bar', //yellow bar
        data: [0, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          borderRadius: [15, 15, 15, 15], // Rounded corners
           color:{
            
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#FFD422' // color at 0%
    }, {
        offset: 1, color: '#FF7D05' // color at 100%
    }],
    global: false // default is false
  
          } 
        },
        barWidth: 8, // Adjust the bar width as needed
        // Add a gap between bars inside a single ring
      },
      {
        type: 'bar',
        data: [20], // Data for black circular bar
        coordinateSystem: 'polar',
        name: 'Circular C',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: 'black',// Circular bar color (black)
         
        },
       
        barWidth: 4, // Adjust the bar width as needed
        barGap: '-60%',// Form a full circle
        z: 1,
      },
      
      
    ],
    legend: {
      show: false,
      data: ['A', 'B', 'C']
    },
  };

  return <ReactEcharts option={option} style={{ height: '100%',width:'100%'}}  />;
}

export default Guagegraph;
