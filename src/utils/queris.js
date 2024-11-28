export const URL_Usuario = import.meta.env.VITE_API_USUARIO;
export const URL_Reservation = import.meta.env.VITE_API_RESERVACION;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_Usuario + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return { error: "Error en el login" };
  }
};


export const crearReserva = async (reserva) => {
  try {
    const respuesta = await fetch(URL_Reservation, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserva),
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteReservs = async (id) => {
  try {
    const respuesta = await fetch(URL_Reservation +'/'+id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
