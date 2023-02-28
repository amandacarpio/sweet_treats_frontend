import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Treats = (props) => {
    const posts = useLoaderData()
    return (
        <>
        <h1 className="myCart">My Cart</h1>
        <div className="items">
            {posts.map((post) => <Post post={post} key={post.id} />)} 
        </div>
        </>
    )
};

export default Treats;