const initialState = {
  posts: [
    { id: 1, title: "Iphone 12", content: "this is content", author: "Bikash" },
    {
      id: 2,
      title: "Iphone 11",
      content: "this is content",
      author: "Pranjal",
    },
    {
      id: 3,
      title: "Iphone 13",
      content: "this is content",
      author: "Basanta",
    },
  ],
  selectedPost: {
    id: 1,
    title: "Iphone 12",
    content: "this is content",
    author: "Bikash",
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_POST":
      return {
        ...state,
        selectedPost: action.payload,
      };
    case "UPDATE_POST_TITLE":
      const postId = state.selectedPost.id;
      const updatedPosts = state.posts.map((post) =>
        post.id === postId ? { ...post, title: action.payload } : post
      );
      const updatedSelectedPost = {
        ...state.selectedPost,
        title: action.payload,
      };
      return {
        ...state,
        posts: updatedPosts,
        selectedPost: updatedSelectedPost,
      };
    default:
      return state;
  }
};

export default postReducer;
