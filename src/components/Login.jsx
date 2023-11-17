import { useState } from "react";
//import { Link } from "react"

const Login = ({}) =>{
    const [credentials, setCredentials] = useState({username: " ", password: " "});

    const login = ()=>{
        fetch("http://127.0.0.1:8000/auth/", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(credentials),
        })
        .then((data) => data.json())
        .then((data) => {
            userLogin(data.token);
        })
        .catch((error) => console.error(error))
    }

    const inputChanged=(event)=>{
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const userLogin=(token)=>{
        localStorage.setItem("authToken", token)
        console.log("logged in ")
    }
    return(
        <div>
            <h1>Welcome!</h1>
            <input type ="text" name="username" placeholder="Enter Username" value={credentials.username} onChange={inputChanged}/>
            <input type ="password" name="password" placeholder="Enter Password" value={credentials.password} onChange={inputChanged}/>
            <button onClick={login}>Login</button>
        </div>

    )
    
    


    }



export default Login