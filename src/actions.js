import { redirect } from "react-router-dom";
const URL = ""

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newVehicle = {
        make: formData.get("make"),
        model: formData.get("model"),
        year: formData.get("year"),
        services: formData.get("services")
      };

      return await fetch(URL + "/vehicle", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newVehicle)
    })
    
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    
    const updatedVehicle = {
        make: formData.get("make"),
        model: formData.get("model"),
        year: formData.get("year"),
       services: formData.get("services")
    }

    await fetch(URL + `/vehicle/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedVehicle)
    })
    return true;
}

export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + `/vehicle/${id}/`, {
        method: "delete",
    })
    return redirect("/")
}