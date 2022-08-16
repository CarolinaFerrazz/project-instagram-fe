import {
  ContainerNames,
  ImageAndNames,
  NameProfile,
  ProfileImage,
  UserName,
} from "./styles";

export default function LessInfoUser(props) {
  const { profilePhoto, name, username, id, handle } = props;

  return (
    <ImageAndNames onClick={() => handle(id)}>
      <ProfileImage src={profilePhoto} />
      <ContainerNames>
        <UserName>{username}</UserName>
        <NameProfile>{name}</NameProfile>
      </ContainerNames>
    </ImageAndNames>
  );
}
