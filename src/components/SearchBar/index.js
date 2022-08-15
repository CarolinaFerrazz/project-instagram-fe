import React from "react";
import { Container, Input, Icon } from "./styles";
import IconSearch from "../../assets/searchGo.svg"

const SearchBar = () => (
  <>
    <Container>
      <Icon alt="Search" src={IconSearch}/>
    <form action="/" method="get">
        <Input
          type="text"
          id="header-search"
          placeholder="Search a product"
          name="search"
          onChange={(e) => console.log(e.target.value)}
        />
      </form>
    </Container>
  </>
);

export default SearchBar;
