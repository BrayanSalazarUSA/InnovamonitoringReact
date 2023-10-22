import React from "react";
import Swal from "sweetalert2";

export const getIncidents = async (navigate) => {
  let caseMapped = {};
  let resp = {};
  const url = `${process.env.REACT_APP_SERVER_IP}/cases`;
  let data = {};
  try {
    resp = await fetch(url);

    data = await resp.json();

    caseMapped = data.map((incident) => {

      if (!incident.deleted) {
        return {
          id: incident.id,
          incident: incident.incident,
          caseType: incident,
        };
      }

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

    navigate("/login");
    return;
  }

  caseMapped=caseMapped.filter(function( element ) {
    return element !== undefined;
 });

  console.log(caseMapped);
  return caseMapped;
};
