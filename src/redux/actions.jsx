export const updatePostTitle = (title) => ({
    type: 'UPDATE_POST_TITLE',
    payload: title,
});
  

export const updatePost = (id, title) => ({
    type: 'UPDATE_POST',
    payload: { id, title },
});

export const selectPost = (postId) =>{
    return {
        type: "SELECT_POST",
        payload: postId,
    };
}


export const updateSelectedPost = (post) =>{
    return {
        type: "UPDATE_SELECTED_POST",
        payload: post,
    };
}

