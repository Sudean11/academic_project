import React, { useState } from "react";
import Posts from "../components/Posts/Posts";
import UpdateTitle from "../components/NewPost/UpdateTitle";
import PostDetail from "../components/NewPost/PostDetail";
import AddNewPost from "../components/NewPost/AddNewPost";
import { SelectedPostContext } from "../context/Context";

function Dashboard(props) {
  const [selectedPost, setSelectedPost] = useState({title: "title"});

  const updateSelectedPost = (post) => {
    setSelectedPost(post);
  };

  const postDetail = () => {
    return <PostDetail></PostDetail>;
  };

  return (
    <div className="main-container">
      Welcome to WAA
      <div>
        <AddNewPost></AddNewPost>
      </div>
      <SelectedPostContext.Provider
        value = {{selectedPost, updateSelectedPost}}
        >
        <Posts />
        <UpdateTitle></UpdateTitle>
        {postDetail()}
      </SelectedPostContext.Provider>

    </div>
  );
}

export default Dashboard;
