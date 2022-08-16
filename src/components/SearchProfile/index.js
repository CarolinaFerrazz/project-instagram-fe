import {
  AllAlignCenter,
  Container,
} from "./styles";
import LessInfoUser from "../LessInfoUser";
import { useNavigate } from "react-router-dom";

const SearchProfile = (props) => {
  const { userList } = props
  const navigate = useNavigate();

  function handle(id) {
    navigate("/viewprofile", { state: { id: id } })
  }

  return (
    <>
      <AllAlignCenter>
        <Container>

          {userList.map(user =>
            <LessInfoUser
              profilePhoto={user.profilePhoto}
              name={user.name}
              username={user.username}
              id={user.id}
              handle={handle}
              key={user.id} />)}

        </Container>
      </AllAlignCenter>
    </>
  );
};

export default SearchProfile;
