import React from "react";
import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";

const Breadcrumb = ({ title }) => (
  <Container>
    <ul>
      <li>
        <Link href="/" passHref>
          <a>
            <BiHomeAlt />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/products" passHref>
          <a>Products</a>
        </Link>
      </li>
      {title && <li>{title}</li>}
    </ul>
  </Container>
);

export default Breadcrumb;

const Container = styled.section`
  margin: 0.5rem 2rem;
  padding: 20px 0 20px 0;
  display: flex;
  align-items: center;
  //   @include breakpoint(phone) {
  //     padding: 29px 0 35px 0;
  //   }

  ul {
    display: flex;
    list-style-type: none;
    li {
      font-size: 13px;
      color: #b2b2b2;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 10px;
        &:before {
          content: "/ ";
          margin-right: 3px;
        }
      }
    }
  }
`;
