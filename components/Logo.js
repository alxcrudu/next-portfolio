import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeProvider";
import logoDark from "/assets/logo-dark.png";
import logoLight from "/assets/logo-light.png";

export default function Logo() {
    const {theme} = useContext(ThemeContext);

  return (
    <div className="logo">
      {theme === "dark" ? (
        <Image src={logoDark} width={40} height={40} alt="logo" />
      ) : (
        <Image src={logoLight} width={40} height={40} alt="logo" />
      )}
    </div>
  );
}
