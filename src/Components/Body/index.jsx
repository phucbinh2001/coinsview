import React from "react";
import { Container } from "react-bootstrap";
import CryptoLive from "../../Pages/CryptoLive";

function Body() {
  return (
    <Container fluid className="bg-light p-5">
      <CryptoLive />
    </Container>
  );
}

export default Body;
