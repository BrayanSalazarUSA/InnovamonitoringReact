import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/images/Pages/Achievements/Seal_of_Opa_locka.png";
import img2 from "../../assets/images/Pages/Achievements/Seal_of_Riviera_Beach.png";
import img3 from "../../assets/images/Pages/Achievements/Seal_of_Miami,_Florida.png";
import img4 from "../../assets/images/Pages/Achievements/Seal_of_Homestead_Florida.png";
import img5 from "../../assets/images/Pages/Achievements/Seal_of_Pembroke_Pines,_Florida.png";
import img6 from "../../assets/images/Pages/Achievements/Seal_of_Miami_Gardens_Florida.png";
import img7 from "../../assets/images/Pages/Achievements/Seal_of_Jupire_Florida.png";
import "../Achievements/Achievments.css";
import { useTranslation } from "react-i18next";

const Achievements = () => {
    const [t] = useTranslation("global");
    return (
        <>
            <Navbar efecto="efecto2"></Navbar>
            <div className="container mx-auto text-center lg:px-8 margin">
                <div className="container text-center">
                    <h1 className="tittle">Titulo</h1>
                </div>
                <div className="w-full pt-10 md:flex">
                    <div className="text-xl text-gray-600 mr-7 sm:mt-2">
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam laudantium incidunt facere iste repellendus nihil cupiditate explicabo sunt excepturi, nulla eos veniam. Beatae, similique? Nam laboriosam adipisci deleniti unde!</p>
                    </div>
                    <div className="text-xl  text-gray-600 mt-10 sm:mt-2">
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dolorem quibusdam enim molestias, possimus quo veritatis reprehenderit non ea eveniet voluptatem quasi sapiente consequatur quia tempore aliquam voluptates? Esse, reprehenderit?</p>
                    </div>
                </div>
                
            </div>
            <div className="container mx-auto lg:px-8 lg:-mr-30 w-full pt-10 md:flex">
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img3} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div> <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div> <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div> <div className="slide">
                            <img className="img" src={img1} alt="imagen"></img>
                        </div>
                        <div className="slide">
                            <img className="img" src={img2} alt="imagen"></img>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Achievements;