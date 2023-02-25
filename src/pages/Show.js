import { useLoaderData } from "react-router-dom";

const Show = (props) => {
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto",
    };

    return (
        <>
        <h1>{post.Dessert_Name}</h1>
        <h2>test</h2>
        <h3>Allergies: {post.Allergies ? 'Yes' : 'No'}</h3>
        <h4>{post.Dessert_Details}</h4>
        </>
    )
};

export default Show;