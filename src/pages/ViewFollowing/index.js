import {
  AllAlignCenter,
  Container,
  TitleFollowing,
  TextNumberFollowers,
} from "./styles";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import GetFollowing from "../../services/GetFollowing";
import LessInfoUser from "../../components/LessInfoUser";
import { useLocation, useNavigate } from "react-router-dom";

const ViewFollowing = () => {
  const { auth } = useAuth();
  const [usersList, setUsersList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [isFollowing, setIsFollowing] = useState(true);

  function handle(id) {
    navigate("/viewprofile", { state: { id: id, isFollowing: isFollowing } })
  }

  useEffect(() => {
    async function get() {
      const users = await GetFollowing(location.state.id, auth.token);
      setUsersList(users)
    }
    get();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <AllAlignCenter>
        <Container>
          <TitleFollowing>Following</TitleFollowing>
          <TextNumberFollowers>{usersList.length}</TextNumberFollowers>
          {usersList.map(user =>
            <LessInfoUser
              profilePhoto={user.profilePhoto}
              name={user.name}
              username={user.username}
              id={user.id}
              handle={handle}
              key={user.id}
            />)}
        </Container>
      </AllAlignCenter>
    </>
  );
};

export default ViewFollowing;
