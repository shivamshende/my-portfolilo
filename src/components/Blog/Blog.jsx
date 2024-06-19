import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      
      <Link className='backBlog' to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
      <div className="blog-header">
        <h1>Blogs</h1>
      </div>
      <div className="blog-navigation">
        <NavLink id='non-technical' to="non-techBlogs" className={({ isActive }) => (isActive ? 'active' : '')}>Biz Insights</NavLink>
        <NavLink id='technical' to="techBlogs" className={({ isActive }) => (isActive ? 'active' : '')}>Tech Insights</NavLink>
      </div>
      <div className="blog-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;