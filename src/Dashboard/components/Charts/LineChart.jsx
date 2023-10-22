import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../../context/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
  <></>
  );
};

export default LineChart;