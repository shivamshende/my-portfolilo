import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Shivam Shende</h1>  {/* Replace with your name */}
        {/* <h2>Web Developer | Business Development Enthusiast</h2>   */}
        <nav className="home-nav">
          <Link to="/blog" className="home-nav-link">Blog</Link>
          <Link to="/about" className="home-nav-link">About</Link>
          <Link to="/resume" className="home-nav-link">Resume</Link>
          <Link to="/contact" className="home-nav-link">Contact</Link>
        </nav>
      </header>
      <main className="home-main">
        <p>
          Welcome! I am a Coputer Science and Engineering Student.
          Apart from this, I'm passionate and have a keen interest about handling business operations, specially in innovative and initial phase environments.
        </p>
        <p>
          It offers a unique opportunity to be a part of the growth from the ground up. I want to thrive in such environments, 
          where my technical skills and decision making, management and problem-solving, market research and analysis can contribute significantly to a company's growth.
        </p>
        <p>
          I am excited about the prospect of being a part of a company's journey and contributing to its success. 
          Feel free to explore about me, read my blogs, and get to know more about my work. If you'd like to discuss potential opportunities or collaborations, 
          don't hesitate to reach out. Let's create something amazing together!
        </p>
      </main>
      <footer className="home-footer">
        <p>Let's connect!</p>  {/* Replace with your call to action */}
        <p>
          Feel free to reach out if you'd like to discuss potential opportunities or collaborations. I'm always open to new challenges and connections.
        </p>
      </footer>
    </div>
  );
};

export default Home;