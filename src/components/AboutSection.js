// src/components/AboutSection.js
import React from "react";
import Card from "./Card";
import aboutData from "../data/aboutData";

const AboutSection = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about-content">
        <div className="about-columns">
          {aboutData.map((data, index) => (
            <Card key={index} title={data.title} items={data.items} />
          ))}
        </div>
        <iframe
          src="/documents/resume.pdf"
          title="Amber Hasan's Resume"
          className="resume-iframe"
        ></iframe>
      </div>
    </div>
  </section>
);

export default AboutSection;
