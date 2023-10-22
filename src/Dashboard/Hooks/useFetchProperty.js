import React, { useEffect, useState } from "react";
import { GetPropertyInfo } from "../helper/getPropertyInfo";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const useFetchProperty = (id, navigate) => {
  const [property, setProperty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProperty = async () => {
    if(id>0){


      const property = await GetPropertyInfo(id, navigate);
      setProperty(property)
      setIsLoading(false);
    }else{
      Swal.fire("info", "Info", "Este usuario no tiene ninguna propiedad asignada, asignele una para poder ingresar a IDS")

    }
  };

  useEffect(() => {
    getProperty(id)
  }, []);

  return {
    property,
    isLoading,
  };
};

export default useFetchProperty;
