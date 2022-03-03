import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      {/* <Heading>
        <Title>About</Title>
      </Heading> */}
      <Divider>
        <Cont1>
          <Image src="/images/Suwalalji - Flying.png" />

          <SVG
            id="visual"
            viewBox="0 0 960 540"
            width={960}
            height={"65vh"}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(62.917384173509845 477.45089358756456)">
              <path
                d="M267.9 -334.8C343.9 -313.6 399.7 -230.8 388.8 -152.7C377.9 -74.6 300.2 -1.1 246.6 54.3C193 109.6 163.5 147 126.4 224.3C89.3 301.5 44.6 418.8 -25.5 453.9C-95.6 488.9 -191.2 441.9 -268.9 377.8C-346.6 313.7 -406.3 232.5 -454.8 135.5C-503.3 38.4 -540.5 -74.7 -496.2 -145.8C-451.8 -216.8 -325.8 -246 -229.5 -260.5C-133.2 -275 -66.6 -275 14.7 -295.2C96 -315.5 192 -355.9 267.9 -334.8"
                fill="#ea9032"
              />
            </g>
          </SVG>
        </Cont1>
        <Cont2>
          <Title>About</Title>

          <Para>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Para>
        </Cont2>
      </Divider>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #ea9032;
  margin: 0;
`;

const SVG = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  z-index: 10;
  @media (max-width: 1100px) {
    bottom: -10%;
  }
`;

const Divider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const Cont1 = styled.div`
  flex: 0.35;
  width: 100%;
  position: relative;
  min-height: calc(65vh + 2rem);
  @media (max-width: 900px) {
    flex: 1;
  }
`;

const Cont2 = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  z-index: 19;
  @media (max-width: 900px) {
    padding: 2rem 1.5rem;
    flex: 1;
  }
`;

const Image = styled.img`
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Para = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: 1.15rem;
  }
`;
