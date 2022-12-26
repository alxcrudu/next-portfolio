import { useRef, useEffect, useContext, useCallback } from "react";
import { LanguageContext } from "../context/LanguageContext";
import {TbMoon, TbSun} from "react-icons/tb"
import {HiOutlineDownload} from "react-icons/hi"
import {CgMenuMotion, CgClose} from "react-icons/cg"
import { ThemeContext } from "../context/ThemeProvider";
import { MenuContext } from "../context/MenuProvider";
import Logo from "./Logo";

export default function Nav() {
    const {theme, changeTheme} = useContext(ThemeContext);
    const {menuIsOpen, toggleMenu} = useContext(MenuContext);
    const {t, setLanguage} = useContext(LanguageContext);

    const myNav = useRef()

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
  
  const onScroll = useCallback(() => {
    const { scrollY, innerWidth} = window;
    if(scrollY > 50 && innerWidth > 768) {
      myNav.current.classList.add("nav-bg-visible");
    } else {
      myNav.current.classList.remove("nav-bg-visible");
    }
}, []);

useEffect(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  // remove event on unmount to prevent a memory leak with the cleanup
  return () => {
     window.removeEventListener("scroll", onScroll, { passive: true });
  }
}, [onScroll]);

  return (
      <div ref={myNav} className="container nav-bg | fixed inset-x-0 z-20">
        <div className="nav | flex justify-between items-center pt-6 pb-4">
          <a href="#introduction__section">
            <Logo />
          </a>
          <div className="right | flex items-center gap-10">
              <ul className="nav__links | hidden gap-10 font-light md:flex">
                  <li className="text clickable"><a href="#introduction__section">{t.intro}</a></li>
                  <li className="text clickable"><a href="#projects__section">{t.proj}</a></li>
                  <li className="text clickable"><a href="#about__section">{t.about}</a></li>
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
