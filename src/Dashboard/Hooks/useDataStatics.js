import React from "react";



export const UseDataStatics = (data) => {
  let caseStringList = [];
  data.map((report) => {
    caseStringList.push(report.OrderItems);

  });

  let unicosElementos = [];
  let almacenadorDeVecesRepetidas = [];
  let contador = 1;
  const arreglo = caseStringList.sort();
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

/*   console.log(unicosElementos, almacenadorDeVecesRepetidas, porcentajes) */
  return {unicosElementos, almacenadorDeVecesRepetidas, porcentajes};
};
