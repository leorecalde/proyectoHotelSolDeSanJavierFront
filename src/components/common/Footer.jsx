import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className='fs-3'>Navegación</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-warning fs-5">Inicio</a></li>
              <li><a href="/about" className="text-warning fs-5">Sobre Nosotros</a></li>
              <li><a href="/services" className="text-warning fs-5">Servicios</a></li>
              <li><a href="/contact" className="text-warning fs-5">Contacto</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className='fs-3'>Síguenos</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" className="text-light fs-5">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="text-light fs-5">Twitter</a></li>
              <li><a href="https://www.instagram.com" className="text-light fs-5">Instagram</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className='fs-3'>Contacto</h5>
            <p className='fs-5'>Dirección: Ruta 340 - Km 23, San Javier.</p>
            <p className='fs-5'>Email: reservas@hotelsolsanjavier.com.ar</p>
            <p className='fs-5'>Teléfono: (+54 9) (0381) 155-279796.</p>
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
}

export default Footer;