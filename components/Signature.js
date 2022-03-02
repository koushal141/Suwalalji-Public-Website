import React from "react";
import styled from "styled-components";

function Signature() {
  return (
    <Container>
      <Sign>SUWALALJI - © 2022. ALL RIGHTS RESERVED.</Sign>
    </Container>
  );
}

export default Signature;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ea9032;
  border-top: 1px solid #fff;
`;
const Sign = styled.h4`
  font-weight: 500;
  color: #fff;
  margin: 0;
  padding: 1rem;
`;
