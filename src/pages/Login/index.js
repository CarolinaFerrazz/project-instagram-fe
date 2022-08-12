import Footer from "../../components/Footer";
import LoginDiv from "../../components/LoginDiv";
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
  return (
    <>
    <LoginDiv />
      <ContainerLogin>
        <Container>
          <TitleLogin>Fake Instagram</TitleLogin>
          <ContainerFormLogin>
            <InputLogin
              placeholder="Phone number, username or email address"
              name="name"
              type="text"
            ></InputLogin>
            <InputLogin
              placeholder="Password"
              name="password"
              type="password"
            ></InputLogin>
          </ContainerFormLogin>
          <ContainerButtonLogin>
            <ButtonLogin>Login</ButtonLogin>
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
