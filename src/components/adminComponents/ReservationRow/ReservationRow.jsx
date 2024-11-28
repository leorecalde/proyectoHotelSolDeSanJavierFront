import { Button } from "react-bootstrap";
import style from "../RowUser/RowUser.module.css";
import { FaRegCalendarCheck, FaPen, FaTrash } from "react-icons/fa";
import { deleteReservs } from "../../../utils/queris.js";
import { showCustomAlert } from "../../../utils/customAlert.js";

const ReservationRow = ({
  user_reservation,
  room_reservation,
  check_in,
  check_out,
  persons,
}) => {
  const deleteReservation = async () => {
    try {
      showCustomAlert({
        alertTitle: "¿Seguro de que quieres eliminar la reserva?",
        alertText: "¡Luego de esta acción no podrás volver atrás!",
        icon: "warning",
        showCancel: true,
        continueConfirm: true,
        callback: async () => {
          const respuesta = await deleteReservs(room_reservation.id);
          if (respuesta.status === 200) {
            showCustomAlert({
              alertTitle: "¡La reserva fue eliminada correctamente!",
              alertText: "",
              icon: "success",
            });
          } else {
            showCustomAlert({
              alertTitle: "¡No se pudo eliminar tu reserva!",
              alertText: "",
              icon: "danger",
            });
          }
        },
      });
    } catch (error) {
      console.error("Error eliminando la reserva:", error.message);
      showCustomAlert({
        alertTitle: "¡Ocurrió un error!",
        alertText: "No se pudo eliminar la reserva.",
        icon: "danger",
      });
    }
  };
  
  
  return (
    <tr className={` ${style.user_row_container} `}>
      <td className={` ${style.user_icon} `}>
        <FaRegCalendarCheck />
      </td>
      <td>
        <div>
          <span>{user_reservation.email}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{room_reservation.room_name}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{check_in}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{check_out}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{persons}</span>
        </div>
      </td>

      <td>
        <div className={` ${style.buttons_container} `}>
          <Button className={` ${style.action_button} `}>
            <FaPen />
          </Button>
          <Button className={` ${style.action_button} `} onClick={deleteReservation}>
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};
export default ReservationRow;
