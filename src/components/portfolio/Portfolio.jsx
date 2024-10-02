import "./portfolio.css";

import IMG1 from "../../assets/chat.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/gada.png";
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
      link: "https://github.com/kavanapoojary/chat",
      github: "https://kavanapoojary.github.io/chat/",
    },
    {
      id: 2,
      title: "Gadaikallu",
      img: IMG4,
      description:
        "The website Gadaikallu presents a scenic and culturally significant location, showcasing its natural beauty and historical relevance.",
      technologies: "React Js",
      link: "https://kavanapoojary.github.io/Gadaikallu/",
      github: "https://github.com/kavanapoojary/Gadaikallu",
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
