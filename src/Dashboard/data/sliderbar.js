import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiShoppingBag, FiPieChart, FiUsers,} from "react-icons/fi";
import { BsMap, BsFillBuildingsFill,} from "react-icons/bs";
import { HiDocumentReport, HiUserCircle} from "react-icons/hi";
import { GiPoliceBadge } from "react-icons/gi";



const SidebarLinks = () => {
    const [t, i18n] = useTranslation("global");
    return [
        {
            title: t("dashboard.dashboard-sliderbar.dashboard-section.dashboard-tittle"),
            links: [
                {
                    name: t("dashboard.dashboard-sliderbar.dashboard-section.home"),
                    icon: <FiShoppingBag />,
                    url: "",
                    permit: "Yes",
                },
            ],
        },

        {
            title: t("dashboard.dashboard-sliderbar.integral-management-section.integral-tittle"),
            links: [
                {
                    name: t("dashboard.dashboard-sliderbar.integral-management-section.reports"),
                    icon: <HiDocumentReport />,
                    url: "reports",
                    permit: "Yes",
                },

                {
                    name: t("dashboard.dashboard-sliderbar.integral-management-section.map"),
                    icon: <BsMap />,
                    url: "Mapa",
                    permit: "Yes",
                },
                {
                    name: t("dashboard.dashboard-sliderbar.integral-management-section.agents"),
                    icon: <HiUserCircle />,
                    url: "Agents",
                    permit: "No",
                },
                {
                    name: t("dashboard.dashboard-sliderbar.integral-management-section.users"),
                    icon: <FiUsers />,
                    url: "Users",
                    permit: "No",
                },
                {
                    name: t("dashboard.dashboard-sliderbar.integral-management-section.cases"),
                    icon: <GiPoliceBadge />,
                    url: "Cases",
                    permit: "No",
                },
                {
                    name: t("dashboard.dashboard-sliderbar.integral-management-section.properties"),
                    icon: <BsFillBuildingsFill />,
                    url: "properties",
                    permit: "No",
                },
            ],
        },
        {
            title: t("dashboard.dashboard-sliderbar.graphical-insights-section.graphical-tittle"),
            links: [
                {
                    name: t("dashboard.dashboard-sliderbar.graphical-insights-section.report-bar"),
                    icon: <AiOutlineBarChart />,
                    url: "bar",
                    permit: "Yes",
                },
                {
                    name: t("dashboard.dashboard-sliderbar.graphical-insights-section.types-of-cases"),
                    icon: <FiPieChart />,
                    url: "pie-reports",
                    permit: "Yes",
                },
                {
                    name: t("dashboard.dashboard-sliderbar.graphical-insights-section.types-of-levels"),
                    icon: <FiPieChart />,
                    url: "pie-levels",
                    permit: "Yes",
                },

                {
                    name: t("dashboard.dashboard-sliderbar.graphical-insights-section.reports-per-month"),
                    icon: <AiOutlineBarChart />,
                    url: "stacked",
                    permit: "Yes",
                },
            ],
        },
    ]
};
export default SidebarLinks;