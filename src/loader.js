const URL = ""

export const indexLoader = async () =>{
    const response = await fetch(URL + "/vehicle/")
    const vehicle = await response.json()
    return vehicle
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/vehicle/${params.id}/`)
    const vehicle = await response.json()
    return vehicle
}    