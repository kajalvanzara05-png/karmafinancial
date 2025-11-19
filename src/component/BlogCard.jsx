import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog, onClick }) => {
  return (
    <div className="card blog-card shadow-sm h-200" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="img-box">
        <img src={blog.image} className="card-img-top" alt={blog.title} />
        <div className="overlay"></div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.shortDesc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
