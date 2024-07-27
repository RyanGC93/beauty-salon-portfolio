import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333333;
  font-family: 'Arial', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 1.5rem;
    font-size: 1rem;
    color: #333333;
    text-decoration: none;
    padding: 0.5rem 0;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 70px;
  left: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;

  a {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Divine Bliss Beauty Salon</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/team">Team</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/aboutus">About</Link>
      </Nav>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      {isOpen && (
        <DropdownMenu>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/team" onClick={toggleMenu}>Team</Link>
          <Link to="/locations" onClick={toggleMenu}>Locations</Link>
          <Link to="/aboutus" onClick={toggleMenu}>About</Link>
        </DropdownMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
