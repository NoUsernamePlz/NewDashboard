import React , {useState}from 'react';
import {BsFillTriangleFill} from 'react-icons/bs';
import {LiaStopCircle} from 'react-icons/lia'
import Linegraph from './Graphs/Linegraph';
import YellowLinegraph from './Graphs/Yellowlinegraph';
import GreenLinegraph from './Graphs/Greenlinegraph';
import Guagegraph from './Graphs/Gaugegraph';
import '../App.css';
import Piechart from './Graphs/Piechart';


interface SidebarProps {
  subcategoryAverages: any[]; // Define the type for your filtered data here
 
  subcategorySales: { [subcategory: string]: number[] };

 

}



const subcategoryColors: string[] = ['#E323FF', '#8AFF6C', '#FFD422', '#E323FF','#FFD422','#E323FF','#FFD422','#8AFF6C','#8AFF6C','#8AFF6C'];

const Sidebar: React.FC<SidebarProps> = ({ subcategoryAverages,subcategorySales }) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [labelName, setLabelName] = useState('');
  const [labelValue, setLabelValue] = useState('');

 

  const onHoverLabelData = (name: string, value: string) => {
    setLabelName(name);
    setLabelValue(value);
  };


  console.log(subcategorySales);


   

  return (
    <div className="h-[90vh]  grid grid-rows gap-1 w-[20vw] lg:max-xl:w-[25vw] xs:max-lg:w-[75vw] bg-gray-200 font-mainfont ">
    
      <div className="  text-15xl font-bold  xs:max-lg:mt-[10%] text-white  flex pt-1 justify-start font-mainfont"> Statistics</div>
      {/* First div */}
      <div className="bg-blueish-black row-span-5 h-[42vh] xs:max-lg:h-[50vh] rounded-3xs mb-2  xs:max-lg:mt-[10%]"> 
      
      <div className=" rounded-lg flex flex-col justify-center items-center h-[100%] pt-1">
      {/* First Div with a Chart */}
      <div className=" h-[50vh] w-[10vw] xs:max-lg:h-[55vh] xs:max-lg:w-[80vw] relative  ">
      
        {/* <Guagegraph/> */}
        <div className='h-[100%] w-[100%]'>
        <Piechart data={subcategoryAverages} onHoverLabelData={onHoverLabelData}/></div>
      </div>

      {/* Second Div with Subheading and Two Horizontal Divs */}
      <div className=" mt-1 w-[80%] flex flex-col justify-center items-center  h-[10vh]">
        <div className="text-lg  h-[3vh] text-xl text-white pb-2">Total {labelName?labelName:'Sales'} Sales</div>
        <div className="horizontal-divs flex  flex-row items-center justify-center h-[3vh]">
          <div className="w-2/3   h-[6vh] items-start justify-start gap-[3px] text-5xl font-semibold text-white">${labelValue?labelValue:1425}</div>
          <div className="flex items-center justify-center w-1/3  ">
          <BsFillTriangleFill className="text-electric-green pt-1 h-3 w-3 ml-2 mb-3 " />
          <span className="text-[5] pt-1 text-electric-green text-xs mb-3 ml-1">2%</span>
        </div>
        </div>
        <div className="text-xs font-thin h-[2vh] tracking-[0.4px] leading-[16px] text-white">Compared to $21,504 last year</div>
      </div>

      {/* Third Div with Three Stacked Divs */}
      
      <div className="w-[100%] rounded-3xs text-smi text-white mt-2 mb-2 pb-4 xs:max-lg:pb-12 overflow-auto  box">
            {Object.entries(subcategorySales).map(([subcategory, data], index:any) => (
              <div key={index} className="flex flex-row justify-center items-center px-5 py-1">
                <div className="w-2/6 flex justify-start items-center">{subcategory}</div>
                <div className="w-1/6 px-3 flex justify-center items-center text-steelblue-100">${hoveredValue?hoveredValue:425}</div>
                <div className="w-3/6  flex justify-center items-center bg-black">
                  <Linegraph data={data} index={index} color={subcategoryColors[index]}  onHoveredValueChange={(e:any)=>setHoveredValue(e)} />
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div> 

     {/* widget Second div */}

      <div className="w-[100%] rounded-3xs row-span-2 flex items-center justify-center h-[10vh]  mb-3 xs:max-lg:my-[3rem] lg:mt-4">
      <div className=" text-left  border border-gray-300  w-[100%] h-[100%] rounded-3xs bg-blueish-black flex flex-col items-start justify-center overflow-hidden py-3 px-5">
      <h2 className="text-center text-base font-normal text-white  mb-2 h-[2vh] "> Total earning</h2>
      <div className="flex flex-row items-center mt-1 h-[4vh] ">
        <p className="text-15xl font-bold mr-2 text-white ">$30,430</p>
        <div className="flex items-center justify-center ">
          <BsFillTriangleFill className="text-electric-green pt-1 h-3 w-3" />
          <span className="text-[5] pt-1 text-electric-green text-xs">10%</span>
        </div>
      </div>
      <p className="text-xs h-[1vh] pb-2 lg:max-xl:text-[10px] text-white  font-thin ">Compared to $21,504 last year</p>
    </div>
      
      
      </div> 
      <div className=" row-span-4 h-[65%] w-[100%] text-left text-smi text-white bg-blueish-black rounded-3xs  pt-2 xs:max-lg:mb-[3rem] mt-2 mb-2">
      <div className="box  bg-gray-200 mx-auto h-[100%] px-5 overflow-y-auto">
      {subcategoryAverages.map((subcategoryAverage, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 py-1 ">
          <div className="col-span-1  ">{subcategoryAverage.subcategory}</div>
          <div className="col-span-1  text-steelblue-100 text-right "> ${subcategoryAverage.averageSale}</div>
          <div className="col-span-1 text-right ">${subcategoryAverage.averageProfit}</div>
          <div className={`col-span-1 flex items-center justify-center`}>
          {/* <BsFillTriangleFill className= {`col-span-1 h-3 w-3 flex items-center justify-center ${row.triangleColor} ${row.rotate}`} /> */}
          <div className={`col-span-1 flex items-center justify-center`}>
  {subcategoryAverage.averageProfit >= 0 ? (
    <BsFillTriangleFill className={`h-3 w-3 flex items-center justify-center text-electric-green`} />
  ) : (
    <BsFillTriangleFill className={`h-3 w-3 flex items-center justify-center text-red-500 rotate-180`} />
  )}
</div>
          </div>
        </div>
      ))}
    </div>
        </div> {/* Third div */}
    </div>
  )
}

export default Sidebar
