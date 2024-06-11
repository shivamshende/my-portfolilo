import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useReactToPrint } from 'react-to-print';
import './Resume.css';

const Resume = () => {
    const resumeRef = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        documentTitle: 'Resume_Shivam_Shende'
    });
    return (
        <>
            <div className="resume">
                <Link className='backResume' to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
                <h1>Resume</h1>
                <div ref={resumeRef} className="resume-content">
                    <h2>Shivam Shende</h2>
                    <p><strong>Phone:</strong> +91 7263057752</p>
                    <p><strong>Email:</strong> shivamshende200@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/shivamshende" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                    <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">Blog Profile</a></p>

                    <div className='adjective'>
                        <h2>Objective</h2>
                        <p>As a Computer Science and Engineering student with a hobby of web development, I have a strong interest in business operations, particularly in innovative and initial phase environments. I am eager to leverage my technical skills, management, problem-solving, market research, and analysis to contribute to a company's success.</p>
                    </div>

                    <h2>Education</h2>
                    <p><strong>Sant Gadge Baba Amravati University</strong>, Amravati, Maharashtra</p>
                    <p>Bachelor of Computer Science and Engineering</p>
                    <p>2022 - Present</p>

                    <h2>Skills</h2>
                    <h3>Non-Technical Skills | Bussiness Management</h3>
                    <ul className='horizontal-list'>
                        <li>Leadership and Decision making</li>
                        <li>Management and Problem Solving</li>
                        <li>Market Research and Analysis</li>
                        <li>Communication and Collaboration</li>
                    </ul>

                    <h3>Technical Skills</h3>
                    <ul>
                        <li><strong>Web Development:</strong> React, Node.js, Express.js, Database(MongoDB, MySQL)</li>
                    </ul>

                    <h3>Projects</h3>
                    <ul className='projects'>
                        {/* <li>Mern stack Url Shortener with stateless authentication and User History</li>
                        <li>Password Generator with History using Redux Toolkit</li>
                        <li>Authentication System using Autho and Context API</li>
                        <li>Realtime Weather App using vanilla js</li> */}
                        <li>
                            Mern stack Url Shortener with stateless authentication and User History
                            <a className='demo' href="https://github.com/shivamshende/mern-url-shortener" target="_blank" rel="noopener noreferrer">Demo</a>
                            <span> | </span>
                            <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer">Git Repo</a>
                        </li>
                        <li>
                            Password Generator with History using Redux Toolkit
                            <a className='demo' href="https://github.com/shivamshende/password-generator" target="_blank" rel="noopener noreferrer">Demo</a>
                            <span> | </span>
                            <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer">Git Repo</a>
                        </li>
                        <li>
                            Authentication System using Auth0 and Context API
                            <a className='demo' href="https://github.com/shivamshende/auth0-context-api" target="_blank" rel="noopener noreferrer">Demo</a>
                            <span> | </span>
                            <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer">Git Repo</a>
                        </li>
                        <li>
                            Realtime Weather App using vanilla js
                            <a className='demo' href="https://github.com/shivamshende/realtime-weather-app" target="_blank" rel="noopener noreferrer">Demo</a>
                            <span> | </span>
                            <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer">Git Repo</a>
                        </li>
                    </ul>
                    <p><em><strong>Visit to <a href="https://github.com/shivamshende/" target="_blank" rel="noopener noreferrer">my Github</a> for more</strong></em></p>
                    <p><em><strong>Visit to <a href="https://shivamshendeportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interest, my activity and most important <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a></strong></em></p>
                </div>
            </div>
            <button className='download-resume' onClick={handlePrint}>Download Resume</button>
        </>
    );
};

export default Resume;