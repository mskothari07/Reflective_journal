import React, { useState } from "react";
import "../styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [cat, setCat] = useState(state?.cat || "");
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/blogs/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/blogs/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(value);
  return (
    <div className="write">
      <div className="write-content">
        <input
          className="input-title"
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="blog-edit">
          <ReactQuill
            className="edit-quill"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="write-menu">
        <div className="write-item">
          <h1>Publish</h1>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="upload-bn">
            <button onClick={handlePublish}>Publish</button>
          </div>
        </div>
        <div className="write-item">
          <h1>cat</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "Technology"}
              name="cat"
              value="Technology"
              id="tech"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="tech">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "Sports"}
              name="cat"
              value="Sports"
              id="sport"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="sport">Sports</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "Software"}
              name="cat"
              value="Software"
              id="Software"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="software">Software</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "Politics"}
              name="cat"
              value="Politics"
              id="politics"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Politics">Politics</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
