import React from "react";
import { Container } from "react-bootstrap";
import CryptoTable from "./Components/CryptoTable";

function CryptoLive() {
  return (
    <Container className="CryptoLive">
      <h2 className="text-center text-white">Cryptocurrency Prices Live</h2>
      <h3 className="text-center text-white mb-4">Top Coins by Market Cap</h3>

      <CryptoTable />
    </Container>
  );
}

export default CryptoLive;
