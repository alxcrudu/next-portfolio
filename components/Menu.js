import { TbMoon, TbSun } from "react-icons/tb";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeProvider";
import { MenuContext } from "../context/MenuProvider";
import { HiOutlineDownload } from "react-icons/hi";
import { useContext } from "react";

export default function Menu() {
    const {theme, changeTheme} = useContext(ThemeContext);
    const {t, locale, setLanguage} = useContext(LanguageContext);
    const {closeMenu} = useContext(MenuContext);
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
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 768){
            closeMenu()
        }
    })

  return (
    <>
      <div className="container">
        <div className="side-menu fixed h-full z-10 w-1/2 right-0 flex flex-col items-center justify-between text-center md:hidden">
          <ul className="nav__links | font-light mt-24">
            <li onClick={closeMenu} className="text-menu clickable mb-6">
              <a href="#introduction__section">Introduction</a>
            </li>
            <li onClick={closeMenu} className="text-menu clickable mb-6">
              <a href="#projects__section">Projects</a>
            </li>
            <li onClick={closeMenu} className="text-menu clickable mb-6">
              <a href="#about__section">About</a>
            </li>
          </ul>
          <div className="mb-12">
          <div className="theme-div text-menu | cursor-pointer flex flex-col items-center mb-6">
            <label className="custom-selector | mb-6 clickable">
              <select 
                onChange={setLanguage}
                defaultValue={locale}
                >
                <option value="en">EN</option>
                <option value="ro">RO</option>
              </select>
            </label>
            <div className="clickable">
              {theme === "dark" ? (
                <TbSun size={30} onClick={changeTheme} />
              ) : (
                <TbMoon size={25} onClick={changeTheme} />
              )}
            </div>
          </div>
          <button
            onClick={saveFile}
            className="button-menu clickable text-menu | rounded-full px-4 py-2 flex justify-center items-center"
          >
            <span className="leading-none">Download my CV</span>
            <HiOutlineDownload size={15} />
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
