import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  
  const [userContext, setUserContext] = useState({});
  const [propertyContext, setPropertyContext] = useState({});
  const [reportContext, setReportContext] = useState({});
  const [cameraContext, setCameraContext] = useState({});
  const [prueba, setPrueba] = useState("Prueba");
  const [reportSaved, setreportSaved] = useState(false);
  const [cameraSaved, setCameratSaved] = useState(false);
  const [propertySaved, setPropertySaved] = useState(false)
  const [edit, setEdit] = useState(false)
  const [userLogged, setUserLogged] = useState(false);
  const [reportFormVisible, setReportFormVisible] = useState(false);
  const [flag, setFlag] = useState(false)
  const [cameraFormFlag, setCameraFormFlag] = useState("")
  const [reportForm, setReportForm] = useState({
    id:"",
    property: {},
    agent: {},
    date: new Date(),
    time: new Date(),
    caseType: {},
    level: "",
    company: "",
    numerCase: "",
    pdf: "",
    images: [],
    videos: [],
  });

  const [cameraForm, setCameraForm] = useState({
    name: "",
    brand: "",
    model: "",
    installedByUs: "",
    dateInstalled: new Date(),
    image: "",
    status: "",
    type: "",
    lat:"",
    long:"",
    rotation:"", 
    property: {},
  });

  const [caseProvider, setCaseProvider] = useState({
    id: "",
    incidente: "",
  });

  const [userProvider, setUserProvider] = useState({
    id: null,
    name: "",
    email: "",
    image: "",
    pasword:"",
    rol: {
      rolName:""
    },
    properties: [],
  });

  const [agentProvider, setagentProvider] = useState({
    id:null,
    name:"",
    lastName:"",
    email:"",
    image:""
  })

  const [propertyProvider, setPropertyProvider] = useState({
    id:"",
    name:"",
    direction:"",
    img:"",
    mapImg:""
  })
  const [caseDialog, setCaseDialog] = useState(false);
  const [userDialog, setUserDialog] = useState(false);
  const [agentDialog, setAgentDialog] = useState(false);
  const [editCase, setEditCase] = useState(false);
const [editReportFormVisible, setEditReportFormVisible] = useState(false)

  return (
    <UserContext.Provider
      value={{
        prueba,
        setPrueba,
        userContext,
        setUserContext,
        propertyContext,
        setPropertyContext,
        reportContext,
        setReportContext,
        reportForm,
        setReportForm,
        cameraForm,
        setCameraForm,
        cameraContext,
        setCameraContext,
        reportSaved,
        setreportSaved,
        cameraSaved,
        setCameratSaved,
        caseProvider,
        setCaseProvider,
        caseDialog,
        setCaseDialog,
        editCase,
        setEditCase,
        userProvider, 
        setUserProvider,
        edit, setEdit,
        userDialog, setUserDialog,
        agentProvider, setagentProvider,
        agentDialog, setAgentDialog,
        userLogged, setUserLogged,
        reportFormVisible, setReportFormVisible,
        propertyProvider, setPropertyProvider,
        propertySaved, setPropertySaved,
        flag, setFlag,
         editReportFormVisible,
    setEditReportFormVisible,
    cameraFormFlag, setCameraFormFlag
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
