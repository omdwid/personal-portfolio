/* eslint-disable react/prop-types */
import "./portfolio.scss";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Portfolio = ({ project }) => {
  return (
    <div className="portfolio">
      <div className="details">
        <div className="image-container">
          <img src={project.image} alt="" />
        </div>
        <div className="text-details">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="buttons">
            <motion.button
              whileHover={{
                backgroundColor: "white",
                color: "black",
                transition: { duration: 1 },
              }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">Demo</a>
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "white",
                color: "black",
                transition: { duration: 1 },
              }}
            >
              {" "}
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer"><FaGithub size="1.3rem" /> Code</a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
