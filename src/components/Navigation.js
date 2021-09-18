import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";

const Navbar = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#010606" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #7b0d1e;
    transition: 0.2s ease-in-out;
  }
`;

const Nav = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navbar scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="#home">Whensday</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks href="#home" activeClass="active">
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks href="#about" activeClass="active">
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks href="#discography" activeClass="active">
                  Discography
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks href="#contact" activeClass="active">
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Navbar>
      </IconContext.Provider>
    </>
  );
};

export default Nav;
