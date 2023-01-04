import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.div 
      className="container | mt-48"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 1, delay: .2}}
    >
      <div className="pb-24">
      <div className="projects-container flex items-center">
        <div className="projects-left">
          <a className="hidden md:block" href="#introduction__section">
            <Logo />
          </a>
        </div>
        <div className="projects-right flex flex-col justify-center md:justify-between md:flex-row">
          <div className="flex items-center justify-center mb-12 md:mb-0">
            <a className="md:hidden mr-3 w-6" href="#introduction__section">
              <Logo />
            </a>
            <p className="text copyright-text">©{year} Crudu Alexandru.</p>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row">
          <Link className="flex text clickable mb-4 md:mb-0" href="mailto:alexcruducode@gmail.com">
            <AiOutlineMail size={20} />
            <p className="ml-2">alexcruducode@gmail.com</p>
          </Link>
          <div className="social-links | flex gap-2 text md:ml-6">
            <Link className="clickable" href="https://github.com/alxcrudu" passHref={true} rel="noopener noreferrer" target="_blank">
              <AiFillGithub size={25} />
            </Link>
            <Link className="clickable" href="https://www.linkedin.com/in/crudualex/" passHref={true} rel="noopener noreferrer" target="_blank">
              <AiFillLinkedin size={25} />
            </Link>
          </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  )
};
