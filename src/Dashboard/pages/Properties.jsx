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
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import {
  contextMenuItems,
  orderAgents,
  ordersGrid,
  propertyGrid,
} from "../data/dummy";
import { Header } from "../components";
import { getAgents } from "../helper/getAgents";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { UserContext } from "../../context/UserContext";
import { postNewAgent } from "../helper/postNewAgent";
import { getPropertiesInfo } from "../helper/getProperties";
import { getPropertiesMapped } from "../helper/getPropertiesMapped";
import { postNewProperty } from "../helper/postNewProperty";

export const Properties = () => {
  const toolbarOptions = ["Search"];
  const { navigate } = useNavigate();

  const [properties, setProperties] = useState([]);
  const [propertySaved, setPropertySaved] = useState(false);
  const [visible, setVisible] = useState(false);
  let propertiesUser = JSON.parse(localStorage.getItem("user"));
  let listOfPropertiesByUser = propertiesUser.properties;
  const {
    propertyProvider,
    setPropertyProvider,
    agentDialog,
    setAgentDialog,
    flag,
    setFlag,
  } = useContext(UserContext);
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  

  useEffect(() => {
    getPropertiesMapped(navigate).then((data) => setProperties(data));
  }, [agentDialog, flag]);

  const saveNewProperty = async () => {
    await postNewProperty(propertyProvider);
    setAgentDialog(!agentDialog);
    setPropertySaved(!propertySaved);
    setPropertyProvider({});
  };

  return (
    <>
      <Dialog
        header="Add Property"
        visible={agentDialog}
        style={{ width: "30vw", display: "flex", justifyContent: "center" }}
        onHide={() => setAgentDialog(false)}
        footer={
          <div className="w-full flex justify-end">
            <Button icon="pi pi-times" severity="danger" label="Cancel" />
            <div className="w-3"></div>
            <Button
              icon="pi pi-check"
              label="Send"
              onClick={() => {
                saveNewProperty();
              }}
            />
          </div>
        }
      >
        <div className="w-full flex flex-col mx-auto">
          <div className="mt-6 mb-6 mx-auto">
            <span className="p-float-label">
              <InputText
                id="username"
                value={propertyProvider.name}
                onChange={(e) =>
                  setPropertyProvider((i) => {
                    return { ...propertyProvider, name: e.target.value };
                  })
                }
              />
              <label htmlFor="username">Property Name</label>
            </span>
          </div>

          <div className="mb-6  mx-auto">
            <span className="p-float-label">
              <InputText
                id="username"
                value={propertyProvider.direction}
                onChange={(e) =>
                  setPropertyProvider((i) => {
                    return { ...propertyProvider, direction: e.target.value };
                  })
                }
              />
              <label htmlFor="username">Address</label>
            </span>
          </div>

          <div className=" mb-6 mx-auto">
            <span className="p-float-label">
              <InputText
                id="username"
                value={propertyProvider.img}
                onChange={(e) =>
                  setPropertyProvider((i) => {
                    return { ...propertyProvider, img: e.target.value };
                  })
                }
              />
              <label htmlFor="username">Image URL</label>
            </span>
          </div>
          <div className="mx-auto">
            <span className="p-float-label">
              <InputText
                id="username"
                value={propertyProvider.mapImg}
                onChange={(e) =>
                  setPropertyProvider((i) => {
                    return { ...propertyProvider, mapImg: e.target.value };
                  })
                }
              />
              <label htmlFor="username">Property Map</label>
            </span>
          </div>
        </div>
      </Dialog>
      <div className="m-20 md:m-10 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Page" title={"Properties"} />

        <div className="card flex justify-end py-2">
          {userRole == "Admin" ? (
            <Button
              severity="info"
              label="Add Property"
              onClick={() => {
                setAgentDialog(!agentDialog);
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
          dataSource={properties}
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
            {propertyGrid.map((item, index) => (
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
              Toolbar,
              Search,
            ]}
          />
        </GridComponent>
      </div>
    </>
  );
};
