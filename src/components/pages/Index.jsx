import { Container, Row, Col } from "react-bootstrap";
import sanJavier from "../../assets/imgInicio/sanJavier.png";
import "../css/index.css";
import FormularioIndex from "../indexComponents/FormularioIndex";
import FilterRoomsContainer from "../filterRoomsContainer/FilterRoomsContainer";

const Index = () => {
  return (
    <Container>
      <section className="seccion1">
        <img src={sanJavier} alt="" className="img-fluid" />
        <Row className="mt-3">
          <Col lg="3" className="ms-5">
            <h3 className="colorVerdeLetra">Buscar Habitaciones</h3>
            <h6 className="colorVerdeClaro">Tarifas y disponibilidad</h6>
          </Col>
          <Col className="">
            <FormularioIndex></FormularioIndex>
            <FilterRoomsContainer />
          </Col>
        </Row>
      </section>
      <div className="div-separation"></div>
    </Container>
  );
};

export default Index;
