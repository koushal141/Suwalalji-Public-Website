import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    img: "https://lh3.googleusercontent.com/a-/AOh14Ghq5hG2OC0v_WqP7Wvth_mcR6emiyj4ATrR0QpNK5E=w75-h75-p-rp-mo-br100",
    name: "Rajesh Agarwalla",
    text: "Amazing namkeen, Sab ko ek bar to try karna chahiye",
    stars: 5,
  },
  {
    img: "https://lh3.googleusercontent.com/a-/AOh14Gi7l2rtKrfieokEPynjhDNpHGShbDDrlU5NSbo3xik=w75-h75-p-rp-mo-ba3-br100",
    name: "Shreedhar Agarwal",
    text: "Nice place for snacks",
    stars: 5,
  },
  {
    img: "https://lh3.googleusercontent.com/a-/AOh14GhWxaHxYjjHzVPx_v0X3zH8wQSN6xgExSqaCIzCDw=w75-h75-p-rp-mo-br100",
    name: "Shashank Agarwal",
    text: "Variety & Taste !",
    stars: 5,
  },
];

const Testimonial = ({ testimonial }) => (
  <TestimonialComp>
    <Avatar src={testimonial.img} />
    <Stars>
      {new Array(testimonial.stars).fill(null).map((_, index) => (
        <AiFillStar key={index} />
      ))}
    </Stars>
    <Text>“{testimonial.text}”</Text>
    <Name>{testimonial.name}</Name>
  </TestimonialComp>
);

function Testimonials() {
  return (
    <Container>
      <Title>Testimonials</Title>
      <Name>Some quotes from our happy customers</Name>

      <Wrapper>
        {testimonials.map((testy, index) => (
          <Testimonial testimonial={testy} key={index} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Testimonials;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding: 5rem 3.5rem;
  background: rgba(244, 96, 54, 0.1);

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const TestimonialComp = styled.div`
  padding: 2.5rem 3.5rem;
  border-radius: 5px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  row-gap: 0.6rem;
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  background-color: orange;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  object-fit: cover;
`;
const Text = styled.h5`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;
const Name = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: orange;
  column-gap: 0.2rem;
`;
