import Logo from "./Logo";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container | mt-32">
      <div className="pb-12">
        <div className="flex justify-between items-center font-light">
          <div className="copy | flex items-center">
            <a href="#introduction__section">
              <Logo />
            </a>
            <p className="ml-6 text">©{year} Crudu Alexandru.</p>
          </div>

          <div className="flex items-center text">
            <div className="mr-12">
              <Link className="flex clickable" href="mailto:alexcruducode@gmail.com">
                <AiOutlineMail size={20} />
                <p className="ml-2">alexcruducode@gmail.com</p>
              </Link>
            </div>

            <div className="social-links | flex gap-2 text">
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
  );
}
