import React, { useContext, useEffect, useState } from "react";
import { postCamera } from "../helper/postCamera";


export const usePostCamera = (camera, navigate) => {
/*   const { reportContext, setReportContext } = useContext(UserContext); */
  const [isLoading, setIsLoading] = useState(true);
  const [cameraSaved, setCameraSaved] = useState([])

  const getCameraSaved= async () => {
    const camera = await postCamera(camera, navigate);
    setCameraSaved(camera);
    setIsLoading(false);
  };

  useEffect(() => {
    getCameraSaved();
  }, []);

  return {
    cameraSaved,
    isLoading,
  };
};
