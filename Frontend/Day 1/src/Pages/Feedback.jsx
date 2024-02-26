import React, { useState } from 'react';
import '../assets/css/LogReg.css';
import { Navbar } from '../Components/Navbar'



const Feedback = () => {
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
    <>
    <Navbar/>
    <div >
      <form onSubmit={handleLogin} className='form'>
      <h2>Feedback</h2>
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
        <label htmlFor="name"></label>
          <input className='inputt'
            type="text"
            id="name"
            value={name}
            placeholder='Comments'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <button id='btn'
          type="submit">Submit
          </button>
        </div>
      </form>

    </div>
    </>
  );
};


export default Feedback;
