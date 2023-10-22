import React from 'react'
import Swal from 'sweetalert2';


export const getUsers = async (navigate) => {
 
    let resp = {};
    let usersMapped = []
    const url = `${process.env.REACT_APP_SERVER_IP}/users`;
    let data = {};
    try {
      resp = await fetch(url);
  
      data = await resp.json();

      usersMapped = data.map((user) => {
        let userImg = "";
        let link = user.image?.split("/");
        if(link){

          let idImg = link[5] ? link[5] : "";
          userImg = "https://drive.google.com/uc?export=view&id=" + idImg;
        }
   
        return {
    
          ProductImage: userImg,
          StatusBg: "#8BE78B",
            Email: user.email,
            Name: user.name,
            Rol: user.rol.rolName,
            user,
            id:user.id
        };
      });


      
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error,
      });
    }
  
    if (resp.status == 404) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al buscar la informacion de la propiedad en la base de datos",
      });
  

      return;
    }
  
    console.log(usersMapped);
    return usersMapped;
  };
  