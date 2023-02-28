import { redirect } from "react-router-dom"

const URL = "https://sweettreats.onrender.com"

// CREATE ACTION
export const createAction = async({request}) => {

    // get form data
    const formData = await request.formData()

    // construct request body
    const newTreat = {
        Dessert_Name: formData.get("Dessert_Name"),
        Allergies: formData.get("Allergies"),
        specify_allergy: formData.get("specify_allergy"),
        Dessert_Details: formData.get("Dessert_Details"),
        Email: formData.get("Email"),
        Budget: formData.get("BUDGET_OPTIONS")
    }
    console.log(newTreat)
    await fetch(URL + "/treat/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTreat)
    })

    return redirect("/treats")
}

// UPDATE ACTION
export const updateAction = async({request, params}) => {

    // get form data
    const formData = await request.formData()

    // get treat data
    const id = params.id
    let al = formData.get("Allergies")
    if (al === null) {
        al = false
    } else {
        al = true
    }
    // construct request body
    const updatedTreat = {
        Dessert_Name: formData.get("Dessert_Name"),
        Allergies: al,
        specify_allergy: formData.get("specify_allergy"),
        Dessert_Details: formData.get("Dessert_Details"),
        Email: formData.get("Email"),
        Budget: formData.get("BUDGET_OPTIONS")
    }

    //send request to backend
    console.log(updatedTreat)
    await fetch(URL + `/treat/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTreat)
    })

    return redirect(`/treat/${id}`)
}

export const deleteAction = async({params}) => {

    // get treat id
    const id = params.id

    //send request to backend
    await fetch(URL + `/treat/${id}/`, {
        method: "delete",
    })

    return redirect("/treats")
}