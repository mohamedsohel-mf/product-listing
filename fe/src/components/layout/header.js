import React from "react";
import {
  Navbar, NavbarBrand, Nav,
  NavItem,
} from 'reactstrap';

const Header = () => (
  <>
    <Navbar color="light" light fixed="top" className="custom-nav custom-nav-bg">
      <span className="align-middle" />
      <NavbarBrand href="/" className="align-middle">
        Products
      </NavbarBrand>
      <Nav className="align-middle" navbar>
        <NavItem className="font-weight-bold" />
      </Nav>
    </Navbar>
  </>
);
export default Header;
