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
  ContainerLogin,
  ContainerButtonLogin,
  TextLogin,
  ButtonLogin,
  LinkLogin,
} from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [fail, setFail] = useState(false);
  async function registerUser() {
    if (email === "" || userName === "" || password === "" || fullName === "") {
      setFail(true);
      return;
    }
    const userToRegister = {
      name: fullName,
      username: userName,
      email: email,
      password: password
    }

    const user = await RegisterUser(userToRegister);
    if (user === null) {
      setFail(true);
      console.log("fail")
    } else {
      setFail(false);

      console.log("ok")
      navigate("/login");
    }

  }


  return (
    <>
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
        </Container>
      </ContainerRegister>
      <ContainerLogin>
        <ContainerButtonLogin>
          <TextLogin>Have an account?</TextLogin>
          <ButtonLogin><LinkLogin title="Login" href="/login">Login</LinkLogin></ButtonLogin>
        </ContainerButtonLogin>
      </ContainerLogin>
    </>
  );
};

export default Register;
