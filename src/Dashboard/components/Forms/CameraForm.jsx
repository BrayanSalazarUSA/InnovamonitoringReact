import { InputText } from "primereact/inputtext";
import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { postCamera } from "../../helper/postCamera";
import { MdScreenRotationAlt } from "react-icons/md";
import { BsArrowRightShort, BsArrowUpShort } from "react-icons/bs";
export const CameraForm = ({ properties, setVisible }) => {
  const navigate = useNavigate();
  const { cameraForm, setCameraForm } = useContext(UserContext);
  const {
    name,
    brand,
    installedByUs,
    dateInstalled,
    image,
    status,
    type,
    property,
    model,
    lon,
    lat,
    rotation,
  } = cameraForm;
  const statusList = ["Working", "Offline", "Vandalized"];
  return (
    <div>
      <div className="flex">
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Camera Name</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              value={name}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, name: e.target.value };
                })
              }
              placeholder="Name"
            />
          </div>
        </div>
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Brand</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              value={brand}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, brand: e.target.value };
                })
              }
              placeholder="Brand"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Type</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <Dropdown
              value={type}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, type: e.value };
                })
              }
              options={["Dome", "PTZ", "Bullet", "LPR"]}
              placeholder="Type"
              className="w-full md:w-14rem"
            />
          </div>
        </div>

        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Model</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              value={model}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, model: e.target.value };
                })
              }
              placeholder="Model"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Camera Status</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>

            <Dropdown
              value={status}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, status: e.value };
                })
              }
              options={statusList}
              placeholder="Status"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Installed By Us</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>

            <Dropdown
              value={installedByUs}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, installedByUs: e.value };
                })
              }
              options={["Yes", "No"]}
              placeholder="Installed by us"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Date Installed</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-clock"></i>
            </span>
            <Calendar
              placeholder="Date"
              value={dateInstalled}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, dateInstalled: e.value };
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Property</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <Dropdown
              value={property}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, property: e.value };
                })
              }
              options={properties}
              optionLabel="name"
              placeholder="Property"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Image URL</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              value={image}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, image: e.target.value };
                })
              }
              placeholder="Image url"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Latitud</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <BsArrowUpShort></BsArrowUpShort>
            </span>

            <InputText
              value={lat}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, lat: e.target.value };
                })
              }
              placeholder="Lat"
            />
          </div>
        </div>
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Longitud</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <BsArrowRightShort />
            </span>

            <InputText
              value={lon}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, lon: e.target.value };
                })
              }
              placeholder="Lng"
            />
          </div>
        </div>
        <div className="p-inputgroup my-3 ml-3 flex flex-col">
          <label htmlFor="username">Rotation</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <MdScreenRotationAlt />
            </span>
            <InputText
              value={rotation}
              onChange={(e) =>
                setCameraForm((i) => {
                  return { ...cameraForm, rotation: e.target.value };
                })
              }
              placeholder="Rotation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CameraFormFooter = ({
  cameraSaved,
  setCameratSaved,
  setCameraFormFlag
}) => {
  const { cameraForm, setCameraForm } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSaveCamera = async () => {
    await postCamera(cameraForm, navigate);
    setCameratSaved(!cameraSaved);
    setCameraFormFlag(false);
    setCameraForm({})
  };

  return (
    <div className="w-full flex justify-end">
      <Button icon="pi pi-times" severity="danger" label="Cancel" onClick={()=> setCameraForm({})}/>
      <div className="w-3"></div>
      <Button icon="pi pi-check" label="Send" onClick={handleSaveCamera} />
    </div>
  );
};
