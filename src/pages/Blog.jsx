import React from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogdata";
import "../component/BlogCard"; // CSS file

function Blog() {
  const navigate = useNavigate();

  // Sort blogData by date (latest first)
  const sortedBlogData = blogData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="blog-section  ">
      <h3 className="blog-title ">Latest Blogs</h3>
      <div className="blog-grid ">
        {sortedBlogData.map((blog) => (
          <div
            key={blog.id}
            className="blog-card "
            onClick={() => navigate(blog.detailLink)}
          >
            <div className="img-box ">
              <img src={blog.image} alt={blog.title} />
              <div className="overlay "></div>
            </div>
            <div className="card-body">
              <p className="blog-date">{blog.date}</p>
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
