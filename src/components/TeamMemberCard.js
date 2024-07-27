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
  text-align: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const TeamMemberCard = ({ name, role, image }) => (
  <Card>
    <Image src={image} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </Card>
);

export default TeamMemberCard;
