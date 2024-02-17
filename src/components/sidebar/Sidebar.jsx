import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import { motion } from "framer-motion"; // Add the import statement for motion

import ToggleButton from "./togglebutton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 10
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  return (
    <motion.div className="sidebar" variants={varients} animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
