import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink, Logo, NavMenu, MobileButton } from "./styles";
import { Menu } from "Icons/Menu";
import { Cancel } from "Icons/Cancel";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 992;

  const handleMenu = () => {
    isMobile && setShowMenu(!showMenu);
  };
  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <NavMenu showMenu={showMenu}>
          <NavItem>
            <NavLink to="/" exact onClick={handleMenu} activeClassName="active">
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/aboutus"
              onClick={handleMenu}
              activeClassName="active"
            >
              ¿Quiénes somos?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/bootcamps"
              onClick={handleMenu}
              activeClassName="active"
            >
              Bootcamps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/histories"
              onClick={handleMenu}
              activeClassName="active"
            >
              Historias
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/financing"
              onClick={handleMenu}
              activeClassName="active"
            >
              Financiación
            </NavLink>
          </NavItem>
        </NavMenu>
        <MobileButton onClick={handleMenu}>
          {showMenu ? <Cancel /> : <Menu />}
        </MobileButton>
      </Nav>
    </>
  );
};

export default Navbar;
