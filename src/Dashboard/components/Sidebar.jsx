import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
import { FiShoppingBag } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  const navigate = useNavigate();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const logout = () => {
    localStorage.setItem("user", JSON.stringify({}));
    localStorage.setItem("propertySelected", JSON.stringify({}));
    navigate("/");
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Innova Monitoring</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10 ">
            {/*   <NavLink
                    to={`/dashboard`}
                    key={"Dashboard"}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                   <FiShoppingBag />
                    <span className="capitalize ">Dashboard</span>
                  </NavLink> */}
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 p-0 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>

                {item.links.map((link) => {
                  if (link.permit=="Yes"){
                    return (
                      <NavLink
                        to={`/dashboard/${link.url}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : "",
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize ">{link.name}</span>
                      </NavLink>
                    );
                  }else{
                    if(userRole==="Admin"){
                      return(
                        <NavLink
                        to={`/dashboard/${link.url}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : "",
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize ">{link.name}</span>
                      </NavLink>
                      )
                    }else{
                      return (<></>)
                    }
                  }

                  return <></>
                  
                })}
              </div>
            ))}

            <div
              key={"logout"}
              onClick={logout}
              className="flex cursor-pointer items-center gap-5 pl-4 pt-3  rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
            >
              <BiLogOut />
              <span className="capitalize ">Logout</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
