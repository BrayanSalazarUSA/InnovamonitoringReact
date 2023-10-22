import React, { useContext, useEffect, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserContext } from "../../../context/UserContext";
import { postReport } from "../../helper/postReport";

export const ReportFormEvidencesEdit = ({
  reportFormVisible,
  setReportFormVisible,
  reportSaved,
  setreportSaved,
}) => {
  const { reportForm, setReportForm } = useContext(UserContext);
  const { pdf, images, videos, evidences } = reportForm;
const [imageInput, setImageInput] = useState("")
const [videosInput, setVideosInput] = useState("")
  let imagenesEvidence = evidences?.filter((evi) => evi.name == "Img");
  let videosEvidence = evidences?.filter((evi) => evi.name == "Vid");
  imagenesEvidence = imagenesEvidence?.map((i) => i.link);

  videosEvidence = videosEvidence?.map((i) => i.link);
  
  useEffect(() => {
    setVideosInput(videosEvidence.toString());
    setImageInput(imagenesEvidence.toString());
    
  }, [])
  

  const formatDate = (date) => {
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.getFullYear());
    let formatted_date =
      date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
    console.log(formatted_date);
    return formatted_date;
  };

  const formatTime = (date) => {
    let formatted_date = date.getHours() + ":" + date.getMinutes();
    return formatted_date;
  };

  const splitEvidences = (evidendesString) => {
    let splitted = evidendesString.split(",");

    return splitted.map((evidence) => ({ evidence }));
  };

  const saveReport = async (reportForm, imageInput, videosInput) => {
    console.log(imageInput)
    console.log(videosInput);
    let evidences = [];
    let images = [];
    let videos = [];
    console.log(reportForm);
    if (imageInput?.length > 0) {
      images = imageInput?.split(",") || [];
    }
    if (videosInput.length > 0) {
      videos = videosInput?.split(",") || [];
    }

    images.forEach((img) => {
      evidences.push({
        link: img,
        name: "Img",
      });
    });

    videos.forEach((vid) => {
      evidences.push({
        link: vid,
        name: "Vid",
      });
    });
console.log("Evidences")
    console.log(images)
    console.log(videos)
    console.log(evidences)
    const {
      id,
      agent,
      caseType,
      company,
      date,
      time,
      level,
      pdf,
      numerCase,
      property,
    } = reportForm;
    let reportDto = {
      id,
      agent,
      caseType,
      company,
      date,
      time,
      level,
      pdf,
      numerCase,
      property,
      evidences,
    };

    let fecha = new Date(reportForm.date);

    let fecha2 = new Date(`09-24-2023 ${reportForm.time}:00`);

    reportDto.date = formatDate(fecha);
    reportDto.time = formatTime(fecha2);

    console.log("Dto");
    console.log(reportDto);
    await postReport(reportDto);
    setReportFormVisible(false);
    setreportSaved(!reportSaved);
  };

  return (
    <div>
      <div className="p-inputgroup my-3 ml-3">
        <span className="p-inputgroup-addon">
          <i className="pi pi-hashtag"></i>
        </span>
        <InputText
          value={pdf}
          onChange={(e) =>
            setReportForm((i) => {
              return { ...reportForm, pdf: e.target.value };
            })
          }
          placeholder="PDF"
        />
      </div>
      <div className="p-inputgroup my-3 ml-3">
        <span className="p-inputgroup-addon">
          <i className="pi pi-image"></i>
        </span>
        <InputTextarea
          value={imageInput}
          onChange={(e) =>
           setImageInput(e.target.value)
          }
          placeholder="Images"
          rows={5}
          cols={30}
        />
      </div>
      <div className="p-inputgroup my-3 ml-3">
        <span className="p-inputgroup-addon">
          <i className="pi pi-video"></i>
        </span>
        <InputTextarea
          value={videosInput}
          onChange={(e) =>
            setVideosInput(e.target.value)
          }
          placeholder="Videos"
          rows={5}
          cols={30}
        />
      </div>
      <div className="w-full flex justify-end">
        <Button icon="pi pi-times" severity="danger" label="Cancel" />
        <div className="w-3"></div>
        <Button
          icon="pi pi-check"
          label="Send"
          onClick={() => saveReport(reportForm, imageInput, videosInput)}
        />
      </div>
    </div>
  );
};
