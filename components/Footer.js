import React from "react";
import styled from "styled-components";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Signature from "./Signature";

function Footer() {
  return (
    <div style={{ background: "#ea9032" }}>
      <Container>
        <Partition>
          <Heading>About</Heading>
          <Link>About Us</Link>
        </Partition>
        <Partition>
          <Heading>Contact</Heading>
          <Link href="mailto:contact@suwalalji.com">
            <FiMail style={{ marginRight: "5px" }} />
            contact@suwalalji.com
          </Link>
          <Link href="tel:06712512667">
            <FiPhone style={{ marginRight: "5px" }} />
            0671-2512667
          </Link>
        </Partition>
        <Partition>
          <Heading>Address</Heading>
          <Link href="https://goo.gl/maps/wGJ3DfnXw1TLJBpv5">
            <MdLocationOn style={{ marginRight: "5px" }} />
            Suwalalji, Buxi Bazar,
            <br />
            Cuttack-753001, OD
          </Link>
        </Partition>
      </Container>
      <Signature />
    </div>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  padding: 0rem 2rem;
  background: #ea9032;
  margin: 0 auto;
  padding: 1.5rem 0;
  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    padding-top: 0.7rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Partition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20vw;
`;

const Heading = styled.h4`
  color: #fff;
  margin: 0;
`;

const Link = styled.a`
  display: flex;
  align-items: flex-start;
`;
