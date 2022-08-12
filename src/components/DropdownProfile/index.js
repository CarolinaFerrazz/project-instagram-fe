// import {
//   Dropdown,
//   ButtonDropDown,
//   ProfileIcon,
//   ContainerLinksMenu,
//   LinksMenu,
// } from "./styles";
import IconProfile from "../../assets/profile.svg";
import "./index.css";

const DropdownProfile = () => {
  return (
    <>
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
      <div class="dropdown">
        <button class="dropButton">
          <img src={IconProfile}></img>
        </button>
        <div class="dropdown-content">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/login">Logout</a>
        </div>
      </div>
    </>
  );
};

export default DropdownProfile;
