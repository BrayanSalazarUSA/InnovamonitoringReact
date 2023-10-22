import React, { useEffect, useState } from "react";
import { getPropertiesInfo } from "./../helper/getProperties";


const useFetchProperties = (navigate) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProperties = async () => {
    const properties = await getPropertiesInfo(navigate);
    setProperties(properties)
    setIsLoading(false);
  };

  useEffect(() => {
    getProperties()
  }, []);

  return {
    properties,
    isLoading,
  };
};

export default useFetchProperties;
