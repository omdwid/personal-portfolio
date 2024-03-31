import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 16,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>OM DWIVEDI</motion.h2>
          <motion.h1 variants={textVariants}>SOFTWARE DEVELOPER</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "white",
                color: "black",
                transition: { duration: 1 },
              }}
            >
              <a
                href="https://drive.google.com/file/d/10IZBk5iN1qEAMhfGVHlcNdmVAck6qb48/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "white",
                color: "black",
                transition: { duration: 1 },
              }}
              variants={textVariants}
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        animate={{
          x: "-220%",
          transition: { duration: 20, repeat: Infinity, repeatType: "loop" },
        }}
      >
        ReactJS NextJS Python DSA and ML
      </motion.div>
      <div className="imageContainer">
        <img src="/Programming-amico.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
