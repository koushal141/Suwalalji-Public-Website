import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import ProductImages from "../../components/ProductImages";
import Breadcrumb from "../../components/Breadcrumb";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  const paths = products.map((pro) => {
    return {
      params: { id: pro._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/products/" + id);
  const product = await res.json();
  return {
    props: { product },
  };
}

function Product({ product }) {
  return (
    <Wrapper>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Breadcrumb title={product.name} />
      <Divider>
        <ProductImages
          images={[
            { url: "/images/Suwalalji - Flying.png" },
            { url: "/images/Suwalalji - Group.png" },
            { url: "/images/Suwalalji - Tilted.png" },
            { url: "/images/KajuChuda.png" },
          ]}
        />
        <Details>
          <h2>{product.name}</h2>
          <Price>{product.retailPrice - 1}</Price>
          <Desc>
            {product.desc}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Desc>

          <hr />
        </Details>
      </Divider>
    </Wrapper>
  );
}

export default Product;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
`;

const Price = styled.h5`
  color: hsl(22, 31%, 52%);

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`;
const Desc = styled.h5`
  line-height: 2;
  max-width: 45em;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Details = styled.div`
  flex: 0.55;
  width: 100%;
`;
