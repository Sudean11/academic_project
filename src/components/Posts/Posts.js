import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { connect } from "react-redux";

const Posts =({posts}) =>{
  useEffect(() => {
    console.log('Initial State:', posts);
  }, [posts]); 

  const postDesign = posts.map((singlePost)=>{
    return <PostCard key={singlePost.id} post={singlePost} ></PostCard>
  });

  return (
    <div className="info-container">
        {postDesign}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
