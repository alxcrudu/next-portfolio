import Link from "next/link"
import Image from "next/image"
import {AiFillGithub} from "react-icons/ai"
import reactProj from "/assets/react-to-do-app.png"
import shortlyProj from "/assets/shortly.png"
import blogrProj from "/assets/blogr.png"

export default function Projects() {
  return (
    <div className="container | mt-24" id="projects__section">
        <div className="projects-container">
            <div className="projects-left">
                <p className="text font-light">Projects</p>
                <div className="flex w-full justify-start mt-24">
                    <Link href="https://github.com/alxcrudu" passHref={true}>
                        <h2 className="projects-github text clickable | text-xl flex cursor-pointer">All my projects<span className="mt-2"><AiFillGithub size={25}/></span></h2>
                    </Link>
                </div>
            </div>
            <div className="projects-right | ml-2">
                <div className="division-line | w-full opacity-40 mt-2"></div>
                <div className="flex flex-wrap gap-12 mt-16">
                    <div className="project">
                        <Image src={reactProj} alt="Shortly-project"/>
                        <h2 className="text-2xl mt-6">React to-do app</h2>
                        <p className="text mt-2 font-light">Made with create-react-app, hooks, state & storing items in local storage.</p>
                    </div>
                    <div className="project">
                        <Image src={shortlyProj} alt="Shortly-project"/>
                        <h2 className="text-2xl mt-6">Shortly</h2>
                        <p className="text mt-2 font-light">Ui+API challenge from frontendmentor.io - SCSS, Javascript, validator.Js, fetchAPI</p>
                    </div>
                    <div className="project">
                        <Image src={blogrProj} alt="Blogr-project"/>
                        <h2 className="text-2xl mt-6">Blogr</h2>
                        <p className="text mt-2 font-light">UI challenge from frontendmentor.io - Used HTML, SCSS, Bootstrap, some Javascript</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}