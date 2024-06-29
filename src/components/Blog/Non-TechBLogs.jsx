import React from 'react'
import BizStrategyBlogImage from '../../../src/assets/biz_strategy.webp';
import decisonMaking from '../../../src/assets/decision_making.jpg'

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

      <div className="blog-post">
        <div className="blog-post-image">
          <img src={decisonMaking} alt="Blog Post 2" />
        </div>
        <div className="blog-post-info">
          <h2>Effective Decision-Making in High-Growth Business</h2>
          <p>
            As startups navigate through uncertain waters, making the right decisions can be the difference between success and failure. In this blog, we’ll explore various aspects of decision-making that can help startups thrive.
          </p>
          <a href="https://medium.com/@shivamshende200/effective-decision-making-in-high-growth-business-44e59fb489de" target={'_blank'} className="read-more">
            Read More...
          </a>
        </div>
      </div>
    </>
  )
}

export default NonTechBLogs
