import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiFillFilePdf,
  AiFillEdit,
  AiFillCheckCircle,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiPieChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

import {
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
  BsMap,
  BsFillBuildingsFill,
} from "react-icons/bs";

import {
  HiDocumentReport,
  HiOutlineEye,
  HiStatusOffline,
  HiStatusOnline,
  HiUserCircle,
} from "react-icons/hi";
import { TiDeleteOutline, TiTick } from "react-icons/ti";
import { GiCctvCamera, GiPoliceBadge, GiPoliceCar } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { TbDeviceCctv } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import {
  DeleteCase,
  deleteCamera,
  deleteCase,
  deleteItem,
  deleteProperty,
} from "../helper/delete";
import { GetPropertyInfo } from "../helper/getPropertyInfo";
import { Toast } from "reactstrap";
import { Button } from "primereact/button";
import Swal from "sweetalert2";
import { columnSelectionComplete } from "@syncfusion/ej2-react-grids";
import { SiDialogflow } from "react-icons/si";
import { getAgents } from "../helper/getAgents";
import { postNewAgent } from "../helper/postNewAgent";
import { postIncident } from "../helper/postIncident";


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl w-20 h-20  md:ml-3"
      src={
        props.ProductImage ||
        "https://drive.google.com/file/d/1qhOEbNfDGe5ALXoXtaZZisI2qDkLxwAL/view?usp=sharing"
      }
      alt="order-item"
    />
  </div>
);

export const gridOrderProperties = (props) => {

  if(props.lenght>3){
  return (
    <ol>
      {props?.map((i) => {(
        <li> {i.name}</li>
      )})}
    </ol>)

  }else{
    return (
      <li className="flex justify-center m-0 p-0 cursor-pointer">
        <SiDialogflow onClick={()=> { 


            let propertiesList = []
            console.log(props.user)
            console.log(props.user.properties)
            propertiesList = props.user.properties?.map(property => (`<li>${property.name}</li>`))
            console.log(propertiesList)
Swal.fire({
  title: '<strong>Properties</strong>',
  icon: 'success',
  html:
    '<h1 class=""></h1>'+
    propertiesList
 
})
         }}></SiDialogflow>
      </li>
    );

  }

};
export const GridPdf = (props) => {
  let url = props.PDF;
  const toast = useRef(null);

  if (url == "/dashboard/reports") {
    return (
      <Link
        onClick={() => {
          Swal.fire("This report does not have a pdf");
        }}
        className="flex justify-center m-0 p-0 "
      >
        <AiFillFilePdf className="text-lg text-red-600"></AiFillFilePdf>
      </Link>
    );
  } else {
    return (
      <Link to={url} className="flex justify-center m-0 p-0" target="_blank">
        <AiFillFilePdf className="text-lg text-red-600"></AiFillFilePdf>
      </Link>
    );
  }
};

export const GridDetails = ({ Details }) => {
  let id = Details.id;

  return (
    <Link
      className="flex justify-center m-0 p-0"
      to={`/dashboard/report-details/${id}`}
    >
      <HiOutlineEye className="text-lg "></HiOutlineEye>
    </Link>
  );
};
export const GridIsVerified = ({ isVerified }) => {
  if (isVerified) {
    return (
      <div className="flex justify-center m-0 p-0 text-lg text-green-600">
        <AiFillCheckCircle></AiFillCheckCircle>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center m-0 p-0 text-lg text-red-600">
        <TiDeleteOutline></TiDeleteOutline>
      </div>
    );
  }
};

