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




//2nd one
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
                    {/* <p className='thoughts'><strong><em>“What jobs am I qualified for?”</em></strong></p> */}
                    <p><strong>Phone:</strong> +91 7263057752</p>
                    <p><strong>Email:</strong> shivamshende200@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shivam-shende-b8b121250/</a></p>
                    <p><strong>Portfolio:</strong> <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">https://shivam-shende-portfolio.netlify.app/</a></p>
                    <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">https://medium.com/@shivamshende200</a></p>

                    {/* <p>---</p>/ */}

                    <p><strong>Job Title - </strong>Business Development Executive / Manager | Project Manager</p>
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
                        {/* <p>
                            Realtime<a href="https://email-sender-realtime.netlify.app/" target="_blank" rel="noopener noreferrer"> Email Sender </a>||

                            Realtime<a href="https://shivamshende.github.io/weather-app/" target="_blank" rel="noopener noreferrer"> Weather App </a>Using Vnilla JS ||

                            Mern stack<a href="https://youtu.be/vsd2YASdqzQ?si=ttXAKUOrkgCxsl7_" target="_blank" rel="noopener noreferrer"> Url Shortener </a> with stateless authentication and user History ||

                            <a href="https://shivamshende.github.io/React-Router/" target="_blank" rel="noopener noreferrer"> Github Profile Viewer </a> and React Router Usage ||

                            <a href="https://youtu.be/_tcD9ziL8gE?si=xOa5GqEfgnWEefzP" target="_blank" rel="noopener noreferrer"> Authentication System </a> using Auth0 and Context API
                        </p> */}
                        <ul className="projects">
                        <li>Realtime <a href="https://email-sender-realtime.netlify.app/" target="_blank" rel="noopener noreferrer">Email Sender</a></li>
                        <li>Realtime <a href="https://shivamshende.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Weather App</a> using Vanilla JS</li>
                        <li>MERN stack <a href="https://youtu.be/vsd2YASdqzQ?si=ttXAKUOrkgCxsl7_" target="_blank" rel="noopener noreferrer">URL Shortener</a> with stateless authentication and user history</li>
                        <li><a href="https://shivamshende.github.io/React-Router/" target="_blank" rel="noopener noreferrer">GitHub Profile Viewer</a> and React Router usage</li>
                        <li><a href="https://youtu.be/_tcD9ziL8gE?si=xOa5GqEfgnWEefzP" target="_blank" rel="noopener noreferrer">Authentication System</a> using Auth0 and Context API</li>
                    </ul>
                    </ul>

                    <p><em>Visit to <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interest, my activity and most important <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a> for my knowledge</em></p>
                </div>
            </div>
            <button className='download-resume' onClick={handlePrint}>Download Resume</button>
        </>
    );
};

export default Resume;



// 3rd one
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
//                 <Link className="backResume" to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
//                 <h1>Resume</h1>
//                 <div ref={resumeRef} className="resume-content">
//                     <h2>Shivam Shende</h2>
//                     <p><strong>Phone:</strong> +91 7263057752</p>
//                     <p><strong>Email:</strong> shivamshende200@gmail.com</p>
//                     <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shivam-shende-b8b121250/</a></p>
//                     <p><strong>Portfolio:</strong> <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">https://shivam-shende-portfolio.netlify.app/</a></p>
//                     <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">https://medium.com/@shivamshende200</a></p>

//                     <p><strong>Job Title:</strong> Business Development Executive / Manager</p>
//                     <p><strong>Secondary Title:</strong> Web Developer</p>

//                     <div className="objective">
//                         <h2>Objective</h2>
//                         <p>I'm Shivam Shende, a Computer Science and Engineering student who enjoys web development. Beyond this, I have experience in leadership, strategic thinking and vision, management and problem-solving, market research, and adaptability, particularly in innovative and initial phase environments where I can be an integral part of the journey towards success. I want to thrive in such environments where my technical and non-technical skills can significantly contribute to a company's growth.</p>
//                     </div>

//                     <h2>Education</h2>
//                     <p><strong>Sant Gadge Baba Amravati University</strong>, Amravati, Maharashtra</p>
//                     <p>Bachelor of Computer Science and Engineering</p>

//                     <h2>Skills</h2>
//                     <h3>Non-Technical Skills | Management</h3>
//                     <ul className="horizontal-list">
//                         <li>Leadership and Decision Making</li>
//                         <li>Adaptability and Problem Solving</li>
//                         <li>Market Research and Analysis</li>
//                         <li>Communication and Collaboration</li>
//                     </ul>

//                     <h3>Technical Skills</h3>
//                     <ul>
//                         <li><strong>Web Development:</strong> Vanilla JS, React, Node.js, Express.js, Database (MongoDB, MySQL)</li>
//                     </ul>

//                     <h3>Projects</h3>
//                     <p><em>You can visit <a href="https://github.com/shivamshende/" target="_blank" rel="noopener noreferrer">my GitHub</a> for tech projects like:</em></p>
//                     <ul className="projects">
//                         <li>Realtime <a href="https://email-sender-realtime.netlify.app/" target="_blank" rel="noopener noreferrer">Email Sender</a></li>
//                         <li>Realtime <a href="https://shivamshende.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Weather App</a> using Vanilla JS</li>
//                         <li>MERN stack <a href="https://youtu.be/vsd2YASdqzQ?si=ttXAKUOrkgCxsl7_" target="_blank" rel="noopener noreferrer">URL Shortener</a> with stateless authentication and user history</li>
//                         <li><a href="https://shivamshende.github.io/React-Router/" target="_blank" rel="noopener noreferrer">GitHub Profile Viewer</a> and React Router usage</li>
//                         <li><a href="https://youtu.be/_tcD9ziL8gE?si=xOa5GqEfgnWEefzP" target="_blank" rel="noopener noreferrer">Authentication System</a> using Auth0 and Context API</li>
//                     </ul>

