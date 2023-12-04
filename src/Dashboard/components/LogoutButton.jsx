import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';

const LogoutButton = ({ bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
    const { setIsClicked, initialState } = useStateContext();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('user', JSON.stringify({}));
        localStorage.setItem('propertySelected', JSON.stringify({}));
        navigate('/');
    };

    return (
        <button
            type="button"
            onClick={() => {
                logout();
                setIsClicked(initialState);
            }}
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
        >
             {text}
        </button>
    );
};

export default LogoutButton;