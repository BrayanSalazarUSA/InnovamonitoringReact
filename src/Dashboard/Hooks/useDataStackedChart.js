import React from "react";

export const UseDataStackedChart = (data) => {
  let caseStringList = [];
  let prueba = [];

  data.map((report) => {
    prueba.push(report.dateIncident.split("-")[0]);
  });
  prueba.sort();

  for (let index = 0; index < prueba.length; index++) {
    if (prueba[index] === "01") caseStringList.push("January");
    if (prueba[index] === "02") caseStringList.push("Febrary");
    if (prueba[index] === "03") caseStringList.push("March");
    if (prueba[index] === "04") caseStringList.push("April");
    if (prueba[index] === "05") caseStringList.push("May");
    if (prueba[index] === "06") caseStringList.push("June");
    if (prueba[index] === "07") caseStringList.push("July");
    if (prueba[index] === "08") caseStringList.push("Agost");
    if (prueba[index] === "09") caseStringList.push("September");
    if (prueba[index] === "10") caseStringList.push("October");
    if (prueba[index] === "11") caseStringList.push("November");
    if (prueba[index] === "12") caseStringList.push("December");
  }

  let unicosElementos = [];
  let almacenadorDeVecesRepetidas = [];
  let contador = 1;
  const arreglo = caseStringList;
  const totalReports = caseStringList.length;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i + 1] === arreglo[i]) {
      contador++;
    } else {
      unicosElementos.push(arreglo[i]);
      almacenadorDeVecesRepetidas.push(contador);
      contador = 1;
    }
  }

  let percent;
  let porcentajes = [];
  for (let j = 0; j < almacenadorDeVecesRepetidas.length; j++) {
    percent = ((almacenadorDeVecesRepetidas[j] * 100) / totalReports).toFixed(
      0
    );
    porcentajes.push(percent + "%");
  }

  /*  console.log(unicosElementos, almacenadorDeVecesRepetidas, porcentajes); */
  return { unicosElementos, almacenadorDeVecesRepetidas, porcentajes };
};
