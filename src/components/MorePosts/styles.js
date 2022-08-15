import styled from "styled-components";

export const ContainerButtonBack = styled.div`
  display: flex;
  justify-content: left;
`;

export const ButtonBack = styled.button`
  background: none;
  border: none;
  color: #b0b0b0;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
`;

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
  height: fit-content;
`;

export const ContainerInfoPost = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #74b3ce;
  max-width: 40%;
  max-height: 600px;
`;

export const ContainerNameAndImageUser = styled.div`
  display: flex;
  border-bottom: solid 1px #74b3ce;
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
  max-width: 600px;
  flex-wrap: wrap;
  border: solid 1px #74b3ce;
`;

export const ContainerLike = styled.div`
  margin: 20px 16px;
  display: flex;
  margin-bottom: 16px;
  align-items: center;
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

export const NumberOfLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 0;
  font-weight: 700;
  margin-bottom: 8px;
  margin-left: 8px;
  text-align: center;
`;

export const TextLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
  margin-left: 4px;
  font-weight: 700;
  text-align: center;
`;

export const ContainerDescription = styled.div`
  display: flex;
  padding: 0 20px;
  border-bottom: solid 1px #74b3ce;
`;

export const DescriptionPost = styled.p`
  color: #c9c9c9;
  font-size: 16px;
  margin-bottom: 0;
`;

export const TextHashtag = styled.p`
  margin-top: 4px;
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
  border-top: solid 1px #74b3ce;
`;

export const AddNewComment = styled.textarea`
  color: #b0b0b0;
  font-size: 16px;
  margin: 12px 0;
  margin-left: 20px;
  min-width: 80%;
  background: none;
  border: none;
  max-height: 100px;
  resize: none;
`;

export const ButtonPublish = styled.button`
  color: #74b3ce;
  font-size: 12px;
  border: none;
  background: none;
  margin-right: 20px;
`;

export const ContainerComents = styled.div`
  overflow-y: scroll;
  max-height: 34%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }
`;

export const IconBack = styled.img`
  max-width: 40px;
  max-height: 40px;
`;
