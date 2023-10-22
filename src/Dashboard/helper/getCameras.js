import React from 'react'
import Swal from 'sweetalert2';


export const getCameras= async (id,navigate) => {
 
    let camerasMapped = []
    let resp = {};
    const url = `${process.env.REACT_APP_SERVER_IP}/cameras/property/${id}`;
    let data = {};
    try {
      resp = await fetch(url);
      data = await resp.json();
      camerasMapped = data.map((camera) => {
        let StatusBg = "#8BE78B";
        if(camera.status == "Offline"){
          StatusBg="gray"
        }
        if(camera.status == "Vandalized"){
          StatusBg="red"
        }
        let cameraImg = "";
        let link = camera.image?.split("/");

        let idImg = link[5] ? link[5] : "";
        cameraImg = "https://drive.google.com/uc?export=view&id=" + idImg;
        return {
          id:camera.id,
          Name: camera.name,
          Title: camera.brand,
          Installed: camera.installedByUs,
          Type: camera.type,
          StatusBg,
          Status:camera.status,
          DateInstalled:camera.dateInstalled || "",
          LiveView: {...camera,cameraImg },
          lat:camera.lat,
          camera,
          lon:camera.lon,
          EmployeeImage: camera.image?.length > 0 ? cameraImg : "https://www.techcube.co.uk/wp-content/uploads/2017/09/cctv-camera.jpg"
        };
    
      });
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
  
      navigate("/login");
      return;
    }
  
    console.log(camerasMapped);
    return camerasMapped;
  };
  