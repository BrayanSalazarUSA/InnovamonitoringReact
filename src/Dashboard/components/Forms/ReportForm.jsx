import React, { useContext, useState } from "react";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { UserContext } from "../../../context/UserContext";

export const ReportForm = ({properties, agents, incidents}) => {
 
  const { reportForm, setReportForm } = useContext(UserContext);
  const { property, agent, date, time, caseType, level, company, numerCase} = reportForm;


  const levels = [
   "Level 1", "Level 2", "Level 3", "Level 4"
  ];

  const team = [
     "Innova Monitoring",
     "Impro",
  ];

  return (
    <div>
      <div className="flex">
        <div className="p-inputgroup my-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-calendar"></i>
          </span>
          <Dropdown
            value={property}
            onChange={(e) =>
              setReportForm((i) => {
         
                return { ...reportForm, property:e.value };
              })
            }
            options={properties}
            optionLabel="name"
            placeholder="Property"
            className="w-full md:w-14rem"
          />
        </div>

        <div className="p-inputgroup my-3 ml-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <Dropdown
            value={agent}
            onChange={(e) => setReportForm((i) => {
         
              return { ...reportForm, agent:e.value };
            })}
            options={agents}
            optionLabel="name"
            placeholder="Monitoring Agents"
            className="w-full md:w-14rem"
          />
        </div>
      </div>

      <div className="flex">
        <div className="p-inputgroup my-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-clock"></i>
          </span>
          <Calendar
            placeholder="Date"
            value={date}
            onChange={(e) => setReportForm((i) => {
             
              return { ...reportForm, date:e.value };
            })}
          />
        </div>

        <div className="p-inputgroup my-3 ml-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <Calendar
            placeholder="Time"
            value={time}
            onChange={(e) => setReportForm((i) => {
           
              return { ...reportForm, time:e.value };
            })}
            timeOnly
          />
        </div>
      </div>

      <div className="flex">
        <div className="p-inputgroup my-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <Dropdown
            value={caseType}
            onChange={(e) => setReportForm((i) => {
           
              return { ...reportForm, caseType:e.value };
            })}
            options={incidents}
            optionLabel="incident"
            placeholder="Incident"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="p-inputgroup my-3 ml-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <Dropdown
            value={level}
            onChange={(e) => setReportForm((i) => {
            
              return { ...reportForm, level:e.value };
            })}
            options={levels}
            placeholder="Level"
            className="w-full md:w-14rem"
          />
        </div>
      </div>

      <div className="flex">
        <div className="p-inputgroup my-3 ">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <Dropdown
            value={company}
            onChange={(e) => setReportForm((i) => {
        
              return { ...reportForm, company:e.value };
            })}
            options={team}
            placeholder="Monitoring Team"
            className="w-full md:w-14rem"
          />
        </div>

        <div className="p-inputgroup my-3 ml-3">
          <span className="p-inputgroup-addon">
            <i className="pi pi-hashtag"></i>
          </span>
          <InputText value={numerCase} onChange={(e) => setReportForm((i) => {
              return { ...reportForm, numerCase:e.target.value };
            })} placeholder="Number Case" />
        </div>
      </div>
    </div>
  );
};
