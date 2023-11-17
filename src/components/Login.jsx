import { useState } from "react";
//import { Link } from "react"
import "materialize-css/dist/css/materialize.min.css";

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
    return (
        <div className="row">
          <div className="col s12 l4 offset-l4">
            <div className="card">
              <div className="card-action grey white-text">
                <h3>Welcome, Please Login</h3>
              </div>
              <div className="card-content">
                <div className="form-field">
                  <input
                    type="text"
                    name="username"
                    className="validate grey-text text-darken-2"
                    style={{ backgroundColor: "grey" }}
                    placeholder="Enter Username"
                    value={credentials.username}
                    onChange={inputChanged}
                  />
                </div>
                <div className="form-field">
                  <input
                    type="password"
                    name="password"
                    className="validate grey-text text-darken-2"
                    style={{ backgroundColor: "grey" }}
                    placeholder="Enter Password"
                    value={credentials.password}
                    onChange={inputChanged}
                  />
                </div>
              </div>
              <button className="btn waves-effect grey" type="button" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;