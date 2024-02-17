import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Om Dwivedi
        </motion.span>
        <div className="socials">
          <a href="https://www.github.com/omdwid/" target="_blank" rel="noopener noreferrer"><img src="/github-logo.png" alt="" ></img></a>
          <a href="https://www.linkedin.com/in/om-dwivedi-950690227/" target="_blank" rel="noopener noreferrer"><img src="/linkedin-logo.ico" alt="" ></img></a>
          <a href="https://www.instagram.com/_om__dwivedi_/" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="" ></img></a>
          <a href="https://auth.geeksforgeeks.org/user/dwivediomacc2" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="" ></img></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
