import { useState } from "react";
import Checkbox from "./form-builder/checkbox";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";

const productsTypes = [
  {
    id: "1",
    name: "Salty",
    count: "172",
  },
  {
    id: "2",
    name: "Sweet",
    count: "131",
  },
  {
    id: "3",
    name: "Spicy",
    count: "56",
  },
  {
    id: "4",
    name: "Tangy",
    count: "8",
  },
];

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  };

  return (
    <form onChange={addQueryParams}>
      <MenuBtn
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        isActive={filtersOpen}
      >
        <FaFilter />
      </MenuBtn>
      <FilterWrapper isOpen={filtersOpen}>
        <FilterBlock>
          <Title>Product type</Title>
          {productsTypes.map((type) => (
            <Checkbox key={type.id} name="product-type" label={type.name} />
          ))}
        </FilterBlock>
        <SubmitBtn type="submit">Apply</SubmitBtn>
      </FilterWrapper>
    </form>
  );
};

export default ProductsFilter;

const Title = styled.h4``;

const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (min-width: 767px) {
    display: none;
  }

  color: #000000;
  cursor: pointer;
  font-size: 12px;
  background: #fff;
  display: inline-block;
  border-radius: 50px;
  padding: 11px 20px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: yellow;
  @media (min-width: 767px) {
    font-size: 13px;
    padding: 15px 25px;
  }
`;

const FilterWrapper = styled.div`
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 16px 32px -4px rgba(145, 158, 171, 0.24);
  border-radius: 16px;
  width: 300px;
  left: -300px;
  top: 0;
  bottom: 0;
  overflow: auto;
  height: calc(100% - 101px);
  height: 100%;
  flex-shrink: 0;
  position: fixed;
  z-index: 99;
  padding: 20px 20px;
  background-color: #fff;
  transition: all 0.4s ease;
  @media (min-width: 767px) {
    top: 134px;
  }
  @media (min-width: 1024px) {
    position: relative;
    left: 0;
    top: 0;
    padding: 0;
    height: auto;
    margin-right: 20px;
    width: 220px;
  }
  @media (min-width: 1202px) {
    width: 310px;
    top: 0;
    margin-right: 30px;
  }

  left: ${(props) => (props.isOpen ? 0 : "-300px")};
`;

const MenuBtn = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 16px 32px -4px rgba(145, 158, 171, 0.24);
  z-index: 100;
  display: none;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #f46036;
  font-size: 1.1rem;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
const FilterBlock = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
