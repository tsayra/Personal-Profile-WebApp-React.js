import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Submit() {
  const location = useLocation();
  const { name, email, message } = location.state;

  return (
    <Container className="mt-5">
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent successfully.</p>
      <h3>Details:</h3>
      <p><strong>Name:</strong> {name}</p> {/* Added name here */}
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </Container>
  );
}

export default Submit;
