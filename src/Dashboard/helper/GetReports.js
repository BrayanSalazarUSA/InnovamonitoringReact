import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import reportImgDefault from "../data/product2.jpg";

export const GetReports = async (id, userRol) => {
  
  let resp = {};
  let reportsMapped = [];
  
  console.log(id);
  console.log(userRol);
  const url = `${process.env.REACT_APP_SERVER_IP}/reports/property/${id}`;
  let data = {};
  try {
    resp = await fetch(url);
    data = await resp.json();
    
    console.log(data)
    if(userRol=="Client"){
      data = data.filter(repo => repo.verified)
      console.log("Client")
      console.log(data)
    }else{
   
      console.log("Admin")
    }
    reportsMapped = data.map((report) => {
      let reportImg = "";
      if (report.evidences.length >0) {
        let link = report.evidences[0]?.link.split("/");
        let idImg = link[5] ? link[5] : "";
        reportImg = "https://drive.google.com/uc?export=view&id=" + idImg;
      }
      return {
        OrderID: report.numerCase,
        ProductImage: reportImg || reportImgDefault,
        StatusBg: "#8BE78B",
        dateIncident: report.date,
        Status: report.level,
        Time: report.time,
        OrderItems: report.caseType.incident,
        PDF: report.pdf || "/dashboard/reports",
        Details: report || { id: 1 },
        Edit: report || {  },
        isVerified:report.verified
      };
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
  }

  if (resp.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error al buscar la informacion de la propiedad en la base de datos",
    });

    return;
  }
console.log(data)
  console.log(reportsMapped);
  return reportsMapped;
};
