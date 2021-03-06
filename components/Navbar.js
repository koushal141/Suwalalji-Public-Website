import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const handleScroll = () => {
    if (window.scrollY > 15) setScrolled(true);
    else setScrolled(false);
  };

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Nav scrolled={scrolled}>
      <Container path={router.pathname} scrolled={scrolled}>
        <Link href="/">
          <Logo>Suwalalji</Logo>
        </Link>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <Link href="/#About" passHref>
              <MenuLink>About</MenuLink>
            </Link>
            <Link href="/products" passHref>
              <MenuLink>Products</MenuLink>
            </Link>

            {/* <MenuLink href="">Login</MenuLink> */}
            {/* <Button>Sign Up</Button> */}
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Logo = styled.h2`
  font-family: Suwalalji;
  color: #000000;
  color: #2b1f84;
  font-size: 1.8rem;
  padding: 0.2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  background: #7c5dfa;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #8f7ae4;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #8f7ae4;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  padding: 0rem 2rem;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(p) =>
      p.path == "/" ? (p.scrolled ? "#000000" : "#fff") : "#000000"};

    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background: #e7e9fc;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  background-color: ${(p) => (p.scrolled ? "#FFF" : "transparent")};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.2s ease-in-out;

  box-shadow: ${(p) =>
    p.scrolled ? "0px 6px 24px rgba(186, 186, 186, 0.2)" : "none"};
  /* box-shadow: 0px 6px 24px rgba(186, 186, 186, 0.2); */
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: all 0.3s ease-in;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7c5dfa;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
