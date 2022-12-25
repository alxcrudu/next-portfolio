import React, { useState } from "react";

export const MenuContext = React.createContext();

export function MenuProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  }

  function closeMenu(){
    setMenuIsOpen(false)
  }

  return (
    <MenuContext.Provider value={{ menuIsOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
