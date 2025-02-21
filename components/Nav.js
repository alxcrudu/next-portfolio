import { useRef, useEffect, useContext, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../context/ThemeProvider";
import { MenuContext } from "../context/MenuProvider";
import { motion, AnimatePresence } from "framer-motion";
import { TbMoon, TbSun } from "react-icons/tb";
import { HiOutlineDownload } from "react-icons/hi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import Logo from "../components/Logo";
import ButtonAnimation from "./ButtonAnimation";
import LangSwitcher from "./LangSwitcher";

export default function Nav() {
  const [sunShow, setSunShow] = useState(false);
  const [moonShow, setMoonShow] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const { menuIsOpen, toggleMenu } = useContext(MenuContext);
  const { locale } = useRouter();

  const myNav = useRef();

  useEffect(() => {
    if (theme === "dark") {
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
  }

  const saveFile = () => {
    if (locale == "en") {
      fetch("CV-2025.pdf").then(
        (res) => {
          res.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download =
              "CV-2025.pdf";
            alink.click();
          });
        }
      );
    } else {
      fetch("CV-2025.pdf").then((res) => {
        res.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "CV-2025.pdf";
          alink.click();
        });
      });
    }
  };

  const onScroll = useCallback(() => {
    const { scrollY, innerWidth } = window;
    if (scrollY > 50 && innerWidth > 768) {
      myNav.current.classList.add("nav-bg-visible");
    } else {
      myNav.current.classList.remove("nav-bg-visible");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  return (
    <motion.div
      ref={myNav}
      className="container nav-bg | fixed inset-x-0 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <div className="nav | flex justify-between items-center pt-6 pb-4">
        <a href="#introduction__section">
          <Logo />
        </a>
        <div className="right | flex items-center md:gap-10">
          <div className="theme-div text | hidden cursor-pointer md:flex items-center">
            <label className="custom-selector | mr-8">
              <LangSwitcher />
            </label>
            <div className="clickable toggle-icons" onClick={toggleTheme}>
              <AnimatePresence>
                {sunShow && (
                  <motion.div
                    className="icon-toggle"
                    initial={{ x: -50, y: 25, rotate: -100, opacity: 0 }}
                    animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    exit={{ x: 50, y: 25, rotate: 100, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    <TbSun size={25} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {moonShow && (
                  <motion.div
                    className="icon-toggle"
                    initial={{ x: -50, y: 25, rotate: -100, opacity: 0 }}
                    animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    exit={{ x: 50, y: 25, rotate: 100, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    <TbMoon size={25} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={"hidden md:flex"}>
            <ButtonAnimation
              onClick={saveFile}
              backgroundColor={theme === "dark" ? "#7c7c7c" : "#171717"}
            >
              <p className="leading-none">CV</p>
              <HiOutlineDownload className="relative z-[2]" size={15} />
            </ButtonAnimation>
          </div>
          <button className="text clickable md:hidden" onClick={toggleMenu}>
            {menuIsOpen === false ? (
              <CgMenuMotion size={35} />
            ) : (
              <CgClose size={30} />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
