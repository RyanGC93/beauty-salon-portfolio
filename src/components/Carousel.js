// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <ImageContainer>
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 1"
        />
      </ImageContainer>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1619367901998-73b3a70b3898?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fHww0" alt="Slide 2" />
      </ImageContainer>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1675034743339-0b0747047727?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fHww" alt="Slide 3" />
      </ImageContainer>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1633681118771-42a97c3e2f87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fHww" alt="Slide 4" />
      </ImageContainer>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1633681121751-e4a0392602b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxiZWF1dHklMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Slide 4" />
      </ImageContainer>
    </Slider>
  );
};

export default Carousel;
