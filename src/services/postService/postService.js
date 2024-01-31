import { setupPost, updateSelectedPost } from "../../redux/actions";
import { fetchService } from "../apiService";
import store from "../../redux/store";

const fetchPosts = async () => {
    let a = await fetchService.get("posts");
    console.log("Initial State:", a);
    store.dispatch(setupPost(a));
};

const fetchPostById=async (id)=>{
    let result = await fetchService.get("posts/"+id);
    store.dispatch(updateSelectedPost(result));
}

const deletebyPostId = async (id) =>{
    await fetchService.deleteById("posts/"+ id);
    fetchPosts();
}


export  {fetchPosts, fetchPostById, deletebyPostId};