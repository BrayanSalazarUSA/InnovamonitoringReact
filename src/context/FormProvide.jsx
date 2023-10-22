import { createContext, useState } from "react";

 export const FormContext = createContext(); 

 export const FormProvider = ({children}) => {

      const [formPlan, setformPlan] = useState({
        selectedCategories:[],
        textArea:"",
        numCameras:0,
        numHours:0,
        camerasInstalled:true,
        internet:true,
        name:"",
        lastName:"",
        country:"",
        state:"",
        propertyType:"",
        propertyName:"",
        propertyAddress:"",
        propertySize:"",
        email:"",
        phone:"",
        alternativePhone:"",

      })

      return (
        <FormContext.Provider value={{formPlan, setformPlan}}>
             {children}
        </FormContext.Provider>
      )

    }