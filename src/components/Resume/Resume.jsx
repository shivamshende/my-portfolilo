// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { useReactToPrint } from 'react-to-print';
// import './Resume.css';

// const Resume = () => {
//     const resumeRef = React.useRef();

//     const handlePrint = useReactToPrint({
//         content: () => resumeRef.current,
//         documentTitle: 'Resume_Shivam_Shende'
//     });
//     return (
//         <>
//             <div className="resume">
//                 <Link className='backResume' to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
//                 <h1>Resume</h1>
//                 <div ref={resumeRef} className="resume-content">
//                     <h2>Shivam Shende</h2>
//                     <p><strong>Phone:</strong> +91 7263057752</p>
//                     <p><strong>Email:</strong> shivamshende200@gmail.com</p>
//                     <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
//                     <p><strong>GitHub:</strong> <a href="https://github.com/shivamshende" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
//                     <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">Blog Profile</a></p>

//                     <div className='adjective'>
//                         <h2>Objective</h2>
//                         <p>I'm Shivam Shende, a Computer Science and Engineering student enjoys web development. But beyond this, I also have to experience my leadership, strategic thinking and vision, management and problem-solving, market research and adaptability particularly in innovative and initial phase environments where I can be an integral part of the journey towards success. I want to thrive in such environments where technical and non-technical both skills can significantly contribute to a company's growth.</p>
//                     </div>

//                     <h2>Education</h2>
//                     <p><strong>Sant Gadge Baba Amravati University</strong>, Amravati, Maharashtra</p>
//                     <p>Bachelor of Computer Science and Engineering</p>

//                     <h2>Skills</h2>
//                     <h3>Non-Technical Skills | Management</h3>
//                     <ul className='horizontal-list'>
//                         <li>Leadership and Decision making</li>
//                         <li>Adaptability and Problem Solving</li>
//                         <li>Market Research and Analysis</li>
//                         <li>Communication and Collaboration</li>
//                     </ul>

//                     <h3>Technical Skills</h3>
//                     <ul>
//                         <li><strong>Web Development:</strong> Vanilla JS, React, Node.js, Express.js, Database(MongoDB, MySQL)</li>
//                     </ul>

//                     <h3>Projects</h3>
//                     <ul className='projects'>
//                         <li>
//                             Mern stack Url Shortener with stateless authentication and User History
//                             <a className='demo' href="https://youtu.be/vsd2YASdqzQ?si=ttXAKUOrkgCxsl7_" target="_blank" rel="noopener noreferrer">Demo</a>
//                             <span> | </span>
//                             <a href="https://github.com/shivamshende/react-urlShortener-stateless-auth" target="_blank" rel="noopener noreferrer">Git Repo</a>
//                         </li>
//                         <li>
//                             Realtime Email Sender
//                             <a className='demo' href="https://email-sender-realtime.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
//                             <span> | </span>
//                             <a href="https://github.com/shivamshende/Realtime-Mail-Sender" target="_blank" rel="noopener noreferrer">Git Repo</a>
//                         </li>
//                         <li>
//                             Realtime Weather App using Vanilla JS
//                             <a className='demo' href="https://shivamshende.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Demo</a>
//                             <span> | </span>
//                             <a href="https://github.com/shivamshende/weather-app" target="_blank" rel="noopener noreferrer">Git Repo</a>
//                         </li>
//                         <li>
//                             Authentication System using Auth0 and Context API
//                             <a className='demo' href="https://youtu.be/_tcD9ziL8gE?si=xOa5GqEfgnWEefzP" target="_blank" rel="noopener noreferrer">Demo</a>
//                             <span> | </span>
//                             <a href="https://github.com/shivamshende/React-contextAPI-and-Auth0" target="_blank" rel="noopener noreferrer">Git Repo</a>
//                         </li>
//                         <li>
//                             Github Profile Viewer and React Router Usage
//                             <a className='demo' href="https://shivamshende.github.io/React-Router/" target="_blank" rel="noopener noreferrer">Demo</a>
//                             <span> | </span>
//                             <a href="https://github.com/shivamshende/React-Router" target="_blank" rel="noopener noreferrer">Git Repo</a>
//                         </li>
//                     </ul>
//                     <p><em><strong>You can Visit to <a href="https://github.com/shivamshende/" target="_blank" rel="noopener noreferrer">my Github</a> for more</strong></em></p>
//                     <p><em><strong>Visit to <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interest, my activity and most important <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a></strong></em></p>
//                 </div>
//             </div>
//             <button className='download-resume' onClick={handlePrint}>Download Resume</button>
//         </>
//     );
// };

// export default Resume;

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

                    {/* <p>---</p>/ */}

                    <p><strong>Job Title - </strong>Business Development Executive / Manager</p>
                    <p><strong>Secondary Title - </strong>Web Developer</p>


                    <div className='adjective'>
                        <h2>Objective</h2>
                        <p>I'm Shivam Shende, a Computer Science and Engineering student enjoys web development. But beyond this, I also have to experience my leadership, strategic thinking and vision, management and problem-solving, market research and adaptability particularly in innovative and initial phase environments where I can be an integral part of the journey towards success. I want to thrive in such environments where technical and non-technical both skills can significantly contribute to a company's growth.</p>
                    </div>

                    <h2>Education</h2>
                    <p><strong>Sant Gadge Baba Amravati University</strong>, Amravati, Maharashtra</p>
                    <p>Bachelor of Computer Science and Engineering</p>

                    <h2>Skills</h2>
                    <h3>Non-Technical Skills | Management</h3>
                    <ul className='horizontal-list'>
                        <li>Leadership and Decision making</li>
                        <li>Adaptability and Problem Solving</li>
                        <li>Market Research and Analysis</li>
                        <li>Communication and Collaboration</li>
                    </ul>

                    <h3>Technical Skills</h3>
                    <ul>
                        <li><strong>Web Development:</strong> Vanilla JS, React, Node.js, Express.js, Database(MongoDB, MySQL)</li>
                    </ul>

                    <h3>Projects</h3>
                    <p><em>You can Visit to <a href="https://github.com/shivamshende/" target="_blank" rel="noopener noreferrer">my Github</a> for tech project like,</em></p>
                    <ul className='projects'>
                        <p>
                            Realtime<a href="https://email-sender-realtime.netlify.app/" target="_blank" rel="noopener noreferrer"> Email Sender </a>||

                            Realtime<a href="https://shivamshende.github.io/weather-app/" target="_blank" rel="noopener noreferrer"> Weather App </a>Using Vnilla JS ||

                            Mern stack<a href="https://youtu.be/vsd2YASdqzQ?si=ttXAKUOrkgCxsl7_" target="_blank" rel="noopener noreferrer"> Url Shortener </a> with stateless authentication and user History ||

                            <a href="https://shivamshende.github.io/React-Router/" target="_blank" rel="noopener noreferrer"> Github Profile Viewer </a> and React Router Usage ||

                            <a href="https://youtu.be/_tcD9ziL8gE?si=xOa5GqEfgnWEefzP" target="_blank" rel="noopener noreferrer"> Authentication System </a> using Auth0 and Context API
                        </p>
                    </ul>

                    <p><em>Visit to <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interest, my activity and most important <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a> for my knowledge</em></p>
                </div>
            </div>
            <button className='download-resume' onClick={handlePrint}>Download Resume</button>
        </>
    );
};

export default Resume;