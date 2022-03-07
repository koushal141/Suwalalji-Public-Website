import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Product = ({ image, name, price, id }) => {
  return (
    <Link href={`/products/${id}`} passHref>
      <Wrapper>
        <Image src={image} alt={name} />
        <Dets>
          <Price>₹{price}</Price>
          <Name>{name}</Name>
          <GoButton>
            <FaArrowRight />
          </GoButton>
        </Dets>
      </Wrapper>
    </Link>
  );
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: ease-in-out 0.3s all;
`;
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  position: relative;
  background: #fff;
  transition: ease-in-out 0.3s all;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 16px 32px -4px rgba(145, 158, 171, 0.24);
  border-radius: 16px;
  padding-bottom: 2rem;

  &:hover {
    transform: scale(1.05);
  }
`;

const Dets = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const GoButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
  background: #f46036;
  position: absolute;
  right: -0.8rem;
  bottom: 1.15rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Price = styled.h5`
  color: #f46036;
  font-size: 0.9rem;
`;
const Name = styled.h4`
  color: #000000;
  font-size: 1rem;
`;

export default Product;
