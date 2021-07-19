import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Colors, breakpoint } from "styles/GlobalStyles";

export const Nav = styled.nav`
  background: ${Colors.gray};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: oswald;
  position: relative;
`;

export const Logo = styled.div`
  margin-left: 10px;
  font-family: oswald;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  ${breakpoint.deviceMax992} {
    position: absolute;
    width: 100%;
    height: 98vh;
    top: 80px;
    left: ${({ showMenu }) => (showMenu ? 0 : "-120%")};
    flex-direction: column;
    transition: 0.3s all ease-in;
    background-color: ${Colors.gray};
    z-index: 20;
  }
`;

export const NavItem = styled.li`
  padding: 1rem 2rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.lightGray};
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  font-family: Oswald, sans-serif;
  &.active {
    color: ${Colors.black};
  }

  ${breakpoint.deviceMax992} {
    padding: 25px;
  }
`;

export const HamburgerIcon = styled.span`
  display: none;
  width: 20px;
  height: 4px;
  background: #000;
  position: relative;
  :before,
  :after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background: #000;
  }
  &::before {
    transform: translateY(-8px);
  }
  &::after {
    transform: translateY(8px);
  }
  ${breakpoint.deviceMax992} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 0.8rem);
  }
`;

export const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  z-index: 20;
  ${breakpoint.deviceMax992} {
    display: block;
    margin-right: 30px;
    transition: all 0.3s;
  }
`;
