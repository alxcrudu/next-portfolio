import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import reactProj from "/assets/react.png";
import shortlyProj from "/assets/shortly.jpg";
import blogrProj from "/assets/blogr.jpg";

export default function Projects() {
  const { t } = useContext(LanguageContext);

  const clipPath = {
    hidden: {
        clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
    },
    animate: {
        clipPath: 
            ["polygon(0 0, 0.4% 0, 0.4% 1%, 0 1%)",
             "polygon(0 0, 0.4% 0, 0.4% 100%, 0 100%)",
             "polygon(0 0, 100% 0, 100% 100%, 0 100%)"],
        transition: {
            duration: 1.8
        }
    }
  };

  return (
    <div className="container | mt-28" id="projects__section">
        <div className="projects-container">
            <div className="projects-left">
                <motion.p 
                    className="text | hidden md:block font-light"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 2}}
                >{t.proj2}</motion.p>
                <div className="hidden md:flex w-full justify-start mt-24">
                    <Link href="https://github.com/alxcrudu" passHref={true} rel="noopener noreferrer" target="_blank">
                        <motion.h2 
                            className="projects-github text clickable | text-xl flex cursor-pointer"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true, amount: .3}}
                            transition={{duration: 1, delay: 1.1}}
                        >
                            {t.allproj}
                            <span className="mt-2">
                                <AiFillGithub size={25}/>
                            </span>
                        </motion.h2>
                    </Link>
                </div>
            </div>
            <div className="projects-right | md:ml-2">
                <div className="flex items-center">
                    <p className="text | md:hidden font-light mr-6">{t.proj2}</p>
                    <motion.div 
                        className="division-line | w-full opacity-40 md:mt-3"
                        initial={{opacity: 0}}
                        whileInView={{opacity: .4}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 2}}
                    ></motion.div>
                </div>
                <div className="projects-selector | mt-24">
                    <div className="project">
                        <motion.div 
                            className="imgg | relative"
                            variants={clipPath}
                            initial="hidden"
                            whileInView="animate"
                            viewport={{once: true}}
                        >
                            <motion.div 
                                className="proj-overlay | absolute z-20"
                                initial={{opacity: 0}}
                                whileHover={{opacity: 1}}
                            >
                                <div className="flex items-center justify-center h-full gap-8">
                                    <div className="button-bg rounded-full">
                                        <Link href="https://github.com/alxcrudu/shortly-challenge" passHref={true} rel="noopener noreferrer" target="_blank">
                                            <IconButton className="overlay-btn">
                                                <AiFillGithub size={25}/>
                                            </IconButton>
                                        </Link>
                                    </div>
                                    <div className="button-bg rounded-full">
                                        <IconButton className="overlay-btn">
                                            <BsGlobe size={20}/>
                                        </IconButton>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="imgoverlay ovone"
                                initial={{opacity: 1}}
                                whileInView={{opacity: 0}}
                                transition={{delay: 1.6, duration: .8}}
                                viewport={{once: true}}
                            ></motion.div>
                            <Image src={shortlyProj} alt="Shortly-project"/>
                        </motion.div>
                        <motion.h2 
                            className="text-2xl mt-6"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: .5}}
                            transition={{duration: 1}}
                        >
                            Shortly
                        </motion.h2>
                        <motion.p 
                            className="text mt-2 font-light"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true, amount: .5}}
                            transition={{duration: 1, delay: .5}}
                        >
                            {t.desc2}
                        </motion.p>
                    </div>
                    <div className="project">
                        <motion.div 
                            className="imgg | relative"
                            variants={clipPath}
                            initial="hidden"
                            whileInView="animate"
                            viewport={{once: true}}
                        >
                            <motion.div 
                                className="proj-overlay | absolute z-20"
                                initial={{opacity: 0}}
                                whileHover={{opacity: 1}}
                            >
                                <div className="flex items-center justify-center h-full gap-8">
                                    <div className="button-bg rounded-full">
                                        <Link href="https://github.com/alxcrudu/blogr-ui" passHref={true} rel="noopener noreferrer" target="_blank">
                                            <IconButton className="overlay-btn">
                                                <AiFillGithub size={25}/>
                                            </IconButton>
                                        </Link>
                                    </div>
                                    <div className="button-bg rounded-full">
                                        <IconButton className="overlay-btn">
                                            <BsGlobe size={20}/>
                                        </IconButton>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="imgoverlay ovtwo"
                                initial={{opacity: 1}}
                                whileInView={{opacity: 0}}
                                transition={{delay: 1.8, duration: 1.3}}
                                viewport={{once: true}}
                            ></motion.div>
                            <Image src={blogrProj} alt="Blogr-project"/>
                        </motion.div>
                        <motion.h2 
                            className="text-2xl mt-6"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: .5}}
                            transition={{duration: 1}}
                        >
                            Blogr
                        </motion.h2>
                        <motion.p 
                            className="text mt-2 font-light"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true, amount: .5}}
                            transition={{duration: 1, delay: .5}}
                        >
                            {t.desc3}
                        </motion.p>
                    </div>
                    <div className="project">
                        <motion.div 
                            className="imgg | relative"
                            variants={clipPath}
                            initial="hidden"
                            whileInView="animate"
                            viewport={{once: true}}
                        >
                            <motion.div 
                                className="proj-overlay | absolute z-20"
                                initial={{opacity: 0}}
                                whileHover={{opacity: 1}}
                            >
                                <div className="flex items-center justify-center h-full gap-8">
                                    <div className="button-bg rounded-full">
                                        <Link href="https://github.com/alxcrudu/react-to-do-app" passHref={true} rel="noopener noreferrer" target="_blank">
                                            <IconButton className="overlay-btn">
                                                <AiFillGithub size={25}/>
                                            </IconButton>
                                        </Link>
                                    </div>
                                    <div className="button-bg rounded-full">
                                        <IconButton className="overlay-btn">
                                            <BsGlobe size={20}/>
                                        </IconButton>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="imgoverlay ovthree"
                                initial={{opacity: 1}}
                                whileInView={{opacity: 0}}
                                transition={{delay: 1.8, duration: 1.3}}
                                viewport={{once: true}}
                            ></motion.div>
                            <Image src={reactProj} alt="React-todo-project"/>
                        </motion.div>
                        <motion.h2 
                            className="text-2xl mt-6"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: .5}}
                            transition={{duration: 1}}
                        >
                            React to-do app
                        </motion.h2>
                        <motion.p 
                            className="text mt-2 font-light"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true, amount: .5}}
                            transition={{duration: 1, delay: .5}}
                        >
                            {t.desc1}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};