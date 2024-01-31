import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deletebyPostId } from "../../services/postService/postService";
import { Button } from "react-bootstrap";

const PostDetail = ({ selectedPost }) => {
  useEffect(() => {
    console.log(selectedPost)
  }, [selectedPost]);


  const deleteOperation=()=>{
    deletebyPostId(selectedPost.id);
  }

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
        <div className="delete-button">
          <Button className="btn-danger" onClick={deleteOperation}>Delete</Button>
        </div>
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
