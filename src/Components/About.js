import React from 'react';
import { Container } from 'react-bootstrap';
import gaming from '../Pic/gaming.jpg';
import travel from '../Pic/travel.jpg';
import sunset from '../Pic/sunset.jpg';
import moon from '../Pic/moon.jpg';

function About() {
  return (
    <Container className="about">
      <h1>About Me</h1>
      <p>
      I love spending my free time playing online games, 
      traveling to new places, and being close to nature. 
      I'm especially drawn to the beauty of the moon and 
      sunsets, which I find really calming. Right now, I'm 
      studying at PNC, working hard to build up my skills 
      and knowledge for the future.
      </p>
      <h2></h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        <img src={gaming} alt="Playing Online Games" style={{ width: '150px', borderRadius: '10px' }} />
        <img src={travel} alt="Travel" style={{ width: '150px', borderRadius: '10px' }} />
        <img src={sunset} alt="Sunset" style={{ width: '150px', borderRadius: '10px' }} />
        <img src={moon} alt="Moon" style={{ width: '150px', borderRadius: '10px' }} />
      </div>
    </Container>
  );
}

export default About;
