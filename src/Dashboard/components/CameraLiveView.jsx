import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Header from "./Header";

export const CameraLiveView = () => {
  const { cameraContext, setCameraContext } = useContext(UserContext);

  const setStatusColor=(status)=>{

      if(status=="Working") return { background: "#8BE78B" }
      if(status=="Offline") return { background: "gray" }
      if(status=="Vandalized") return { background: "red" }
  }

  return (
    <div className="m-0 md:m-8 mt-14 p-2 md:p-0 bg-white rounded-3xl">
      <Header category="Cameras" title="Camera Details" />

      <section class="text-gray-600 body-font overflow-hidden ">
        <div class="container px-2 py-4 mx-auto">
          <div class="lg:w-full mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-8/12 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={cameraContext.cameraImg}
            />
            <div class="lg:w-4/12 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0 ">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Innova Monitoring
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
               {cameraContext.name}
              </h1>
              <div class="flex mb-4">
                <a class="flex-grow text-yellow-600 border-b-2 border-yellow-600 py-2 text-lg px-1">
                  Description
                </a>
              </div>

              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Status</span>
                <span
                  class="ml-auto text-gray-100 px-4 font-semibold py-1 rounded-full"
                  style={setStatusColor(cameraContext.status)}
                >
                 {cameraContext.status}
                </span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Brand</span>
                <span class="ml-auto text-gray-900"> {cameraContext.brand}</span>
              </div>
              <div class="flex border-t border-b  border-gray-200 py-2">
                <span class="text-gray-500">Type</span>
                <span class="ml-auto text-gray-900"> {cameraContext.type}</span>
              </div>
              <div class="flex border-t border-b border-gray-200 py-2">
                <span class="text-gray-500">Installed by us</span>
                <span class="ml-auto text-gray-900"> {cameraContext.installedByUs}</span>
              </div>
              <div class="flex border-t border-b  border-gray-200 py-2">
                <span class="text-gray-500">Date Installed</span>
                <span class="ml-auto text-gray-900"> {cameraContext.dateInstalled}</span>
              </div>
              <div class="flex border-t border-b border-gray-200 py-2">
                <span class="text-gray-500">Property</span>
                <span class="ml-auto text-gray-900"> {cameraContext.property.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
