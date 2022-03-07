import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/products.json";
import Product from "../Product";
import { useRouter } from "next/router";

function ProductsCarousel() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 5);

    setProducts(products);
  }, []);

  return (
    <Container>
      <Title>Products</Title>

      <Content>
        {products.map((pro) => (
          <Product
            key={pro._id}
            image={pro.image}
            name={pro.name + " " + pro.weight}
            price={pro.retailPrice - 1}
            id={pro._id}
          />
        ))}
      </Content>
      <Button onClick={() => router.push("/products")}>
        Browse all Products
      </Button>
    </Container>
  );
}

export default ProductsCarousel;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  padding: 5rem 3.5rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 0.8rem 1.4rem;
  border: 3px solid #ea9032;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  background: #ea9032;
  cursor: pointer;
  border-radius: 4px;
  transition: ease-in-out 0.2s all;
  display: flex;
  align-items: center;
  max-width: 200px;

  &:hover {
    color: #ea9032;
    background: #fff;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;
