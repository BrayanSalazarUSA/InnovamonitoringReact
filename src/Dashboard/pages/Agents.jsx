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

import { contextMenuItems, orderAgents, orderAgentsAdmin } from "../data/dummy";
import { Header } from "../components";
import { getIncidents } from "../helper/getIncidents";
import { getAgents } from "../helper/getAgents";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "reactstrap";
import { UserContext } from "../../context/UserContext";
import { postNewAgent } from "../helper/postNewAgent";
export const Agents = () => {
  const toolbarOptions = ["Search"];
  const { navigate } = useNavigate();

  const [agents, setAgents] = useState([]);
  const [agentSaved, setAgentSaved] = useState(false);
  const [visible, setVisible] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  const {agentProvider, setagentProvider, agentDialog, setAgentDialog, flag} = useContext(UserContext);
  useEffect(() => {
    getAgents(navigate).then((data) => setAgents(data));
  }, [agentSaved, flag]);

  const saveNewAgent = async() => {

  await postNewAgent(agentProvider);
  setAgentDialog(!agentDialog) 
  setAgentSaved(!agentSaved)
  setagentProvider({})
  }
  return (
    <>
      <Dialog
        header="Add Agent"
        visible={agentDialog}
        style={{ width: "30vw", display: "flex", justifyContent: "center" }}
        onHide={() => setAgentDialog(false)}
        footer={
          <div className="w-full flex justify-end">
            <Button icon="pi pi-times" severity="danger" label="Cancel" />
            <div className="w-3"></div>
            <Button icon="pi pi-check" label="Send" onClick={()=> {saveNewAgent()}}/>
          </div>
        }
      >
        <div className="w-full flex flex-col mx-auto">
          <div className="mt-6 mb-6 mx-auto">
            <span className="p-float-label">
              <InputText id="username" value={agentProvider.name} onChange={(e) => setagentProvider((i) => {
              return { ...agentProvider, name:e.target.value };
            })} />
              <label htmlFor="username">Name</label>
            </span>
          </div>

          <div className="mb-6  mx-auto">
            <span className="p-float-label">
              <InputText id="username"  value={agentProvider.lastName} onChange={(e) => setagentProvider((i) => {
              return { ...agentProvider, lastName:e.target.value };
            })}/>
              <label htmlFor="username">LastName</label>
            </span>
          </div>
          <div className=" mb-6 mx-auto">
            <span className="p-float-label">
              <InputText  value={agentProvider.email} onChange={(e) => setagentProvider((i) => {
              return { ...agentProvider, email:e.target.value };
            })} id="username" />
              <label htmlFor="username">Email</label>
            </span>
          </div>

          <div className="mx-auto">
            <span className="p-float-label">
              <InputText id="username"  value={agentProvider.image} onChange={(e) => setagentProvider((i) => {
              return { ...agentProvider, image:e.target.value };
            })} />
              <label htmlFor="username">Image URL</label>
            </span>
          </div>
          
        </div>
      </Dialog>
      <div className="m-20 md:m-10 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Page" title={"Monitoring Agents"} />
        <div className="card flex justify-end py-2">
        {userRole == "Admin" ? (
                 
          <Button
          severity="info"
          label="Add Agent"
          onClick={() => {setAgentDialog(!agentDialog)}}
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
          dataSource={agents}
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
            {orderAgentsAdmin.map((item, index) => (
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
