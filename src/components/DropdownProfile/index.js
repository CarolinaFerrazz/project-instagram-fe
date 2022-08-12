import IconProfile from "../../assets/profile.svg";
import "./index.css";

const DropdownProfile = () => {
  return (
    <>
      <div class="dropdown">
        <button class="dropButton">
          <img class="dropdownImage" src={IconProfile}></img>
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
