import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import First from "../components/Home/First";
import About from "../components/Home/About";
import Testimonials from "../components/Home/Testimonials";
import ProductsCarousel from "../components/Home/ProductsCarousel";

function LandingPage() {
  return (
    <Container>
      <Head>
        <title>Suwalalji</title>
      </Head>
      <First />
      <About />
      <Testimonials />
      <ProductsCarousel />
    </Container>
  );
}

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: hidden;
`;
