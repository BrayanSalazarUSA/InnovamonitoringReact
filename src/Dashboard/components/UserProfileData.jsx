// UserProfileData.jsx
import { useTranslation } from "react-i18next";
import { BsCurrencyDollar } from "react-icons/bs";

const useUserProfileData = () => {
    const [t, i18n] = useTranslation("global");

    const userProfileData = [
        {
            icon: <BsCurrencyDollar />,
            title: t("dashboard.dashboard-navbar.profile"),
            desc: t("dashboard.dashboard-navbar.account"),
            iconColor: "#03C9D7",
            iconBg: "#E5FAFB",
        },
    ];

    return userProfileData;
};

export default useUserProfileData;
