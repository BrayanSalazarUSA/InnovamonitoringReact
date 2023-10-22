import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { GetReports } from "../helper/GetReports";
import { getIncidents } from "../helper/getIncidents";

export const useFetchIncidents = (navigate) => {
/*   const { reportContext, setReportContext } = useContext(UserContext); */
  const [isLoading, setIsLoading] = useState(true);
  const [cases, setCases] = useState([])

  const getCases = async () => {
    const cases = await getIncidents(navigate);
    setCases(cases);
    setIsLoading(false);
  };

  useEffect(() => {
    getCases();
  }, []);

  return {
    cases,
    isLoading,
  };
};
