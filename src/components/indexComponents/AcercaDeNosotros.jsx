
import { Container, Row, Col, Button } from "react-bootstrap";
import terrazaHotel from "../../assets/imgInicio/terrazaHotel.jpg";
const AcercaDeNosotros = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="colorVerdeLetra">Acerca de Nosotros</h3>
          <p>
            Sol San Javier es un hotel 4 estrellas ubicado en la cima del cerro
            San Javier, rodeado por la majestuosa yunga tucumana y con vistas
            excepcionales de la ciudad de San Miguel de Tucumán. El hotel cuenta
            con un extenso parque de 8 hectáreas, repleto de vegetación
            autóctona y panorámicas impresionantes, que ofrece el escenario
            ideal para descansar, disfrutar en familia y convertir cualquier
            evento en un momento único e inolvidable.
          </p>
          <Button type="button" variant="colorVerdeClaro">
            Ver más...
          </Button>
        </Col>
        <Col>
          <img src={terrazaHotel} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default AcercaDeNosotros;
