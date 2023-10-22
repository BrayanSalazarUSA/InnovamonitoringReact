import React, { useContext, useEffect, useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { GetReports } from '../../helper/GetReports';
import { UseDataStackedChart } from '../../Hooks/useDataStackedChart';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();
  const { propertyContext, setPropertyContext } = useContext(UserContext);
  const navigate = useNavigate();
  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let idStorage = propertyStorage.id;
  let id1 = propertyContext.id || idStorage;
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  const [reportes, setReportes] = useState([]);

  let finalChart = [];
  const calculate = (data) => {
    
    const { unicosElementos, almacenadorDeVecesRepetidas, porcentajes } =
      UseDataStackedChart(data);
 
    for (let k = 0; k < unicosElementos.length; k++) {
      finalChart.push({
        x: unicosElementos[k],
        y: almacenadorDeVecesRepetidas[k]
      });
    }

    setReportes(finalChart);

    finalChart = [];
  };

  const stackedCustomSeries = [
    {
      dataSource: reportes,
      xName: "x",
      yName: "y",
      name: "Montly Reports ",
      type: "StackingColumn",
      background: "tomato",
    },
  
    
  ];
  
   const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: "Rotate45",
    valueType: "Category",
  };
  
   const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 0,
    interval:5,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: "{value}",
  };
  useEffect(() => {
    setReportes([]);

    GetReports(propertyContext.id || id1, userRole).then((data) => {
      calculate(data);
    });
  }, [propertyContext]);
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      title='Number Of Reports Montly'
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;