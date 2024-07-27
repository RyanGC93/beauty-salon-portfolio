import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';

const Container = styled.div`
  padding: 2rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Services = () => (
  <Container>
    <h2>Our Services</h2>
    <ServicesContainer>
      <ServiceCard title="Haircut" description="Professional haircut services" price="25" />
      <ServiceCard title="Manicure" description="Luxurious manicure treatment" price="30" />
      <ServiceCard title="Facial" description="Refreshing facial treatments" price="40" />
      <ServiceCard title="Hair Coloring" description="Vibrant hair coloring options" price="60" />
      <ServiceCard title="Massage" description="Relaxing massage therapies" price="50" />
    </ServicesContainer>
  </Container>
);

export default Services;
