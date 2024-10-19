import Container from "react-bootstrap/Container";
import style from "./NavbarComponent.module.css";
import BtnReservation from "../../BtnReservation/BtnReservation";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import BtnLogin from "../../BtnLogin/BtnLogin";

const NavbarComponent = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [widthWindowState, setWidthWindowState] = useState(window.innerWidth);
  const [currentLink, setCurrentLink] = useState(
    sessionStorage.getItem("currentLink") || "home"
  );

  const handleResizeWindow = () => {
    let newWidth = window.innerWidth;
    setWidthWindowState(newWidth);
  };
  const handleLink = (currentLinkParam) => {
    sessionStorage.setItem("currentLink", currentLinkParam);
    setCurrentLink(sessionStorage.getItem("currentLink"));
    setMenuIsActive(!menuIsActive);
  };
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [widthWindowState]);

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

        {widthWindowState < 992 && <BtnReservation />}

        <div
          className={` ${style.collapse_navbar} ${
            menuIsActive ? style.navbar_collapse_active : ""
          } `}
        >
          <ul className="navbar-nav text-center">
            <li
              className="nav-item"
              onClick={() => {
                handleLink("experiencias");
              }}
            >
              <a
                className={`nav-link ${style.navbar_link} ${
                  currentLink === "experiencias" && style.active
                } `}
              >
                Experiencias
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLink("habitaciones");
              }}
            >
              <a
                className={`nav-link ${style.navbar_link} ${
                  currentLink === "habitaciones" && style.active
                } `}
              >
                Habitaciones
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLink("promos");
              }}
            >
              <a
                className={`nav-link ${style.navbar_link} ${
                  currentLink === "promos" && style.active
                } `}
              >
                Promos
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLink("actividades");
              }}
            >
              <a
                className={`nav-link ${style.navbar_link} ${
                  currentLink === "actividades" && style.active
                }`}
              >
                Actividades
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLink("galeria");
              }}
            >
              <a
                className={`nav-link ${style.navbar_link} ${
                  currentLink === "galeria" && style.active
                }`}
              >
                Galería
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLink("contacto");
              }}
            >
              <a
                className={`nav-link ${style.navbar_link} ${
                  currentLink === "contacto" && style.active
                } `}
              >
                Contacto
              </a>
            </li>
            <BtnLogin />
          </ul>
        </div>
        {widthWindowState >= 992 && <BtnReservation />}
      </Container>
    </nav>
  );
};
export default NavbarComponent;
