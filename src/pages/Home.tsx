// src/pages/Home.tsx
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import './Home.css';
import banner from '../assets/education-banner.jpg'; // Add any educational image
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="home-banner">
        <div className="home-text">
          <h1>Empowering Education, Digitally</h1>
          <p>Join thousands of students and educators transforming learning experiences.</p>
          <button>Get Started</button>
        </div>
        <Link to="/">
          <img src="/assets/education-banner.jpg" alt="Education" width={100} height={80} />
        </Link>
      </div>
    </AnimatedPage>
  );
};

export default Home;
