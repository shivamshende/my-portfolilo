import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import nodejsBlogImage from '../../../public/assets/nodejs_blog.jfif';
import jsBlogImage from '../../../public/assets/jsBlog.png';
import authBlogImage from '../../../public/assets/authBlog.jfif';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <Link className='backBlog' to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
      <div className="blog-header">
        <h1>Blogs</h1>
      </div>
      <div className="blog-content">
        <div className="blog-post">
          <div className="blog-post-image">
            <img src={nodejsBlogImage} alt="Blog Post 1" />
          </div>
          <div className="blog-post-info">
            <h2>How Backend Works : Node.js</h2>
            <p>
            Discover Node.js backend essentials! Learn about the JavaScript engine, file system operations, setting up a Node server, handling HTTP requests, working with URLs, HTTP methods, building RESTful APIs with Express, managing HTTP headers, and integrating databases. Dive into the world of Node.js backend development today!
            </p>
            <a href="https://medium.com/@shivamshende200/how-backend-works-node-js-6a0efeaeda10" target={'_blank'} className="read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post-image">
            <img src={jsBlogImage} alt="Blog Post 2" />
          </div>
          <div className="blog-post-info">
            <h2>How JavaScript Works: A Comprehensive Guide</h2>
            <p>
            Dive deep into JavaScript on my blog! Explore advanced topics like JavaScript engine, execution context, call stack, hoisting, functions, asynchronous programming, DOM manipulation, and more. Elevate your JavaScript expertise today! 
            </p>
            <a href="https://medium.com/@shivamshende200/how-javascript-works-a-comprehensive-guide-423a13d70ed2" target={'_blank'} className="read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post-image">
            <img src={authBlogImage} alt="Blog Post 3" />
          </div>
          <div className="blog-post-info">
            <h2>Understanding Stateful and Stateless Authentication: A Backend Perspective</h2>
            <p>
            In the real time of authentication, understanding the fundamental patterns is crucial. Two key paradigms, stateful and stateless authentication, form the backbone of secure user access in web applications. Let’s dive into these patterns to unravel their mechanisms, use cases, and implications.
            </p>
            <a href="https://medium.com/@shivamshende200/understanding-stateful-and-stateless-authentication-a-backend-perspective-a78e20b4b075" target={'_blank'} className="read-more">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;