import React from "react";

function PostCard(props) {
  const cardClicked = () => {

    props.setPostFromChild(props.post);
  };
  return (
      <div className="info-box hover-element" onClick={cardClicked}>
        <div className="info-content">{props.post.title}</div>
        <div className="info-content">{props.post.author}</div>
      </div>
  );
}

export default PostCard;
