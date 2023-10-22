import React, { useContext, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import "./MultiStepForm.css";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillCheckCircle } from "react-icons/ai";
import { useForm, Controller, useFormContext } from "react-hook-form";
import emailjs from "emailjs-com";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Link } from "react-router-dom";
import { FormContext, FormProvider } from "../../context/FormProvide";
import { motion } from "framer-motion";
import { Resend } from "resend";

const TextAnimation = () => {
  const text = "You got it!";
  return (
    <motion.div className="text">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "goldenrod",
    color: "white",
  },
  palette: {
    primary: {
      main: "red",
    },
  },
}));

function getSteps() {
  return ["First Step", "Plan ", "Personal ", "Property ", "Contact "];
}

const First = ({ formPlan, setformPlan }) => {
  const onCategoryChange = (e) => {
    let _selectedCategories = [...formPlan.selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setformPlan({ ...formPlan, selectedCategories: _selectedCategories });
    setformPlan({ ...formPlan, selectedCategories: _selectedCategories });
  };

  const categories = [
    { name: "Personal security", key: "1" },
    { name: "Decrease property crime", key: "2" },
    { name: "Compliance with regulations and norms", key: "3" },
    { name: "Theft prevention", key: "4" },
    { name: "Protection of high-value assets", key: "5" },
    { name: "Other", key: "6" },
  ];
  return (
    <>
      <div className="card flex flex-col justify-content-center mb-5">
        <div className="font-semibold mb-3">
          What motivated you to hire a monitoring service?
        </div>
        <div className="flex flex-col gap-3">
          {categories.map((category) => {
            return (
              <div key={category.key} className="flex align-items-center">
                <Checkbox
                  inputId={category.key}
                  name="category"
                  value={category}
                  onChange={onCategoryChange}
                  checked={formPlan.selectedCategories.some(
                    (item) => item.key === category.key
                  )}
                />
                <label htmlFor={category.key} className="ml-2">
                  {category.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <div className="font-semibold mb-3">
          Tell us, what is the most important thing for you in a monitoring
          service?
        </div>
        <InputTextarea
          placeholder="Obtain precise, real-time information about events occurring on my property at any moment."
          value={formPlan.textArea}
          onChange={(e) =>
            setformPlan({ ...formPlan, textArea: e.target.value })
          }
          rows={4}
          cols={35}
        />
      </div>
    </>
  );
};
const BasicForm = ({ formPlan, setformPlan }) => {
  return (
    <>
      <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        placeholder="Enter Your First Name"
        fullWidth
        margin="normal"
        required
        value={formPlan.name}
        onChange={(e) => setformPlan({ ...formPlan, name: e.target.value })}
      />

      <TextField
        id="last-name"
        label="Last Name"
        variant="outlined"
        placeholder="Enter Your Last Name"
        fullWidth
        required
        margin="normal"
        value={formPlan.lastName}
        onChange={(e) => setformPlan({ ...formPlan, lastName: e.target.value })}
      />

      <TextField
        id="nick-name"
        label="Country"
        variant="outlined"
        placeholder="Enter Your Country"
        fullWidth
        margin="normal"
        required
        value={formPlan.country}
        onChange={(e) => setformPlan({ ...formPlan, country: e.target.value })}
      />

      <div className="mb-4">
        <TextField
          id="nick-name"
          label="State"
          variant="outlined"
          required
          placeholder="Enter Your State"
          fullWidth
          margin="normal"
          value={formPlan.state}
          onChange={(e) => setformPlan({ ...formPlan, state: e.target.value })}
        />
      </div>
    </>
  );
};
const ContactForm = ({ formPlan, setformPlan }) => {
  return (
    <>
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        placeholder="Enter Your E-mail Address"
        fullWidth
        required
        margin="normal"
        value={formPlan.email}
        onChange={(e) => setformPlan({ ...formPlan, email: e.target.value })}
      />

      <TextField
        id="phone-number"
        label="Phone Number"
        variant="outlined"
        required
        placeholder="Enter Your Phone Number"
        fullWidth
        value={formPlan.phone}
        onChange={(e) => setformPlan({ ...formPlan, phone: e.target.value })}
      />

      <div className="mb-4">
        <TextField
          id="alternate-phone"
          label="Alternate Phone"
          variant="outlined"
          placeholder="Enter Your Alternate Phone"
          fullWidth
          margin="normal"
          value={formPlan.alternativePhone}
          onChange={(e) =>
            setformPlan({ ...formPlan, alternativePhone: e.target.value })
          }
        />
      </div>
    </>
  );
};
const PropertyForm = ({ formPlan, setformPlan }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const properties = [
    { name: "Residential complex", code: "1" },
    { name: "Building", code: "2" },
    { name: "Factory or warehouse", code: "3" },
    { name: "Property under construction ", code: "4" },
    { name: "House", code: "5" },
    { name: "Other", code: "6" },
  ];

  return (
    <>
      <div className="card flex flex-col justify-content-center mb-2">
        <label htmlFor="integeronly" className="font-bold block mb-2">
          Type of property
        </label>
        <Dropdown
          value={formPlan.propertyType}
          onChange={(e) => setformPlan({ ...formPlan, propertyType: e.value })}
          options={properties}
          optionLabel="name"
          placeholder="Select the type of property"
          className="w-full md:w-14rem"
          required
        />
      </div>

      <TextField
        id="country"
        label="Property Name"
        variant="outlined"
        placeholder="Enter The Property Name"
        fullWidth
        value={formPlan.propertyName}
        onChange={(e) =>
          setformPlan({ ...formPlan, propertyName: e.target.value })
        }
        margin="normal"
      />

      <div className="">
        <TextField
          id=""
          label="Property Address"
          variant="outlined"
          placeholder="Enter The Property Address"
          fullWidth
          margin="normal"
          required
          value={formPlan.propertyAddress}
          onChange={(e) =>
            setformPlan({ ...formPlan, propertyAddress: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <TextField
          id=""
          label="Property Size"
          variant="outlined"
          placeholder="Enter your property size"
          fullWidth
          margin="normal"
          value={formPlan.propertySize}
          onChange={(e) =>
            setformPlan({ ...formPlan, propertySize: e.target.value })
          }
        />
      </div>
    </>
  );
};
const PlanInformation = ({ formPlan, setformPlan }) => {
  return (
    <>
      <div className=" flex  flex-col lg:flex-row gap-3 w-full">
        <div className=" flex flex-col">
          <label htmlFor="username">Cameras</label>
          <InputNumber
            inputStyle={{ width: "130px" }}
            className="w-2/3"
            id="username"
            aria-describedby="username-help"
            mode="decimal"
            required
            showButtons
            min={0}
            max={1000}
            value={formPlan.numCameras}
            onValueChange={(e) =>
              setformPlan({ ...formPlan, numCameras: e.value })
            }
          />
          <small id="username-help">
            Enter the number of cameras to monitor
          </small>
        </div>

        <div className="w-5"> </div>

        <div className=" flex flex-col ">
          <label htmlFor="username">Hours</label>
          <InputNumber
            inputStyle={{ width: "130px" }}
            className="w-2/3"
            id="username"
            aria-describedby="username-help"
            mode="decimal"
            value={formPlan.numHours}
            showButtons
            onValueChange={(e) =>
              setformPlan({ ...formPlan, numHours: e.value })
            }
            min={0}
            max={100}
          />
          <small id="username-help">Hours of monitoring per day</small>
        </div>
      </div>

      <div className="my-5">
        <div>Already have cameras on your property</div>

        <InputSwitch
          checked={formPlan.camerasInstalled}
          onChange={(e) =>
            setformPlan({ ...formPlan, camerasInstalled: e.value })
          }
          id="value"
          name="value"
        />
      </div>

      <div className="my-5">
        <div>Does your property have internet service?</div>

        <InputSwitch
          checked={formPlan.internet}
          onChange={(e) => setformPlan({ ...formPlan, internet: e.value })}
          id="value"
          name="value"
        />
      </div>
    </>
  );
};

function GetStepContent(step) {
  const { formPlan, setformPlan } = useContext(FormContext);
  switch (step) {
    case 0:
      return <First formPlan={formPlan} setformPlan={setformPlan} />;
    case 1:
      return <PlanInformation formPlan={formPlan} setformPlan={setformPlan} />;

    case 2:
      return <BasicForm formPlan={formPlan} setformPlan={setformPlan} />;
    case 3:
      return <PropertyForm formPlan={formPlan} setformPlan={setformPlan} />;
    case 4:
      return <ContactForm formPlan={formPlan} setformPlan={setformPlan} />;
    default:
      return "unknown step";
  }
}

export const MultiStepForm = () => {

  const serviceId = "service_nk6ddhp";
  const templateId = "template_qb25ll4";
  const apiKey = "W_IsG6K1IaAL7xkOS";

  /* const [formPlan, setformPlan] = useState({
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
  }) */

  const sendEmail = () => {
    let formulario = document.createElement("form");
    let inputName = document.createElement("input");
    inputName.setAttribute("value", formPlan.name)
    inputName.setAttribute("name", "name")

    let inputLastName = document.createElement("input");
    inputLastName.setAttribute("value", formPlan.lastName)
    inputLastName.setAttribute("name", "lastName")

    let propertyType = document.createElement("input");
    propertyType.setAttribute("name", "propertyType")
    propertyType.setAttribute("value", formPlan.propertyType.name)

    let propertyAddress = document.createElement("input");
    propertyAddress.setAttribute("value", formPlan.propertyAddress)
    propertyAddress.setAttribute("name", "propertyAddress")


    let state = document.createElement("input");
    state.setAttribute("value", formPlan.state)
    state.setAttribute("name", "state")

    let country = document.createElement("input");
    country.setAttribute("value", formPlan.country)
    country.setAttribute("name", "country")

    let numHours = document.createElement("input");
    numHours.setAttribute("value", formPlan.numHours)
    numHours.setAttribute("name", "numHours")

    let numCameras = document.createElement("input");
    numCameras.setAttribute("value", formPlan.numCameras)
    numCameras.setAttribute("name", "numCameras")


    let email = document.createElement("input");
    email.setAttribute("value", formPlan.email)
    email.setAttribute("name", "email")

    let phone = document.createElement("input");
    phone.setAttribute("value", formPlan.phone)
    phone.setAttribute("name", "phone")

    let alternativePhone= document.createElement("input");
    alternativePhone.setAttribute("value", formPlan.alternativePhone)
    alternativePhone.setAttribute("name", "alternativePhone")

    let propertyName= document.createElement("input");
    propertyName.setAttribute("value", formPlan.propertyName)
    propertyName.setAttribute("name", "propertyName")

    let propertySize = document.createElement("input");
    propertySize.setAttribute("value", formPlan.propertySize)
    propertySize .setAttribute("name", "propertySize")

    let camerasInstalled = document.createElement("input");
    camerasInstalled.setAttribute("value", formPlan.camerasInstalled ? "Yes" : "No")
    camerasInstalled .setAttribute("name", "camerasInstalled")

    let internet= document.createElement("input");
    internet.setAttribute("value", formPlan.internet ? "Yes" : "No")
    internet .setAttribute("name", "internet")

    let textArea= document.createElement("input");
    textArea.setAttribute("value", formPlan.textArea)
    textArea .setAttribute("name", "textArea")


    let list = ""
    formPlan.selectedCategories?.forEach(element => {
      list+=` "${element.name}" `
    })

    let selectedCategories= document.createElement("input");
    selectedCategories.setAttribute("value", list)
    selectedCategories.setAttribute("name", "selectedCategories")

    formulario.appendChild(inputName);
    formulario.appendChild(inputLastName);
    formulario.appendChild(propertyName);
    formulario.appendChild(propertyType);
    formulario.appendChild(propertySize);
    formulario.appendChild(propertyAddress);
    formulario.appendChild(state);
    formulario.appendChild(country);
    formulario.appendChild(numHours);
    formulario.appendChild(numCameras);
    formulario.appendChild(email);
    formulario.appendChild(phone);
    formulario.appendChild(alternativePhone);
    formulario.appendChild(camerasInstalled);
    formulario.appendChild(internet);
    formulario.appendChild(textArea);
    formulario.appendChild(selectedCategories);

    
    
    emailjs
      .sendForm(serviceId, templateId, formulario, apiKey)
      .then((res) => console.log("Good"))
      .catch((error) => console.log("Bad"));
  };

  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  const { formPlan, setformPlan } = useContext(FormContext);
  return (
    <>
      {/* <div className="w-full h-screen bg-hero-magnolia bg-no-repeat bg-cover bg-center pt-12 "> */}
      <div className="w-full mx-auto  bg-white p-5 rounded-md">
        <div className="hidden sm:block">
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ display: "block" }}
                  ></Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>

        {activeStep === steps.length ? (
          <div className="flex flex-col items-center justify-center my-10">
            <div>
              <TextAnimation />
            </div>
            <div className="h-3"></div>
            <Typography align="center" className="flex  mt-8">
              <AiFillCheckCircle className="text-yellow-600 text-2xl h-12 w-12" />
              You have created your personalized monitoring plan, our team will
              contact you as soon as possible.
            </Typography>
            <div className="h-3"></div>
        
            <Link to={"/"} reloadDocument>
              <Button className={classes.button}>Back Home!</Button>
            </Link>
          </div>
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {GetStepContent(activeStep)}

                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>
                {/*   {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )} */}

                {activeStep === steps.length - 1 ? (
                  <Button
                    className={classes.button}
                    variant="contained"
                    type="submit"
                    onClick={sendEmail}
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    className={classes.button}
                    variant="contained"
                    type="submit"
                  >
                    Next
                  </Button>
                )}
              </form>
            </FormProvider>
          </>
        )}
      </div>
    </>
  );
};
