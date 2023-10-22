import React from "react";



export const UseDataPieLevels = (data) => {
    let caseStringList = [];
    
  data.map((report) => {
    console.log(report.Status)
  });

  data.map((report) => {
    caseStringList.push(report.Status);
  });

  console.log(caseStringList)

  let unicosElementos = [];
  let almacenadorDeVecesRepetidas = [];
  let contador = 1;
  const arreglo = caseStringList.sort();
  const totalReports = caseStringList.length;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i + 1] === arreglo[i]) {
      console.log("Se repite el caso: " + arreglo[i]);
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

  console.log(unicosElementos, almacenadorDeVecesRepetidas, porcentajes)
  return {unicosElementos, almacenadorDeVecesRepetidas, porcentajes};
};
