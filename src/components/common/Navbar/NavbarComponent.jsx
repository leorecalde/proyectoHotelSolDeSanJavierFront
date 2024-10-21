import Container from "react-bootstrap/Container";
import style from "./NavbarComponent.module.css";
import BtnReservation from "../../BtnReservation/BtnReservation";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import BtnLogin from "../../BtnLogin/BtnLogin";
import NavLink from "../NavLink/NavLink";

const NavbarComponent = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [widthWindowState, setWidthWindowState] = useState(window.innerWidth);
  const [currentLink, setCurrentLink] = useState(
    sessionStorage.getItem("currentLink") || "inicio"
  );

  const routesList = [
    {
      pathToLink: "/",
      routeName: "Inicio",
    },
    {
      pathToLink: "/sobre-nosotros",
      routeName: "Sobre nosotros",
    },
    {
      pathToLink: "/contacto",
      routeName: "Contacto",
    },
    {
      pathToLink: "/galeria",
      routeName: "Galería",
    },
    {
      pathToLink: "/admin",
      routeName: "Administrador",
    },
  ];

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
            {routesList.map((route, index) => {
              return (
                <NavLink
                  key={index}
                  handleLink={handleLink}
                  pathToLink={route.pathToLink}
                  routeName={route.routeName}
                  currentLink={currentLink}
                />
              );
            })}

            <BtnLogin />
          </ul>
        </div>
        {widthWindowState >= 992 && <BtnReservation />}
      </Container>
    </nav>
  );
};
export default NavbarComponent;
