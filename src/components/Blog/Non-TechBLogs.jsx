import React from 'react'
import BizStrategyBlogImage from '../../../src/assets/biz_strategy.webp';
import decisonMaking from '../../../src/assets/decision_making.jpg'
import MarketResearch from '../../../src/assets/market_research.jpg'
import Leadership from '../../../src/assets/leadership_blog.jpg'

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

      <div className="blog-post">
        <div className="blog-post-image">
          <img src={MarketResearch} alt="Blog Post 3" />
        </div>
        <div className="blog-post-info">
          <h2>The Role of Market Research in Business Strategy</h2>
          <p>
            Market research plays a pivotal role in guiding these decisions, providing businesses with essential insights into their market, customers, and competition. This blog delves into the critical role of market research in shaping effective business strategies.
          </p>
          <a href="https://medium.com/@shivamshende200/the-role-of-market-research-in-business-strategy-9cdc25ff2122" target={'_blank'} className="read-more">
            Read More...
          </a>
        </div>
      </div>

      <div className="blog-post">
        <div className="blog-post-image">
          <img src={Leadership} alt="Blog Post 4" />
        </div>
        <div className="blog-post-info">
          <h2>Leadership in the New Age: Adapting to Change</h2>
          <p>
            In today’s world, leadership has taken on a new form. The ability to adapt to change has become a cornerstone of effective leadership. This blog explores the essence of modern leadership and offers insights into how leaders can thrive in this dynamic environment.
          </p>
          <a href="https://medium.com/@shivamshende200/leadership-in-the-new-age-adapting-to-change-e76cbae10219" target={'_blank'} className="read-more">
            Read More...
          </a>
        </div>
      </div>
    </>
  )
}

export default NonTechBLogs