let reportes = [
  {
    id: 3,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 1,
      incident: "Towing",
    },
    level: "Level 4",
    date: "09-17-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 37,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 38,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 39,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 40,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 41,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 42,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 43,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 44,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 45,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 46,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: true,
  },
  {
    id: 5,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 2,
      incident: "Shooling",
    },
    level: "Level 4",
    date: "09-18-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 57,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 58,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 59,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 60,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 61,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 62,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 63,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 64,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 65,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 66,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 6,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 3,
      incident: "Police Arrest",
    },
    level: "Level 4",
    date: "09-18-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 67,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 68,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 69,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 70,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 71,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 72,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 73,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 74,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 75,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 76,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 7,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 4,
      incident: "Gambling",
    },
    level: "Level 4",
    date: "09-18-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 77,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 78,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 79,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 80,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 81,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 82,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 83,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 84,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 85,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 86,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 8,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 4,
      incident: "Gambling",
    },
    level: "Level 4",
    date: "09-18-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 87,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 88,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 89,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 90,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 91,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 92,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 93,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 94,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 95,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 96,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 9,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 4,
      incident: "Gambling",
    },
    level: "Level 1",
    date: "09-18-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 97,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 98,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 99,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 100,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 101,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 102,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 103,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 104,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 105,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 106,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 10,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 4,
      incident: "Gambling",
    },
    level: "Level 1",
    date: "08-14-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 107,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 108,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 109,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 110,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 111,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 112,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 113,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 114,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 115,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 116,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 11,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 4,
      incident: "Gambling",
    },
    level: "Level 1",
    date: "07-09-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 117,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 118,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 119,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 120,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 121,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 122,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 123,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 124,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 125,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 126,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 12,
    numerCase: 1818,
    company: "Innova Monitoring",
    time: "12:00",
    caseType: {
      id: 4,
      incident: "Gambling",
    },
    level: "Level 1",
    date: "07-09-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [
      {
        id: 127,
        link: "https://drive.google.com/file/d/1SnwfcPLqK9TgK-sQU051-hfsDq5eBeLe/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 128,
        link: " https://drive.google.com/file/d/1JYu_moRWzeUsg2pV0atYDi6NOaQLfL0p/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 129,
        link: " https://drive.google.com/file/d/1X6gnTbD8zWBBQ2l1NoTAXd05KRBXZd8o/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 130,
        link: " https://drive.google.com/file/d/1WhDNY3KbzJDXI3kxmhwjykKsxcHQluph/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 131,
        link: " https://drive.google.com/file/d/1oswLDA9sCx8LeosaeFx99nk4pVHTHjJy/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 132,
        link: " https://drive.google.com/file/d/15UtGiMIXsfWYQuBJRMalpnsREPMhSp9c/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 133,
        link: " https://drive.google.com/file/d/1L9ZRthUUJuHBSCNwAm6aOK23ng58ZDhr/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 134,
        link: " https://drive.google.com/file/d/1ZwbNbB9GX_cT9HQ1MnLXpWK-0aim2EzN/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 135,
        link: " https://drive.google.com/file/d/1IkJPlw7inm0d4qK4bI60NE2rhm7qHesv/view?usp=drive_link",
        name: "Img",
      },
      {
        id: 136,
        link: " https://drive.google.com/file/d/1V1QAa6s4jp3f_xjb5srM1jFEQbvqhm9I/view?usp=drive_link",
        name: "Img",
      },
    ],
    agent: {
      id: 1,
      name: "Jesica",
      lastName: "Manco",
      image:
        "https://drive.google.com/file/d/1pfVVOPaxyTFjdUdXxhbJXsbsGAtS8nuN/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 14,
    numerCase: 2313,
    company: "Innova Monitoring",
    time: "15:51",
    caseType: {
      id: 1,
      incident: "Towing",
    },
    level: "Level 1",
    date: "09-22-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [],
    agent: {
      id: 3,
      name: "Juan",
      lastName: "Perez",
      image:
        "https://drive.google.com/file/d/1FmelZakbDdq64o88vvV7NdFsfBrjy_6e/view?usp=sharing",
    },
    verified: false,
  },
  {
    id: 15,
    numerCase: 456456,
    company: "Impro",
    time: "18:08",
    caseType: {
      id: 5,
      incident: "Garbage",
    },
    level: "Level 1",
    date: "05-16-2023",
    pdf: "",
    property: {
      id: 2,
      name: "Richmond Hills",
      direction: "1770 Richmond Cir SE, Atlanta, GA 30315",
      img: "https://drive.google.com/file/d/1ZhTWLUK-acbbn0nUwDNsUbSq1cECHjPv/view?usp=sharing",
      mapImg:
        "https://drive.google.com/file/d/1_0TS24w0GfKSWWp3v1zZkPm9pmx4UBqz/view?usp=drive_link",
      cameras: [
        {
          id: 3,
          name: "Cam 20",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1FEyt4MeEb-ajSttlfAn7jr5W2jo-Hmyd/view",
          lat: "-24.5",
          lon: "192",
          rotation: "-95",
        },
        {
          id: 4,
          name: "Cam 17",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-18-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1pptODELnVjRq4jLblVHAW2sUjDXGjysh/view",
          lat: "195",
          lon: "411",
          rotation: "130",
        },
        {
          id: 5,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view",
          lat: "437",
          lon: "331",
          rotation: "-110",
        },
        {
          id: 6,
          name: "Cam 24",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Nh-Q492_j_9iW4X30RWwVK5Cf2hsUeJ0/view?usp=drive_link",
          lat: "281",
          lon: "74.8",
          rotation: "-50",
        },
        {
          id: 7,
          name: "Cam 1",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1GIGzITs8pXF8UoQllyFMWtk7CukXKUKF/view?usp=drive_link",
          lat: "276",
          lon: "190.9",
          rotation: "50",
        },
        {
          id: 8,
          name: "Cam 2",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1BmQtupdeT-NBRQPdtzzDTgoHkN4k__gl/view?usp=drive_link",
          lat: "246",
          lon: "247",
          rotation: "-90",
        },
        {
          id: 9,
          name: "Cam 18",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1ik2RKGNdwAuppuIzBcVaT7xEYotTnuXT/view?usp=drive_link",
          lat: "213",
          lon: "408",
          rotation: "80",
        },
        {
          id: 10,
          name: "Cam 22",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "198",
          lon: "427",
          rotation: "195",
        },
        {
          id: 11,
          name: "Cam 12",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "202.5",
          lon: "556.5",
          rotation: "25",
        },
        {
          id: 12,
          name: "Cam 16",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "194.5",
          lon: "582",
          rotation: "-90",
        },
        {
          id: 13,
          name: "Cam 11",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1oh_Ce8HfbRouWwwX4XCh7AmgOUnQ9dIe/view?usp=drive_link",
          lat: "316",
          lon: "404",
          rotation: "50",
        },
        {
          id: 14,
          name: "Cam 13",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/14FNdV-puwycothClx1p64l62YxcvnKwp/view?usp=drive_link",
          lat: "314.8",
          lon: "445.8",
          rotation: "-135",
        },
        {
          id: 15,
          name: "Cam 14",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1z_Yv_fpNhMZsWef5eKzfDslu7cFTwfvF/view?usp=drive_link",
          lat: "437",
          lon: "331.1",
          rotation: "-125",
        },
        {
          id: 16,
          name: "Cam 15",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1Zu1U1xv8_K9BSZwFWZIJU9dBox6b5UNs/view?usp=drive_link",
          lat: "477",
          lon: "341",
          rotation: "-50",
        },
        {
          id: 17,
          name: "Cam 23",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1wpLd8626Z8SXjSLZbMDu21xvpmqsgVyR/view?usp=drive_link",
          lat: "-105",
          lon: "436",
          rotation: "200",
        },
        {
          id: 18,
          name: "Cam 25",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1-FVZWX0lN6fhyhl_lxDqGNPsaPpouLg7/view?usp=drive_link",
          lat: "-89.5",
          lon: "453",
          rotation: "-95",
        },
        {
          id: 19,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1_I8UfkiqTHNweJOv3Ld-GBi20CinSrmn/view?usp=drive_link",
          lat: "544",
          lon: "594",
          rotation: "90",
        },
        {
          id: 20,
          name: "Entry LPR",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1tzfbu8wG8h0-iuSIszvkw7aXi5Ji1Nhp/view?usp=drive_link",
          lat: "35.5",
          lon: "638",
          rotation: "-65",
        },
        {
          id: 21,
          name: "PTZ",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1PMmbjgd6VgdSIJNNBp5uhHOdWcnv2kWw/view?usp=drive_link",
          lat: "584",
          lon: "369",
          rotation: "0",
        },
        {
          id: 22,
          name: "Cam 4",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1LY5r0cegEVliFtaECFJ8_QmQTuthgKrf/view?usp=drive_link",
          lat: "472",
          lon: "314",
          rotation: "50",
        },
        {
          id: 23,
          name: "Cam 6",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1sUBVlu5KDONDsRZBuXR3cetcb0xUTKHJ/view?usp=drive_link",
          lat: "580",
          lon: "334",
          rotation: "-135",
        },
        {
          id: 24,
          name: "Cam 7",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image:
            "https://drive.google.com/file/d/1KBY6nGDULuSsb_6J9NACg9vPjiQU_fyv/view?usp=drive_link",
          lat: "617",
          lon: "331",
          rotation: "45",
        },
        {
          id: 25,
          name: "Cam 10",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "403",
          rotation: "-135",
        },
        {
          id: 26,
          name: "Cam 9",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "699",
          lon: "360",
          rotation: "110",
        },
        {
          id: 27,
          name: "Cam 8",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "735",
          lon: "380",
          rotation: "-65",
        },
        {
          id: 28,
          name: "Cam 5",
          brand: "HIKVISION",
          installedByUs: "Yes",
          type: "Dome",
          dateInstalled: "09-19-2023",
          status: "Working",
          image: "",
          lat: "725",
          lon: "356",
          rotation: "80",
        },
        {
          id: 55,
          name: "Front Office",
          brand: "",
          installedByUs: "Yes",
          type: "PTZ",
          dateInstalled: "09-21-2023",
          status: "Offline",
          image: "",
          lat: "",
          lon: null,
          rotation: "",
        },
      ],
    },
    evidences: [],
    agent: {
      id: 3,
      name: "Juan",
      lastName: "Perez",
      image:
        "https://drive.google.com/file/d/1FmelZakbDdq64o88vvV7NdFsfBrjy_6e/view?usp=sharing",
    },
    verified: false,
  },
];
export const GridEditReport = ({ Details }) => {
  const getPropertytoMapForm = async () => {
    console.log(Details);
    let data = await GetPropertyInfo(Details.property.id);
    const { cameras, direction, id, img, mapImg, name, reports } = data;

    let propertyToMapForm = {
      cameras,
      direction,
      id,
      img,
      mapImg,
      name,
      reports,
    };
  
    setEditReportFormVisible(!editReportFormVisible);
    setReportForm({ ...Details, property: propertyToMapForm });
  };


  let newProperty = { ...Details.property, reports: reportes };
 
  const {
    reportForm,
    setReportForm,
    editReportFormVisible,
    setEditReportFormVisible,
  } = useContext(UserContext);
  return (
    <div
      className="flex justify-center m-0 p-0"
      onClick={() => {
        getPropertytoMapForm();
      }}
    >
      <AiFillEdit className="text-lg "></AiFillEdit>
    </div>
  );
};
export const GridEditCamera = ({ camera }) => {
  const { cameraForm, setCameraForm, cameraSaved, setCameratSaved, cameraFormFlag, setCameraFormFlag } = useContext(UserContext);
  const showCameraToEdit = ()=> {

    setCameraForm(camera)
    setCameraFormFlag(!cameraFormFlag)
  }
  return (
    <div className="cursor-pointe flex justify-center m-0 p-0" onClick={() => {showCameraToEdit()}}>
      <AiFillEdit className="text-lg"></AiFillEdit>
    </div>
  );
};
export const GridEdit = ({ caseType }) => {
  const {
    caseProvider,
    setCaseProvider,
    caseDialog,
    setCaseDialog,
    editCase,
    setEditCase,
  } = useContext(UserContext);

  return (
    <div
      onClick={() => {
        setCaseProvider(caseType);
        setCaseDialog(!caseDialog);
        setEditCase(true);
        console.log(caseType);
      }}
      className="flex justify-center m-0 p-0 cursor-pointer"
    >
      <AiFillEdit className="text-lg"></AiFillEdit>
    </div>
  );
};
export const GridUserEdit = ({ user }) => {
  const { userProvider, setUserProvider, userDialog, setUserDialog } =
    useContext(UserContext);

  return (
    <div
      onClick={() => {
        setUserProvider(user);
  
        setUserDialog(!userDialog);
      }}
      className="flex justify-center m-0 p-0 cursor-pointer"
    >
      <AiFillEdit className="text-lg"></AiFillEdit>
    </div>
  );
};
export const GridAgentEdit = ({ agent }) => {
  const { agentProvider, setagentProvider, agentDialog, setAgentDialog } =
    useContext(UserContext);

  return (
    <div
      onClick={() => {
        setagentProvider(agent);
        console.log(agent);
        setAgentDialog(!agentDialog);
      }}
      className="flex justify-center m-0 p-0 cursor-pointer"
    >
      <AiFillEdit className="text-lg"></AiFillEdit>
    </div>
  );
};
export const GridPropertyEdit = ({ property }) => {
  const { propertyProvider, setPropertyProvider, agentDialog, setAgentDialog } =
    useContext(UserContext);

  return (
    <div
      onClick={() => {
        setPropertyProvider(property);
    
        setAgentDialog(!agentDialog);
      }}
      className="flex justify-center m-0 p-0 cursor-pointer"
    >
      <AiFillEdit className="text-lg"></AiFillEdit>
    </div>
  );
};
export const GridDelete = ({ id }) => {
  let url = `${process.env.REACT_APP_SERVER_IP}/users`;
  const { navigate } = useNavigate();
  const { flag, setFlag } = useContext(UserContext);


const deleteItemFunction=()=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e6c200",
    cancelButtonColor: "gray",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteItem(url, id, flag, setFlag).then(
      );
    }
  });


}

  return (
    <div
      onClick={() => {
        deleteItemFunction()
      }}
      className="flex justify-center m-0 p-0 text-red-700"
    >
      <MdDelete className="text-lg "></MdDelete>
    </div>
  );
};
export const GridDeleteAgents = ({ agent }) => {
  let url = `${process.env.REACT_APP_SERVER_IP}/agents`;
  const { navigate } = useNavigate();
  const { flag, setFlag } = useContext(UserContext);

  const deleteAgent=async() =>{
    agent.deleted=true;
    console.log(agent)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e6c200",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        postNewAgent(agent).then(
        );
        setFlag(!flag)
      }
    });
    
     
  }
  return (
    <div
      onClick={() => {
        deleteAgent()
      }}
      className="flex justify-center m-0 p-0 text-red-700"
    >
      <MdDelete className="text-lg "></MdDelete>
    </div>
  );
};
export const GridDeleteCase = ({ caseType}) => {
  const {
    setreportSaved, reportSaved
  } = useContext(UserContext);
  let url = `${process.env.REACT_APP_SERVER_IP}/cases`;

  const deleteIncident= async()=> {

    caseType.deleted=true;
    await postIncident(caseType, setreportSaved, reportSaved);

  }
  return (
    <div
      onClick={() => {
        deleteIncident()
      }}
      className="flex justify-center m-0 p-0 text-red-700"
    >
      <MdDelete className="text-lg "></MdDelete>
    </div>
  );
};

