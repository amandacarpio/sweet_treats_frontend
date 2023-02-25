import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Homepage = (props) => {
    const treat = useLoaderData()
    return <>
    <div style={{textAlign: "center"}}>
    <h1>Welcome to Sweet Treats</h1>
    <h2>Notes are saying to make this the create a treat page</h2>
    <Form action="/create" method="post">
        <input type="text" name="Dessert_Name" placeholder="Create Dessert Name"/>
    </Form>
    </div>
    {/* {treat.map((post) => <Post post={post} key={post.id} />)} */}
    </>;
};
export default Homepage;