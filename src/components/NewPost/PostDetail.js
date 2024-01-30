import React, { useEffect } from "react";
import { connect } from "react-redux";

const PostDetail = ({ selectedPost }) => {
  useEffect(() => {
    console.log(selectedPost)
  }, [selectedPost]);

  if (selectedPost == null) {
    return <div></div>;
  } else {
    return (
      <div className="detail-box">
        <div>
          <h3>
            <u>MIU</u>
          </h3>
        </div>
        <div>{selectedPost.author}</div>
        <div>{selectedPost?.content}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.posts.selectedPost,
  };
};

export default connect(mapStateToProps)(PostDetail);
