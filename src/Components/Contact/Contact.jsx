import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";

const Contact = () => {
  return (
    <motion.section className="c-wrapper" id="contact">
      <div
        className="paddings innerWidth flexCenter c-container"
        id="contactUsNavLink"
      >
        {/* left-side */}
        <div className=" flexColStart c-left">
          <motion.span
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="orangeText"
          >
            Our Contacts
          </motion.span>
          <motion.span
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="primaryText"
          >
            Easy to Contact us
          </motion.span>
          <motion.span
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="secondaryText"
          >
            We are always ready to help by providing the best Service as we
            belive, a good place to live can make life better.
          </motion.span>

          <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="flexColStart contactModes">
            {/* First-row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart deatil">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 12</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second-Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart deatil">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 12</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second-row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart deatil">
                    <span className="primaryText"> Video Call</span>
                    <span className="secondaryText">021 123 145 12</span>
                  </div>
                </div>
                <div className="flexCenter button"> Video Call Now</div>
              </div>

              {/* Forth-Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart deatil">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 12</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* right-side */}
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="c-right"
        >
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
