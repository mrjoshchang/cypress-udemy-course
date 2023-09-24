import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileChangeHandler = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" onChange={fileChangeHandler} />
      <br></br> <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Horizontally center
        }}
      >
        <div
          style={{
            width: "50vh", // Adjust the width as needed
            height: "2px", // Adjust the height as needed
            backgroundColor: "white", // Adjust the color as needed
          }}
        ></div>
      </div>
      {selectedFile && (
        <div>
          <h3>Uploaded File:</h3>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>File Size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
