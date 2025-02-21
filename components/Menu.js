import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../context/ThemeProvider";
import { MenuContext } from "../context/MenuProvider";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { TbMoon, TbSun } from "react-icons/tb";
import { useTranslation } from "next-i18next";
import LangSwitcher from "./LangSwitcher";

export default function Menu() {
  const [sunShow, setSunShow] = useState(false);
  const [moonShow, setMoonShow] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const { closeMenu, menuIsOpen } = useContext(MenuContext);
  const { locale } = useRouter();

  const { t } = useTranslation("common");

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }, []); // eslint-disable-line

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <motion.div
          className="side-menu fixed h-full z-10 w-1/2 right-0 flex flex-col items-center justify-between text-center md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween" }}
        >
          <aside />
          <div className="mb-12">
            <div className="theme-div text-menu | cursor-pointer flex flex-col items-center mb-6">
              <LangSwitcher />
              <div
                className="clickable toggle-icons mt-8"
                onClick={toggleTheme}
              >
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
            <button
              onClick={saveFile}
              className="button-menu clickable text-menu | rounded-full px-4 py-2 flex justify-center items-center"
            >
              <span className="leading-none">{t("download")}</span>
              <HiOutlineDownload size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
