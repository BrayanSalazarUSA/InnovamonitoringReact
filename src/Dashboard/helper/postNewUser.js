import { CameraAltTwoTone } from '@mui/icons-material';
import React from 'react'
import Swal from 'sweetalert2';

export const postNewUser = async(user) => {
    
  let resp = {}

    const url = `${process.env.REACT_APP_SERVER_IP}/users`;
   let data = {}
   try {
    const {name,email, image, pasword, rol} = user;
    
      resp = await fetch(url, {
       method: "POST",
       body: JSON.stringify({
        name,
        email,
        image,
        pasword,
        rol
       }),
        headers: {
     "Content-Type": "application/json",
     
   },
     })
    data = await resp.json();
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text:"The user has been created correctly",
  
      })
   } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error,

    })
   }

    if(resp.status == 500){
     
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error saving the user, check that all fields are filled in and try again.',
  
      })
      return 
    }
  
    console.log(data)
  return data
}
