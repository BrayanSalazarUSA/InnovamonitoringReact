import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import  Sidebar  from "./components/Sidebar/Sidebar.jsx";
import { FooterDash, NavbarDash } from "./components";
import { UserContext } from "../context/UserContext";
import { useStateContext } from "../context/ContextProvider";
import useFetchProperty from "./Hooks/useFetchProperty";

const Dashboard = () => {
  const { activeMenu } = useStateContext();
  const { propertyContext, setPropertyContext } = useContext(UserContext);
  const navigate = useNavigate();
  const propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));

/*   if(!propertyStorage.id){
    alert("Hola")
    navigate("/")
  } */

  const propertyid = propertyStorage.id || 0;
  const { property, isLoading } = useFetchProperty(propertyid, navigate);


  if (Object.keys(propertyContext).length === 0) {
    setPropertyContext(property);
  }

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {/*  <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl  p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div> */}
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  w-full ">
          <NavbarDash />
        </div>
        {/* {themeSettings && (<ThemeSettings />)} */}
        <div>
          <Outlet />
        </div>
        <FooterDash/>
      </div>
    </div>
  );
};

export default Dashboard;