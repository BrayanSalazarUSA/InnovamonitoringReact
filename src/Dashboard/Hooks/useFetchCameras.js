import React, { useEffect, useState } from "react";

import { getCameras } from "../helper/getCameras";


const useFetchCameras = (navigate) => {
  const [cameras, setCameras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCamerasInfo = async () => {
    const cameras = await getCameras(navigate)
    setCameras(cameras)
    setIsLoading(false);
  };

  useEffect(() => {
    getCamerasInfo()
  }, []);

  return {
    cameras,
    isLoading,
  };
};

export default useFetchCameras;
