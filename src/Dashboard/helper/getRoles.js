import Swal from "sweetalert2";

export const getRoles = async (navigate) => {

  let resp = {};
  const url = `${process.env.REACT_APP_SERVER_IP}/roles`;
  let data = {};
  try {
    resp = await fetch(url);
    data = await resp.json();

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

    navigate("/login");
    return;
  }

  console.log(data);
  return data;
};
