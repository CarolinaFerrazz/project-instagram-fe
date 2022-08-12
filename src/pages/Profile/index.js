import { Container } from "./styles";
import Header from "../../components/Header";
import ProfileDiv from "../../components/ProfileDiv";
import Footer from "../../components/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <ProfileDiv />
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
