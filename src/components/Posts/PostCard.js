import React, { useContext } from "react";
import { connect } from "react-redux";
import {updateSelectedPost} from "./../../redux/actions";
import { fetchService } from "../../services/apiService";
import { fetchPostById } from "../../services/postService/postService";
import { SelectedPostContext } from "../../context/Context";

const PostCard =(props)=> {
  const selectedPost = useContext(SelectedPostContext);

  const cardClicked = async() => {
    fetchPostById(props.post.id);
    selectedPost.updateSelectedPost(props.post);
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
