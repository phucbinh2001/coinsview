import React from "react";
import { Container } from "react-bootstrap";
import CryptoLive from "../../Pages/CryptoLive";

function Body() {
  return (
    <Container fluid className="bg-light pt-5 pb-5">
      <CryptoLive />
    </Container>
  );
}

export default Body;
