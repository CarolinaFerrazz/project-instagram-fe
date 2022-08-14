<<<<<<< HEAD
=======
// import {
//   Dropdown,
//   ButtonDropDown,
//   ProfileIcon,
//   ContainerLinksMenu,
//   LinksMenu,
// } from "./styles";
import { useNavigate } from "react-router-dom";
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
import IconProfile from "../../assets/profile.svg";
import useAuth from "../../hooks/useAuth";
import "./index.css";

const DropdownProfile = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  function logout() {
    localStorage.removeItem('token')
    setAuth({});
    navigate("/")
  }

  return (
    <>
<<<<<<< HEAD
      <div class="dropdown">
        <button class="dropButton">
          <img class="dropdownImage" src={IconProfile}></img>
=======
      {/* <Dropdown>
        <ButtonDropDown>
          <ProfileIcon src={IconProfile} />
        </ButtonDropDown>
        <ContainerLinksMenu>
          <LinksMenu to="/profile">Profile</LinksMenu>
          <LinksMenu to="/settings">Settings</LinksMenu>
          <LinksMenu to="/login">Logout</LinksMenu>
        </ContainerLinksMenu>
      </Dropdown> */}
      <div className="dropdown">
        <button className="dropButton">
          <img src={IconProfile}></img>
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
        </button>
        <div className="dropdown-content">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/" onClick={logout}>Logout</a>
        </div>
      </div>
    </>
  );
};

export default DropdownProfile;
