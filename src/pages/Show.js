import { useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
    const post = useLoaderData()
    console.log(post.specify_allergy)
    return (
        <>
        <div className="firstShowSection">
        <h1 className="createH1">You ordered...</h1>
        <h2>{post.Dessert_Name}</h2>
        <h4>Allergies specified: {post.Allergies ? <p>{post.specify_allergy}</p> : 'None'}</h4>
        <h4>Details: {post.Dessert_Details}</h4>
        <h4>Budget: {post.Budget}</h4>
        </div>
        <h2 className="showH2">Need to Update?</h2>
        <Form action={`/update/${post.id}`} method="POST">
          <div className="ugly">
          <label className="updateLabel">Edit Dessert Name:</label>
          <input type="text" name="Dessert_Name" placeholder="Dessert Name" defaultValue={post.Dessert_Name}/>
          <div className="showBool">
          <label className="updateLabel">Allergies?</label>
          <input type="checkbox" name="Allergies" defaultChecked={false} defaultValue={post.Allergies}/>
          </div>
          <label className="updateLabel">Edit Allergy Notes:</label>
          <input type="text" name="specify_allergy" placeholder="Please be as specific as possible" defaultValue={post.specify_allergy}/>
          <label className="updateLabel">Edit Details:</label>
          <input type="text" name="Dessert_Details" placeholder="Please be as descriptive as possible. We want to ensure your dessert is made exactly how you want it." defaultValue={post.Dessert_Details}/>
          <label className="updateLabel">Update Budget:</label>
          <select name="BUDGET_OPTIONS" id="options" defaultValue={post.Budget}>
                <option value="Low">Low ($1 - $50)</option>
                <option value="Medium">Medium ($51 - $100)</option>
                <option value="High">High ($101 or more)</option>
          </select>
          <label className="updateLabel">Update Email:</label>
          <input type="text" name="Email" placeholder="Email" defaultValue={post.Email}/>
          <button>Update Dessert</button>
          </div>
        </Form>
        <Form action={`/delete/${post.id}`} method="POST">
        <button>Delete</button>
        </Form>
        </>
    )
};

export default Show;