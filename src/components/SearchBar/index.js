import React, { useState } from "react";
import { Container, Input, Icon } from "./styles";
import IconSearch from "../../assets/searchGo.svg"

const SearchBar = (props) => {
  const { handleSearchSubmit } = props
  const [search, setSearch] = useState("");

  return (<>
    <Container>
      <Icon alt="Search" src={IconSearch} onClick={() => handleSearchSubmit(search)} />
      <form action="/" method="get">
        <Input
          type="text"
          id="header-search"
          placeholder="Search a product"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Container>
  </>
  );
}
export default SearchBar;
