import React, { useEffect, useState } from 'react'
import { getUser } from '../helpers/getUser';
export const useFetchUser = ({user}) => {
  
    const [usuario, setUsuario] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsuario = async () => {
        const newUser = await getUser(user)
        setUsuario(newUser);
        setIsLoading(false);
    }

   
  useEffect(() => {
    getUsuario();
  });

    return {
        usuario,
        isLoading
    }
}
