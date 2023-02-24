import { useLoaderData } from "react-router-dom";

const Show = (props) => {
    const data = useLoaderData()
    return (
        <>
        <h1>{data.Dessert_Name}</h1>
        <h2>test</h2>
        <h3>Allergies: {data.Allergies ? 'Yes' : 'No'}</h3>
        <h4>{data.Dessert_Details}</h4>
        </>
    )
};

export default Show;