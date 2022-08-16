import Footer from "../../components/Footer";
import LoginDiv from "../../components/LoginDiv";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterUser from "../../services/RegisterUser";
import {
  ContainerRegister,
  Container,
  TitleRegister,
  TextRegister,
  ContainerFormRegister,
  InputRegister,
  ContainerButtonRegister,
  ButtonRegister,
  ContainerTextAboutRegister,
  TextAboutRegister,
  ContainerButtonLogin,
  TextLogin,
  ButtonLogin,
  LinkLogin,
} from "./styles";
import Messages from "../../components/Messages";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  async function registerUser() {
    if (!email || !userName || !password || !fullName) {
      setErrorMessage("All fields must be full");
      return;
    }
    const userToRegister = {
      name: fullName,
      username: userName,
      email: email,
      password: password
    }

    const user = await RegisterUser(userToRegister);
    if (user?.code) {
      setErrorMessage(user.message);
      setSuccessMessage("");
    } else {
      setSuccessMessage("success!");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }


  return (
    <>
      <LoginDiv />
      {errorMessage ? <Messages mesgError={errorMessage} /> : null}
      {successMessage ? <Messages mesgSuccess={successMessage} /> : null}
      <ContainerRegister>
        <Container>
          <TitleRegister>Fake Instagram</TitleRegister>
          <TextRegister>
            Sign up to see photos and videos from your friends.
          </TextRegister>
          <ContainerFormRegister>
            <InputRegister
              placeholder="email address"
              name="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputRegister>
            <InputRegister
              placeholder="Full name"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></InputRegister>
            <InputRegister
              placeholder="Username"
              name="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></InputRegister>
            <InputRegister
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></InputRegister>
          </ContainerFormRegister>

          <ContainerTextAboutRegister>
            <TextAboutRegister>
              People who use our service may have uploaded your contact
              information to Instagram.
            </TextAboutRegister>
            <TextAboutRegister>
              By signing up, you agree to our Terms.
            </TextAboutRegister>
          </ContainerTextAboutRegister>
          <ContainerButtonRegister>
            <ButtonRegister onClick={registerUser}>Next</ButtonRegister>
          </ContainerButtonRegister>
          <ContainerButtonLogin>
            <TextLogin>Have an account?</TextLogin>
            <ButtonLogin>
              <LinkLogin title="Login" href="/login">
                Login
              </LinkLogin>
            </ButtonLogin>
          </ContainerButtonLogin>
        </Container>
      </ContainerRegister>
      <Footer />
    </>
  );
};

export default Register;
