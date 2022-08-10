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
} from "./styles";

const Login = () => {
  return (
    <>
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
          </Container>
        </ContainerLogin>
        <ContainerRegister>
          <ContainerButtonRegister>
            <TextRegister>Do not have an account?</TextRegister>
            <ButtonRegister>Register</ButtonRegister>
          </ContainerButtonRegister>
        </ContainerRegister>
    </>
  );
};

export default Login;
