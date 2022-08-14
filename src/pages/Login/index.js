import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
<<<<<<< HEAD
=======
//import AuthContext from "../../context/Auth";
import useAuth from "../../hooks/useAuth";
//import useAuth from "../../hooks/useAuth";
import LoginUser from "../../services/LoginUser";
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
import {
  ContainerLogin,
  Container,
  TitleLogin,
  ContainerFormLogin,
  InputLogin,
  ContainerButtonLogin,
  ButtonLogin,
  TextForgottenPassw,
  ContainerButtonRegister,
  TextRegister,
  ButtonRegister,
  LinkRegister,
} from "./styles";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();

  async function handleClick() {
    const credentials = {
      email: email,
      password: password
    }
    const token = await LoginUser(credentials);
    if (token !== null) {
      setAuth({ email, token });
      setEmail("");
      setPassword("");
      navigate("/home")
    } else {
      setAuth({});
    }
  }



  return (
    <>
    <LoginDiv />
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
          <ContainerButtonRegister>
          <TextRegister>Do not have an account?</TextRegister>
          <ButtonRegister>
            <LinkRegister title="Register" href="/register">
              Register
            </LinkRegister>
          </ButtonRegister>
        </ContainerButtonRegister>
        </Container>
      </ContainerLogin>
      <Footer />
    </>
  );
};

export default Login;
