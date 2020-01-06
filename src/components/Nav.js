import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Movie Poster App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default Nav;
