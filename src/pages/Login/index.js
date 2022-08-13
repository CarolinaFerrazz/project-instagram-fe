import { useState } from "react";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";
import LoginUser from "../../services/LoginUser";
import {
  ContainerLogin,
  Container,
  TitleLogin,
  ContainerFormLogin,
  InputLogin,
  ContainerButtonLogin,
  ButtonLogin,
  TextForgottenPassw,
  ContainerRegister,
  ContainerButtonRegister,
  TextRegister,
  ButtonRegister,
  LinkRegister,
} from "./styles";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth()
  async function handleClick() {
    const credentials = {
      email: email,
      password: password
    }
    const token = await LoginUser(credentials);
    if (token !== null) {
      setAuth({ email, token })
      setEmail("");
      setPassword("")
    } else {
      setAuth({})
    }


    /*     const response = await axios.get("/api/v1/post", {
      headers: {
        Authorization: token
      }
    }); */

  }



  return (
    <>
      <ContainerLogin>
        <Container>
          <TitleLogin>Fake Instagram</TitleLogin>
          <ContainerFormLogin>
            <InputLogin
              placeholder="email address"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputLogin>
            <InputLogin
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></InputLogin>
          </ContainerFormLogin>
          <ContainerButtonLogin>
            <ButtonLogin onClick={handleClick}>Login</ButtonLogin>
          </ContainerButtonLogin>
          <TextForgottenPassw>Fogotten your password?</TextForgottenPassw>
        </Container>
      </ContainerLogin>
      <ContainerRegister>
        <ContainerButtonRegister>
          <TextRegister>Do not have an account?</TextRegister>
          <ButtonRegister>
            <LinkRegister title="Register" href="/register">
              Register
            </LinkRegister>
          </ButtonRegister>
        </ContainerButtonRegister>
      </ContainerRegister>
      <Footer />
    </>
  );
};

export default Login;
