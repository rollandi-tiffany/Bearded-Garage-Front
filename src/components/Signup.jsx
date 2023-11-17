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
    return (
        <div className="row">
          <div className="col s12 l4 offset-l4">
            <div className="card">
              <div className="card-action grey white-text">
                <h3>Please Signup</h3>
              </div>
              <div className="card-content">
              <div className="form-field">
                  <input
                    type="text"
                    name="fullName"
                    className="validate grey-text text-darken-2"
                    style={{ backgroundColor: "grey" }}
                    placeholder="Enter Full Name"
                    value={credentials.fullName}
                    onChange={inputChanged}
                  />
                </div>
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
              <button className="btn waves-effect grey" type="button" onClick={signup}>
                Signup
              </button>
            </div>
          </div>
        </div>
      );
    };
    



export default Signup