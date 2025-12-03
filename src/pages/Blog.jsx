import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs")
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!blogs.length) return <p>No blogs found.</p>;

  return (
    <section className="blog-section">
      <h3>Latest Blogs</h3>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div
            key={blog.slug}
            className="blog-card"
            onClick={() => navigate(`/blogs/${blog.slug}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={blog.image} alt={blog.title} />
            <h4>{blog.title}</h4>
           
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
