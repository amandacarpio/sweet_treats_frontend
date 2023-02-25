import { redirect } from "react-router-dom"

const URL = "https://sweettreats.onrender.com"

// CREATE ACTION
export const createAction = async({request}) => {

    // get form data
    const formData = await request.formData()

    // construct request body
    const newTreat = {
        Dessert_Name: formData.get("Dessert Name"),
        Allergies: formData.get("Allergies?"),
        specify_allergy: formData.get("If yes, please specify"),
        Dessert_Details: formData.get("Dessert Details (please be as specific as possible)"),
        Email: formData.get("Email"),
        Budget: formData.get("Budget")
    }

    await fetch(URL + "/treat/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTreat)
    })

    return redirect("/")
}

// UPDATE ACTION
export const updateAction = async({request, params}) => {

    // get form data
    const formData = await request.formData()

    // get treat data
    const id = params.id

    // construct request body
    const updatedTreat = {
        Dessert_Name: formData.get("Dessert Name"),
        Allergies: formData.get("Allergies?"),
        specify_allergy: formData.get("If yes, please specify"),
        Dessert_Details: formData.get("Dessert Details (please be as specific as possible)"),
        Email: formData.get("Email"),
        Budget: formData.get("Budget")
    }

    //send request to backend
    await fetch(URL + `/treat/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTreat)
    })

    return redirect(`/post/${id}`)
}

export const deleteAction = async({params}) => {

    // get treat id
    const id = params.id

    //send request to backend
    await fetch(URL + `/treat/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}