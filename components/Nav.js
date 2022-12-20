import { useContext } from "react";
import Image from "next/image";
import logoDark from "/assets/logo-dark.png";
import logoLight from "/assets/logo-light.png";
import {TbMoon, TbSun} from "react-icons/tb"
import { ThemeContext } from "../context/ThemeProvider";

export default function Nav() {
    const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <div className="container">
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
            <ul className="nav__links | flex gap-10 font-normal text-lg">
                <li>Introduction</li>
                <li>Projects</li>
                <li>About</li>
            </ul>
            <div className="theme-div | cursor-pointer grid place-items-center">
                {theme === "dark" 
                ? <TbSun size={30} onClick={changeTheme}/>
                : <TbMoon size={25} onClick={changeTheme}/>
                }
            </div>

        </div>
      </div>
    </div>
  );
}
