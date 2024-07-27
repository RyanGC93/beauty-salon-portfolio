import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';

const Container = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #343a40;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
`;

const ServiceCardWrapper = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const servicesData = [
  { title: "Haircut", description: "Professional haircut services", price: "25", image: "haircut.jpg", link: "/book/haircut" },
  { title: "Manicure", description: "Luxurious manicure treatment", price: "30", image: "manicure.jpg", link: "/book/manicure" },
  { title: "Facial", description: "Refreshing facial treatments", price: "40", image: "facial.jpg", link: "/book/facial" },
  { title: "Hair Coloring", description: "Vibrant hair coloring options", price: "60", image: "haircoloring.jpg", link: "/book/haircoloring" },
  { title: "Massage", description: "Relaxing massage therapies", price: "50", image: "massage.jpg", link: "/book/massage" },
];

const Services = () => (
  <Container>
    <Title>Our Services</Title>
    <ServicesContainer>
      {servicesData.map((service, index) => (
        <ServiceCardWrapper key={index}>
          <ServiceCard
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
            link={service.link}
          />
        </ServiceCardWrapper>
      ))}
    </ServicesContainer>
  </Container>
);

export default Services;
