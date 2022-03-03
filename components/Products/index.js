import React from "react";
import styled from "styled-components";
import Product from "../Product";
import products from "../../data/products.json";
import Link from "next/link";

function ProductsGrid() {
  return (
    <Wrapper>
      {products.map((pro) => (
        <Product
          key={pro._id}
          image="/images/Suwalalji - Flying.png"
          name={pro.name}
          price={pro.retailPrice - 1}
          id={pro._id}
        />
      ))}
    </Wrapper>
  );
}

export function ProductsList() {
  return (
    <ListWrapper>
      {products.map((product) => {
        const { _id, name, retailPrice, desc } = product;
        return (
          <article key={_id}>
            <img src="/images/Suwalalji - Flying.png" alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">₹{retailPrice - 1}</h5>
              <p>{desc.substring(0, 150)}...</p>
              <Link href={`/products/${_id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </ListWrapper>
  );
}

export default ProductsGrid;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 2rem 1.5rem;
  padding-bottom: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 0;
    padding-right: 0;
  }
`;

const ListWrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  width: 100%;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;

    border-radius: 20px;
    transition: ease-in-out 0.3s all;
    height: 235px;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
