import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import ProductsFilter from "../../components/Products/products-filter";
import ProductsGrid, { ProductsList } from "../../components/Products";

function Products() {
  return (
    <Container>
      <Head>
        <title>Products</title>
      </Head>
      <Content>
        <Breadcrumb />
        <Divider>
          <ProductsFilter />
          <ProductsGrid />
        </Divider>
      </Content>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  margin: 4rem auto 0 auto;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0 20px;
`;
