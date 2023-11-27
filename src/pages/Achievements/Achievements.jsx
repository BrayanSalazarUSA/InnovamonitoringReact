import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AchievementsSection from "../../components/Achievments/AchievementsSection/AchievementsSection"
import AchievementsCarrousel from "../../components/Achievments/AchievementsSection/AchievmentsCarrousel";
import "../Achievements/Achievments.css";
const Achievements = () => {

    return (
        <>
            <Navbar efecto="efecto2"></Navbar>
            <AchievementsSection></AchievementsSection>
            <AchievementsCarrousel></AchievementsCarrousel>
            <Footer></Footer>
        </>
    );
};

export default Achievements;