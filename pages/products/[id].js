import React from "react";
import styled from "styled-components";
import ProductImages from "../../components/ProductImages";
import Breadcrumb from "../../components/Breadcrumb";
import db from "../../data/products.json";
import HeadTag from "../../components/HeadTag";

export async function getStaticPaths() {
  const paths = db.map((pro) => {
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

  const product = db.find((fil) => fil._id === id);
  return {
    props: { product },
  };
}

function Product({ product }) {
  return (
    <Wrapper>
      <HeadTag
        title={product.name + " " + product.weight}
        img={product.image}
      />
      <Breadcrumb title={product.name} />
      <Divider>
        <ProductImages
          images={[
            { url: product.image },
            { url: "/images/Suwalalji - Flying.png" },
            { url: "/images/Suwalalji - Tilted.png" },
          ]}
        />
        <Details>
          <Title>{product.name + " " + product.weight}</Title>
          <SubTitle>By Suwalalji</SubTitle>
          <Price>₹{product.retailPrice - 1}</Price>
          <Desc>
            {product.desc}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </Desc>
          {/* <Reviews>
            <Title>Reviews</Title>
            <Review>
              <ReviewTop>
                <AvaCont>
                  <Avatar
                    src="https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
                    alt="avatar"
                  />
                </AvaCont>
                <Price>9/10</Price>
              </ReviewTop>
              <ReviewBottom>
                <ReviewTitle>Amazing Product</ReviewTitle>
                <Desc>
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only
                </Desc>
              </ReviewBottom>
            </Review>
            <Review>
              <ReviewTop>
                <AvaCont>
                  <Avatar
                    src="https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
                    alt="avatar"
                  />
                </AvaCont>

                <Price>9/10</Price>
              </ReviewTop>
              <ReviewBottom>
                <ReviewTitle>Amazing Product</ReviewTitle>
                <Desc>
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only
                </Desc>
              </ReviewBottom>
            </Review>
          </Reviews> */}
        </Details>
      </Divider>
    </Wrapper>
  );
}

export default Product;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
`;

const Divider = styled.div`
  display: flex;
  column-gap: 2rem;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

// const Price = styled.h5`
//   color: hsl(22, 31%, 52%);

//   @media (min-width: 992px) {
//     font-size: 1.25rem;
//   }
// `;
// const Desc = styled.h5`
//   line-height: 2;
//   max-width: 45em;
// `;

const Details = styled.div`
  flex: 0.45;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2.5rem;
  color: #000000;

  @media (max-width: 1000px) {
    font-size: 2.3rem;
  }
  @media (max-width: 786px) {
    font-size: 2.1rem;
  }
`;

const ReviewTitle = styled.h3`
  font-weight: 600;
  font-size: 2.2rem;
  color: #000000;

  @media (max-width: 1000px) {
    font-size: 2.1rem;
  }
  @media (max-width: 786px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h5`
  font-size: 1.1rem;
  color: #82828b;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

const Price = styled.h4`
  background: rgba(244, 96, 54, 0.1);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.3rem;
  color: #f46036;
  padding: 0.65rem 2rem;
  letter-spacing: 0.05rem;
  width: min-content;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  border-radius: 5px;
  object-fit: contain;
`;

const AvaCont = styled.div`
  height: 100%;
  position: relative;
`;

const Desc = styled.p`
  font-size: 1rem;
  line-height: 20px;
  color: #82828b;
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin: 2rem 0;
`;

const Review = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 16px 32px -4px rgba(145, 158, 171, 0.24);
  border-radius: 16px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const ReviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const ReviewBottom = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
