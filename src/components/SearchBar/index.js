import { InputSearch, IconSearchBar } from "./styles";
import IncoSearch from "../../assets/search.svg";

const SearchBar = () => (
  <>
    <IconSearchBar alt="icon" src={IncoSearch}></IconSearchBar>
    <form action="/viewprofile" method="get">
      <InputSearch
        type="text"
        id="header-search"
        placeholder="Search profile"
        name="user"
        onChange={(e) => console.log(e.target.value)}
      ></InputSearch>
    </form>
  </>
);

export default SearchBar;
