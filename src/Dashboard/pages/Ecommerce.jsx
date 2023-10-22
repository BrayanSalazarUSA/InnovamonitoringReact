import React, { useContext, useEffect, useState } from "react";

import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine, Header } from "../components";
import imagen from "../../assets/arrest.jpg";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import {
  HiDocumentReport,
  HiStatusOffline,
  HiStatusOnline,
} from "react-icons/hi";
import { UserContext } from "../../context/UserContext";
import useFetchProperty from "../Hooks/useFetchProperty";
import { useNavigate } from "react-router-dom";
import { GetPropertyInfo } from "../helper/getPropertyInfo";
import { TbDeviceCctv, TbDeviceCctvOff } from "react-icons/tb";
import { GiPoliceCar } from "react-icons/gi";

let mag = {
  id: 2,
  name: "Bell Air",
  direction: "Fl 1231 Opa-Loka",
  img: "https://drive.google.com/uc?export=view&id=1y3mtI4oTCz9Dk_ME4bHuw9q0aW44-sur",
};

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  const navigate = useNavigate();
  const { propertyContext, setPropertyContext, prueba, setPrueba } =
    useContext(UserContext);
  const [propertyFecthed, setPropertyFecthed] = useState({});
  let user = JSON.parse(localStorage.getItem("user"));
  let userRole = user.rol?.rolName || "";
  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let idStorage = propertyStorage.id;
  let id = propertyContext.id || idStorage;
let propertyImage = ""
  useEffect(() => {
    earningData[0].amount = propertyContext.cameras?.length || 0;
    GetPropertyInfo(propertyContext.id || idStorage, userRole).then((data) =>
      setPropertyFecthed(data)
    );
  }, [propertyContext]);

  
  return (
    <div className="m-10 md:m-8 mt-5 p-2 md:p-0 bg-white rounded-3xl">
      
      <Header category="Dashboard" title={propertyFecthed.name || "Property"} />
      <div className="mt-3 ">
        <div
          className="flex flex-wrap lg:flex-nowrap justify-center bg-no-repeat bg-cover bg-center py-20"
          style={{ backgroundImage: `url(${propertyFecthed.propertyImage})` }}
        >
          <div className="h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-3 bg-gray-800/60  bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center py-5">
              <div>
                <p className="p-0 font-bold text-gray-300">Number of reports</p>
                <p className="p-0 text-2xl rounded-md  text-gray-300">
                  {propertyFecthed.numOfReports?.length || 0}
                </p>
              </div>

              <button
                type="button"
                style={{ backgroundColor: "goldenrod" }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4 ml-3"
              >
                <HiDocumentReport />
              </button>
            </div>
          </div>

          <div
            className="flex m-3 flex-wrap  
          gap-1 items-center"
          >
            <div
              key={1}
              className="bg-white/75
                   dar:text-gray-200 dark:bg-secondary-dark-bg
                   md:w-52 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: "#03C9D7",
                  backgroundColor: "#E5FAFB",
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                <TbDeviceCctv />
              </button>
              <p className="p-0 mt-3">
                <span className="text-lg font-semibold">
                  {propertyFecthed.cameras?.length || 0}
                </span>
              </p>
              <p className="p-0 text-md text-gray-700 mt-1">Total Cameras</p>
            </div>
            <div
              key={2}
              className="bg-white/75
                   dar:text-gray-200 dark:bg-secondary-dark-bg
                   md:w-52 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: "rgb(255, 244, 229)",
                  backgroundColor: "#8BE78B",
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                <HiStatusOnline />
              </button>
              <p className="p-0 mt-3">
                <span className="text-lg font-semibold">
                {propertyFecthed.numCamerasWorking || 0}
            
                </span>
              </p>
              <p className="p-0 text-md text-gray-700 mt-1">Cameras Online</p>
            </div>
            <div
              key={3}
              className="bg-white/75
                   dar:text-gray-200 dark:bg-secondary-dark-bg
                   md:w-52 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: "gray",
                  backgroundColor: "lightgray",
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                <HiStatusOffline />
              </button>
              <p className="p-0 mt-3">
                <span className="text-lg font-semibold">
                {propertyFecthed.numCamerasOffline || 0}
                </span>
              </p>
              <p className="p-0 text-md text-gray-700 mt-1">Cameras Offline</p>
            </div>

            <div
              key={4}
              className="bg-white/75
                   dar:text-gray-200 dark:bg-secondary-dark-bg
                   md:w-52 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: "#CD0E0E",
                  backgroundColor: "#EFB9B9",
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                <TbDeviceCctvOff />
              </button>
              <p className="p-0 mt-3">
                <span className="text-lg font-semibold">
                  {propertyFecthed.numCamerasVandalized || 0}
                </span>
              </p>
              <p className="p-0 text-base text-gray-700 mt-1">
                Vandalized Cameras{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
