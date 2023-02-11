import React, { useContext, useState, useEffect } from "react";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext.js";

const Single = () => {
  const [blog, setBlog] = useState({});

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const blogId = location.pathname.split("/")[2]; //splitting id by slash and taking the third item

  console.log(blogId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blogs/${blogId}`);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [blogId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/blogs/${blogId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single-blog">
      <div className="blog-content">
        <img className="single-img" src={`../upload/${blog.img}`} alt="Blog" />
        <div className="user">
          <img
            className="user-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
            alt="user"
          />
          <div className="user-info">
            <span className="username">{blog.username}</span>
            {/* it will count current time and compare it with posted time and show
            accordingly */}
            <p>Posted {moment(blog.date).fromNow()}</p>
          </div>
          {/* Check for current user and match with blog username and if both are same then and only it will show edit and delete option */}
          {currentUser.username === blog.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={blog}>
                <img className="icon" src={Edit} alt="edit-icon" />
              </Link>
              <img
                className="icon"
                onClick={handleDelete}
                src={Delete}
                alt="delete-icon"
              />
            </div>
          )}
        </div>
        <h1 className="blog-title">{blog.title}</h1>
        {blog.desc}
      </div>
    </div>
  );
};

export default Single;
