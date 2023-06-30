import React from 'react';
import { homeHero , fdt1} from "../images";
import { TypingText } from '../components/CustomTexts';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import HomeContent from '../components/content';
import HomeImg from '../components/HomeImg';
import styles from '../styles';
const home = () => {
    return (
        <div className="flex flex-col overflow-hidden mb-0 pb-0">
            <div className="flex items-center justify-center h-screen w-screen hover:scale-1 bg-cover bg-center opacity-1" style={{ backgroundImage: `url(${homeHero})` }}>
                <div className="flex flex-col  align-center  p-20 flex-wrap ">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className={`    flex-col w-vw/2 `}
                    >
                        <TypingText title="Conservation tech,
         reimagined" textStyles="text-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl  text-center font-bold break-words" />
                        <motion.div
                            variants={fadeIn('up','',2.8,1)}
                            duration={10}
                            className={`flex-1 ${styles.flexCenter}`}
                        >
                            <div className="flex ">
                                <h3 className="text-black font-semibold md:text-[44px] font-Belanosima mt-8">science Ready Smart Cameras </h3>
                            </div>
                        </motion.div>
                        {/* <TypingText title=" reimagined" textStyles="text-black text-9xl z-10 text-center font-bold" /> */}
                    </motion.div>
                    {/* <h2 className="text-black text-9xl z-10 text-center font-bold">Conservation tech, reimagined</h2> */}


                </div>

            </div>
            <HomeContent/>
            <button className="bg-sky-500 mt-5 mb-10 w-40 h-10 rounded-xl mx-auto hover:bg-black text-white text-20">
                <a href="/about">Learn more</a>
            </button>
            <div className="flex flex-row w-full pl-40 pr-40 mt-10 ">
                <div className="w-[50%]">
                    <h1 className="text-black p-1 mb-5 text-4xl text-left font-bold">ABOUT US</h1>
                    <p className=" text-gray-500 text-normal text-[18px]">Field Data Technologies and Field Data Services are sister companies empowering environmental stakeholders to make management decisions through actionable, real-time data. We are funded by USDA, NOAA, and the State of Montana to build a new type of smart trail camera. </p>
                    <button className="bg-sky-500 mt-5 w-40 h-10 rounded-xl mx-auto hover:bg-black text-white text-20">
                        <a href="/about">Learn more</a>
                    </button>
                </div>
                <img src={fdt1} alt="fdt logo" className="ml-9 w-[40%] "/>
            </div>
            <HomeImg/>
        </div>

    );
}

export default home;
