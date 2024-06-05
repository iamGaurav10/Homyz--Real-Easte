import React, { useState } from "react";
import "./Value.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";

const Value = () => {
  return (
    <motion.section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left-side */}
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="image-container"
        >
          <img src="./value.png" alt="" />
        </motion.div>

        {/* right-side */}
        <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value WE Provide</span>
          <span className="secondaryText">
            We are always ready to help by providing best service for you.{" "}
            <br />
            We belive a good place to live can make your lifew better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton  flexCenter">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Value;
