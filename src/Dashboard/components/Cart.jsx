import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
import useFetchProperty from "../Hooks/useFetchProperty";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { GetPropertyInfo } from "../helper/getPropertyInfo";

const Chat = ({ properties }) => {
  const { currentColor } = useStateContext();
  const navigate = useNavigate();
  const { propertyContext, setPropertyContext } = useContext(UserContext);

  /*  const jj = async (propertyid) => {
    const property = await GetPropertyInfo(propertyid, navigate);
    return property;
  }; */

  const handleClickProperty = (propertyArg) => {
    localStorage.setItem("propertySelected", JSON.stringify(propertyArg));
    const propertyid = propertyArg.id || 0;
    setPropertyContext(propertyArg);
  };

  return (
    <div className="nav-item absolute z-10 overflow-visible right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Properties</p>
          <button
            type="button"
            className="text-white  text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {properties?.map((property, index) => {
          let propertyImg = "";
          let link = property.img?.split("/");
          if (link) {
            let idImg = "";
            idImg = link[5];
            propertyImg = "https://drive.google.com/uc?export=view&id=" + idImg;
          }
          return (
            <div
              key={index}
              className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
              onClick={() => handleClickProperty(property)}
            >
              <div className="relative">
                <img
                  className="rounded-full h-16 w-16 object-cover"
                  src={propertyImg}
                />
                <span
                  /* style={{ background: item.dotColor }} */
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {property.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {property.direction}
                </p>
                {/*  <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p> */}
              </div>
            </div>
          );
        })}
        <div className="mt-5 text-center text-gray-400 text-sm">
          Properties you have access to
        </div>
      </div>
    </div>
  );
};

export default Chat;
