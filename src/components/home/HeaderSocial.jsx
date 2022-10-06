import React from 'react';
import "./home.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a href="https://twitter.com/JayDrayl01" className="home_social-link" target="_blank">
        <i class="fa fa-twitter"><BsTwitter/></i>
      </a>

      <a href="https://www.linkedin.com/in/onifade-joshua-7b844322b/" className="home_social-link" target="_blank">
        <i class="fa fa-linkedin"><BsLinkedin/></i>
      </a>
    </div>
  )
}

export default HeaderSocials;