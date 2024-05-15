import React from "react";
import "./Hero.css";
import { MdLocationPin } from "react-icons/md";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Hero-left */}

        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:"4rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:3,
              type:"spring"
            }}
            >
              Discover
              <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suits your requirement.
            </span>
            <span className="secondaryText">
              Forget all the difficulties and allow us to find a recidence for
              you.
            </span>
          </div>

          <div className="flexCenter search-bar">
            <MdLocationPin color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Wins</span>
            </div>
          </div>
        </div>

        {/* Hero-right */}

        <div className="flexCenter hero-right">
          <motion.div className="image-container"
          initial={{x:"3rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:2,
            type:"ease-in"
          }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
