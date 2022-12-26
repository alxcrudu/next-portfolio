import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import MusicPlayer from "./MusicPlayer";
import {SiAbletonlive} from "react-icons/si"
import Link from "next/link";
import Image from "next/image";
import skillDark from "/public/skill-dark.png";
import skillLight from "/public/skill-light.png";
// import MuiPlayer from "../components/MuiPlayer";

export default function About() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="container | mt-24" id="about__section">
      <div className="projects-container">
        <div className="projects-left">
          <p className="text font-light">About</p>
        </div>
        <div className="projects-right | ml-2">
          <div className="division-line | w-full opacity-40 mt-2"></div>

          <div className="even-columns | mt-16">
            <div className="about-content">
              <h2 className="accent-text mb-6 text-xs">WHO AM I</h2>
              <p className="text font-light">
                My name is Crudu Alexandru. I am 23 years old, I live in
                Romania, and I`m a full-stack developer.
                <br /><br />
                I enjoy the constant change in the technologies used in
                the area and love diving into new frameworks and technologies.
                <br /><br />
                Spending time customizing, improving and tinkering with my work
                environment and tools is something I enjoy a lot, as it is
                something I use for many hours daily.
                <br /><br />
                I`m experienced with: <span className="font-normal">Node.js(express), React, Next, Firebase, Tailwind, Framer Motion, SCSS, Docker, Git, Jira and more.</span>
              </p>
            </div>

            
              {/* <Image className="imac" src={imac} alt="Imac illustration" /> */}
              <div className="skill-illustration | flex justify-end items-start">
                {theme === "dark" 
                  ? <Image src={skillDark} alt="Skills illustration" />
                  : <Image src={skillLight} alt="Skills illustration" />
                }
              </div>
                {/* <Image className="imac" src={imac} alt="Imac illustration" /> */}
            
          </div>
          <div className="even-columns | mt-24">
            <div className="player-container">
              <MusicPlayer />
              {/* <MuiPlayer /> */}
            </div>

            <div className="flex flex-col md:text-right md:items-end mt-12 md:mt-0">
              <h2 className="accent-text mb-6 text-xs">MY OTHER BIG PASSION</h2>
              <p className="text font-light">
                I love making electronic music. I have a deep connection to music and love expressing myself through it. When I am not coding or spending time with friends and family, you will find me making music.<br /><br />
                In the music player here you will find just a couple of my songs which I plan on publishing soon.<br /><br />
              </p>
              <div className="flex text items-center">
                <p>I produce in</p> 
                <Link className="clickable flex items-center" href="https://www.ableton.com/en/live/" passHref={true}>
                  <p className="ml-2">Ableton Live 11</p>
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
