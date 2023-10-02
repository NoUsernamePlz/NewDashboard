import React, { useEffect, useState } from 'react';

import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';


interface LinegraphProps {
  data: any[];
  index:any[];
  onHoveredValueChange: (value: number | null) => void;
  color: string;
  
 
}





const LineGraph = ({data,index,onHoveredValueChange,color}: LinegraphProps) => {
  
  const chartId = `myChart-${index}`;
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  useEffect(() => {
    // const categories = Object.keys(monthlyEarnings)
    const chartElement = document.getElementById(chartId);
  
    
    if (chartElement) {
      // const data = [10, 50, 100, 150, 200, 250, 300, 350];
      const chart = echarts.init(chartElement);
      
    
     const colors =[color]

      const option = {
        color: colors,

        tooltip: {
          
          trigger: 'axis',
          formatter: (params: any) => {
            if (params.length > 0) {
              const dataIndex = params[0].dataIndex;
              const value = params[0].value;
              
              
              onHoveredValueChange(value); // Call hoverVal prop to update hovered value in Sidebar
              return '';
            }
            return '';
          },
        },


       

       
        legend: {
          show: false,
        },
        grid:{
          left: "0%",
          bottom: "0%",
          top: "0%",
          right: "0%"
        },
        xAxis: [
          {
            type:"category",
            show: false,
            axisLine: {
              onZero: false,
              lineStyle: {
                color: color,
              },
            },
            data: data,
          },
          {
            show: false,
            type: "category",
            axisTick: {
              alignWithLabel: false,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: color,
              },
            },
            data: data,
          },
        ],
        yAxis: [
          {
            show: false,
          },
        ],
        series: [
          // {
          //   name: "Sales",
          //   type: "line",
          //   xAxisIndex: 1,
          //   showSymbol: false, 
          //   smooth: true,
          //   data: Object.values(monthlyEarnings).map((entry) => entry.income),
          //   itemStyle: {
          //     color: colors[0], // Color of the data points
          //     shadowBlur: 10,   // Blur radius of the shadow
          //     shadowColor: 'rgba(199, 7, 247, 0.74)' // Shadow color and opacity
          //   }
          // },
          {
            name: "Profit",
            type: "line",
            showSymbol: false, 
            smooth: true,
            data: data,
            itemStyle: {
              color: colors[1], // Color of the data points
              shadowBlur: 10,   // Blur radius of the shadow
              shadowColor: 'rgba(245, 171, 0, 0.74)', // Shadow color and opacity
            }
          },
        ],
      };
      const handleResize = () => {
        chart.resize();
      };
    //   chart.on('mouseover', (params: any) => {
    //     console.log(params)
    //     if (params.seriesType === 'line') {
            
    //         onHoveredValueChange(params.data); 
    //     }
    // });
    window.addEventListener('resize', handleResize);
      chart.setOption(option);
      return () => {
        chart.dispose();
      };
  
      
    }

    

  }, [data,chartId]);
  console.log(color);

  return (
    <div
      id={chartId}
      style={{ height: '20%',width:'100%' }}
    ></div>
  );
};

export default LineGraph;