import { PostDetails } from "./PostDetails";
import { PostForm } from "./PostForm";
import PostList from "./PostList"
import { Routes, Route, Navigate} from "react-router-dom";
import { UserPost } from "./UserPost";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<PostList />}/>
            <Route path="/posts/create" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/users/:id" element={<UserPost />} />
        </Routes>
    )
}