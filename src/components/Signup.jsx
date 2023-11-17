import { useState } from "react";
//import { Link } from "react"

const Signup = ({}) =>{
    const [credentials, setCredentials] = useState({fullName: " ", username: " ", password: " "});

    const signup = ()=>{
        fetch("http://127.0.0.1:8000/customers/users/", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(credentials),
        })
        .then((data) => data.json())
        .then((data) => {
            userSignup(data.token);
        })
        .catch((error) => console.error(error))
    }

    const inputChanged=(event)=>{
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const userSignup=(token)=>{
        localStorage.setItem("authToken", token)
        console.log("logged in ")
    }
    return(
        <div>
            <h1>Please Signup</h1>
            <input type ="text" name="fullName" placeholder="Enter Full Name" value={credentials.fullName} onChange={inputChanged}/>
            <input type ="text" name="username" placeholder="Enter Username" value={credentials.username} onChange={inputChanged}/>
            <input type ="password" name="password" placeholder="Enter Password" value={credentials.password} onChange={inputChanged}/>
            <button onClick={signup}>Signup</button>
        </div>

    )
    
    


    }



export default Signup