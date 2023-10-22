import React, { useEffect, useState } from "react";
import { GetPropertyInfo } from "../helper/getPropertyInfo";
import { getReportId } from "../helper/getReportId";


const useFetchReportId = (id, navigate) => {
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getReport = async () => {
    const report = await getReportId(id, navigate);
    setReport(report)
    setIsLoading(false);
  };

  useEffect(() => {
    getReport(id)
  }, []);

  return {
    report,
    isLoading,
  };
};

export default useFetchReportId;
