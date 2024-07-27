import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
`;
const FounderImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const FounderDetails = styled.div`
  max-width: 600px;
`;

const FounderName = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const FounderSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <Section>
        <SectionTitle>About Our Company</SectionTitle>
        <Paragraph>
          Welcome to our beauty salon, where luxury meets sophistication. At our
          salon, we believe in enhancing your natural beauty with our range of
          premium services. From the moment you step into our serene and elegant
          space, you will be greeted by our friendly and professional team
          dedicated to providing you with an exceptional beauty experience. We
          offer a wide array of treatments including hair styling, skincare,
          manicures, and more, all tailored to meet your individual needs.
        </Paragraph>
        <Paragraph>
          Our team of highly skilled stylists and therapists are passionate
          about their craft and stay updated with the latest trends and
          techniques in the beauty industry. We use only the finest products to
          ensure the best results for our clients. Whether you are preparing for
          a special occasion or simply need a moment of relaxation and
          rejuvenation, our salon is your sanctuary for all things beauty. We
          are committed to making every visit a memorable one, leaving you
          feeling refreshed, confident, and beautiful.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          Our mission is to deliver high-quality products and services that
          exceed our customers' expectations. We strive to innovate continuously
          and improve our processes to achieve excellence in everything we do.
          Our commitment to sustainability and community engagement is at the
          core of our values.
        </Paragraph>
      </Section>

      <FounderSection>
        <FounderImage
          src="https://images.unsplash.com/photo-1683792384287-d7233ac491d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
          alt="Founder"
        />
        <FounderDetails>
          <FounderName>Jessica Smith, Founder</FounderName>
          <Paragraph>
            Jessica Smith, our founder, started this salon with a vision to
            create a luxurious and welcoming space where clients could feel
            pampered and valued. With over 20 years of experience in the beauty
            industry, Jessica's expertise and passion have been the driving
            force behind our salon's success. She believes in continuous
            learning and ensures that our team is always ahead of the curve with
            the latest beauty trends and techniques. Jessica's dedication to
            excellence and her genuine care for each client have made our salon
            a beloved destination for beauty enthusiasts.
          </Paragraph>
        </FounderDetails>
      </FounderSection>
    </PageContainer>
  );
};

export default AboutUs;
