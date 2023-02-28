import { Form } from "react-router-dom";

const Create = (props) => {

    return <>
        <h1 className="createH1">Today's craving is...</h1>

        <Form action="/treat/create" method="post">
            <div className="createFields">
            <label>Name your dessert: </label>
            <input type="text" name="Dessert_Name" placeholder="Dessert Name"/>
            </div>
            <div className="createFields">
            <label className="createBool">Any allergies we should know about?</label>
            <input type="checkbox" name="Allergies" defaultChecked={false} />
            </div>
            <div className="createFields">
            <label>If yes, please specify:</label>
            <input type="text" name="specify_allergy" placeholder="Please be as specific as possible"/>
            </div>
            <div className="createFieldsForDetails">
            <label>Dessert Details:</label>
            <input type="text" name="Dessert_Details" placeholder="Please be as descriptive as possible. We want to ensure your dessert is made exactly how you want it."/>
            </div>
            <div className="createFields">
            <label>Budget:</label>
            <select name="BUDGET_OPTIONS" id="options">
                <option value="Low">Low ($1 - $50)</option>
                <option value="Medium">Medium ($51 - $100)</option>
                <option value="High">High ($101 or more)</option>
            </select>
            </div>
            <div className="createFields">
            <label>Email:</label>
            <input type="text" name="Email" placeholder="Email"/>
            </div>
            <button className="submitButton">ADD TO CART</button>
        </Form>
        </>

};


export default Create;