import React from "react";
import { Button, Table } from "react-bootstrap";
import "./style.scss";

function CryptoTable() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th colSpan={10}>
            <div className="d-flex justify-content-end tool">
              <Button className="m-1" variant="secondary">
                <ion-icon name="settings-outline"></ion-icon>
                Customize
              </Button>
              <Button className="m-1" variant="secondary">
                <ion-icon name="copy-outline"></ion-icon> Categories
              </Button>
              <Button className="m-1" variant="secondary">
                <ion-icon name="repeat-outline"></ion-icon>
                Exchanges
              </Button>
              <Button className="m-1 sort" variant="secondary">
                <ion-icon name="funnel-outline"></ion-icon>
              </Button>
            </div>
          </th>
        </tr>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Volume 24h</th>
          <th>Liquidity +-2%</th>
          <th>All-time High</th>
          <th>1h</th>
          <th>24h</th>
          <th>Weekly</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CryptoTable;
