import store from "../../redux/store";
import { fetchService } from "../apiService";

const fetchUsers = async () => {
    let a = await fetchService.get("users");
    console.log("Users here:", a);
    return a;
};

const saveUser = async (post) => {
    await fetchService.post("users/"+post.user_id+"/posts", post);
}


export { fetchUsers, saveUser};