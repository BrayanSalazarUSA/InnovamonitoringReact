import React, { useContext, useEffect, useState } from "react";
import { getRoles } from "../helper/getRoles";



export const useFetchRoles = (navigate) => {
/*   const { reportContext, setReportContext } = useContext(UserContext); */
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState([])

  const getRolesInfo = async () => {
    const roles = await getRoles(navigate);
    setRoles(roles);
    setIsLoading(false);
  };

  useEffect(() => {
    getRolesInfo();
  }, []);

  return {
    roles
  };
};
