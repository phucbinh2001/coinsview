import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logoDark from "../../logo-dark.svg";
import "./style.scss";

function Header() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container style={{ display: "block" }}>
          {" "}
          <Row>
            <Col xs={12} className="mobile-nav">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{ width: "100%" }}>
                  <img src={logoDark} alt="" height={60} />
                </Navbar.Brand>
              </Navbar>
            </Col>

            <Col xs={12}>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Crytocurrencies</Nav.Link>
                  <Nav.Link href="#pricing">Overview</Nav.Link>
                  <Nav.Link href="#pricing">Trending</Nav.Link>
                  <Nav.Link href="#pricing">Exchanges</Nav.Link>
                  <Nav.Link href="#pricing">Widgets</Nav.Link>
                  <Nav.Link href="#pricing">Widgets</Nav.Link>
                  <Nav.Link href="#pricing">Compare</Nav.Link>
                  <Nav.Link href="#pricing">Al</Nav.Link>
                  <Nav.Link href="#pricing">Blog</Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href="#memes">
                    Connect Wallet
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
