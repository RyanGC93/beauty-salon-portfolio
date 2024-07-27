import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Beauty Salon. All rights reserved.
  </FooterContainer>
);

export default Footer;
