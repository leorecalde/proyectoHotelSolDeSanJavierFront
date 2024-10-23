import { Container, Row, Col } from "react-bootstrap";
import sanJavier from "../../assets/imgInicio/sanJavier.png";
import "../css/index.css";
import logo from "../../assets/logo.png";
import FormularioIndex from "../indexComponents/FormularioIndex";
import AcercaDeNosotros from "../indexComponents/AcercaDeNosotros";
import Servicios from "../indexComponents/Servicios";

const Index = () => {
  

  return (
    <Container>
      <section className="seccion1 pb-3">
        <img src={sanJavier} alt="" className="img-fluid" />
        <div className="contenedor">
        <img src={logo} className="logo"/>
        <div className="transparent-rectangle"></div>
        
        <Row className="mt-3">
          <Col lg="3"className=" ms-2 ms-lg-5">
            <h3 className="colorVerdeLetra">Buscar Habitaciones</h3>
            <h6 className="colorVerdeClaro">Tarifas y disponibilidad</h6>
          </Col>
          <Col className="">
            <FormularioIndex></FormularioIndex>
          </Col>
        </Row>
        </div>
      </section>
      <AcercaDeNosotros></AcercaDeNosotros>
      <Servicios></Servicios>
    </Container>
  );
};

export default Index;
