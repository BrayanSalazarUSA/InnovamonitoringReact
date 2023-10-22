import React, { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export const GetPropertyInfo = async (id, userRol) => {
  let resp = {};
  let listOfReport=[]
  let dataDto = {};
let reportsMapped = []
  const url = `${process.env.REACT_APP_SERVER_IP}/properties/${id}`;
  let data = {};
  try {
    resp = await fetch(url);

    data = await resp.json();

    let propertyImage = "";
    let link = data.img?.split("/");
    if (link) {
      let idImg = link[5] ? link[5] : "";
      propertyImage = "https://drive.google.com/uc?export=view&id=" + idImg;
    }
console.log(data)
    if(userRol=="Client"){

      reportsMapped = data.reports?.filter(repo => repo.verified)
    }else{
      reportsMapped=data.reports
    }
    console.log("reportsMapped")
    console.log(reportsMapped)

    let camerasWorking = data.cameras?.filter(
      (camera) => camera.status == "Working"
    );
    let camerasOffline = data.cameras?.filter(
      (camera) => camera.status == "Offline"
    );
    let camerasVandalized = data.cameras?.filter(
      (camera) => camera.status == "Vandalized"
    );


   /*  if(userRol=="Client"){

      listOfReport = data.reports?.filter(
        (report) => report.verified == true
      );

      console.log("listOfReport")
      console.log(listOfReport)
    }else{
      
      listOfReport = data.reports
      console.log("listOfReport")
      console.log(listOfReport)
    }
     */
    dataDto = {
      ...reportsMapped,
      numCamerasWorking: camerasWorking?.length,
      numCamerasOffline: camerasOffline?.length,
      numCamerasVandalized: camerasVandalized?.length,
       numOfReports:reportsMapped, 
      propertyImage,
      ...data
    };


  } catch (error) {
    /* Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    }); */
   console.log(error)
  }

  if (resp.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error al buscar la informacion de la propiedad en la base de datos",
    });

  
    return;
  }

  console.log(dataDto);
  return dataDto;
};
