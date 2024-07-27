import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  max-width: 300px;
`;

const TestimonialCard = ({ name, testimonial }) => (
  <Card>
    <p>{testimonial}</p>
    <h4>- {name}</h4>
  </Card>
);

export default TestimonialCard;
