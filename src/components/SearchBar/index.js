import React from "react";
import { Container, Input, LinkSearch, IconSearchBar } from "./styles";
import IncoSearch from "../../assets/search.svg";

const SearchBar = () => (
  <>
    <Container>
        <LinkSearch to="search">
      <IconSearchBar alt="icon" src={IncoSearch}></IconSearchBar>
      </LinkSearch>
      <form action="/" method="get">
        <Input
          type="text"
          id="header-search"
          placeholder="Search a product"
          name="product"
          onChange={(e) => console.log(e.target.value)}
        />
      </form>
    </Container>
  </>
);

export default SearchBar;
