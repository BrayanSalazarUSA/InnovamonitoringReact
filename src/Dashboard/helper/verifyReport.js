
import React from 'react'
import Swal from 'sweetalert2';

export const verifyReport = async(report) => {
   
  let resp = {}

    const url = `${process.env.REACT_APP_SERVER_IP}/reports/${report.id}`;
   let data = {}

   try {
    
      resp = await fetch(url, {
       method: "PUT",
       body: JSON.stringify(report),
        headers: {
     "Content-Type": "application/json",
     
   },
     })
    data = await resp.json();
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text:"Report has been successfully verified",
  
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
        title: 'Credentials errsor',
        text: 'Error saving the report, verify that all fields are completed and try again.',
  
      })
      return 
    }
  
    console.log(data)
  return data
}
