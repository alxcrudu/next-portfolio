import Logo from "./Logo";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="pb-12">
        <div className="flex justify-between items-center font-light">
          <div className="copy | flex items-center">
            <Logo />
            <p className="ml-6">©{year} Crudu Alexandru.</p>
          </div>

          <div className="flex items-center">
            <div className="mr-12 flex">
              <AiOutlineMail size={20} />
              <p className="ml-2">alexcruducode@gmail.com</p>
            </div>

            <div className="social-links | flex gap-2">
              <AiFillGithub size={25} />
              <AiFillLinkedin size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
