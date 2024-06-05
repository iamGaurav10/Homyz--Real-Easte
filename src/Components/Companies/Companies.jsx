import React from "react";
import "./Companies.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";

const Companies = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="c-wrapper"
    >
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
      </div>
    </motion.section>
  );
};

export default Companies;
