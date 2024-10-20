import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error messages when user types
    if (name === 'name' && /^[A-Za-z\s]*$/.test(value)) {
      setErrors({ ...errors, name: '' }); // Clear name error if valid
    } else if (name === 'email' && /\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: '' }); // Clear email error if valid
    } else if (name === 'message') {
      setErrors({ ...errors, message: '' }); // Clear message error when typing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Validate Name (only letters and spaces)
    if (!/^[A-Za-z\s]*$/.test(formData.name)) {
      setErrors((prev) => ({ ...prev, name: 'Name must contain only letters.' }));
      hasError = true;
    }
    
    // Validate Email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      hasError = true;
    }

    // Validate Message (optional, just checking if it's empty for this example)
    if (!formData.message.trim()) {
      setErrors((prev) => ({ ...prev, message: 'Message cannot be empty.' }));
      hasError = true;
    }

    if (!hasError) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <Container className="contact mt-5">
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} {/* Error message */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} {/* Error message */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            required
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>} {/* Error message */}
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
