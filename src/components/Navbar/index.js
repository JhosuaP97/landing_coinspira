import React, { useState } from "react";
import { Nav, NavLink, Logo, NavMenu, MobileButton } from "./styles";
import { Menu } from "Icons/Menu";
import { Cancel } from "Icons/Cancel";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <Nav>
        <NavLink to="/">
          <Logo>Logo</Logo>
        </NavLink>
        <NavMenu showMenu={showMenu}>
          <NavLink to="/aboutus" onClick={handleMenu}>
            ¿Quiénes somos?
          </NavLink>
          <NavLink to="/bootcamps" onClick={handleMenu}>
            Bootcamps
          </NavLink>
          <NavLink to="/histories" onClick={handleMenu}>
            Historias
          </NavLink>
          <NavLink to="/financing" onClick={handleMenu}>
            Financiación
          </NavLink>
        </NavMenu>
        <MobileButton onClick={handleMenu}>
          {showMenu ? <Cancel /> : <Menu />}
        </MobileButton>
      </Nav>
    </header>
  );
};

export default Navbar;
