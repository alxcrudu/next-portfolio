import { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { BsArrowDownRight, BsMouse } from "react-icons/bs";
import { SiNextdotjs, SiTailwindcss, SiAdobeillustrator, SiFramer } from "react-icons/si";
import { IoIosArrowRoundDown } from 'react-icons/io';
import Link from "next/link";
import full from "/public/images/full.png";

export default function Introduction() {
  const { t } = useContext(LanguageContext);

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: "15%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
  };
  
  return (
    <div className="container relative test" id="introduction__section">
      <div className="even-columns | pt-36">
          <div className="flex justify-center items-start flex-col">
            <motion.h1
              className="text-5xl md:text-5xl lg:text-7xl heading flex overlow-hidden flex-wrap"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {t.h1.split("").map((letter, i) => {
                return (
                  <motion.span key={letter + "-" + i} variants={textReveal} className="relative">
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                )
              })}
              <div className="w-full" />
              {t.h1b.split("").map((letter, i) => {
                return (
                  <motion.span key={letter + "-" + i} variants={textReveal} className="relative">
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                )
              })}
            </motion.h1>
            <motion.p 
              className="text introduction-text pt-6 font-light"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5, duration: 1}}
            >
              {t.iam}
            </motion.p>
            <motion.p 
              className="text pt-12 font-light"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.7, duration: 1}}
            >
              {t.tech1}
            </motion.p>
            <motion.div 
              className="introduction-icons | flex gap-4 mt-2"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 2, duration: 1}}
            >
              <Link className="introduction-icon" href="https://nextjs.org/" passHref={true} rel="noopener noreferrer" target="_blank">
                <SiNextdotjs size={25} alt="Next.js" />
              </Link>
              <Link className="introduction-icon" href="https://tailwindcss.com/" passHref={true} rel="noopener noreferrer" target="_blank">
                <SiTailwindcss size={25} alt="Tailwind-css" />
              </Link>
              <Link className="introduction-icon" href="https://www.adobe.com/ro/products/illustrator.html?gclid=Cj0KCQiAwJWdBhCYARIsAJc4idDPWzK3wwN3K950dO5__D2z3jAMZKO7KTYrQ3TdUKWyBVnJbFIW6vwaAhqkEALw_wcB&skwcid=AL!3085!3!601204340563!e!!g!!illustrator&mv=search&sdid=KCJMVLF6&ef_id=Cj0KCQiAwJWdBhCYARIsAJc4idDPWzK3wwN3K950dO5__D2z3jAMZKO7KTYrQ3TdUKWyBVnJbFIW6vwaAhqkEALw_wcB:G:s&s_kwcid=AL!3085!3!601204340563!e!!g!!illustrator!1478481991!58339250118" passHref={true} rel="noopener noreferrer" target="_blank">
                <SiAdobeillustrator size={25} alt="Adobe-illustrator" />
              </Link>
              <Link className="introduction-icon" href="https://www.framer.com/motion/" passHref={true} rel="noopener noreferrer" target="_blank">
                <SiFramer size={25} alt="Framer-motion" />
              </Link>
            </motion.div>
            <a href="#projects__section">
              <motion.h2 
                className="text clickable text-xl mt-16 flex cursor-pointer"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 2.2, duration: 1}}
              >
                {t.check}
                  <motion.span 
                    className="pl-4 pt-1" 
                    initial={{y: 0, x: 0}}
                    whileHover={{y: 6, x: 6}}
                  >
                    <BsArrowDownRight size={25}/>
                  </motion.span>
              </motion.h2>
            </a>
          </div>
          <motion.div 
            className="grid place-items-center"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.2, duration: 1}}
          >
            <Image src={full} alt="illustration" />
          </motion.div>
      </div>
      <motion.div 
        className="scroll"
        initial={{opacity: 0}}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          y: [0,15,0,15,0]
        }}
        transition={{delay: 4, duration: 3}}
      >
        <div className="flex flex-col absolute left-2/4 bottom-2">
          <BsMouse size={25} />
          <IoIosArrowRoundDown size={25} />
        </div>
      </motion.div>
    </div>
  )
}