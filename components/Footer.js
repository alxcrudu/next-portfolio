import Logo from "./Logo";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container | mt-32">

      <div className="pb-12">

      <div className="projects-container flex items-center">

        <div className="projects-left">
          <a href="#introduction__section">
            <Logo />
          </a>
        </div>

        <div className="projects-right flex justify-between">

            <p className="text">©{year} Crudu Alexandru.</p>

            <div className="flex items-center">
            <Link className="flex text clickable" href="mailto:alexcruducode@gmail.com">
                <AiOutlineMail size={20} />
                <p className="ml-2">alexcruducode@gmail.com</p>
              </Link>

              <div className="social-links | flex gap-2 text ml-6">
                <Link className="clickable" href="https://github.com/alxcrudu" passHref={true}>
                  <AiFillGithub size={25} />
                </Link>
                <Link className="clickable" href="https://www.linkedin.com/in/crudualex/" passHref={true}>
                  <AiFillLinkedin size={25} />
                </Link>
              </div>
              </div>
        </div>

      </div>
      </div>
    </div>
  );
}
