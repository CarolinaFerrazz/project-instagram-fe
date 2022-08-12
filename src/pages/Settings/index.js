import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  AllAlignCenter,
  Container,
  TitleInstagram,
  TitleSettings,
  ContainerFormSettings,
  InputSettings,
  ContainerButtonConfirm,
  ButtonConfirm,
  LinkBack,
} from "./styles";

const Settings = () => {
  return (
    <>
      <Header />
      <AllAlignCenter>
        <Container>
          <TitleInstagram>Fake Instagram</TitleInstagram>
          <TitleSettings>Settings</TitleSettings>
          <ContainerFormSettings>
            <InputSettings
              placeholder="Change Username"
              name="username"
              type="text"
            ></InputSettings>
            <InputSettings
              placeholder="Change Password"
              name="password"
              type="password"
            ></InputSettings>
            <InputSettings
              placeholder="Change Email"
              name="email"
              type="email"
            ></InputSettings>
          </ContainerFormSettings>
          <ContainerButtonConfirm>
            {" "}
            <ButtonConfirm>
              <LinkBack title="Back" href="/feed">
                Confirm
              </LinkBack>
            </ButtonConfirm>
          </ContainerButtonConfirm>
        </Container>
      </AllAlignCenter>
      <Footer />
    </>
  );
};

export default Settings;
