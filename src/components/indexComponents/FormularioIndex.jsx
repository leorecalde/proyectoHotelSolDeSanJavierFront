import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../css/index.css";

const FormularioIndex = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label className="colorVerdeClaro">Check-in</Form.Label>
              <Form.Control
                id="check-in"
                type="date"
                value={startDate}
                onChange={handleDateChange}
                className="form-control"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className="colorVerdeClaro">Check-out</Form.Label>
              <Form.Control
                id="check-out"
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="form-control"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className="colorVerdeClaro">Huéspedes</Form.Label>
              <Form.Select id="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Button type="submit" variant="success" className="marginBoton">
              Buscar 
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormularioIndex;
