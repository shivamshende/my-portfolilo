import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <Link className="back-button" to="/">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </Link>
            <h1>About Me</h1>
            <div className="about-content">
                <h2>Introduction and Professional Interests</h2>
                <p>
                    Hi, I'm Shivam Shende, a Computer Science and Engineering student enjoys web development as a hobby. I have a deep passion for business operations and management, particularly in initial phase environments where I can be an integral part of the journey towards success. I want to thrive in such environments where my decision-making and problem-solving skills can significantly contribute to a company's growth.
                </p>

                <h2>Education</h2>
                <p>
                    I am currently studying Computer Science and Engineering, where I am gaining a solid foundation about technical and non-technical skills.
                </p>

                <h2>Skills</h2>
                <h3>Technical Skills</h3>
                <p>
                    My technical skill set includes React, Node.js, Express.js, Databaases (frontend and backend development)
                </p>
                <h3>Soft Skills</h3>
                <p>
                    I am passionate and also known for my leadership, strategic thinking, management and problem-solving and a strong sense of teamwork, which will be a strong impact on project success.
                </p>

                <h2>Personal Interests</h2>
                <p>
                    In my free time, I enjoy exploring new trends, writing blogs, and staying updated with the latest in industry. I also love to read about business strategies and market dynamics.
                </p>

                <h2>Contact Information</h2>
                <p>
                    Feel free to reach out to me for any opportunities or collaborations at 'shivamshende200@gmail.com'.
                </p>
                <p>
                    Check out my projects and blogs to see my work in action.
                </p>
            </div>
        </div>
    );
};

export default About;
