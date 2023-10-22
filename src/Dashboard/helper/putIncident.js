import { CameraAltTwoTone } from "@mui/icons-material";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

export const putIncident = async (caseProvider, setreportSaved, reportSaved) => {


  let resp = {};

  const url = `${process.env.REACT_APP_SERVER_IP}/cases/`+caseProvider.id;
  let data = {};
  try {
    resp = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(caseProvider),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await resp.json();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "The incident has been updated correctly",
    });

    setreportSaved(!reportSaved)
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
  }

  if (resp.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error updating the incident, check that all fields are filled in and try again.",
    });
    return;
  }

  console.log(data);
  return data;
};
