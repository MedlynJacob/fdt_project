import React from 'react'
import { homeHero } from "../images";
import { TypingText , TitleText } from '../components/CustomTexts';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import {   planetVariants } from '../utils/motion';
import styles from '../styles';
const HomeContent = () => {
  return (
    <section className={`${styles.paddings} relative z-10 m-0 p-0 overflow-hidden`}>
      <div className="flex flex-col">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 p-0 m-0`}
    >
      <motion.div
        variants={fadeIn('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="flex ">
          <h3 className="text-black font-semibold md:text-[24px]">Our re-invented trail cameras enable tracking the most difficult species. We offer tools for insects, fish, reptiles and other hard-to-track scenarios. our technology
             can handle a range of scenarios, including inside bird boxes and small, cold-blooded animals underwater. </h3>
        </div>
      </motion.div>
      <div className="h-[400px] w-2 bg-green-500 flex p-0 mt-0"
      >&nbsp;</div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        <TitleText textStyles="md:text-[34px] " title={<>Empowering land-use stakeholders to make informed
         management decisions with real-time data.</>}  />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {/* {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))} */}
          <p>
            
          </p>
        </div>
      </motion.div>
    </motion.div>
    <div className="">
      <ol className="text-black text-[18px] mt-5">
        <li className="mb-2">
           1.Continuous data logging of motion, microclimate weather and GPS.
        </li>
        <li className="mb-2">
          2. Run your own Python scripts and machine vision models onboard the camera.
        </li>
        <li className="mb-2">
          3.Interchangeable camera lenses with custom focusing and lens filter options
        </li>
        <li className="mb-2">
          4.Motion detection from both a PIR sensor plus a multi-zone laser rangefinder. 
        </li>
        <li className="mb-2">
          5.Motion-detect cold-blooded animals.
        </li>
        <li className="mb-2">
          6.No data plan required. Built-in LoRaWAN long range wireless cloud connectivity.
        </li>
      </ol>
    </div>
      </div>
    
  </section>
  )
}

export default HomeContent;