import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Carousel from '../components/Carousel';

const Container = styled.div`
  padding: 2rem;
`;
const CarouselContainer = styled.div`
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



const TestimonialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


const Home = () => (
  <Container>
    <Section>
      <SectionTitle>Divine Bliss Salon</SectionTitle>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
    </Section>
    <Section>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesContainer>
        <ServiceCard
          title="Haircut"
          description="Professional haircut services"
          price="25"
        />
        <ServiceCard
          title="Manicure"
          description="Luxurious manicure treatment"
          price="30"
        />
        <ServiceCard
          title="Facial"
          description="Refreshing facial treatments"
          price="40"
        />
      </ServicesContainer>
    </Section>
    <Section>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonialsContainer>
        <TestimonialCard
          name="Jane Doe"
          testimonial="Amazing service! Highly recommend."
        />
        <TestimonialCard
          name="John Doe"
          testimonial="Great experience, will come again."
        />
        <TestimonialCard
          name="Alice Smith"
          testimonial="Exceptional quality and fast delivery!"
        />
        <TestimonialCard
          name="Michael Brown"
          testimonial="The best logo design service I’ve ever used."
        />
        <TestimonialCard
          name="Emily Davis"
          testimonial="Creative designs and professional service."
        />
      </TestimonialsContainer>
    </Section>
  </Container>
);

export default Home;
