import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
