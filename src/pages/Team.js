import React, { useState } from 'react';
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

const Paragraph2 = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  margin: 10px 0 0 0;
`;

const Dropdown = styled.select`
  margin: 20px 0;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TeamMemberCard = styled.div`
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

const MemberImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MemberDetails = styled.div`
  padding: 20px;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const MemberRole = styled.p`
  color: #777;
  font-size: 1em;
  margin: 5px 0;
`;

const locations = {
  "New York": [
    {
      name: "Alice Johnson",
      role: "Hair Stylist",
      image: "https://images.unsplash.com/photo-1656074166642-c1c22b309d9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Alice is a seasoned hair stylist with over 10 years of experience. She specializes in modern cuts and color techniques, ensuring each client leaves with a personalized look."
    },
    {
      name: "Bob Smith",
      role: "Nail Technician",
      image: "https://images.unsplash.com/photo-1656339907799-bef84de61ef1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Bob is a skilled nail technician known for his creative designs and meticulous attention to detail. He excels in both classic and trendy nail art, making every manicure a work of art."
    },
    {
      name: "Charlie Brown",
      role: "Facial Expert",
      image: "https://images.unsplash.com/photo-1641260774125-04d527b376a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGhlYWRzaG90c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Charlie is an expert in facial treatments with a focus on natural and holistic skincare. His personalized approach helps clients achieve radiant, healthy skin through customized facials."
    }
  ],
  "Los Angeles": [
    {
      name: "Diana Prince",
      role: "Hair Stylist",
      image: "https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Diana is known for her innovative hair styling techniques and creativity. She brings a modern touch to every style she creates."
    },
    {
      name: "Clark Kent",
      role: "Nail Technician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Clark is an expert nail technician with a keen eye for detail. His designs are always flawless and on-trend."
    },
    {
      name: "Bruce Wayne",
      role: "Facial Expert",
      image: "https://images.unsplash.com/photo-1649057349440-38c14e985208?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Bruce specializes in advanced facial treatments. His techniques are designed to rejuvenate and refresh the skin."
    }
  ],
  "Chicago": [
    {
      name: "Selina Kyle",
      role: "Hair Stylist",
      image: "https://images.unsplash.com/photo-1632324343640-86af9827dbeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Selina is a hair stylist with a unique flair for modern and edgy styles. Her clients love her bold and creative approach."
    },
    {
      name: "Barry Allen",
      role: "Nail Technician",
      image: "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Barry is a lightning-fast nail technician who never compromises on quality. His work is known for its precision and creativity."
    },
    {
      name: "Arthur Curry",
      role: "Facial Expert",
      image: "https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Arthur is an expert in marine-based facial treatments. His holistic approach uses the power of the sea to rejuvenate the skin."
    }
  ],
  "Miami": [
    {
      name: "Diana Ross",
      role: "Hair Stylist",
      image: "https://images.unsplash.com/photo-1658932447775-dd78d1e7c369?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Diana has a passion for creating beautiful and elegant hair styles. Her expertise lies in bridal and formal hairstyles."
    },
    {
      name: "Tom Jones",
      role: "Nail Technician",
      image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Tom is an experienced nail technician with a flair for creative and intricate nail art designs. His meticulous approach ensures perfect results every time."
    },
    {
      name: "Jerry Thomas",
      role: "Facial Expert",
      image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      description: "Jerry is a facial expert who specializes in anti-aging treatments. His personalized facials help clients achieve youthful and glowing skin."
    }
  ]
};

const Team = () => {
  const [selectedLocation, setSelectedLocation] = useState("New York");

  return (
    <PageContainer>
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <Paragraph>
          Welcome to our beauty salon, where luxury meets sophistication. At our salon, we believe in enhancing your natural beauty with our range of premium services. From the moment you step into our serene and elegant space, you will be greeted by our friendly and professional team dedicated to providing you with an exceptional beauty experience. We offer a wide array of treatments including hair styling, skincare, manicures, and more, all tailored to meet your individual needs.
        </Paragraph>
        <Paragraph2>
          Our team of highly skilled stylists and therapists are passionate about their craft and stay updated with the latest trends and techniques in the beauty industry. We use only the finest products to ensure the best results for our clients. Whether you are preparing for a special occasion or simply need a moment of relaxation and rejuvenation, our salon is your sanctuary for all things beauty. We are committed to making every visit a memorable one, leaving you feeling refreshed, confident, and beautiful.
        </Paragraph2>
      </Section>

      <Section>
        <SectionTitle>Select Location</SectionTitle>
        <Dropdown value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          {Object.keys(locations).map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Dropdown>
      </Section>

      <Container>
        <h2>Meet Our Team</h2>
        <TeamContainer>
          {locations[selectedLocation].map((member) => (
            <TeamMemberCard key={member.name}>
              <MemberImageContainer>
                <MemberImage src={member.image} alt={member.name} />
              </MemberImageContainer>
              <MemberDetails>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <Paragraph>{member.description}</Paragraph>
              </MemberDetails>
            </TeamMemberCard>
          ))}
        </TeamContainer>
      </Container>
    </PageContainer>
  );
};

export default Team;
