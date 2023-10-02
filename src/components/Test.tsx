import React, { useEffect, useState } from 'react';
import Linegraph from './Graphs/Linegraph';
import jsondata from "../subcategory.json";

const jsonData = {
  data: [
    {
      "orderdate": "2021-08-22T00:00:00.000Z",
      "subcategory": "Accessories",
      "sale": 1191.8679428100586,
      "profit": 225.09480381011963,
      "countcustomer": 2
    },
    {
      "orderdate": "2021-08-22T00:00:00.000Z",
      "subcategory": "Appliances",
      "sale": 2055.5039920806885,
      "profit": 640.766392827034,
      "countcustomer": 6
    },
    {
      "orderdate": "2021-08-22T00:00:00.000Z",
      "subcategory": "Art",
      "sale": 11.51200008392334,
      "profit": 1.817600041627884,
      "countcustomer": 2
    },
    // Add more data entries here
  ]
};

const App: React.FC = () => {
  const [salesData, setSalesData] = useState<number[]>([]);

  useEffect(() => {
    // Filter the data for a specific subcategory (e.g., "Accessories")
    const subcategory = 'Accessories';
    const filteredData = jsondata.data
      .filter((item) => item.subcategory === subcategory)
      .map((item) => item.sale);

    setSalesData(filteredData);
  }, []);

  return (
    <div>
      {/* Render other components here */}
      {/* <Linegraph data= {JSON.stringify(salesData, null, 2)} /> */}
      <h6>{salesData}</h6>
      {JSON.stringify(salesData, null, 2)}
    </div>
  );
};

export default App;
