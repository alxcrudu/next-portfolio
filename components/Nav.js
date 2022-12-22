import { useContext } from "react";
import Image from "next/image";
import logoDark from "/assets/logo-dark.png";
import logoLight from "/assets/logo-light.png";
import {TbMoon, TbSun} from "react-icons/tb"
import {HiOutlineDownload} from "react-icons/hi"
import { ThemeContext } from "../context/ThemeProvider";
import Link from "next/link";

export default function Nav() {
    const {theme, changeTheme} = useContext(ThemeContext);

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
    <div className="container | fixed">
      <div className="nav | flex justify-between items-center pt-6">
        <div className="logo">
            {theme === "dark"
                ? <Image 
                src={logoDark} 
                width={40} 
                height={40} 
                alt="logo" 
                />
                : <Image 
                src={logoLight} 
                width={40} 
                height={40} 
                alt="logo" 
                />
            }
        </div>
        <div className="right | flex items-center gap-10">
            <ul className="nav__links | flex gap-10 font-normal">
                <li><Link href="#">Introduction</Link></li>
                <li><Link href="#">Projects</Link></li>
                <li><Link href="#">About</Link></li>
            </ul>
            <div className="theme-div | cursor-pointer grid place-items-center">
                {theme === "dark" 
                ? <TbSun size={30} onClick={changeTheme}/>
                : <TbMoon size={25} onClick={changeTheme}/>
                }
            </div>
            <button 
              onClick={saveFile}
              className="button | rounded-full px-4 py-2 flex justify-center items-center"
            >
              <span className="leading-none">CV</span><HiOutlineDownload size={20}/>
            </button>
        </div>
      </div>
    </div>
  );
}
