import React, { useContext } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserContext } from "../../../context/UserContext";
import { postReport } from "../../helper/postReport";

export const ReportFormEvidences = ({
  reportFormVisible,
  setReportFormVisible,
  reportSaved,
  setreportSaved,
}) => {

  const { reportForm, setReportForm } = useContext(UserContext);
  const { pdf, images, videos } = reportForm;
  let formatted_date;


  const formatDate = (date) => {
if(!date){
  date = new Date()
}

   formatted_date = date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
    return formatted_date;
  };

  const formatTime = (date) => {
    if(!date){
      date = new Date()
    }

    let formatted_date = date.getHours() + ":" + date.getMinutes();
    return formatted_date;
  };

  const saveReport = async (reportForm) => {
    let evidences = [];
    let images = [];
    let videos = [];

    if (reportForm.images?.length > 0) {
      images = reportForm.images?.split(",") || [];
    }
    if (reportForm.videos?.length > 0) {
      videos = reportForm.videos?.split(",") || [];
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

    const {
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
    reportDto.date = formatDate(reportForm.date);
    reportDto.time = formatTime(reportForm.time);

  
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
          value={images}
          onChange={(e) =>
            setReportForm((i) => {
              return { ...reportForm, images: e.target.value };
            })
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
          value={videos}
          onChange={(e) =>
            setReportForm((i) => {
              return { ...reportForm, videos: e.target.value };
            })
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
          onClick={() => saveReport(reportForm)}
        />
      </div>
    </div>
  );
};
