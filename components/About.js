import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiFirebase, SiDocker } from "react-icons/si";
import { SiAbletonlive } from "react-icons/si";
import { motion } from "framer-motion";
import MusicPlayer from "../components/MusicPlayer";
import skill from "/public/images/full2.png";

export default function About() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container | mt-28" id="about__section">
      <div className="projects-container">
        <div className="projects-left">
          <motion.p 
            className="text | hidden md:block font-light"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1}}
          >
            {t.abt}
          </motion.p>
        </div>
        <div className="projects-right | md:ml-2">
          <div className="flex items-center">
            <p className="text | md:hidden font-light mr-6">{t.abt}</p>
            <motion.div 
              className="division-line | w-full opacity-40 md:mt-3"
              initial={{opacity: 0}}
              whileInView={{opacity: .4}}
              viewport={{once: true}}
              transition={{duration: 1}}
            ></motion.div>
          </div>
          <div className="even-columns | mt-24">
            <div className="about-content">
              <motion.h2 
                className="accent-text mb-6 text-xs"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .3}}
              >
                {t.who}
              </motion.h2>
              <motion.p 
                className="text font-light"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .4}}
              >
                {t.d1}
                <br /><br />
                {t.d2}
                <br /><br />
                {t.d4}<span className="font-normal">{t.d4s}</span>
              </motion.p>
              <motion.p 
                className="text pt-12 font-light"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .5}}
              >
                {t.d5}
              </motion.p>
                <motion.div 
                  className="introduction-icons | flex gap-4 mt-2"
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  viewport={{once: true}}
                  transition={{duration: 1, delay: .6}}
                >
                  <Link className="introduction-icon" href="https://nextjs.org/" passHref={true} rel="noopener noreferrer" target="_blank">
                    <SiNextdotjs size={25} alt="Next.js" />
                  </Link>
                  <Link className="introduction-icon" href="https://tailwindcss.com/" passHref={true} rel="noopener noreferrer" target="_blank">
                    <SiTailwindcss size={25} alt="Tailwind-css" />
                  </Link>
                  <Link className="introduction-icon" href="https://www.framer.com/motion/" passHref={true} rel="noopener noreferrer" target="_blank">
                    <SiFramer size={25} alt="Framer-motion" />
                  </Link>
                  <Link className="introduction-icon" href="https://firebase.google.com/" passHref={true} rel="noopener noreferrer" target="_blank">
                    <SiFirebase size={25} alt="Firebase" />
                  </Link>
                  <Link className="introduction-icon" href="https://www.docker.com/" passHref={true} rel="noopener noreferrer" target="_blank">
                    <SiDocker size={25} alt="Docker" />
                  </Link>
                </motion.div>
            </div>
            <motion.div 
              className="skill-illustration | flex justify-end items-start mt-10 md:mt-0"
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 1, delay: .7}}
            >
              <Image src={skill} alt="Skills illustration" />
            </motion.div>
          </div>
          <div className="even-columns | mt-16 md:mt-24">
            <motion.div 
              className="player-container | flex justify-center md:justify-start"
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 1, delay: .2}}
            >
              <MusicPlayer />
            </motion.div>
            <div className="flex flex-col md:text-right md:items-end mt-12 md:mt-0">
              <motion.h2 
                className="accent-text mb-6 text-xs"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .3}}
              >
                {t.other}
              </motion.h2>
              <motion.p 
                className="text font-light"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .4}}
              >
                {t.e1}<br /><br />
                {t.e2}<br /><br />
              </motion.p>
              <motion.div 
                className="flex text items-center flex-wrap"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .5}}
              >
                <p>{t.e3}</p> 
                <Link className="clickable flex items-center" href="https://www.ableton.com/en/live/" passHref={true} rel="noopener noreferrer" target="_blank">
                  <p className="ml-2">{t.e3s}</p>
                  <SiAbletonlive className="ml-2" size={30}/>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