export const GridDeleteProperty = ({ id }) => {
  let url = `${process.env.REACT_APP_SERVER_IP}/properties`;

  const {
    propertySaved,
    setPropertySaved,
    agentDialog,
    setAgentDialog,
    flag,
    setFlag,
  } = useContext(UserContext);
  return (
    <div
      onClick={() => {
        deleteProperty(url, id, propertySaved, setPropertySaved);
        setFlag(!flag);
      }}
      className="flex justify-center m-0 p-0 text-red-700"
    >
      <MdDelete className="text-lg "></MdDelete>
    </div>
  );
};
export const GridDeleteCamera = ({ id }) => {
  let url = `${process.env.REACT_APP_SERVER_IP}/cameras`;
  const { cameraSaved, setCameratSaved } = useContext(UserContext);
const deleteCameraFunction=()=>{
  
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e6c200",
    cancelButtonColor: "gray",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteCamera(url, id, cameraSaved, setCameratSaved).then(
      
      );
      Swal.fire("Deleted!", "Successfully removed.", "success");
    }
  });
}
  return (
    <div
      onClick={() => {
        deleteCameraFunction()
      }}
      className="flex justify-center m-0 p-0 text-red-700"
    >
      <MdDelete className="text-lg "></MdDelete>
    </div>
  );
};
export const GridLiveView = ({ LiveView }) => {
  console.log(LiveView);
  const { cameraContext, setCameraContext } = useContext(UserContext);
  /*   setCameraContext(LiveView); */

  return (
    <Link
      className="flex justify-center m-0 p-0"
      onClick={() => {
        setCameraContext(LiveView);
      }}
      to={`/dashboard/camera/live-view`}
    >
      <HiOutlineEye className="text-lg"></HiOutlineEye>
    </Link>
  );
};

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Testing",
    keyField: "Testing",
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: "Done", keyField: "Close", allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-sm w-full h-full object-cover"
      src={props.EmployeeImage}
      alt="employee"
    />
    {/*  <p>{props.Name}</p> */}
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: "Category",
};

