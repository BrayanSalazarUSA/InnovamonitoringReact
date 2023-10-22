import React, { useContext, useEffect, useState } from "react";
import { getAgents } from "../helper/getAgents";



export const useFetchAgents = (navigate) => {
/*   const { reportContext, setReportContext } = useContext(UserContext); */
  const [isLoading, setIsLoading] = useState(true);
  const [agents, setAgents] = useState([])

  const getAgentsInfo = async () => {
    const agents = await getAgents(navigate);
    setAgents(agents);
    setIsLoading(false);
  };

  useEffect(() => {
    getAgentsInfo();
  }, []);

  return {
    agents,
    isLoading,
  };
};
