import { useContext } from "react";
import {TbMoon, TbSun} from "react-icons/tb"
import {HiOutlineDownload} from "react-icons/hi"
import {CgMenuMotion, CgClose} from "react-icons/cg"
import { ThemeContext } from "../context/ThemeProvider";
import { MenuContext } from "../context/MenuProvider";
import Logo from "./Logo";

export default function Nav() {
    const {theme, changeTheme} = useContext(ThemeContext);
    const {menuIsOpen, toggleMenu} = useContext(MenuContext)

    const saveFile = () => {
      fetch('CV.pdf').then(res => {
          res.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'CV.pdf';
              alink.click();
          })
      })
  }

  return (
      <div className="container nav-bg | fixed z-20">
        <div className="nav | flex justify-between items-center pt-6 pb-4">
          <Logo />
          <div className="right | flex items-center gap-10">
              <ul className="nav__links | hidden gap-10 font-light md:flex">
                  <li className="text clickable"><a href="#introduction__section">Introduction</a></li>
                  <li className="text clickable"><a href="#projects__section">Projects</a></li>
                  <li className="text clickable"><a href="#skills">Skills</a></li>
                  <li className="text clickable"><a href="#about">About</a></li>
              </ul>
              <div className="theme-div clickable text | hidden cursor-pointer md:grid place-items-center">
                  {theme === "dark" 
                  ? <TbSun size={30} onClick={changeTheme}/>
                  : <TbMoon size={25} onClick={changeTheme}/>
                  }
              </div>
              <button 
                onClick={saveFile}
                className="button clickable text | rounded-full px-4 py-2 hidden md:flex justify-center items-center"
              >
                <span className="leading-none">CV</span><HiOutlineDownload size={15}/>
              </button>
              <button className="text clickable md:hidden" onClick={toggleMenu}>
                {menuIsOpen === false ? <CgMenuMotion size={35} /> : <CgClose size={30} />}
              </button>
          </div>
        </div>
      </div>
  );
}
