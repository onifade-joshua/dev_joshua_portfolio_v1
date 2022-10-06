import React, { useState } from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { BsLayersFill } from "react-icons/bs";
import { ImBubbles2 } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";


const Sidebar = () => {

  /*==========Toggle Menu======= */
  const [toggle, showMenu] = useState(false);
  const [activeSideBar, setActiveSideBar] = useState("#home")
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" onClick={() => setActiveSideBar("#home")} className={activeSideBar === "#home" ? "nav_link active-link" : "nav_link"}>
                  <i className="icon-home"><AiFillHome /></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" onClick={() => setActiveSideBar("#about")} className={activeSideBar === "#about" ? "nav_link active-link" : "nav_link"}>
                  <i className="icon-user-following"><AiOutlineUser /></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#services" onClick={() => setActiveSideBar("#services")} className={activeSideBar === "#services" ? "nav_link active-link" : "nav_link"}>
                  <i className="icon-briefcase"><BsBriefcaseFill /></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#resume" onClick={() => setActiveSideBar("#resume")} className={activeSideBar === "#resume" ? "nav_link active-link" : "nav_link"}>
                  <i className="icon-graduation"><FaGraduationCap /></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#work" onClick={() => setActiveSideBar("#work")} className={activeSideBar === "#work" ? "nav_link active-link" : "nav_link"}>
                  <i className="icon-layers"><BsLayersFill /></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" onClick={() => setActiveSideBar("#contact")} className={activeSideBar === "#contact" ? "nav_link active-link" : "nav_link"}>
                  <i className="icon-bubble"><ImBubbles2 /></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">Dev.Joshua &copy; 2022.</span>
        </div>
      </aside>
      <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"><TiThMenuOutline /></i>
      </div>
    </>
  );
};

export default Sidebar;