export const areaPrimaryYAxis = {
  labelFormat: "{value}%",
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};
export const barPrimaryXAxis = {
  valueType: "Category",
  labelPlacement: "OnTicks",
  edgeLabelPlacement: "None",
  labelIntersectAction: "Rotate90",
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
};
const areaChartData = [
  { month: "Jan", sales: 35 },
  { month: "Feb", sales: 28 },
  { month: "Mar", sales: 34 },
  { month: "Apr", sales: 32 },
  { month: "May", sales: 40 },
  { month: "Jun", sales: 32 },
  { month: "Jul", sales: 35 },
  { month: "Aug", sales: 55 },
  { month: "Sep", sales: 38 },
  { month: "Oct", sales: 30 },
  { month: "Nov", sales: 25 },
  { month: "Dec", sales: 32 },
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData,
    xName: "x",
    yName: "y",
    name: "Level 1",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

export const barChartData = [
  [
    { x: "Selling", y: 38 },
    { x: "Towing", y: 38 },
    { x: "Illegal", y: 40 },
    { x: "Garbage", y: 20 },
    { x: "Debriass", y: 7 },
    { x: "Debr", y: 7 },
  ],
  [
    { x1: "Narcotics ", y: 45 },
    { x1: "Police ", y: 18 },
    { x1: "Debris", y: 44 },
    { x1: "Debriss", y: 44 },
    { x1: "Garbage", y: 17 },
    { x1: "Debri", y: 44 },
  ],
  [
    { x2: "Police Arrest", y: 20 },
    { x2: "Gambling", y: 30 },
    { x2: "Fighting", y: 50 },
    { x2: "Narcotics Selling", y: 50 },
    { x2: "Robbery", y: 50 },
  ],
  [
    { x3: "Fire", y: 15 },
    { x3: "Shooting", y: 5 },
    { x3: "Carrying Weapo", y: 26 },
    { x3: "Fighting", y: 26 },
    { x3: "Stabin", y: 26 },
    { x3: "Thef", y: 26 },
    { x3: "Flooding", y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Level 1",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
      visible: false,
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x1",
    yName: "y",
    name: "Level 2",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x2",
    yName: "y",
    name: "Level 3",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[3],
    xName: "x3",
    yName: "y",
    name: "Level 4",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

export const rangeColorMapping = [
  { label: "1°C to 10°C", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11°C to 20°C",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21°C to 30°C",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Months",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}°C",
  title: "Temperature",
};

export const FinancialPrimaryXAxis = {
  valueType: "DateTime",
  minimum: new Date("2016, 12, 31"),
  maximum: new Date("2017, 9, 30"),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: "Price",
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "Name",
    width: "150",
    template: customerGridImage,
    textAlign: "Center",
  },
  {
    field: "ProjectName",
    headerText: "Project Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },
  {
    field: "Weeks",
    headerText: "Weeks",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "Budget",
    headerText: "Budget",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "CustomerID",
    headerText: "Customer ID",
    width: "120",
    textAlign: "Center",
    isPrimaryKey: true,
  },
];

export const cameraGrid = [
  {
    headerText: "Img",
    width: "115",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },

  { width: "190", field: "Name", headerText: "Name", textAlign: "Center" },
  {
    headerText: "Status",
    width: "110",
    textAlign: "Center",
    template: gridOrderStatus,
  },
  { field: "Title", headerText: "Brand", width: "100", textAlign: "Center" },
  { field: "Type", headerText: "Type", width: "90", textAlign: "Center" },

  {
    field: "Installed",
    headerText: "Installed",
    width: "100",
    textAlign: "Center",
  },

  {
    field: "DateInstalled",
    headerText: "Date",
    width: "110",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "LiveView",
    headerText: "Details",
    width: "100",
    textAlign: "Center",
    template: GridLiveView,
  },
  
];
export const cameraGridAdmin = [
  {
    headerText: "Img",
    width: "115",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },

  { width: "190", field: "Name", headerText: "Name", textAlign: "Center" },
  {
    headerText: "Status",
    width: "110",
    textAlign: "Center",
    template: gridOrderStatus,
  },
  { field: "Title", headerText: "Brand", width: "100", textAlign: "Center" },
  { field: "Type", headerText: "Type", width: "90", textAlign: "Center" },

  {
    field: "Installed",
    headerText: "Installed",
    width: "100",
    textAlign: "Center",
  },

  {
    field: "DateInstalled",
    headerText: "Date",
    width: "110",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "LiveView",
    headerText: "Details",
    width: "100",
    textAlign: "Center",
    template: GridLiveView,
  },
  {
    field: "camera",
    headerText: "Edit",
    width: "100",
    textAlign: "Center",
    template: GridEditCamera,
  },
  {
    field: "id",
    headerText: "Delete",
    width: "90",
    textAlign: "Center",
    template: GridDeleteCamera,
  },

];
let Permission = true;

export const links = [
  
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        icon: <FiShoppingBag />,
        url: "",
        permit: "Yes",
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "reports",
        icon: <HiDocumentReport />,
        url: "reports",
        permit: "Yes",
      },
      {
        name: "cameras",
        icon: <GiCctvCamera />,
        url: "cameras",
        permit: "Yes",
      },

      {
        name: "Map",
        icon: <BsMap />,
        url: "Mapa",
        permit: "Yes",
      },
      {
        name: "Agents",
        icon: <HiUserCircle />,
        url: "Agents",
        permit: "No",
      },
      {
        name: "Users",
        icon: <FiUsers />,
        url: "Users",
        permit: "No",
      },
      {
        name: "Cases",
        icon: <GiPoliceBadge />,
        url: "Cases",
        permit: "No",
      },
      {
        name: "properties",
        icon: <BsFillBuildingsFill />,
        url: "properties",
        permit: "No",
      },
    ],
  },
  {
    title: "Reports Charts",
    links: [
      {
        name: "bar",
        icon: <AiOutlineBarChart />,
        url: "bar",
        permit: "Yes",
      },
      {
        name: "pie-reports",
        icon: <FiPieChart />,
        url: "pie-reports",
        permit: "Yes",
      },
      {
        name: "pie-levels",
        icon: <FiPieChart />,
        url: "pie-levels",
        permit: "Yes",
      },

      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
        url: "stacked",
        permit: "Yes",
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Freedom Park Apartments",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "Aswan Apartments",
    desc: "Cordoba Courts",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "Glorieta Gardens",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Magnolia Park",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const earningData = [
  {
    icon: <TbDeviceCctv />,
    amount: "44",
    percentage: "-4%",
    title: "Total Cameras",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <HiStatusOnline />,
    amount: "34",
    percentage: "+23%",
    title: "Cameras Online",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "#8BE78B",
    pcColor: "green-600",
  },
  {
    icon: <HiStatusOffline />,
    amount: "10",
    percentage: "+38%",
    title: "Cameras Offline",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <GiPoliceCar />,
    amount: "125",
    percentage: "-12%",
    title: "Presence of police officers ",
    iconColor: "blue",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: "+$350",
    title: "Paypal Transfer",
    desc: "Money Added",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <BsShield />,
    amount: "-$560",
    desc: "Bill Payment",
    title: "Wallet",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <FiCreditCard />,
    amount: "+$350",
    title: "Credit Card",
    desc: "Money reversed",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",

    pcColor: "green-600",
  },
  {
    icon: <TiTick />,
    amount: "+$350",
    title: "Bank Transfer",
    desc: "Money Added",

    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsCurrencyDollar />,
    amount: "-$50",
    percentage: "+38%",
    title: "Refund",
    desc: "Payment Sent",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: "-$560",
    title: "Top Sales",
    desc: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-$560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$560",
    title: "Most Commented",
    desc: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const themeColors = [
  {
    name: "tomato-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "tomato-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
];

export const userGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "170",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Email",
    headerText: "Email",
    width: "180",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Rol",
    headerText: "Rol",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Properties",
    headerText: "Properties",
    width: "200",
    textAlign: "Center",
    template: gridOrderProperties,
  },

  {
    headerText: "Delete",
    template: GridDelete,
    textAlign: "Center",
    width: "80",
    field: "id",
  },
];
export const userGridAdmin = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "170",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Email",
    headerText: "Email",
    width: "180",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Rol",
    headerText: "Rol",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Properties",
    headerText: "Properties",
    width: "200",
    textAlign: "Center",
    template: gridOrderProperties,
  },
  /* {
    headerText: "Edit",
    template: GridUserEdit,
    textAlign: "Center",
    width: "80",
    field: "user",
  }, */
  {
    headerText: "Delete",
    template: GridDelete,
    textAlign: "Center",
    width: "80",
    field: "id",
  },
];

export const ordersCases = [
  {
    headerText: "Case ID",
    field: "id",
    textAlign: "Center",
    width: "20",
  },
  {
    headerText: "Case Type",
    field: "incident",
    textAlign: "Center",
    width: "150",
  },
];
export const ordersCasesAdmin = [
  {
    headerText: "Case ID",
    field: "id",
    textAlign: "Center",
    width: "20",
  },
  {
    headerText: "Case Type",
    field: "incident",
    textAlign: "Center",
    width: "150",
  },
  {
    headerText: "Edit",
    template: GridEdit,
    textAlign: "Center",
    width: "30",
    field: "caseType",
  },
  {
    headerText: "Delete",
    template: GridDeleteCase,
    textAlign: "Center",
    width: "30",
    field: "caseType",
  },
];

export const orderAgents = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Name",
    field: "name",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "LastName",
    field: "lastName",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Email",
    field: "email",
    textAlign: "Center",
    width: "120",
  },
];
export const orderAgentsAdmin = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Name",
    field: "name",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "LastName",
    field: "lastName",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Email",
    field: "email",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Edit",
    template: GridAgentEdit,
    textAlign: "Center",
    width: "80",
    field: "agent",
  },
  {
    headerText: "Delete",
    template: GridDeleteAgents,
    textAlign: "Center",
    width: "80",
    field: "id",
  },
];

