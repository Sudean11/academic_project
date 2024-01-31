import React from "react";
import { connect } from "react-redux";
import {updateSelectedPost} from "./../../redux/actions";
import { fetchService } from "../../services/apiService";
import { fetchPostById } from "../../services/postService/postService";

const PostCard =(props)=> {
  const cardClicked = async() => {
    fetchPostById(props.post.id);
  };
  return (
      <div className="info-box hover-element" onClick={cardClicked}>
        <div className="info-content">{props.post.title}</div>
        <div className="info-content">{props.post.author}</div>
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedPost: post => dispatch(updateSelectedPost(post))
  }
}

export default connect(null, mapDispatchToProps)(PostCard) ;
