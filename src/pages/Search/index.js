import {} from "./styles";
import SearchProfile from "../../components/SearchProfile";
import SearchTag from "../../components/SearchTag";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

const Search = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <SearchProfile />
      <SearchTag />
    </>
  );
};

export default Search;
