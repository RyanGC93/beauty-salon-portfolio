import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  a {
    margin-left: 1rem;
    font-size: 1rem;
    color: #333;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Beauty Salon</Logo>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/team">Team</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/locations">Locations</Link>
      <Link to='/aboutus' > About Us </Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;





