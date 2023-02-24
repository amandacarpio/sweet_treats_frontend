// My Deployed API URL
const URL = "https://sweettreats.onrender.com"

// showLoader
export const showLoader = async({params}) => {
    const response = await fetch(URL + `/treat/${params.id}/`)
    const treat = await response.json()
    return treat
}