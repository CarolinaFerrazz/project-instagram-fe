import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  AllAlignCenter,
  Container,
  TitleSettings,
  ContainerFormSettings,
  InputSettings,
  ContainerButtonConfirm,
  ButtonConfirm,
} from "./styles";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import UpdateProfile from "../../services/UpdateProfile";
import Messages from "../../components/Messages";

const Settings = () => {
  const { auth } = useAuth();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  function update() {
    const updateUser = {};
    if (password.replace(/\s/g, "").length !== 0)
      updateUser.password = password;
    if (userName.replace(/\s/g, "").length !== 0)
      updateUser.username = userName;
    if (email.replace(/\s/g, "").length !== 0) updateUser.email = email;
    UpdateProfile(updateUser, auth.token)
      .then(user => {
        if (user?.code) {
          setErrorMessage(user.message);
          setSuccessMessage("");
        } else {
          setErrorMessage("");
          setSuccessMessage("success!");
          setPassword("");
          setUserName("");
          setEmail("");
        }
      });
  }

  return (
    <>
      <Header />
      {errorMessage ? <Messages mesgError={errorMessage} /> : null}
      {successMessage ? <Messages mesgSuccess={successMessage} /> : null}
      <AllAlignCenter>
        <Container>
          <TitleSettings>Settings</TitleSettings>
          <ContainerFormSettings>
            <InputSettings
              placeholder="Change Username"
              name="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></InputSettings>
            <InputSettings
              placeholder="Change Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></InputSettings>
            <InputSettings
              placeholder="Change Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputSettings>
          </ContainerFormSettings>
          <ContainerButtonConfirm>
            {" "}
            <ButtonConfirm onClick={update}>Confirm</ButtonConfirm>
          </ContainerButtonConfirm>
        </Container>
      </AllAlignCenter>
      <Footer />
    </>
  );
};

export default Settings;
