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
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shivam-shende-b8b121250/</a></p>
                    <p><strong>Portfolio:</strong> <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">https://shivam-shende-portfolio.netlify.app/</a></p>
                    <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">https://medium.com/@shivamshende200</a></p>

                    <div className='adjective'>
                        <h2>Objective</h2>
                        <p>I'm Shivam Shende, a Computer Engineering student with previous experience as a web developer. However, I realized that web development doesn't truly excite me. I'm now seeking an active role where I can apply both my technical knowledge and non-technical strengths—like leadership, strategic thinking, management, and problem-solving.</p>
                    </div>

                    <h2>Education</h2>
                    <p><strong>Sant Gadge Baba Amravati University</strong>, Amravati, Maharashtra</p>
                    <p>Bachelor of Computer Science and Engineering</p>

                    <h2>Experience</h2>
                    <p>Full Time Intern at <a href="https://anamarhs.com/" target="_blank">Anamarhs Web Solutions</a></p>

                    <h2>Skills</h2>
                    <h3>Non-Technical Skills | Management</h3>
                    <ul className='horizontal-list'>
                        <li>Leadership and Decision making</li>
                        <li>Adaptability and Problem Solving</li>
                        <li>Market Research and Analysis</li>
                        <li>Communication and Collaboration</li>
                    </ul>

                    {/* <h3>Technical Skills</h3>
                    <ul>
                        <li><strong>Web Development/Full-stack:</strong> Vanilla JS, React, Typescript, Next.js, Node.js, Express.js, Database(MongoDB, MySQL)</li>
                    </ul>

                    <h3>Projects</h3>
                    <p><em>You can Visit to <a href="https://github.com/shivamshende/" target="_blank" rel="noopener noreferrer">my Github</a> for tech project like,</em></p> */}

                    <p><em>Visit to <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interest, my activity and most important <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a> for my knowledge</em></p>

                    <p className='info'><em>I just need a job, no matter what role it is!</em></p>
                </div>
            </div>
            <button className='download-resume' onClick={handlePrint}>Download Resume</button>
        </>
    );
};

export default Resume;