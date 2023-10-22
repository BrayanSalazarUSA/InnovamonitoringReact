import React, { useContext, useEffect, useState } from "react";

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
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, reportsGrid, reportsGridAdmin } from "../data/dummy";
import { Header } from "../components";
import { UserContext } from "../../context/UserContext";
import { Button } from "primereact/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "primeicons/primeicons.css";

import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";

import { FooterReportForm } from "../components/Forms/FooterReportForm";
import { ReportFormEvidences } from "../components/Forms/ReportFormEvidences";
import useFetchProperties from "../Hooks/useFetchProperties";
import { useFetchIncidents } from "../Hooks/useFetchIncidents";
import { useFetchAgents } from "../Hooks/useFetchAgents";
import { GetReports } from "../helper/GetReports";
import { ReportFormEdit } from "../components/Forms/ReportFormEdit";
import { ReportFormEvidencesEdit } from "../components/Forms/ReportFormEvidencesEdit";
import { ReportForm } from "../components/Forms/ReportForm";

const Reports = () => {
  const navigate = useNavigate();

  const { cases } = useFetchIncidents(navigate);
  const { agents } = useFetchAgents(navigate);
  const toolbarOptions = ["Search"];
  let propertiesUser = JSON.parse(localStorage.getItem("user"));
 
  let listOfPropertiesByUser = propertiesUser.properties;

  const [information, setInformation] = useState(true);

  const {
    propertyContext,
    setPropertyContext,
    reportSaved,
    setreportSaved,
    reportFormVisible,
    setReportFormVisible,
    editReportFormVisible,
    setEditReportFormVisible,
    setReportForm,
  } = useContext(UserContext);

  const [reportes, setReportes] = useState([]);

  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  let idStorage = propertyStorage.id;
  let id = propertyContext.id || idStorage;
  useEffect(() => {
    GetReports(propertyContext.id || id, userRole ).then((data) => {
      if (userRole == "Admin") {
     
        setReportes(data);
      }
      if (userRole == "Client") {
        let verifiedReports = data.filter((rep) => rep.isVerified);
      
        setReportes(verifiedReports);
      }

    });
  }, [propertyContext, reportSaved]);
  return (
    <>
      <Dialog
        header="Add Report"
        visible={reportFormVisible}
        style={{ width: "50vw" }}
        onHide={() => {
          setReportFormVisible(false);
          setReportForm({});
        }}
        footer={<FooterReportForm setInformation={setInformation} />}
      >
        {information ? (
          <ReportForm
            incidents={cases}
            properties={listOfPropertiesByUser}
            agents={agents}
          />
        ) : (
          <ReportFormEvidences
            setReportFormVisible={setReportFormVisible}
            reportSaved={reportSaved}
            setreportSaved={setreportSaved}
          />
        )}
      </Dialog>

      <Dialog
        header="Edit Report"
        visible={editReportFormVisible}
        style={{ width: "50vw" }}
        onHide={() => {
          setEditReportFormVisible(false);
          setReportForm({});
        }}
        footer={<FooterReportForm setInformation={setInformation} />}
      >
        {information ? (
          <ReportFormEdit
            incidents={cases}
            properties={listOfPropertiesByUser}
            agents={agents}
          />
        ) : (
          <ReportFormEvidencesEdit
            setReportFormVisible={setReportFormVisible}
            reportSaved={reportSaved}
            setreportSaved={setreportSaved}
          />
        )}
      </Dialog>

      <div className="m-20 md:m-10 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Page" title={"Reports - " + propertyContext.name} />
        <div className="card flex justify-end py-2 mb-7">
          {userRole == "Admin" ? (
            <Button
              onClick={() => setReportFormVisible(!reportFormVisible)}
              severity="info"
              label="Add Report"
            >
              <AiOutlinePlusCircle className="ml-2 "></AiOutlinePlusCircle>
            </Button>
          ) : (
            <></>
          )}
        </div>
        <GridComponent
          id="gridcomp"
          dataSource={reportes}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {userRole === "Admin"
              ? reportsGridAdmin.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))
              : reportsGrid.map((item, index) => (
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
              Toolbar,
            ]}
          />
        </GridComponent>
      </div>
    </>
  );
};
export default Reports;
