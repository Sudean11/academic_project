import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { connect } from "react-redux";
import { setupPost } from "../../redux/actions";
import { fetchPosts } from "../../services/postService/postService";

const Posts = ({ posts, setupPost }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const postDesign = posts.map((singlePost) => {
    return (
      <PostCard
        key={singlePost.id}
        post={singlePost}></PostCard>
    );
  });

  return <div className="info-container">{postDesign}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setupPost: (posts) => dispatch(setupPost(posts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
