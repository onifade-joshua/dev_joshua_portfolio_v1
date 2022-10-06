import React from 'react';
import "./about.css";
import Image from "../../assets/bg-picture.jpg";
import Resume from "../../assets/Developer-Resume-Onifade-Joshua.pdf";



const About = () => {
  return (
    <section className="about_container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              An Enthusiastic Developer, eager to contribute to team success through hard work, attention to details, excellent organizational skills.
            </p>
            <p className='about_description'>
              Clear understanding of work ethics, actively looking for opportunity to contribute. Ability to solve problems creatively using the language of the web and the language which the web understand. I'm dedicated and as well motivated to learn, grow and excel in all my endeavors.
            </p>
            <a href={Resume} className="btn" download="Developer-Resume-Onifade-Joshua">Get Resume</a>


          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">HTML</h3>
                <span className="skills_number">95%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage html"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">CSS</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage css"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">BOOTSTRAP</h3>
                <span className="skills_number">85%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage bootstrap"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">JAVASCRIPT</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage javascript"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">REACT</h3>
                <span className="skills_number">85%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;