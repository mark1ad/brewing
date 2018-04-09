import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Brewing Company</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#/beers">Beers</NavItem>
          <NavItem eventKey={2} href="#/events">Events</NavItem>
          <NavItem eventKey={3} href="#/food">Food</NavItem>
          <NavItem eventKey={4} href="#/about">About</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
