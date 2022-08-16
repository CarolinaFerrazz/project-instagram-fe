import {
  AllAlignCenter,
  Container,
  TitleFollowers,
  TextNumberFollowers,
} from "./styles";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GetFollowers from "../../services/GetFollowers";
import LessInfoUser from "../../components/LessInfoUser";

const ViewFollowers = () => {
  const { auth } = useAuth();
  const [usersList, setUsersList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  function handle(id) {
    navigate("/viewprofile", { state: { id: id } })
  }

  useEffect(() => {
    async function get() {
      const users = await GetFollowers(location.state.id, auth.token);
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
          <TitleFollowers>Followers</TitleFollowers>
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

export default ViewFollowers;
