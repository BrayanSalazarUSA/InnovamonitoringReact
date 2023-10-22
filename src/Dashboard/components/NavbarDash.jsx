import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsBuildings, } from 'react-icons/bs';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../../context/ContextProvider';
import { UserProvider } from '../../context/UserProvider';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (

  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  /* const { userContext, setUserContext } = useContext(UserContext); */
  const userProfile = JSON.parse(localStorage.getItem("user"))
  let userImage = "";
        let link = userProfile.image?.split("/");
        let userImg = "";
        if(link){

          let idImg = link[5] ? link[5] : "";
          userImg = "https://drive.google.com/uc?export=view&id=" + idImg;
        }
  useEffect(() => {

    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (

    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Property" customFunc={() => handleClick('cart')} color={currentColor} icon={<BsBuildings />} />
        <NavButton title="Chat" dotColor="red" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={userImg}
              alt="user-profile"
            />
            <p className='p-0'>
              <span className="p-0 text-gray-400 text-14">Hi,</span>{' '}
              <span className="p-0 text-gray-400 font-bold ml-1 text-14">
              {userProfile.name || ""}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart properties={userProfile.properties}/>)}
        {isClicked.chat && (<Chat />)}
        {/* {isClicked.notification && (<Notification />)} */}
        {isClicked.userProfile && (<UserProfile userProfile={userProfile} />)}
      </div>
    </div>
  );
};

export default Navbar;