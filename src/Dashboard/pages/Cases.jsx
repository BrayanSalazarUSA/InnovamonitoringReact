import { Dialog } from "primereact/dialog";
import React, { useContext, useEffect, useState } from "react";

import { Button } from "primereact/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Search,
  PdfExport,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, ordersCases, ordersCasesAdmin, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { getIncidents } from "../helper/getIncidents";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { InputText } from "primereact/inputtext";
import { PostIncident, postIncident } from "../helper/postIncident";
import { putIncident } from "../helper/putIncident";
export const Cases = () => {
  const toolbarOptions = ["Search"];
  const { navigate } = useNavigate();
  const [cases, setCases] = useState([]);

  const {
    caseProvider,
    setCaseProvider,
    caseDialog,
    setCaseDialog,
    editCase,
    setEditCase,
    reportSaved, 
    setreportSaved
  } = useContext(UserContext);
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";


  useEffect(() => {
    getIncidents(navigate).then((data) => setCases(data));
  }, [reportSaved]);

  const editIncident = async() => {
    await putIncident(caseProvider, setreportSaved, reportSaved);
    setCaseDialog(!caseDialog);
    setCaseProvider({})
  };


  const saveIncident = async () => {
    await postIncident(caseProvider, setreportSaved, reportSaved)
    setCaseDialog(!caseDialog);
  };

  return (
    <>
      <Dialog
        header="Add Case"
        visible={caseDialog}
        style={{ width: "30vw", display: "flex", justifyContent: "center" }}
        onHide={() => {
          setCaseDialog(!caseDialog);
          setCaseProvider({});
          setEditCase(false);
        }}
        
        footer={
          <div className="w-full flex justify-end">
            <Button icon="pi pi-times" severity="danger" label="Cancel" />
            <div className="w-3"></div>
            {editCase ? (
              <Button icon="pi pi-check" label="Save" onClick={editIncident} />
            ) : (
              <Button icon="pi pi-check" label="Send" onClick={saveIncident} />
            )}
          </div>
        }
      >
        <div className="w-full flex flex-col mx-auto">
          <div className="mt-6 mb-6 mx-auto">
            <span className="p-float-label">
              <InputText onChange={(e) => setCaseProvider((i) => {
              return { ...caseProvider, incident:e.target.value };
            })} value={caseProvider.incident} id="caseType" />
              <label htmlFor="caseType">CaseType</label>
            </span>
          </div>
        </div>
      </Dialog>
      <div className="m-20 md:m-10 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Page" title={"Cases"} />
        <div className="card flex justify-end py-2">

        {userRole == "Admin" ? (
                 
                 <Button
                 severity="info"
                 label="Add Case"
                 onClick={() => {
                   setCaseDialog(!caseDialog);
                 }}
               >
                 {" "}
                 <AiOutlinePlusCircle className="ml-2"></AiOutlinePlusCircle>
               </Button>
                 ) : (
                   <></>
                 )}
        
        </div>

        <GridComponent
          id="gridcomp"
          dataSource={cases}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          toolbar={toolbarOptions}
          style={{ position: "absolute", zIndex: 0 }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {ordersCasesAdmin.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              PdfExport,
              Search,
            ]}
          />
        </GridComponent>
      </div>
    </>
  );
};
