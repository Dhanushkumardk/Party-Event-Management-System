
import React, { useState } from 'react';
import '../assets/css/LogReg.css';
import { NavLink } from "react-router-dom";


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='form'>
      <h2>Admin Login</h2>
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
          <button id='btn'
          type="submit">Login
          </button>
        </div>
      <NavLink to="/">Back</NavLink>
      </form>
    </div>
  );
};


export default AdminLogin;
