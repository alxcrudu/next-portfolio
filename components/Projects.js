import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { AiFillGithub } from "react-icons/ai";
import reactProj from "/assets/react.png";
import shortlyProj from "/assets/shortly.jpg";
import blogrProj from "/assets/blogr.jpg";

export default function Projects() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container | mt-28" id="projects__section">
        <div className="projects-container">
            <div className="projects-left">
                <p className="text | hidden md:block font-light">{t.proj2}</p>
                <div className="hidden md:flex w-full justify-start mt-24">
                    <Link href="https://github.com/alxcrudu" passHref={true} rel="noopener noreferrer" target="_blank">
                        <h2 className="projects-github text clickable | text-xl flex cursor-pointer">{t.allproj}<span className="mt-2"><AiFillGithub size={25}/></span></h2>
                    </Link>
                </div>
            </div>
            <div className="projects-right | md:ml-2">
                <div className="flex items-center">
                    <p className="text | md:hidden font-light mr-6">{t.proj2}</p>
                    <div className="division-line | w-full opacity-40 md:mt-3"></div>
                </div>
                <div className="projects-selector | mt-24">
                    <div className="project">
                        <Image src={shortlyProj} alt="Shortly-project"/>
                        <h2 className="text-2xl mt-6">Shortly</h2>
                        <p className="text mt-2 font-light">{t.desc2}</p>
                    </div>
                    <div className="project">
                        <Image src={blogrProj} alt="Blogr-project"/>
                        <h2 className="text-2xl mt-6">Blogr</h2>
                        <p className="text mt-2 font-light">{t.desc3}</p>
                    </div>
                    <div className="project">
                        <Image src={reactProj} alt="React-todo-project"/>
                        <h2 className="text-2xl mt-6">React to-do app</h2>
                        <p className="text mt-2 font-light">{t.desc1}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};