import { Container, TextMessageError, TextMessageSuccess } from "./styles";

const Messages = ({ mesgError, mesgSuccess }) => {
  return (
    <Container>
      {mesgError && <TextMessageError>{mesgError}</TextMessageError>}
      {mesgSuccess && <TextMessageSuccess>{mesgSuccess}</TextMessageSuccess>}
    </Container>
  );
};

export default Messages;
