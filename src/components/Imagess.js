import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";

export default function Imagess() {
  return (
    <div  style={{ border: "2px solid red" }}>
    <h1>Images</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image style={{width: "16rem"}} src="https://cdn.pixabay.com/photo/2020/03/30/07/18/nude-4983343_960_720.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image  style={{width: "16rem"}} src="https://cdn.pixabay.com/photo/2020/03/30/07/18/nude-4983343_960_720.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image  style={{width: "16rem"}} src="https://cdn.pixabay.com/photo/2020/03/30/07/18/nude-4983343_960_720.jpg" thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
