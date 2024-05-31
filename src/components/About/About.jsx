// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-container">
//       <Link className='backAbout' to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
//       <header className="about-header">
//         <h1>About Me</h1>
//       </header>
//       <main className="about-main">
//         <p>
//           Hello! I'm Shivam Shende, a Computer Science and Engineering student with a passion for web development and business management. I enjoy creating interactive and dynamic web applications as a hobby and have a keen interest in handling business operations, especially in innovative and startup environments.
//         </p>
//         <p>
//           I believe that being a part of a company's growth from its early stages is a unique and exciting opportunity. My technical skills, coupled with my strategic thinking, management abilities, problem-solving skills, market research, and analysis, enable me to contribute significantly to a company's success.
//         </p>
//         <p>
//           I thrive in environments where I can leverage both my technical and business skills to drive growth and innovation. I'm always eager to take on new challenges and collaborate on exciting projects.
//         </p>
//         <p>
//           Feel free to reach out if you'd like to discuss potential opportunities or collaborations. Let's create something amazing together!
//         </p>
//       </main>
//       <footer className="about-footer">
//         <p>Let's connect!</p>
//         <p>
//           I'm always open to new challenges and connections. Feel free to explore more about me, read my blogs, and get to know my work.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default About;

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
                    Feel free to reach out to me for any opportunities or collaborations at shivamshende200@gmail.com.
                </p>
                <p>
                    Check out my projects and blogs to see my work in action.
                </p>
            </div>
        </div>
    );
};

export default About;
