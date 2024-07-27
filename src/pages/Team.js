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
    <TeamMemberCard
                    name="Alice Johnson"
                    role="Hair Stylist"
                    image="https://images.unsplash.com/photo-1656074166642-c1c22b309d9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D"
                    description="Alice is a seasoned hair stylist with over 10 years of experience. She specializes in modern cuts and color techniques, ensuring each client leaves with a personalized look."
                />

                <TeamMemberCard
                    name="Bob Smith"
                    role="Nail Technician"
                    image="https://images.unsplash.com/photo-1656339907799-bef84de61ef1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D"
                    description="Bob is a skilled nail technician known for his creative designs and meticulous attention to detail. He excels in both classic and trendy nail art, making every manicure a work of art."
                />

                <TeamMemberCard
                    name="Charlie Brown"
                    role="Facial Expert"
                    image="https://images.unsplash.com/photo-1641260774125-04d527b376a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D"
                    description="Charlie is an expert in facial treatments with a focus on natural and holistic skincare. His personalized approach helps clients achieve radiant, healthy skin through customized facials."
                />
    </TeamContainer>
  </Container>
);

export default Team;
