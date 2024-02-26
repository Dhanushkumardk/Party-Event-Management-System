
import React, { useState } from 'react';
import '../assets/css/LogReg.css';
import { NavLink } from "react-router-dom";


const RegPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');



  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('ConPassword:', conPassword);

    
    setName('');
    setEmail('');
    setPassword('');
    setConPassword('');

  };

  return (
    <div>
      <form onSubmit={handleLogin} className='form'>
      <h2>Signup</h2>
      <div>
          <label htmlFor="name"></label>
          <input className='in'
            type="text"
            id="name"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input className='in'
            type="email"
            id="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input className='in'
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="conPassword"></label>
          <input className='in'
            type="password"
            id="conPassword"
            value={conPassword}
            placeholder='Confirm Password'
            onChange={(e) => setConPassword(e.target.value)}
            required
          />
        </div>
        <div>
        </div>
        <div>
          <button id='btn'
          type="submit">Register
          </button>
        </div>
      <NavLink to="/">Already registered? Login</NavLink>
      </form>
      {/* <NavLink to="/adminLogin">Admin Login</NavLink> */}

    </div>
  );
};


export default RegPage;
