import React from "react";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import { Link } from "react-router-dom";
const Single = () => {
  return (
    <div className="single-blog">
      <div className="blog-content">
        <img
          className="single-img"
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            className="user-img"
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <div className="user-info">
            <span className="username">Meet</span>
            <p>Posted 5 min ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img className="icon" src={Edit} alt="edit-icon" />
            </Link>
            <img className="icon" src={Delete} alt="delete-icon" />
          </div>
        </div>
        <h1 className="blog-title">
          Blog Title Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p className="blog-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at!{" "}
        </p>
        <br />
        <p className="blog-para">
          Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <br />
        <p className="blog-para">
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at!
        </p>
        <br />
        <p className="blog-para">
          Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. A possimus excepturi aliquid nihil
          cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis
          deserunt repellendus numquam ab vel perspiciatis corporis!
        </p>
      </div>
    </div>
  );
};

export default Single;
