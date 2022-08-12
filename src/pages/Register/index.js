import Footer from "../../components/Footer";
import LoginDiv from "../../components/LoginDiv";
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

const Register = () => {
  return (
    <>
      <LoginDiv />
      <ContainerRegister>
        <Container>
          <TitleRegister>Fake Instagram</TitleRegister>
          <TextRegister>
            Sign up to see photos and videos from your friends.
          </TextRegister>
          <ContainerFormRegister>
            <InputRegister
              placeholder="Mobile number or email address"
              name="mobileOrEmail"
              type="text"
            ></InputRegister>
            <InputRegister
              placeholder="Full name"
              name="fullName"
              type="text"
            ></InputRegister>
            <InputRegister
              placeholder="Username"
              name="username"
              type="text"
            ></InputRegister>
            <InputRegister
              placeholder="Password"
              name="password"
              type="password"
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
            <ButtonRegister>Next</ButtonRegister>
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
