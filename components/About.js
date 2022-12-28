import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import MusicPlayer from "./MusicPlayer";
import {SiAbletonlive} from "react-icons/si"
import Link from "next/link";
import Image from "next/image";
import skill from "/public/full2.png";
import {SiNextdotjs, SiTailwindcss, SiFramer, SiFirebase, SiDocker} from "react-icons/si";
// import MuiPlayer from "../components/MuiPlayer";

export default function About() {
  const {t} = useContext(LanguageContext);
  return (
    <div className="container | mt-28" id="about__section">
      <div className="projects-container">
        <div className="projects-left">
          <p className="text font-light">{t.abt}</p>
        </div>
        <div className="projects-right | ml-2">
          <div className="division-line | w-full opacity-40 mt-2"></div>

          <div className="even-columns | mt-24">
            <div className="about-content">
              <h2 className="accent-text mb-6 text-xs">{t.who}</h2>
              <p className="text font-light">
                {t.d1}
                <br /><br />
                {t.d2}
                <br /><br />
                {t.d4}<span className="font-normal">{t.d4s}</span>
              </p>
              <p className="text pt-12 font-light">{t.d5}</p>
                <div className="introduction-icons | flex gap-4 mt-2">
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
                </div>
            </div>

            <div className="skill-illustration | flex justify-end items-start">
              <Image src={skill} alt="Skills illustration" />
            </div>

          </div>
          <div className="even-columns | mt-24">

            <div className="player-container">
              <MusicPlayer />
              {/* <MuiPlayer /> */}
            </div>

            <div className="flex flex-col md:text-right md:items-end mt-12 md:mt-0">
              <h2 className="accent-text mb-6 text-xs">{t.other}</h2>
              <p className="text font-light">
                {t.e1}<br /><br />
                {t.e2}<br /><br />
              </p>
              <div className="flex text items-center">
                <p>{t.e3}</p> 
                <Link className="clickable flex items-center" href="https://www.ableton.com/en/live/" passHref={true}>
                  <p className="ml-2">{t.e3s}</p>
                  <SiAbletonlive className="ml-2" size={30}/>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
