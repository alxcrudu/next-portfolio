import { useRef, useEffect, useContext, useCallback, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { MenuContext } from "../context/MenuProvider";
import { LanguageContext } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { TbMoon, TbSun } from "react-icons/tb";
import { HiOutlineDownload } from "react-icons/hi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import Logo from "../components/Logo";

export default function Nav() {
  const [sunShow, setSunShow] = useState(false);
  const [moonShow, setMoonShow] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const { menuIsOpen, toggleMenu } = useContext(MenuContext);
  const { t, locale, setLanguage } = useContext(LanguageContext);

  const myNav = useRef();

  useEffect(() => {
    if(theme === "dark") {
      setSunShow(true);
      setMoonShow(false);
    } else {
      setSunShow(false);
      setMoonShow(true);
    }
  }, []); // eslint-disable-line
  
  function toggleTheme() {
    setSunShow(!sunShow);
    setMoonShow(!moonShow);
    changeTheme();
  };

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
  };
  
  const onScroll = useCallback(() => {
    const { scrollY, innerWidth } = window;
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
    <motion.div 
      ref={myNav} 
      className="container nav-bg | fixed inset-x-0 z-20"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.2, duration: 1}}
    >
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
            <div className="theme-div text | hidden cursor-pointer md:flex items-center">
              <label className="custom-selector | mr-8">
                <select 
                  onChange={setLanguage}
                  defaultValue={locale}
                  className="clickable"
                >
                  <option value="en">EN</option>
                  <option value="ro">RO</option>
                </select>
              </label>
              <div className="clickable toggle-icons" onClick={toggleTheme}>
                <AnimatePresence>
                  {sunShow && 
                    <motion.div 
                      className="icon-toggle"
                      initial={{ x: -50, y: 25, rotate: -100, opacity: 0 }}
                      animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                      exit={{ x: 50, y: 25, rotate: 100, opacity: 0 }}
                      transition={{type: "spring", duration: .8}}
                    >
                      <TbSun size={25} />
                    </motion.div>
                  }
                </AnimatePresence>
                <AnimatePresence>
                  {moonShow && 
                    <motion.div
                      className="icon-toggle"
                      initial={{ x: -50, y: 25, rotate: -100, opacity: 0 }}
                      animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                      exit={{ x: 50, y: 25, rotate: 100, opacity: 0 }}
                      transition={{type: "spring", duration: .8}}
                    >
                      <TbMoon size={25} />
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            </div>
            <button 
              onClick={saveFile}
              className="button clickable text | rounded-full px-4 py-2 hidden md:flex justify-center items-center"
            >
              <span className="leading-none">CV</span><HiOutlineDownload size={15} />
            </button>
            <button className="text clickable md:hidden" onClick={toggleMenu}>
              {menuIsOpen === false 
                ? <CgMenuMotion size={35} /> 
                : <CgClose size={30} />
              }
            </button>
        </div>
      </div>
    </motion.div>
  );
}
