import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/navMenu.css";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl
} from "react-bootstrap";

const Navbarcustom = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/journal">Journal</Nav.Link>
      <Nav.Link href="/workouts">Workouts</Nav.Link>
      <Nav.Link href="/discover">Discover</Nav.Link>
    </Nav>
    <Button variant="/signout" href="/login">
      Signout
    </Button>
  </Navbar>
);

export default Navbarcustom;
