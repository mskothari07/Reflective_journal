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

  //removing <p> tags
  const normalText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home-page">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="blog-img">
              <img className="img" src={`../upload/${blog.img}`} alt="blog" />
            </div>
            <div className="blog-content">
              <h1 className="blog-title">{blog.title}</h1>

              <p className="blog-desc">{normalText(blog.desc)}</p>
              <Link className="link" to={`/blog/${blog.id}`}>
                <button className="blog-bn">More..</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
