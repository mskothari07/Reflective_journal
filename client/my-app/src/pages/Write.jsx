import React, { useState } from "react";
import "../styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    upload();
  };

  //console.log(value);
  return (
    <div className="write">
      <div className="write-content">
        <input
          className="input-title"
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
