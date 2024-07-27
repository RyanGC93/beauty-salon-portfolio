import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 1rem;
  width: calc(33.333% - 2rem);
  flex: 1 0 calc(33.333% - 2rem);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const GalleryImage = ({ src, alt }) => (
  <ImageContainer>
    <Image src={src} alt={alt} />
  </ImageContainer>
);

export default GalleryImage;
