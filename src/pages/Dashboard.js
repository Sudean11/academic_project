import React, { useState } from 'react';
import Posts from '../components/Posts/Posts';
import UpdateTitle from '../components/NewPost/UpdateTitle';
import PostDetail from '../components/NewPost/PostDetail';

function Dashboard(props) {

    const [selectedPost, setSelectedPost] = useState(null);

    const postDetail = () => {
        if(selectedPost != null){
            return <PostDetail post={selectedPost}></PostDetail>
        }
    }

    const setPostFromChild=(post)=>{
        setSelectedPost(post);
        console.log("selectedPost is not null")
    }

    return (
        <div className = "main-container">
            Welcome to WAA
            <Posts setPostFromChild = {setPostFromChild}/>
            <UpdateTitle></UpdateTitle>
            {postDetail()}
        </div>
    );
}

export default Dashboard;