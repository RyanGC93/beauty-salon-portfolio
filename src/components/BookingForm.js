import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/bookings', formData);
      alert('Booking request sent!');
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending booking request', error);
      alert('There was an error sending your booking request.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <Input
        type="text"
        name="service"
        value={formData.service}
        onChange={handleChange}
        placeholder="Service"
        required
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Additional Message"
        required
      />
      <Button type="submit">Book Now</Button>
    </Form>
  );
};

export default BookingForm;
