import { FaConciergeBell } from "react-icons/fa";
import style from "./BtnReservation.module.css";

const BtnReservation = () => {
  return (
    <div className={`${style.btnReservationContainer}`}>
      <button className={`${style.btnReservation}`}>
        <FaConciergeBell /> Reservar
      </button>
    </div>
  );
};
export default BtnReservation;
