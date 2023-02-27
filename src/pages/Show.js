import { useLoaderData } from "react-router-dom";

const Show = (props) => {
    const post = useLoaderData()

    return (
        <>
        <h1 className="createH1">You ordered...</h1>
        <h2>{post.Dessert_Name}</h2>
        <h4>Allergies specified: {post.Allergies ? post.If_yes_please_specify : 'None'}</h4>
        <h4>Details: {post.Dessert_Details}</h4>
        <h4>Budget: {post.Budget}</h4>
        </>
    )
};

export default Show;