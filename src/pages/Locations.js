import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #f8f9fa;
`;

const LocationCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 300px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
`;

const LocationName = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const Description = styled.p`
  color: #555;
  font-size: 1em;
  margin: 10px 0 0 0;
`;

const Address = styled.p`
  color: #777;
  font-size: 0.9em;
  margin: 5px 0;
`;

const Phone = styled.p`
  color: #777;
  font-size: 0.9em;
  margin: 5px 0;
`;

const Locations = () => {
  return (
    <Container>
      <LocationCard>
        <Image src="https://via.placeholder.com/300x200" alt="Location 1" />
        <Details>
          <LocationName>New York Office</LocationName>
          <Description>Our New York office is located in the heart of Manhattan, providing easy access to clients and partners.</Description>
          <Address>123 Fifth Avenue, New York, NY 10001</Address>
          <Phone>(212) 555-1234</Phone>
        </Details>
      </LocationCard>
      <LocationCard>
        <Image src="https://via.placeholder.com/300x200" alt="Location 2" />
        <Details>
          <LocationName>Los Angeles Office</LocationName>
          <Description>Visit our Los Angeles office for all your needs in the West Coast. Conveniently located downtown.</Description>
          <Address>456 Sunset Boulevard, Los Angeles, CA 90028</Address>
          <Phone>(323) 555-5678</Phone>
        </Details>
      </LocationCard>
      <LocationCard>
        <Image src="https://via.placeholder.com/300x200" alt="Location 3" />
        <Details>
          <LocationName>Chicago Office</LocationName>
          <Description>Our Chicago office is strategically located to serve the Midwest region efficiently.</Description>
          <Address>789 Michigan Avenue, Chicago, IL 60611</Address>
          <Phone>(312) 555-9101</Phone>
        </Details>
      </LocationCard>
      <LocationCard>
        <Image src="https://via.placeholder.com/300x200" alt="Location 4" />
        <Details>
          <LocationName>Miami Office</LocationName>
          <Description>The Miami office offers a vibrant environment for our clients in the Southeast.</Description>
          <Address>101 Ocean Drive, Miami, FL 33139</Address>
          <Phone>(305) 555-1213</Phone>
        </Details>
      </LocationCard>
    </Container>
  );
};

export default Locations;
