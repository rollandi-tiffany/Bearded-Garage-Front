
import './App.css';
import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function App() {
 
  return (
    <div className='App'>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Bearded Garage</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {currentUser ? (
              <li>
                <form onSubmit={e => submitLogout(e)}>
                  <button type="submit" className="btn waves-effect waves-light">Log out</button>
                </form>
              </li>
            ) : (
              <li>
                <button id="form_btn" onClick={updateFormBtn} className="btn waves-effect waves-light">Signup</button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {currentUser ? (
          <li>
            <form onSubmit={e => submitLogout(e)}>
              <button type="submit" className="btn waves-effect waves-light">Log out</button>
            </form>
          </li>
        ) : (
          <li>
            <button id="form_btn" onClick={updateFormBtn} className="btn waves-effect waves-light">Register</button>
          </li>
        )}
      </ul>

      <div className="center">
        <img src={process.env.PUBLIC_URL + '/images/Pic.jpeg'} alt="Bearded Garage Logo" className="responsive-img materialboxed" />
      </div>

      {registrationToggle ? (
        <div className="center">
          <form onSubmit={e => submitRegistration(e)}>
            <div className="input-field">
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="input-field">
              <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn waves-effect waves-light">Submit</button>
          </form>
        </div>
      ) : (
        <div className="center">
          <form onSubmit={e => submitLogin(e)}>
            <div className="input-field">
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field">
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn waves-effect waves-light">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
