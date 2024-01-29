import React, { useState } from "react";
import PostCard from "./PostCard";

function Posts(props) {
  const [postState, setPostsState] = useState([
    { id: 1, title: "Iphone 12", content: "this is content", author: "Bikash" },
    { id: 1, title: "Iphone 11", content: "this is content", author: "Pranjal" },
    { id: 1, title: "Iphone 13", content: "this is content", author: "Basanta" },
  ]);
  
  const postDesign = postState.map((singlePost)=>{
    return <PostCard post={singlePost} setPostFromChild= {props.setPostFromChild}></PostCard>
  })

  return (
    <div className="info-container">
        {postDesign}
    </div>
  );
}

export default Posts;
