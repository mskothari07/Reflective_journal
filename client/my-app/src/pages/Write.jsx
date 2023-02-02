import React, { useState } from "react";
import "../styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="write">
      <div className="write-content">
        <input className="input-title" type="text" placeholder="Title" />
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
          <input type="file" id="img" />
          <div className="upload-bn">
            <button>Save as a Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="write-item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="Technology" id="tech" />
            <label htmlFor="tech">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Sports" id="sport" />
            <label htmlFor="sport">Sports</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Software" id="Software" />
            <label htmlFor="software">Software</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Politics" id="politics" />
            <label htmlFor="Politics">Politics</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
