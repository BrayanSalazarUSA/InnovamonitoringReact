import React, { useContext, useEffect, useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";


import { Header } from "../components";

import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CameraForm, CameraFormFooter } from "../components/Forms/CameraForm";
import useFetchProperties from "../Hooks/useFetchProperties";
import { getCameras } from "../helper/getCameras";
import { UserContext } from "../../context/UserContext";
import { cameraGrid, cameraGridAdmin } from "../data/dummy";

const Cameras = () => {
  const toolbarOptions = ["Search"];
  const navigate = useNavigate();
  const editing = { allowDeleting: true, allowEditing: true };

  const [camerasList, setCamerasList] = useState([]);
  let propertiesUser = JSON.parse(localStorage.getItem("user"));
  let listOfPropertiesByUser = propertiesUser.properties;
  const { propertyContext, setCameraForm,setPropertyContext, cameraSaved, setCameratSaved, cameraFormFlag, setCameraFormFlag } = useContext(UserContext);

  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let idStorage = propertyStorage.id;
  let id = propertyContext.id || idStorage;
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  useEffect(() => {
 
    getCameras(propertyContext.id || id, navigate).then((data) =>
      setCamerasList(data)
    );
  }, [propertyContext, cameraSaved]);

  return (
    <>
      <Dialog
        header="Add Camera"
        visible={cameraFormFlag}
        style={{ width: "50vw" }}
        onHide={() => {setCameraFormFlag(false);  setCameraForm({})}}
        footer={<CameraFormFooter cameraSaved={cameraSaved} setCameraFormFlag={setCameraFormFlag} setCameratSaved={setCameratSaved} />}
      >
        <CameraForm properties={listOfPropertiesByUser} />
      </Dialog>
      <div className="m-0 md:m-8 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Page" title={"Cameras - "+propertyContext.name} />

        <div className="card flex justify-end py-2 mb-7">
          {userRole == "Admin" ? (
            <Button
            onClick={() => setCameraFormFlag(true)}
            severity="info"
            label="Add Camera"
          >
            {" "}
            <AiOutlinePlusCircle className="ml-2"></AiOutlinePlusCircle>
          </Button>
          ) : (
            <></>
          )}
        </div>
        
   
        <GridComponent
          dataSource={camerasList}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
          style={{ position: "absolute", zIndex: 0 }}
        >
        

          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {userRole === "Admin" ? cameraGridAdmin.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            )) : cameraGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            )) }
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar]} />
        </GridComponent>
      </div>
    </>
  );
};
export default Cameras;
