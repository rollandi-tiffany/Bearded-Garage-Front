const URL = ""

export const indexLoader = async () =>{
    const response = await fetch(URL + "/customers/")
    const customers = await response.json()
    return customers
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/customers/${params.id}/`)
    const customer = await response.json()
    return customer
}    