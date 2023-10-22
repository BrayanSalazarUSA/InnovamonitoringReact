import { Dialog } from "primereact/dialog";
import React, { useContext, useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
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

import { contextMenuItems, ordersGrid, userGrid } from "../data/dummy";
import { Header } from "../components";
import { getUsers } from "../helper/getUsers";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFetchRoles } from "../Hooks/useFetchRoles";
import { getRoles } from "../helper/getRoles";
import { GetPropertyInfo } from "../helper/getPropertyInfo";
import { getPropertiesInfo } from "../helper/getProperties";
import { postNewUser } from "../helper/postNewUser";

export const Users = () => {
  const {
    userProvider,
    setUserProvider,
    userDialog,
    setUserDialog,
    flag
  } = useContext(UserContext);

  const { navigate } = useNavigate();

  const toolbarOptions = ["Search"];
  const [users, setUsers] = useState([]);
  const [userSaved, setUserSaved] = useState(false);
  const [roles, setRoles] = useState([]);
  const [properties, setProperties] = useState();
  let propertiesSelectedVar = [];

  const [propertiesList, setPropertiesList] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
    getPropertiesInfo(navigate).then((data) => {
      propertiesSelectedVar = data.map((i) => {
        return { id: i.id, name: i.name, direction: i.direction, img: i.img };
      });
      setProperties(propertiesSelectedVar);
    });
    getRoles().then((data) => setRoles(data));
  }, [userSaved, flag]);

  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );

  const saveNewUser = async () => {
    await postNewUser(userProvider);
    setUserSaved(!userSaved);
    setUserDialog(!userDialog);
    setUserProvider({});
  };
  return (
    <>
      <Dialog
        header="Add User"
        visible={userDialog}
        style={{ width: "40vw", display: "flex", justifyContent: "center" }}
        onHide={() => {
          setUserDialog(false);
          setUserProvider({});
        }}
        footer={
          <div className="w-full flex justify-center">
            <Button icon="pi pi-times" severity="danger" label="Cancel" />
            <div className="w-3"></div>
            <Button
              icon="pi pi-check"
              label="Send"
              className="w-full"
              onClick={() => {
                saveNewUser();
              }}
            />
          </div>
        }
      >
        <div className="w-full flex flex-col mx-auto">
          <div className="mt-6 mb-6 mx-auto w-7/12">
            <span className="p-float-label w-full">
              <InputText
                id="username"
                value={userProvider.name}
                className="w-full"
                onChange={(e) =>
                  setUserProvider((i) => {
                    return { ...userProvider, name: e.target.value };
                  })
                }
              />
              <label htmlFor="username">Name</label>
            </span>
          </div>

          <div className=" mb-6 mx-auto w-7/12">
            <span className="p-float-label">
              <InputText
                id="username"
                value={userProvider.email}
                className="w-full"
                onChange={(e) =>
                  setUserProvider((i) => {
                    return { ...userProvider, email: e.target.value };
                  })
                }
              />
              <label htmlFor="username">Email</label>
            </span>
          </div>

          <div className=" mb-6 mx-auto w-7/12 flex justify-center">
            <span className="p-float-label w-full">
              <Password
                toggleMask
                value={userProvider.pasword}
                onChange={(e) =>
                  setUserProvider({ ...userProvider, pasword: e.target.value })
                }
                className="w-full"
                header={header}
                footer={footer}
              />

              <label htmlFor="Password">Password</label>
            </span>
          </div>

          <div className="mb-6 mx-auto w-7/12 flex justify-center">
            <span className="p-float-label w-full">
              <InputText
                id="image"
                value={userProvider.image}
                className="w-full"
                onChange={(e) =>
                  setUserProvider((i) => {
                    return { ...userProvider, image: e.target.value };
                  })
                }
              />
              <label htmlFor="image">Image URL</label>
            </span>
          </div>

          <div className="mx-auto w-7/12 ">
            <Dropdown
              value={userProvider.rol}
              onChange={(e) =>
                setUserProvider((i) => {
                  return { ...userProvider, rol: e.value };
                })
              }
              optionLabel="rolName"
              options={roles || []}
              placeholder="Role"
              className="w-full"
            />
          </div>
        </div>
      </Dialog>
      <div className="m-20 md:m-10 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Page" title={"Users"} />
        <div className="card flex justify-end py-2">
          {userRole == "Admin" ? (
            <Button
              severity="info"
              label="Add User"
              onClick={() => setUserDialog(!userDialog)}
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
          dataSource={users}
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
            {userGrid.map((item, index) => (
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
