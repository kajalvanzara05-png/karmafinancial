import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./BlogDetail.css";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;

    fetch(`http://127.0.0.1:8000/api/blogs/${slug}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog Not Found</p>;

  return (
    <div className="blog-detail">
      <button onClick={() => navigate(-1)}>← Back</button>

      <img src={blog.image} alt={blog.title} className="banner" />

      <h2>{blog.title}</h2>

      <div dangerouslySetInnerHTML={{ __html: blog.description }} />
    </div>
  );
}

export default BlogDetail;
