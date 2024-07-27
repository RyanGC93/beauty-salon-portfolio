import React from 'react';
import styled from 'styled-components';
import TeamMemberCard from '../components/TeamMemberCard';

const Container = styled.div`
  padding: 2rem;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Team = () => (
  <Container>
    <h2>Meet Our Team</h2>
    <TeamContainer>
      <TeamMemberCard name="Alice Johnson" role="Hair Stylist" image="/images/alice.jpg" />
      <TeamMemberCard name="Bob Smith" role="Nail Technician" image="/images/bob.jpg" />
      <TeamMemberCard name="Charlie Brown" role="Facial Expert" image="/images/charlie.jpg" />
      <TeamMemberCard name="Diana Green" role="Massage Therapist" image="/images/diana.jpg" />
    </TeamContainer>
  </Container>
);

export default Team;
