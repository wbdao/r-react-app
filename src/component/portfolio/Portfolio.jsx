import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto currency Dashbord & Financial Visualization",
    gitgub: "http://github.com",
    demo: "https://dribbble.com/shots/17723795-Scarlet-Dashboard-for-Restaurant",
  },
  {
    id: 2,
    image: IMG2,
    title: "Odesa Film Festival 2022",
    gitgub: "http://github.com",
    demo: "https://dribbble.com/shots/17723795-Scarlet-Dashboard-for-Restaurant",
  },
  {
    id: 3,
    image: IMG3,
    title: "Music Player Dashboard - Concept",
    gitgub: "http://github.com",
    demo: "https://dribbble.com/shots/17723795-Scarlet-Dashboard-for-Restaurant",
  },
  {
    id: 4,
    image: IMG4,
    title: "Furnita - Furniture Mobile Apps Design",
    gitgub: "http://github.com",
    demo: "https://dribbble.com/shots/17723795-Scarlet-Dashboard-for-Restaurant",
  },
  {
    id: 5,
    image: IMG5,
    title: "Omnixima Branding and Logo Design Process",
    gitgub: "http://github.com",
    demo: "https://dribbble.com/shots/17723795-Scarlet-Dashboard-for-Restaurant",
  },
  {
    id: 6,
    image: IMG6,
    title: "Different layout of symbols",
    gitgub: "http://github.com",
    demo: "https://dribbble.com/shots/17723795-Scarlet-Dashboard-for-Restaurant",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, gitgub, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={gitgub} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
