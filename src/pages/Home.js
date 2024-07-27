import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';
import TeamMemberCard from '../components/TeamMemberCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryImage from '../components/GalleryImage';

const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => (
  <Container>
    <Section>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesContainer>
        <ServiceCard title="Haircut" description="Professional haircut services" price="25" />
        <ServiceCard title="Manicure" description="Luxurious manicure treatment" price="30" />
        <ServiceCard title="Facial" description="Refreshing facial treatments" price="40" />
      </ServicesContainer>
    </Section>

    <Section>
      <SectionTitle>Meet Our Team</SectionTitle>
      <TeamContainer>
        <TeamMemberCard name="Alice Johnson" role="Hair Stylist" image="/images/alice.jpg" />
        <TeamMemberCard name="Bob Smith" role="Nail Technician" image="/images/bob.jpg" />
        <TeamMemberCard name="Charlie Brown" role="Facial Expert" image="/images/charlie.jpg" />
      </TeamContainer>
    </Section>

    <Section>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonialsContainer>
        <TestimonialCard name="Jane Doe" testimonial="Amazing service! Highly recommend." />
        <TestimonialCard name="John Doe" testimonial="Great experience, will come again." />
      </TestimonialsContainer>
    </Section>

    <Section>
      <SectionTitle>Gallery</SectionTitle>
      <GalleryContainer>
        <GalleryImage src="/images/gallery1.jpg" alt="Gallery Image 1" />
        <GalleryImage src="/images/gallery2.jpg" alt="Gallery Image 2" />
        <GalleryImage src="/images/gallery3.jpg" alt="Gallery Image 3" />
      </GalleryContainer>
    </Section>
  </Container>
);

export default Home;
