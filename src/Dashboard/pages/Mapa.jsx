import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
/* SER CUIDADOSO CON LA LINEA 16, leaflet-rotatedmarker GENERA UN ERROR AL SUBIR EL BUILD 
AL HOSTING SI EL COMPONENTE NO ESTA EN EL <Route path="/dashboard/mapa" element={<Mapa />} /> */
import "leaflet-rotatedmarker";
import "leaflet/dist/leaflet.css";
import { Header } from "../components";
import { CRS, Icon } from "leaflet";
import Dome from "../../assets/video-camera (1).png";
import PTZ from "../../assets/PTZ.png";
import offile from "../../assets/offline.jpg"
import { glorieta } from "../../data/Glorieta";
import { cordoba } from "../../data/Cordoba";
import { magnolia } from "../../data/Magnolia";
import { aswan } from "../../data/Aswan";
import { bellAir } from "../../data/BellAir";
import { lakeWood } from "../../data/LakeWood";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import useFetchProperties from "../Hooks/useFetchProperties";
import { getCameras } from "../helper/getCameras";
/* Glorieta */

let skater = new Icon({
  iconUrl: Dome,
  iconSize: [21, 21],
});

// "https://drive.google.com/uc?export=view&id=1-yTNu9wS8MbUdgXxGSoB3VbWfrRhZsDr"

const RotatedMarker = forwardRef(({ children, ...props }, forwardRef) => {
  const markerRef = useRef();

  const { rotationAngle, rotationOrigin } = props;

  const marker = markerRef.current;
  if (marker) {
    marker.setRotationAngle(rotationAngle);
    marker.setRotationOrigin(rotationOrigin);
  }

  return (
    <Marker
      ref={(ref) => {
        markerRef.current = ref;
        if (forwardRef) {
          forwardRef.current = ref;
        }
      }}
      {...props}
    >
      {children}
    </Marker>
  );
});
export const Mapa = () => {

  const navigate = useNavigate();
  const [camerasList, setCamerasList] = useState([]);

  const { propertyContext, setPropertyContext, cameraSaved, setCameratSaved } = useContext(UserContext);
  let  propertyMap = "";
  let link = propertyContext.mapImg?.split("/");
  
  if(link !==undefined){
    let idImg = link[5]; 
    propertyMap = "https://drive.google.com/uc?export=view&id=" + idImg;
  }else{
    propertyMap= "https://tse1.mm.bing.net/th?id=OIP.EboNfMk08KrJ4sNIAELmcAHaHa&pid=Api&P=0&h=180"
  }

  let propertyStorage = JSON.parse(localStorage.getItem("propertySelected"));
  let idStorage = propertyStorage.id;
  let id = propertyContext.id || idStorage;


  useEffect(() => {
    getCameras(propertyContext.id || id, navigate).then((data) =>
      setCamerasList(data)
      
    );

 
  }, [propertyContext, cameraSaved])
  

  var bounds = [
    [0, -200],
    [700, 800] /* 500, 1000 */,
  ];

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        /* Longitud , Latidud */
        console.log(e.latlng.lng);
        console.log(e.latlng.lat);
        console.log(camerasList)
      },
     
    });
    return false;
  };

  return (
    <>
      <div className="m-20 md:m-10 mt-14 p-2 md:p-0 bg-white rounded-3xl">
        <Header category="Map | Cameras" title={`${propertyContext.name} Map`}/>
        <MapContainer
          /* y 750/2 ,x */
          center={[355, 295]}
          zoom={0}
          scrollWheelZoom={false}
          crs={CRS.Simple}
          style={{ height: "700px", width: "100%", overflow: "visible" }}
        >
          <ImageOverlay
            url={propertyMap || ""}
            bounds={bounds}
            
          />
          {
          
          camerasList?.map((element, index) => {
            let camera = element.LiveView
            if (camera.type == "Dome") {
              skater = new Icon({
                iconUrl: Dome,
                iconSize: [30, 30],
              });
            }
            if (camera.type == "PTZ") {
              skater = new Icon({
                iconUrl: PTZ,
                iconSize: [25, 25],
              });
            }

            return (
              <RotatedMarker
                key={index}
                position={[camera.lon || 0, camera.lat || 0]}
                /* onClick={() => {
    setActivePark(camera);
  }} */
                eventHandlers={{
                  mouseover: (event) => event.target.openPopup(),
                  mouseout: (event) => event.target.closePopup(),
                }}
                autoPan={false}
                icon={skater}
                rotationAngle={camera.rotation || 0}
                rotationOrigin="center"
              >
                <Popup
                  minWidth={270}
                  className=" flex justify-center items-center"
                  autoPan={false}
                >
                  <div class="w-full flex flex-col m-0 p-0 items-center">
                    <img
                      class="w-full"
                      src={
                        element.EmployeeImage ||
                        offile
                      }
                      alt="Sunset in the mountains"
                    />

                    <p class="font-normal m-0 p-0 text-gray-300">
                      {camera.name}
                    </p>
                  </div>
                </Popup>
              </RotatedMarker>
            );
          })}
          <MapEvents />
        </MapContainer>
      </div>
    </>
  );
};
