import React from 'react'
import BizStrategyBlogImage from '../../../src/assets/biz_strategy.webp';

function NonTechBLogs() {
  return (
    <>
      <div className="blog-post">
        <div className="blog-post-image">
          <img src={BizStrategyBlogImage} alt="Blog Post 1" />
        </div>
        <div className="blog-post-info">
          <h2>A Victory Vision: An Effective Business Strategy for Startups</h2>
          <p>
            A robust strategy not only provides a roadmap for success but also helps in navigating the inevitable challenges that arise. This blog will guide you through the essential elements of a winning business strategy and show you how to align your strategic goals with your business operations effectively.
          </p>
          <a href="https://medium.com/@shivamshende200/a-victory-vision-an-effective-business-strategy-for-startups-3ffbc5472899" target={'_blank'} className="read-more">
            Read More...
          </a>
        </div>
      </div>
    </>
  )
}

export default NonTechBLogs
