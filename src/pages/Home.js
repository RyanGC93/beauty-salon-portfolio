import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';
import TeamMemberCard from '../components/TeamMemberCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryImage from '../components/GalleryImage';
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
      <SectionTitle>Meet Our Team</SectionTitle>
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
