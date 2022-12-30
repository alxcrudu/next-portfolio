import { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { BsArrowDownRight, BsMouse } from "react-icons/bs";
import { SiNextdotjs, SiTailwindcss, SiAdobeillustrator, SiFramer } from "react-icons/si";
import { IoIosArrowRoundDown } from 'react-icons/io';
import Link from "next/link";
import full from "/public/images/full.png";

export default function Introduction() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container relative" id="introduction__section">
      <div className="even-columns | pt-36">
          <div className="flex justify-center items-start flex-col">
            <h1 className="text-5xl md:text-5xl lg:text-7xl">{t.h1}</h1>
            <p className="text introduction-text pt-6 font-light">{t.iam}</p>
            <p className="text pt-12 font-light">{t.tech1}</p>
            <div className="introduction-icons | flex gap-4 mt-2">
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
            </div>
            <a href="#projects__section">
              <h2 className="text clickable text-xl mt-16 flex cursor-pointer">{t.check}<span className="pl-4 pt-1"><BsArrowDownRight size={25}/></span></h2>
            </a>
          </div>
          <div className="grid place-items-center">
            <Image src={full} alt="illustration" />
          </div>
      </div>
      <div className="scroll">
        <div className="flex flex-col absolute left-2/4 bottom-2">
          <BsMouse size={25} />
          <IoIosArrowRoundDown size={25} />
        </div>
      </div>
    </div>
  )
}