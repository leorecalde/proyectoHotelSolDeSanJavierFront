import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light py-5 footer-background">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-dark fs-3">Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/inicio" className="text-success-emphasis fs-5">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className="text-success-emphasis fs-5">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-success-emphasis fs-5">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-success-emphasis fs-5">
                  Contacto
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-dark fs-3">Síguenos</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="text-success-emphasis fs-5"
                >
                  <i className="bi bi-facebook icon"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  className="text-success-emphasis fs-5"
                >
                  <i className="bi bi-twitter icon"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="text-success-emphasis fs-5"
                >
                  <i className="bi bi-instagram icon"></i>
                  Instagram
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-dark fs-3">Contacto</h5>
            <p className="text-success-emphasis fs-5">
              Dirección:Ruta 340 - Km 23, San Javier,Tucuman
            </p>
            <p className="text-success-emphasis fs-5">
              Email:reservas@hotelsolsanjavier.com.ar
            </p>
            <p className="text-success-emphasis fs-5">
              Teléfono:(+54 9) (0381) 155-279796.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; 2024 Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
