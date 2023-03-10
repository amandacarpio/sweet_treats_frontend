// My Deployed API URL
const URL = "https://sweettreats.onrender.com"

// createLoader
export const createLoader = async() => {
    const response = await fetch(URL + "/treat")
    const treats = await response.json()
    return treats
};

// showLoader
export const showLoader = async({params}) => {
    const response = await fetch(URL + `/treat/${params.id}/`)
    const treat = await response.json()
    return treat
};