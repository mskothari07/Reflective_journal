import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blogs${cat}`);
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  console.log(blogs);
  return (
    <div className="home-page">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="blog-img">
              <img className="img" src={blog.img} alt="blog" />
            </div>
            <div className="blog-content">
              <Link className="link" to={`/blog/${blog.id}`}>
                <h1 className="blog-title">{blog.title}</h1>
              </Link>
              <p className="blog-desc">{blog.desc}</p>
              <button className="blog-bn">More..</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
