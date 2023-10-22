import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../../context/ContextProvider";
import { useEffect } from "react";
import { GetReports } from "../../helper/GetReports";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseDataStatics } from "../../Hooks/useDataStatics";
import { Button } from "primereact/button";



const Bar = () => {

  const { propertyContext, setPropertyContext } = useContext(UserContext);
  const navigate = useNavigate();
  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let idStorage = propertyStorage.id;
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  let id1 = propertyContext.id || idStorage;
  const [reportes, setReportes] = useState([]);
  const { currentMode } = useStateContext();
const [reportesFormated, setReportesFormated] = useState([])
  let finalChart = [];
const calculate = (data,level) => {
  setReportesFormated([])

  let dataFiltered = data.filter(report => report.Details.level === level)
  const { unicosElementos, almacenadorDeVecesRepetidas } =
    UseDataStatics(dataFiltered);

  for (let k = 0; k < unicosElementos.length; k++) {
    finalChart.push([{
      x:level,
      y: almacenadorDeVecesRepetidas[k],
      case: unicosElementos[k]
    }]);
  }

if(finalChart.length>0){
  setReportesFormated(finalChart);
}else{
  setReportesFormated([[]])
}
  finalChart = [];
};


  useEffect(() => {
    setReportes([]);
    setReportesFormated([])
    GetReports(propertyContext.id || id1,userRole ).then((data) => {
      setReportes(data)
      calculate(data, "Level 1")
    });
  }, [propertyContext]);


  return (
    <div className="m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    
      <div className="w-full flex flex-row justify-center">
        <Button
          size="small"
          style={{ marginRight: "10px" }}
          label="Level 1"
          severity="warning"
          raised
          onClick={() => {
            calculate(reportes,"Level 1");
          }}
        />
        <Button
          size="small"
          style={{ marginRight: "10px" }}
          label="Level 2"
          severity="warning"
          raised
          onClick={() => {
            calculate(reportes,"Level 2");
          }}
        />
        <Button
          size="small"
          style={{ marginRight: "10px" }}
          label="Level 3"
          severity="warning"
          raised
          onClick={() => {
            calculate(reportes,"Level 3");
          }}
        />
        <Button
          size="small"
          style={{ marginRight: "10px" }}
          label="Level 4"
          severity="warning"
          raised
          onClick={() => {
            calculate(reportes,"Level 4");
          }}
        />
        {/* <Button
          size="small"
          style={{ marginRight: "10px" }}
          label="Total"
          severity="warning"
          raised
      
        /> */}
      </div>
      <ChartsHeader category="Bar" title="Reports Bar Chart" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={{
            valueType: "Category",
            title: "Reports",
            //visible:false,
            edgeLabelPlacement: "Shift",
            labelIntersectAction: "Rotate90",
          }}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
          />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {/* {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} columnWidthInPixel={30}  />
            ))} */}
            {/*   <SeriesDirective
              dataSource={data1}
              xName="x"
              yName="y"
              name="Towing"
              type="Column"
              groupName="Towinng"
              columnWidth={1.02}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: 'Top',
                  font: { fontWeight: '600', color: '#ffffff' },
                },
              }}
            ></SeriesDirective> */}

            {reportesFormated?.map((item, index) => (
              <SeriesDirective
                key={index}
                dataSource={item}
                xName="x"
                yName="y"
                name={item[0]?.case || ""}
                type="Column"
                groupName={item[0]?.case || ""}
                columnWidth={0.95}
                columnSpacing={0.1}
                marker={{
                  dataLabel: {
                    visible: true,
                    position: "Top",
                    font: { fontWeight: "600", color: "#ffffff" },
                  },
                }}
              />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default Bar;
