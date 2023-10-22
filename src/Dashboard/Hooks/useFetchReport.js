import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { GetReports } from "../helper/GetReports";

export const useFetchReport = (id, navigate) => {
/*   const { reportContext, setReportContext } = useContext(UserContext); */
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState([])

  const getReports = async () => {
    const reports = await GetReports(id, navigate);
    setReports(reports);
    setIsLoading(false);
  };

  useEffect(() => {
    getReports(id);
  }, []);

  return {
    reports,
    isLoading,
  };
};
