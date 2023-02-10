import React, { useState } from "react";
import "../styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [category, setCategory] = useState(state?.cat || "");
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
            category,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/blogs/`, {
            title,
            desc: value,
            category,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
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
            <button>Save as a Draft</button>
            <button onClick={handlePublish}>Publish</button>
          </div>
        </div>
        <div className="write-item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={category === "Technology"}
              name="cat"
              value="Technology"
              id="tech"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="tech">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === "Sports"}
              name="cat"
              value="Sports"
              id="sport"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="sport">Sports</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === "Software"}
              name="cat"
              value="Software"
              id="Software"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="software">Software</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === "Politics"}
              name="cat"
              value="Politics"
              id="politics"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="Politics">Politics</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
