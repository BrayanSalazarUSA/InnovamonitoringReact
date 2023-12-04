// UserProfileData.jsx
import { Height } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
const useUserProfileData = () => {
    const [t, i18n] = useTranslation("global");

    const userProfileData = [
        {
            icon: <MdOutlineSettings style={{Height: '100%'}} />,
            title: t("dashboard.dashboard-navbar.user-profile.profile"),
            desc: t("dashboard.dashboard-navbar.user-profile.account"),
            iconColor: "#03C9D7",
            iconBg: "#E5FAFB",
        },
    ];

    return userProfileData;
};

export default useUserProfileData;
