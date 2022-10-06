import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';
import { HiLink } from "react-icons/hi";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }
  return (
    <section className="work_container section" id="work">
      <h2 className="section_title">My Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>All</span>
        <span className="work_item" onClick={() => filterItem("Web")}>Web</span>
        <span className="work_item" onClick={() => filterItem("App")}>App</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, website } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={website} className="work_button">
                <i className="icon-link work_button-icon"><HiLink /></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;