import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { images } from "../assets";
import { useTranslation } from "next-i18next";

export default function Projects() {
  const { t } = useTranslation('common');

  const projects = [
    {
        title: "MERN Invoice app",
        descr: t("desc6"),
        img: images.invoice,
        bg: "ova",
        github: "https://github.com/alxcrudu/mern-invoice-app",
        live: "https://fine-erin-gosling-boot.cyclic.app/",
        alt: "To-do project image",
    },
    {
        title: "MERN CRUD Kanban",
        descr: t("desc5"),
        img: images.kanban,
        bg: "ovb",
        github: "https://github.com/alxcrudu/mern-crud-kanban",
        live: "https://sore-erin-goat-wig.cyclic.app/",
        alt: "To-do project image",
    },
    {
        title: "T3 To-do app",
        descr: t("desc1"),
        img: images.todo,
        bg: "ovc",
        github: "https://github.com/alxcrudu/to-do-t3",
        live: "https://to-do-t3.vercel.app/",
        alt: "To-do project image",
    }
  ];

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
                >{t("proj2")}</motion.p>
                <div className="hidden md:flex w-full justify-start mt-24">
                    <Link href="https://github.com/alxcrudu" passHref={true} rel="noopener noreferrer" target="_blank">
                        <motion.h2 
                            className="projects-github text clickable | text-xl flex cursor-pointer"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true, amount: .3}}
                            transition={{duration: 1, delay: 1.1}}
                        >
                            {t("allproj")}
                            <span className="mt-2">
                                <AiFillGithub size={25}/>
                            </span>
                        </motion.h2>
                    </Link>
                </div>
            </div>
            <div className="projects-right | md:ml-2">
                <div className="flex items-center">
                    <p className="text | md:hidden font-light mr-6">{t("proj2")}</p>
                    <motion.div 
                        className="division-line | w-full opacity-40 md:mt-3"
                        initial={{opacity: 0}}
                        whileInView={{opacity: .4}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 2}}
                    ></motion.div>
                </div>
                <div className="projects-selector | mt-24">
                    {projects.map((project, i) => (
                        <div className="project" key={project + "-" + i}>
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
                                            <Link href={projects[i].github} passHref={true} rel="noopener noreferrer" target="_blank">
                                                <IconButton className="overlay-btn">
                                                    <AiFillGithub size={25}/>
                                                </IconButton>
                                            </Link>
                                        </div>
                                        <div className="button-bg rounded-full">
                                            <Link href={projects[i].live} passHref={true} rel="noopener noreferrer" target="_blank">
                                                <IconButton className="overlay-btn">
                                                    <BsGlobe size={20}/>
                                                </IconButton>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className={`imgoverlay ${projects[i].bg}`}></div>
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{delay: 1.6, duration: .8}}
                                    viewport={{once: true}}
                                >
                                    <Image src={projects[i].img} alt={projects[i].alt} />
                                </motion.div>
                            </motion.div>
                            <motion.h2 
                                className="text-2xl mt-6"
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: .5}}
                                transition={{duration: 1}}
                            >
                                {projects[i].title}
                            </motion.h2>
                            <motion.p 
                                className="text mt-2 font-light"
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true, amount: .5}}
                                transition={{duration: 1, delay: .5}}
                            >
                                {projects[i].descr}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
};