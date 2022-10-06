import React from 'react';
import "./scrollup.css";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from 'react';

const ScrollUp = () => {
    const [scrollUp, setScrollUp] = useState(false);

    const toggleScroll = () => {
            if (window.scrollY >= 100) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
        };
        const scrollBackUp = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
        
    useEffect(() => {
        window.addEventListener("scroll", toggleScroll);
        return () => {
            window.removeEventListener("scroll", toggleScroll)
        }
    },[]);
   
  return (
    <a href='#'type='button' onClick={scrollBackUp} className="scrollup">
        <i className="scrollup_icon"><IoIosArrowDropupCircle/></i>
    </a>
    )
};
export default ScrollUp;
  

