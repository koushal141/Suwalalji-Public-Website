import { useState } from "react";
import Checkbox from "./form-builder/checkbox";
import styled from "styled-components";

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
        Add Filter <i className="icon-down-open"></i>
      </MenuBtn>
      <FilterWrapper isOpen={filtersOpen}>
        <FilterBlock>
          <button type="button">Product type</button>
          <BlockContent>
            {productsTypes.map((type) => (
              <Checkbox key={type.id} name="product-type" label={type.name} />
            ))}
          </BlockContent>
        </FilterBlock>
        <SubmitBtn type="submit">Apply</SubmitBtn>
      </FilterWrapper>
    </form>
  );
};

export default ProductsFilter;

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
  width: 300px;
  left: -300px;
  top: 101px;
  overflow: auto;
  height: calc(100% - 101px);
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
  top: 65px;
  width: 100%;
  left: 0;
  right: 0;
  padding: 8px 16px;
  z-index: 100;
  font-size: 12px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  @media (min-width: 767px) {
    top: 100px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
  i {
    display: inline-block;
    transition: all 0.3s ease;
    transform: rotate({${(props) => (props.isActive ? "90Deg" : "270Deg")}});
  }
`;
const FilterBlock = styled.div`
  padding: 20px 21px;
  margin-bottom: 13px;
  border: 1px solid #e6e6e6;
  @media (min-width: 1024px) {
    padding: 24px 31px;
  }

  button {
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 600;
    width: 100%;
    text-transform: uppercase;
    i {
      font-size: 21px;
      margin-left: auto;
    }
  }
`;

const BlockContent = styled.div`
  padding-top: 25px;
`;