export const propertyGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    field: "img",
    width: "120",
  },
  {
    headerText: "ID",
    field: "id",
    textAlign: "Center",
    width: "80",
  },
  {
    headerText: "Name",
    field: "Name",
    textAlign: "Center",
    width: "140",
  },
  {
    headerText: "Address",
    field: "Direction",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Cameras",
    field: "Cameras",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Reports",
    field: "Reports",
    textAlign: "Center",
    width: "120",
  },
];

export const propertyGridAdmin = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    field: "img",
    width: "120",
  },
  {
    headerText: "ID",
    field: "id",
    textAlign: "Center",
    width: "80",
  },
  {
    headerText: "Name",
    field: "Name",
    textAlign: "Center",
    width: "140",
  },
  {
    headerText: "Address",
    field: "Direction",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Cameras",
    field: "Cameras",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "Reports",
    field: "Reports",
    textAlign: "Center",
    width: "120",
  },
  /*   {
    headerText: "Edit",
    textAlign: "Center",
    Property: "property",
    template: GridPropertyEdit,
    width: "80",
  }, */
  {
    headerText: "Delete",
    textAlign: "Center",
    template: GridDeleteProperty,
    width: "85",
    field: "id",
  },

  /* ,
    {
      headerText: "Edit",
    template: GridAgentEdit,
    textAlign: "Center",
    width: "80",
 
    } */
];

