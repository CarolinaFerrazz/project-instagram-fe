import styled from "styled-components";

export const AlignAllCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ContainerImagePost = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerInfoPost = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #404040;
  min-width: 40%;
`;

export const ContainerNameAndImageUser = styled.div`
  display: flex;
  border-bottom: solid 1px #404040;
  padding: 8px 20px;
`;

export const ImageProfileUser = styled.img`
  border-radius: 50%;
  max-width: 50px;
  max-height: 50px;
`;

export const NameUser = styled.p`
  font-size: 24px;
  color: #74b3ce;
  margin: 4px 0;
  padding-left: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const ImagePost = styled.img`
  max-width: 500px;
  flex-wrap: wrap;
`;

export const ContainerIconsPost = styled.div`
  margin: 20px 16px;
  display: flex;
  justify-content: left;
  margin-bottom: 16px;
`;

export const IconLike = styled.img`
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const IconComments = styled.img`
  margin-left: 20px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const ContainerLikes = styled.div`
  display: flex;
  margin: 0 20px;
`;

export const NumberOfLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 0;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const TextLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
  margin-left: 4px;
  font-weight: 700;
`;

export const ContainerDescription = styled.div`
  display: flex;
  padding: 0 20px;
  border-bottom: solid 1px #404040;
`;

export const DescriptionPost = styled.p`
  color: #c9c9c9;
  font-size: 16px;
`;

export const TimePost = styled.p`
  color: #b0b0b0;
  font-size: 12px;
  margin-top: 0;
  text-transform: uppercase;
  margin-left: 20px;
`;

export const ContainerNewCommentAndPublish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #404040;
`;

export const AddNewComment = styled.textarea`
  color: #b0b0b0;
  font-size: 16px;
  margin: 12px 0;
  margin-left: 20px;
  min-width: 80%;
  background: none;
  border: none;
  min-height: 100px;
  resize: none;
`;

export const ButtonPublish = styled.button`
  color: #74b3ce;
  font-size: 12px;
  border: none;
  background: none;
  margin-right: 20px;
`;

export const ContainerAllComents = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

export const ContainerUserNameAndComment = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserNameComment = styled.p`
  color: #74b3ce;
  margin-bottom: 0;
`;

export const TextComment = styled.p`
  margin-left: 8px;
  margin-bottom: 0;
`;

export const ContainerTimeAndLike = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeComment = styled.p`
  color: #b0b0b0;
  margin-top: 4px;
  display: flex;
  flex: 3;
`;

export const LikeComment = styled.img`
  width: 20px;
`;


