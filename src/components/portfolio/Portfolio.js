import "./portfolio.css";

import IMG1 from "../../assets/chat.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/pilikula.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Chat Application",
      img: IMG1,
      description:
        "A Chat Application allows real-time messaging between users through a client interface.",
      technologies: "Html | CSS",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Pilikula",
      img: IMG4,
      description:
        "Discover the beauty of nature, culture, and adventure at Pilikula Park, where every moment is a journey into the heart of biodiversity and heritage.",
      technologies: "React Js",
      link: "https://vinyascse.github.io/Pilikula_Park/",
      github: "https://github.com/VinyasCSE/Pilikula_Park",
    },
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
