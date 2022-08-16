import SearchProfile from "../../components/SearchProfile";
import SearchTag from "../../components/SearchTag";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import GetUserByName from "../../services/GetUserByName";
import useAuth from "../../hooks/useAuth";
import GetPostsByTag from "../../services/GetPostsByTag";

const Search = () => {
  const { auth } = useAuth();
  const [userList, setUserList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [tags, setTag] = useState("");
  async function handleSearchSubmit(search) {
    if (search.charAt(0) === "#") {
      const tag = search.replaceAll("#", " ").split(" ").filter(x => x.length !== 0)[0]
      setTag(tag)
      const posts = await GetPostsByTag(tag, auth.token)
      setUserList([])
      setPostList(posts.data)
    } else {
      const usersSearch = await GetUserByName(search, auth.token);
      setPostList([])
      setUserList(usersSearch.data)
    }



  }
  async function handleLikeClicked() {
    const posts = await GetPostsByTag(tags, auth.token)
    setUserList([])
    setPostList(posts.data)
  }


  return (
    <>
      <Header />
      <SearchBar handleSearchSubmit={handleSearchSubmit} />

      {userList.length !== 0 ? <SearchProfile userList={userList} /> : null}
      {postList.length !== 0 ? <SearchTag postList={postList} handleLikeClicked={handleLikeClicked} /> : null}
    </>
  );
};

export default Search;
