import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  color: #777;
`;

const Price = styled.p`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #000;
`;

const BookLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ServiceCard = ({ title, description, price, image, link }) => (
  <Card>
    <Image src={image} alt={title} />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>${price}</Price>
      <BookLink href={link}>Book Now</BookLink>
    </Content>
  </Card>
);

export default ServiceCard;
