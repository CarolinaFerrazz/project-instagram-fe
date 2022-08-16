import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import MorePosts from "../MorePosts";
import PostsFeed from "../PostsFeed";

const SearchTag = (props) => {
  const { auth } = useAuth();
  const { postList, handleLikeClicked } = props;
  const [showMore, setShowMore] = useState(false);
  const [postId, setPostId] = useState("");


  function showMoreHandler(id) {
    if (!showMore) {
      setPostId(id);
      setShowMore(!showMore);
    } else {
      setPostId("");
      setShowMore(!showMore);
    }
  }
  return (
    <>
      {showMore
        ?
        <MorePosts
          postId={postId}
          showMoreHandler={showMoreHandler}
          handleLikeClicked={handleLikeClicked}
        />

        : null}

      {!showMore
        ?
        postList.map(post =>
          <PostsFeed
            user={post?.userId}
            postId={post.id}
            photo={post.photo}
            commentList={post.commentList}
            description={post.description}
            creationDate={post.creationDate}
            numLikes={post?.postUserLikeList.length}
            tagList={post?.tagList}
            name={post?.userId?.name}
            like={post?.postUserLikeList.some(
              (like) => like.userId === auth.id
            )}
            key={post.id}
            showMoreHandler={showMoreHandler}
            handleLikeClicked={handleLikeClicked}


          />)
        : null}
    </>
  );
};

export default SearchTag;