export const reportsGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderItems",
    headerText: "Case",
    width: "200",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Level",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },

  {
    field: "dateIncident",
    headerText: "Date Incident",
    width: "130",
    textAlign: "Center",
  },
  {
    field: "Time",
    headerText: "Time",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "OrderID",
    headerText: "Report ID",
    width: "110",
    textAlign: "Center",
  },

  {
    field: "PDF",
    headerText: "PDF",
    width: "80",
    textAlign: "Center",
    template: GridPdf,
  },

  {
    field: "Details",
    headerText: "Details",
    width: "105",
    textAlign: "Center",
    template: GridDetails,
  },
];
export const reportsGridAdmin = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderItems",
    headerText: "Case",
    width: "200",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Level",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },

  {
    field: "dateIncident",
    headerText: "Date Incident",
    width: "130",
    textAlign: "Center",
  },
  {
    field: "Time",
    headerText: "Time",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "OrderID",
    headerText: "Report ID",
    width: "110",
    textAlign: "Center",
  },

  {
    field: "PDF",
    headerText: "PDF",
    width: "80",
    textAlign: "Center",
    template: GridPdf,
  },
  {
    field: "isVerified",
    headerText: "Verified",
    width: "95",
    textAlign: "Center",
    template: GridIsVerified,
  },
  {
    field: "Edit",
    headerText: "Edit",
    width: "80",
    textAlign: "Center",
    template: GridEditReport,
  },
  {
    field: "Details",
    headerText: "Details",
    width: "105",
    textAlign: "Center",
    template: GridDetails,
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "6/10/2023",

    TotalAmount: "21:13",
    OrderItems: "Narcotics Consumption",
    Location: "Report",
    Status: "Level 2",
    StatusBg: "#8BE78B",
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: "6/10/2023",
    TotalAmount: "20:13",
    OrderItems: "Carrying Weapon",
    Location: "Report",
    Status: "Level 4",
    StatusBg: "red",
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: "6/10/2023",
    TotalAmount: "12:13",
    OrderItems: "Debris",
    Location: "Report",
    Status: "Level 1",
    StatusBg: "#8BE78B",
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: "6/9/2023",
    TotalAmount: "22:32",
    OrderItems: "Police Arrest",
    Location: "Report",
    Status: "Level 3",
    StatusBg: "tomato",
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: "6/9/2023",
    TotalAmount: "06:13",
    OrderItems: "Hazardous",
    Location: "Report",
    Status: "Level 4",
    StatusBg: "red",
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: "6/9/2023",
    TotalAmount: 95.99,
    OrderItems: "Garbage",
    Location: "Report",
    Status: "Level 1",
    StatusBg: "#8BE78B",
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: "6/8/2023",
    TotalAmount: 17.99,
    OrderItems: "Damage to property",
    Location: "Report",
    Status: "Level 4",
    StatusBg: "red",
    ProductImage: product3,
  },
  {
    OrderID: 10248,
    CustomerName: "6/10/2023",

    TotalAmount: "21:13",
    OrderItems: "Narcotics Consumption",
    Location: "Report",
    Status: "Level 2",
    StatusBg: "#FEC90F",
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: "6/10/2023",
    TotalAmount: "20:13",
    OrderItems: "Carrying Weapon",
    Location: "Report",
    Status: "Level 4",
    StatusBg: "red",
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: "6/10/2023",
    TotalAmount: "12:13",
    OrderItems: "Debris",
    Location: "Report",
    Status: "Level 1",
    StatusBg: "#8BE78B",
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: "6/9/2023",
    TotalAmount: "22:32",
    OrderItems: "Police Arrest",
    Location: "Report",
    Status: "Level 3",
    StatusBg: "tomato",
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: "6/9/2023",
    TotalAmount: "06:13",
    OrderItems: "Hazardous",
    Location: "Report",
    Status: "Level 4",
    StatusBg: "red",
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: "6/9/2023",
    TotalAmount: 95.99,
    OrderItems: "Garbage",
    Location: "Report",
    Status: "Level 1",
    StatusBg: "#03C9D7",
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: "6/8/2023",
    TotalAmount: 17.99,
    OrderItems: "Damage to property",
    Location: "Report",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product3,
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    Location: "Newyork City",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "tomato Moon Eclipse",
    Location: "Space Center USA",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Showers in 2021",
    Location: "Space Center USA",
    StartTime: "2021-01-13T07:30:00.000Z",
    EndTime: "2021-01-13T09:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Milky Way as Melting pot",
    Location: "Space Center USA",
    StartTime: "2021-01-14T06:30:00.000Z",
    EndTime: "2021-01-14T08:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Glaciers and Snowflakes",
    Location: "Himalayas",
    StartTime: "2021-01-15T05:30:00.000Z",
    EndTime: "2021-01-15T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Life on Mars",
    Location: "Space Center USA",
    StartTime: "2021-01-16T03:30:00.000Z",
    EndTime: "2021-01-16T04:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-18T05:30:00.000Z",
    EndTime: "2021-01-18T07:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Wildlife Galleries",
    Location: "Africa",
    StartTime: "2021-01-20T05:30:00.000Z",
    EndTime: "2021-01-20T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Best Photography 2021",
    Location: "London",
    StartTime: "2021-01-21T04:00:00.000Z",
    EndTime: "2021-01-21T05:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Smarter Puppies",
    Location: "Sweden",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    StartTime: "2021-01-06T05:00:00.000Z",
    EndTime: "2021-01-06T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Aliens vs Humans",
    Location: "Research Center of USA",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-19T04:00:00.000Z",
    EndTime: "2021-01-19T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Sky Gazers",
    Location: "Alaska",
    StartTime: "2021-01-22T05:30:00.000Z",
    EndTime: "2021-01-22T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-11T00:00:00.000Z",
    EndTime: "2021-01-11T02:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Galaxies and Planets",
    Location: "Space Center USA",
    StartTime: "2021-01-11T11:30:00.000Z",
    EndTime: "2021-01-11T13:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-14T10:30:00.000Z",
    EndTime: "2021-01-14T12:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 21,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-10T08:30:00.000Z",
    EndTime: "2021-01-10T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 22,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-12T09:00:00.000Z",
    EndTime: "2021-01-12T10:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 23,
    Subject: "Sky Gazers",
    Location: "Greenland",
    StartTime: "2021-01-15T09:00:00.000Z",
    EndTime: "2021-01-15T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 24,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-16T07:00:00.000Z",
    EndTime: "2021-01-16T09:00:00.000Z",
    CategoryColor: "#7fa900",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const stackedChartData = [
  {
    x: "01",
    y: 1,
  },
  {
    x: "02",
    y: 2,
  },
  {
    x: "03",
    y: 2,
  },
  {
    x: "04",
    y: 1,
  },
  {
    x: "05",
    y: 1,
  },
  {
    x: "06",
    y: 1,
  },
  {
    x: "07",
    y: 5,
  },
  {
    x: "08",
    y: 5,
  },
  {
    x: "09",
    y: 7,
  },
  {
    x: "10",
    y: 3,
  },
  {
    x: "11",
    y: 3,
  },
  {
    x: "12",
    y: 8,
  },
];
