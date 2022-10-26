import React, { useState } from "react";
import { FormSearch, Container, Input, Icon } from "./styles";
import IconSearch from "../../assets/searchGo.svg";

const SearchBar = (props) => {
  const { handleSearchSubmit } = props;
  const [search, setSearch] = useState("");

  return (
    <Container>
      <FormSearch action="/" method="get">
        <Input
          type="text"
          id="header-search"
          placeholder="search "
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Icon
          alt="Search"
          src={IconSearch}
          onClick={() => handleSearchSubmit(search)}
        />
      </FormSearch>
    </Container>
  );
};
export default SearchBar;
