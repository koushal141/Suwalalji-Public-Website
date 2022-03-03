import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BsArrowRightShort } from "react-icons/bs";

function First() {
  const router = useRouter();
  return (
    <Container>
      <Cont1>
        <Slogan>
          All your Favourite <br />
          Indian Snacks
        </Slogan>
        <SubSlogan>Tea Time, Tv Time, Snack Time, Anytime</SubSlogan>
        <BrowseButton
          title="Browse Products"
          onClick={() => router.push("/products")}
        >
          Browse Products <BsArrowRightShort size={30} />
        </BrowseButton>
        <ChilliSpoon src="/images/SpicesBottomLeft.png" />
      </Cont1>
      <Cont2>
        <Image src="/images/Suwalalji - Group.png" />
        <Wave
          id="visual"
          viewBox="0 0 960 540"
          width={"80vw"}
          height={"100vh"}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x={0} y={0} width={960} height={540} fill="#FFFFFF" />
          <g transform="translate(1020.3221308191614 37.126264189262315)">
            <path
              d="M178.8 -285.2C248.1 -233.6 331.9 -211.7 413.6 -153.5C495.2 -95.2 574.7 -0.6 582.3 97.7C589.9 195.9 525.4 297.7 433.9 341.8C342.5 385.9 223.9 372.4 119.9 398.2C16 424.1 -73.4 489.3 -144 475.5C-214.6 461.6 -266.4 368.7 -372.9 295.4C-479.4 222.2 -640.6 168.7 -687.7 77C-734.9 -14.7 -668.1 -144.6 -600 -265.8C-531.9 -386.9 -462.5 -499.3 -362.2 -536.7C-262 -574.1 -131 -536.5 -38.1 -477.2C54.7 -417.8 109.5 -336.7 178.8 -285.2"
              fill="#ea9032"
            />
          </g>
        </Wave>
      </Cont2>
    </Container>
  );
}

export default First;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  column-gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const Wave = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 900px) {
    top: -20%;
  }
  @media (max-width: 600px) {
    top: -45%;
  }
`;

const Cont1 = styled.div`
  flex: 0.55;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  row-gap: 1rem;
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
  @media (max-width: 760px) {
    padding: 0 1rem;
    row-gap: 0.75rem;
  }
`;
const Cont2 = styled.div`
  flex: 0.45;
  width: 100%;
  position: relative;
  /* @media (max-width: 900px) {
    flex: 0.5;
  } */
`;

const Image = styled.img`
  width: 130%;
  object-fit: contain;
  position: absolute;
  z-index: 20;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  @media (max-width: 900px) {
    inset: 0;
    width: 100%;
  }
`;

const ChilliSpoon = styled.img`
  height: 12rem;
  position: absolute;
  z-index: 15;
  left: 0;
  bottom: 0;
  @media (max-width: 1100px) {
    height: 10rem;
  }
  @media (max-width: 900px) {
    height: 7rem;
  }
`;

const Slogan = styled.h2`
  font-weight: 800;
  font-size: 4rem;
  color: #ea9032;
  z-index: 20;
  @media (max-width: 1100px) {
    font-size: 3.7rem;
  }
  @media (max-width: 900px) {
    font-size: 3.2rem;
  }
  @media (max-width: 760px) {
    font-size: 2.8rem;
  }
`;

const SubSlogan = styled.p`
  font-weight: 800;
  font-size: 1.6rem;
  color: #ea9032;
  z-index: 20;

  @media (max-width: 1100px) {
    font-size: 1.4rem;
  }
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

const BrowseButton = styled.button`
  border: none;
  padding: 0.8rem 1.4rem;
  border: 3px solid #ea9032;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  background: #ea9032;
  cursor: pointer;
  border-radius: 2rem;
  z-index: 20;
  transition: ease-in-out 0.2s all;
  display: flex;
  align-items: center;

  &:hover {
    color: #ea9032;
    background: #fff;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;
