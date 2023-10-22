import React, { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export const getReportId = async (id, navigate) => {
  let resp = {};

  const url = `${process.env.REACT_APP_SERVER_IP}/reports/${id}`;
  let data = {};
  try {
    resp = await fetch(url);
    data = await resp.json();
  
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
      text: "Error al buscar el reporte en la base de datos",
    });

    navigate("/reports");
    return;
  }


  return data;
};
