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

const Settings = () => {
  const { auth } = useAuth();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  function update() {
    const updateUser = {};
    if (password.replace(/\s/g, "").length !== 0)
      updateUser.password = password;
    if (userName.replace(/\s/g, "").length !== 0)
      updateUser.username = userName;
    if (email.replace(/\s/g, "").length !== 0) updateUser.email = email;
    const user = UpdateProfile(updateUser, auth.token);

    if (user === null) {
      alert("fail");
    } else {
      alert("ok");
      setPassword("");
      setUserName("");
      setEmail("");
    }
  }

  return (
    <>
      <Header />
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
