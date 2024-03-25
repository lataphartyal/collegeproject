import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-images">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div class Name="blog-content">
          <p className="date">3 April,2024</p>
          <h5 className="title"> A beautiful morning</h5>
          <p className="desc">
            Hi there you can use our application for the perfect website.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
