import React from 'react';
import "./services.css";
import Image2 from "../../assets/service-2.svg";


const data = [
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "As a Frontend Developer based in Lagos, Nigeria. I'm responsible in using the knowledge of programming languages to design and code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications. Communicating with clients to identify their needs, optimizing websites for different formats like desktops and mobile phones and running tests to ensure code strings perform the correct functions.",
  }
];

const Services = () => {
  return (
    <section className="services_container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Services;