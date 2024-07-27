import React from 'react';
import styled from 'styled-components';
import GalleryImage from '../components/GalleryImage';

const Container = styled.div`
  padding: 2rem;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Gallery = () => (
  <Container>
    <h2>Gallery</h2>
    <GalleryContainer>
      <GalleryImage src="/images/gallery1.jpg" alt="Gallery Image 1" />
      <GalleryImage src="/images/gallery2.jpg" alt="Gallery Image 2" />
      <GalleryImage src="/images/gallery3.jpg" alt="Gallery Image 3" />
      <GalleryImage src="/images/gallery4.jpg" alt="Gallery Image 4" />
      <GalleryImage src="/images/gallery5.jpg" alt="Gallery Image 5" />
      <GalleryImage src="/images/gallery6.jpg" alt="Gallery Image 6" />
    </GalleryContainer>
  </Container>
);

export default Gallery;
