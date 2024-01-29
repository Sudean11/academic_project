import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

function Posts(props) {
  const [postState, setPostsState] = useState([
    { id: 1, title: "Iphone 12", content: "this is content", author: "Bikash" },
    { id: 2, title: "Iphone 11", content: "this is content", author: "Pranjal" },
    { id: 3, title: "Iphone 13", content: "this is content", author: "Basanta" },
  ]);
  
  useEffect(()=>{
    if(props.updatedPost != null && props.selectedPost != null){
      let newPost = postState.map((post)=>
          post.id === props.selectedPost.id ? {...post, title: props.updatedPost} : post
        );
      setPostsState(newPost);
      props.revertUpdatedPost();
    } 
  }, [props.updatedPost, props.selectedPost, props, postState])

  const postDesign = postState.map((singlePost)=>{
    return <PostCard key={singlePost.id} post={singlePost} setPostFromChild= {props.setPostFromChild}></PostCard>
  })

  return (
    <div className="info-container">
        {postDesign}
    </div>
  );
}

export default Posts;
