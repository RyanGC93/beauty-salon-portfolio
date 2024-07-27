import React from 'react';
import styled from 'styled-components';
import BookingForm from '../components/BookingForm';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => (
  <Container>
    <h2>Contact Us</h2>
    <BookingForm />
  </Container>
);

export default Contact;
