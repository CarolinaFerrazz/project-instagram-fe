import React from 'react'
import {
    ContainerAllComents,
    ContainerTimeAndLike,
    ContainerUserNameAndComment,
    LikeComment, TextComment,
    TimeComment,
    UserNameComment
} from '../MorePosts/styles'
import IconLikeDisabled from "../../assets/likeDisabled.svg";
const Comment = (props) => {
    const { creationDate, description, id, likes } = props;

    return (
        <ContainerAllComents>
            <ContainerUserNameAndComment>
                <UserNameComment>USERNAME</UserNameComment>
                <TextComment>{description}</TextComment>
            </ContainerUserNameAndComment>
            <ContainerTimeAndLike>
                <TimeComment>{creationDate}</TimeComment>
                <span>{likes}</span>
                <LikeComment src={IconLikeDisabled} />
            </ContainerTimeAndLike>
        </ContainerAllComents>
    )
}
export default Comment;