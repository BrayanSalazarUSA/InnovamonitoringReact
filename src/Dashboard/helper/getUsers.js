import React from 'react';
import Swal from 'sweetalert2';

// Función para mostrar un mensaje de error
const showError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
  });
};

// Función para obtener usuarios
export const getUsers = async (navigate) => {
  const url = `${process.env.REACT_APP_SERVER_IP}/users`;

  try {
    const resp = await fetch(url);

    if (resp.status === 404) {
      showError("Error al buscar la información de los usuarios en la base de datos.");
      return [];
    }

    const data = await resp.json();

    const usersMapped = data.map((user) => {
      const link = user.image?.split("/");
      const idImg = link && link[5] ? link[5] : "";
      const userImg = idImg ? `https://drive.google.com/uc?export=view&id=${idImg}` : "";

      return {
        ProductImage: userImg,
        StatusBg: "#8BE78B",
        Email: user.email,
        Name: user.name,
        Rol: user.rol.rolName,
        user,
        id: user.id,
      };
    });

    return usersMapped;
  } catch (error) {
    showError(error.message);
    return [];
  }
};