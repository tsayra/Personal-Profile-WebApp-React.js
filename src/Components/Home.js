import React from 'react';
import { Container } from 'react-bootstrap';
import profilePic from '../Pic/profilePic.jpg'; // Correct path to the image

function Home() {
  return (
    <Container className="mt-5 home">
      <h1>Welcome to My Profile!</h1>
      <p>I’m a passionate web designer with a goal to create visually 
        appealing and user-friendly websites that help businesses stand 
        out. I enjoy turning ideas into clean and functional designs, 
        and I’m always learning new trends and technologies to stay at 
        the forefront of the field. Let's build something great together!</p>
      <img
        src={profilePic}
        alt="Profile"
        style={{ width: '150px', borderRadius: '50%', marginTop: '20px' }}
      />
    </Container>
  );
}

export default Home;
