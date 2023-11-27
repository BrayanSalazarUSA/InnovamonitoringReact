import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import { getUser } from "../../Dashboard/helper/getUser";
import { UserContext } from "../../context/UserContext";
import "./Login.css";
import dasboardImage from "../../Dashboard/data/dashboardImage.webp";
import logo from "../../assets/images/Logos/innova-monitoring.png";
import Swal from "sweetalert2";


const Login = () => {
  localStorage.clear("propertySelected")
  localStorage.clear("user")
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  const { userContext, setUserContext, userLogged, setUserLogged } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let newUser = null;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

 console.log(width)

    if (email === "" || password === "") {
      setError(true);
      return;
    }
    const user = {
      /* email,
      pasword: password */
      email,
      pasword:password
    };
    try {
      newUser = await getUser(user);
    } catch (error) {
   
    }
    
  const newUser = await getUser(user);


  if(width>800){
    if (newUser != null) {
      localStorage.setItem("user", JSON.stringify(newUser));
      setUserContext(newUser);

      if(newUser.properties?.length>0){
        localStorage.setItem("propertySelected", JSON.stringify(newUser.properties[0] || {}))
        setUserLogged(!userLogged)
        navigate("/dashboard");
      }else{
        Swal.fire("info", "This user does not have any properties assigned", "info")
        navigate("/");
      }


  
    } 
  }else{
    Swal.fire('Warning', 'To access the portal you must enter from a computer with a resolution equal to or greater than 900px.', 'info')
    navigate("/")
  }
 

    //setError(false)
   /*  Swal.fire("info", "This functionality is not yet in development, in the meantime take a tour of our website.", "info")
    navigate("/"); */
  };

  let style1 = {
    background: `url(${dasboardImage}) top, linear-gradient(rgba(6, 6, 6, 0.705),rgba(16, 16, 16, 0.708))`,
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };


  return (
    <>
      <Navbar efecto="efecto2"></Navbar>
      <div className="bg-white my-8">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-3/5" style={style1}>
            <div className="flex items-center h-full px-20 ">
              <div>
              <p className=" text-3xl font-bold tracking-tight text-yellow-600 sm:text-4xl">
                IDS - Innova Dashboard System
              </p>
          
                <p className="max-w-xl mt-3 text-gray-300">{t("login.text")}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img className="h-52 w-52" src={logo} alt="Innova Monitoring" />
                </div>
                <p className="mt-3 text-gray-500 p-0">
                  {t("login.header_sign_in")}
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm text-gray-600 "
                    >
                      {t("login.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("login.email_placeholder")}
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label for="password" className="text-sm text-gray-600 ">
                        {t("login.password")}
                      </label>
                      <p
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                       {t("login.forgot_password")}
                      </p>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder={t("login.password_placeholder")}
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  {error && (
                   
                      <div className="mt-6 text-red-700">{t("login.required_fields")}</div>
                   
                  )}

                  <div className="mt-6">
                    <button
                      type="submit"
                      onClick={handleOnSubmit}
                      className="w-full px-4  py-2 tracking-wide text-white transition-colors duration-300 transform bg-yellow-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      {t("login.sign_in")}
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  {t("login.acount_yet")}
                 <br></br>
                  <a
                    href="http://localhost:3000/plan"
                    className="text-yellow-600 focus:outline-none focus:underline hover:underline"
                  >
                    {t("login.join_us")}
                  </a>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
