
import React from 'react'
import Swal from 'sweetalert2';

export const postReport = async(report) => {

  let resp = {}

    const url = `${process.env.REACT_APP_SERVER_IP}/reports`;
   let data = {}

   try {
    
      resp = await fetch(url, {
       method: "POST",
       body: JSON.stringify(report),
        headers: {
     "Content-Type": "application/json",
     
   },
     })
    data = await resp.json();
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text:"Report has been successfully saved",
  
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
        title: 'Credentials error',
        text: 'Error saving the report, verify that all fields are completed and try again.',
  
      })
      return 
    }
  
    console.log(data)
  return data
}
