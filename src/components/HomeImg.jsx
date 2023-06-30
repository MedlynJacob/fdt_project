import React from 'react'
import { bird1, bird2, liz } from "../images";
import { TypingText , TitleText } from '../components/CustomTexts';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import {   planetVariants } from '../utils/motion';
import styles from '../styles';
const HomeImg = () => {
  return (
    <section className={`${styles.paddings} relative z-0 m-0 pl-40 pr-40 overflow-hidden `}>
      <div className="flex flex-col">
        <h1 className="text-center font-bold font-weight-800 text-[40px] p-9 mt-20 mb-15">
        Some of Our Applications in Action
        </h1>
        <div className="place-content-center mx-auto">
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto  flex lg:flex-row flex-col gap-8 p-0 m-0`}
    >
      <motion.div
        variants={fadeIn('left')}
        className={` ${styles.flexEnd}  `}
      >
       <div className="flex   p-0 m-0">
          <img className=" p-0 m-0 w-[570px] h-[427px] " src={bird1} alt="bird"/>
        </div>
      </motion.div>
     
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" w-[570px] h-[427px]"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        <TitleText textStyles="md:text-[30px] pr-10  font-semibold" title={<>Tracking a bumble bee using a narrow tube case for our device.
         The code on the computer monitor shows how the cameras can be programmed to do complex tasks and provide CSV data, ready for Excel, by reporting back what they see.</>}  />
        
      </motion.div>
    </motion.div>
        </div>  
        <div className="place-content-center mx-auto">
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mt-20 mb-10 flex lg:flex-row flex-col gap-8 p-0 m-0`}
    >
   
     
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" w-[570px] h-[427px]"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        <TitleText textStyles="md:text-[30px] pl-10 ml-10 font-semibold" title={<>TMacaw chicks in Costa Rica. By monitoring movement in the nests, researchers can know how soon nests are occupied and how the local climate (using an onboard weather station) affects nest usage.</>}  />
        
      </motion.div>
      <motion.div
        variants={fadeIn('left')}
        className={` ${styles.start}  `}
      >
        <div className="flex w-[570px] h-[427px]  p-0 m-0">
          <img className=" p-0 m-0 " src={bird2} alt="bird"/>
        </div>
      </motion.div>
    </motion.div>
        </div>
        <div className="place-content-center mx-auto">
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto  flex lg:flex-row flex-col gap-8 p-0 m-0`}
    >
      <motion.div
        variants={fadeIn('left')}
        className={` ${styles.flexEnd}  `}
      >
       <div className="flex   p-0 m-0">
          <img className=" p-0 m-0 w-[570px] h-[427px] " src={liz} alt="bird"/>
        </div>
      </motion.div>
     
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" w-[570px] h-[427px]"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        <TitleText textStyles="md:text-[30px] pr-10  font-semibold" title={<>Tracking lizards and amphibians in California. Here, a non-lethal camera trap allows for automatic monitoring and reporting over built-in radio, once per minute.</>}  />
        
      </motion.div>
    </motion.div>
        </div>  
           
     
    
      </div>
    
  </section>
  )
}

export default HomeImg;