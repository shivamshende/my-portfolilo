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
                    <div className="contact-row">
                        <p><strong>Phone:</strong> +91 8767664908</p>
                        <p><strong>Age:</strong> 23y</p>
                    </div>

                    <p><strong>Email:</strong> shivamshende200@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shivam-shende-b8b121250/</a></p>
                    <p><strong>Github:</strong> <a href="https://github.com/shivamshende" target="_blank" rel="noopener noreferrer">https://github.com/shivamshende</a></p>
                    <p><strong>Portfolio:</strong> <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">https://shivam-shende-portfolio.netlify.app/</a></p>
                    <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">https://medium.com/@shivamshende200</a></p>
                    <p><strong>Latest Blog:</strong> <a href="https://docs.google.com/document/d/1t7VxAEa3YPUX7tUaVvWeQYLEMAcXA2AFBUlzYF44ypA/edit?addon_store&tab=t.0" target="_blank" rel="noopener noreferrer">AI Assistants in Fintech</a></p>

                    <div className='adjective'>
                        <h2>Objective</h2>
                        <p>I'm Shivam Shende, started out as a web developer but now my interest shifting towards the role that can allow me to contribute throughout my skills like
                            management, tech/non-tech research and writing, strategic thinking and problem solving.</p>
                    </div>

                    <h2>Education</h2>
                    <p>Sant Gadge Baba Amravati University, Amravati, Maharashtra</p>
                    <p><strong>Bachelor of Computer Science and Engineering</strong> (2021 - 2025)</p>

                    <h2>Experience</h2>
                    <p>Web Developer at <a href="https://anamarhs.com/" target="_blank">Anamarhs Web Solutions</a></p>
                    <p>I've used skills during this job like,
                        <ul className='horizontal-list'>
                            <li>Page Building</li>
                            <li>Reporting and Documentation</li>
                            <li>Client Handling</li>
                            <li>Problem Solving</li>
                            <li>Time Management</li>
                            <li>Communication</li>
                        </ul>

                    </p>

                    <h2>Skills</h2>
                    <h3>Non-Technical Skills | Management</h3>
                    <ul className='horizontal-list'>
                        <li>Leadership and Decision making</li>
                        <li>Adaptability and Problem Solving</li>
                        <li>Market Research and Analysis</li>
                        <li>Communication and Collaboration</li>
                    </ul>

                    <p><em>Visit to <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interest, my activity and most important <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a> for my knowledge.</em></p>

                    <p className='info'><em>Open for any role and impactful opportunities!</em></p>
                </div>
            </div>
            <button className='download-resume' onClick={handlePrint}>Download Resume</button>
        </>
    );
};

export default Resume;