//                     <p><em>Visit <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">my Portfolio</a> to know more about me, my interests, my activities, and most importantly <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">my Blogs</a> for my knowledge.</em></p>
//                 </div>
//             </div>
//             <button className="download-resume" onClick={handlePrint}>Download Resume</button>
//         </>
//     );
// };

// export default Resume;





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
//                 <Link className="backResume" to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
//                 <div ref={resumeRef} className="resume-content">
//                     <header className="resume-header">
//                         <h1>Shivam Shende</h1>
//                         <h2>Business Development Executive / Manager</h2>
//                         <address>
//                             <p><strong>Phone:</strong> +91 7263057752</p>
//                             <p><strong>Email:</strong> shivamshende200@gmail.com</p>
//                             <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">linkedin.com/in/shivam-shende-b8b121250/</a></p>
//                             <p><strong>Portfolio:</strong> <a href="https://shivam-shende-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">shivam-shende-portfolio.netlify.app</a></p>
//                             <p><strong>Blog:</strong> <a href="https://medium.com/@shivamshende200" target="_blank" rel="noopener noreferrer">medium.com/@shivamshende200</a></p>
//                         </address>
//                     </header>

//                     <section className="objective">
//                         <h2>Objective</h2>
//                         <p>I am Shivam Shende, a Computer Science and Engineering student who enjoys web development. Beyond this, I have experience in leadership, strategic thinking, management, problem-solving, market research, and adaptability, particularly in innovative and initial phase environments where I can be an integral part of the journey towards success. I want to thrive in such environments where my technical and non-technical skills can significantly contribute to a company's growth.</p>
//                     </section>

//                     <section className="experience">
//                         <h2>Experience</h2>
//                         <div className="job">
//                             <h3>Senior Project Manager</h3>
//                             <p>Seton Hospital, ME</p>
//                             <p>2006-12 - Present</p>
//                             <ul>
//                                 <li>Oversaw all major hospital IT projects for 10+ years, focusing on cost reduction.</li>
//                                 <li>Responsible for creating, improving, and developing IT project strategies.</li>
//                                 <li>Implemented the highly successful Lean Training and Six Sigma projects for all employees.</li>
//                                 <li>Reduced the costs of IT infrastructure maintenance by 5% in 2015 by successfully rebuilding the infrastructure.</li>
//                             </ul>
//                         </div>
//                         <div className="job">
//                             <h3>Junior Project Manager</h3>
//                             <p>Seton Hospital, ME</p>
//                             <p>2004-09 - 2006-12</p>
//                             <ul>
//                                 <li>Streamlined IT logistics and administration operation cutting costs by 25%.</li>
//                                 <li>Diagnosed problems with hardware and operating systems and implemented solutions to increase efficiency.</li>
//                                 <li>Maintained the user database of over 30000 patients, implemented new solutions inside the dashboard.</li>
//                                 <li>Managed project for lean training for all IT Support Officers.</li>
//                             </ul>
//                         </div>
//                     </section>

//                     <section className="education">
//                         <h2>Education</h2>
//                         <div className="degree">
//                             <h3>Master of Computer Science</h3>
//                             <p>University of Maryland</p>
//                             <p>1999-09 - 2001-05</p>
//                             <ul>
//                                 <li>Graduated Summa Cum Laude.</li>
//                                 <li>Member of Student Association of Project Management.</li>
//                             </ul>
//                         </div>
//                         <div className="degree">
//                             <h3>Bachelor of Computer Science</h3>
//                             <p>University of Maryland</p>
//                             <p>1996-09 - 1999-07</p>
//                             <ul>
//                                 <li>Member of Student Association of Computer Science.</li>
//                                 <li>Managed a student project to organize a conference for 50+ professionals.</li>
//                             </ul>
//                         </div>
//                     </section>

//                     <section className="skills">
//                         <h2>Skills</h2>
//                         <ul>
//                             <li><strong>Business Process Improvement:</strong> history of successful innovations leading to cost savings.</li>
//                             <li><strong>Vendor Management:</strong> proven track record of managing vendors in projects with budgets of over $1,000,000.</li>
//                             <li><strong>Project Scheduling:</strong> over 90% of projects led were finished in due time.</li>
//                             <li><strong>Sales Analysis:</strong> background in IT Sales with deep understanding of negotiating contracts.</li>
//                         </ul>
//                     </section>

//                     <section className="software">
//                         <h2>Software</h2>
//                         <div className="software-skill">
//                             <p>Microsoft Project</p>
//                             <div className="rating"><span style={{ width: '90%' }}></span></div>
//                             <p>Excellent</p>
//                         </div>
//                         <div className="software-skill">
//                             <p>Microsoft Windows Server</p>
//                             <div className="rating"><span style={{ width: '75%' }}></span></div>
//                             <p>Very Good</p>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//             <button className="download-resume" onClick={handlePrint}>Download Resume</button>
//         </>
//     );
// };

// export default Resume;
