import React from "react";
import "./BlogCard.css";
import blogdata from "../data/blogdata"; // your data file

// Single Card Component
const BlogCardItem = ({ blog, onClick }) => {
  return (
    <div
      className="card blog-card h-100"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="img-box">
        <img src={blog.image} className="card-img-top" alt={blog.title} />
        <div className="overlay">
          <h5>{blog.title}</h5>
          <p>Read more →</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{blog.shortDesc}</p>
      </div>
    </div>
  );
};

// Main Grid Component
export default function BlogGrid() {
  const handleClick = (index) => {
    // You can replace this with navigation to blog.detailLink
    alert(`Clicked on ${blogdata[index].title}`);
  };

  return (
    <div className="container mt-5">
      <div className="row g-4 justify-content-center">
        {blogdata.map((blog, index) => (
          <div className="col-lg-4 col-md-6" key={blog.id}>
            <BlogCardItem blog={blog} onClick={() => handleClick(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
