import React, { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

export const deleteItem = async (url, id, flag,setFlag) => {
  let resp = {};

  const path = url + "/" + id;

  try {
    resp = await fetch(path, {
      method: "DELETE",
      "Content-Type": "application/json",
    });
 Swal.fire({
      icon: "success",
      title: "Deleted",
      text: "User deleted succesfuly",
    });
  
    setFlag(!flag)
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });

    console.log(error);
  }

  if (resp.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error deleting report from database",
    });


    return;
  }
  return {};
};

export const deleteProperty = async (
  url,
  id,
  propertySaved,
  setPropertySaved
) => {
  let resp = {};

  const path = url + "/" + id;

  try {
    resp = await fetch(path, {
      method: "DELETE",
      "Content-Type": "application/json",
    });
    setPropertySaved(!propertySaved);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "The property has been successfully removed",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });

    console.log(error);
  }

  if (resp.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error deleting property from database",
    });
    return;
  }
  return {};
};
export const deleteCamera = async (url, id, cameraSaved, setCameratSaved) => {
  let resp = {};

  const path = url + "/" + id;

  try {

    
    resp = await fetch(path, {
      method: "DELETE",
      "Content-Type": "application/json",
    });
    setCameratSaved(!cameraSaved);
    /* Swal.fire({
      icon: "success",
      title: "Success",
      text: "Successfully removed",
    }); */
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });

    console.log(error);
  }

  
  if (resp.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error deleting report from database",
    });
    return;
  }
  return {};
};

export const DeleteCase = async (url, id,reportSaved, setreportSaved ) => {
  let resp = {};

  const path = url + "/" + id;

  try {
    resp = await fetch(path, {
      method: "DELETE",
      "Content-Type": "application/json",
    });
    setreportSaved(!reportSaved);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "The case has been successfully deleted",
    });

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });

    console.log(error);
  }

  if (resp.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error deleting case in database",
    });
    return;
  }
  return {};
};
