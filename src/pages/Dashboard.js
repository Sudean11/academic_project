import React from "react";
import Posts from "../components/Posts/Posts";
import UpdateTitle from "../components/NewPost/UpdateTitle";
import PostDetail from "../components/NewPost/PostDetail";
import AddNewPost from "../components/NewPost/AddNewPost";

function Dashboard(props) {
  const postDetail = () => {
    return <PostDetail></PostDetail>;
  };

  return (
    <div className="main-container">
      Welcome to WAA
      <div >
        <AddNewPost></AddNewPost>
      </div>
      <Posts />
      <UpdateTitle></UpdateTitle>
      {postDetail()}
    </div>
  );
}

export default Dashboard;
