// Resume.js
import React from "react";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <iframe
        src="../../public/documents/resume.pdf"
        title="Amber Hasan's Resume"
        style={{ width: "100%", height: "90vh", border: "none" }}
      ></iframe>
    </div>
  );
}

export default Resume;
