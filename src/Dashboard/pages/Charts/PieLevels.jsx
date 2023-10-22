import React from "react";

import { pieChartData } from "../../data/dummy";
import { ChartsHeader, Pie as PieChart } from "../../components";
import { useStateContext } from "../../../context/ContextProvider";
import { useEffect } from "react";
import { GetReports } from "../../helper/GetReports";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseDataPieLevels } from "../../Hooks/useDataPieLevels";
const PieLevels = () => {
  const { propertyContext, setPropertyContext } = useContext(UserContext);
  const navigate = useNavigate();
  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let idStorage = propertyStorage.id;
  let id1 = propertyContext.id || idStorage;
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  const [reportes, setReportes] = useState([]);

  let chart = [
    { x: "Labour", y: 18, text: "18%" },
    { x: "Legal", y: 8, text: "8%" },
    { x: "Production", y: 15, text: "15%" },
    { x: "License", y: 11, text: "11%" },
    { x: "Facilities", y: 18, text: "18%" },
    { x: "Taxes", y: 14, text: "14%" },
    { x: "Insurance", y: 16, text: "16%" },
  ];

  let finalChart = [];
  const calculate = (data) => {
    
    const { unicosElementos, almacenadorDeVecesRepetidas, porcentajes } =
    UseDataPieLevels(data);

    for (let k = 0; k < unicosElementos.length; k++) {
      finalChart.push({
        x: unicosElementos[k],
        y: almacenadorDeVecesRepetidas[k],
        text: porcentajes[k],
      });
    }

    setReportes(finalChart);
    finalChart = [];
  };

  useEffect(() => {
    setReportes([]);

    GetReports(propertyContext.id || id1, userRole).then((data) => {
      calculate(data);
    });
  }, [propertyContext]);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={reportes}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default PieLevels;
