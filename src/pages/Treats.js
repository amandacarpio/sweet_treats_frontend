import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Treats = (props) => {
    const posts = useLoaderData()
    return (
        <>
            {posts.map((post) => <Post post={post} key={post.id} />)} 
        </>
    )
};

export default Treats;