import React, { useState } from "react";
import styled from "styled-components";
const ProductImages = ({ images = [""] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <ImageCont noAni>
        <Image src={main.url} alt="" />
      </ImageCont>
      <Gallery>
        {images.map((image, index) => {
          return (
            <ImageCont
              key={index}
              active={image.url === main.url ? true : false}
            >
              <Image
                src={image.url}
                alt=""
                onClick={() => setMain(images[index])}
              />
            </ImageCont>
          );
        })}
      </Gallery>
    </Wrapper>
  );
};

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ImageCont = styled.div`
  width: 100%;
  padding-top: 70%;
  background: antiquewhite;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.25s;
  border: ${(p) => (p.active ? "2px solid orange" : "none")};

  &:hover {
    transform: ${(p) => (p.noAni ? "none" : "scale(1.05)")};
    border: ${(p) => (p.noAni ? "none" : "2px solid orange")};
  }
`;

const Wrapper = styled.section`
  flex: 0.55;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.5rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  position: relative;
`;

export default ProductImages;
