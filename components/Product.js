import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <Link href={`/products/${id}`} passHref>
        <Container>
          <Image src={image} alt={name} />
          <Linked>
            <FaSearch />
          </Linked>
        </Container>
      </Link>
      <footer>
        <h5>{name}</h5>
        <p>₹{price}</p>
      </footer>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 20px;
  transition: ease-in-out 0.3s all;
  height: 235px;
`;
const Wrapper = styled.article`
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    padding: 0 0.7rem;
  }
  footer h5,
  footer p {
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 0;
    cursor: pointer;
  }
  footer h5:hover {
    text-decoration: underline;
  }

  footer p {
    color: hsl(22, 31%, 52%);
    letter-spacing: 0.1rem;
  }
`;

const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 25px;
  transition: ease-in-out 0.3s all;
  cursor: pointer;

  -webkit-box-shadow: 2px 4px 14px -8px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 2px 4px 14px -8px rgba(0, 0, 0, 0.65);
  box-shadow: 2px 4px 14px -8px rgba(0, 0, 0, 0.65);

  &:hover img {
    opacity: 0.5;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

const Linked = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: hsl(22, 31%, 52%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: ease-in-out 0.3s all;
  opacity: 0;

  svg {
    font-size: 1.25rem;
    color: #fff;
  }
  ${Container}:hover & {
    opacity: 1;
  }
`;
export default Product;
