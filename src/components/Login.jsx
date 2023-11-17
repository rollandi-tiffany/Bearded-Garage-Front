import { useState } from "react";
import { Link } from "react"

const Login = ({userLogin}) =>{
    const [credentials, setCredentials] = useState({username: " ", password: " "});

    const inputChanged=(event)=>{
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }
    return(
        <div>
            <h1>Welcome!</h1>
            <input type ="text" name="username" placeholder="Enter Username" value={credentials.username} onChange={inputChanged}/>
            <input type ="password" name="password" placeholder="Enter Password" value={credentials.password} onChange={inputChanged}/>
            <button onClick={Login}>Login</button>
        </div>

    )
    
    


    }



export default Login