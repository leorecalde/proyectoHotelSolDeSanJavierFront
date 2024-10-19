import Container from "react-bootstrap/Container";
import style from "./NavbarComponent.module.css";
import BtnReservation from "../../BtnReservation/BtnReservation";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import BtnLogin from "../../BtnLogin/BtnLogin";

const NavbarComponent = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };
  return (
    <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
      <Container>
        {/* botón aburguesa personalizado */}
        <button
          className={` ${style.btn_toggle} ${
            menuIsActive ? style.btn_toggle_active : style.btn_toggle_disabled
          } `}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={` ${style.navbar_brand} `}>
          <a className="navbar-brand" href="">
            <img src={logo} alt="" className="img-fluid" />
          </a>
        </div>

        <BtnReservation />

        <div
          className={` ${style.collapse_navbar} ${
            menuIsActive ? style.navbar_collapse_active : ""
          } `}
        >
          <ul className="navbar-nav m-auto text-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Experiencias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Habitaciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Promo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Actividades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Galería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contacto</a>
            </li>
            <BtnLogin />
          </ul>
        </div>
      </Container>
    </nav>
  );
};
export default NavbarComponent;
