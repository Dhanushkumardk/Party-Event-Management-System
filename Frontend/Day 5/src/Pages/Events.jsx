
import React, { useState } from 'react';
import '../assets/css/LogReg.css';
import { Link } from "react-router-dom";
import { Navbar } from '../Components/Navbar'


const Events = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [description, setDescription] = useState('');



  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Date:', date);
    console.log('HeadCount:', headCount);
    console.log('Description:', description);

    
    setName('');
    setDate('');
    setHeadCount('');
    setDescription('');

  };

  return (
    <>
<Navbar/>
    <div>
      <form onSubmit={handleLogin} className='form'>
      <h2>Booking form</h2>
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
          <label htmlFor="date"></label>
          <input className='in'
            type="datetime-local"
            id="date"
            value={date}
            placeholder='Date'
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <select 
          name="Category"
          className="in"
          type="text"
        > <option>----Select Event Type----</option>
        <option value="Birthday">Birthday</option>
        <option value="Wedding">Wedding</option>
        </select>
        {/* <div>
          <label htmlFor="enentType"></label>
          <input className='in'
            type="eventType"
            id="eventType"
            value={eventType}
            placeholder='Event Type'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> */}
        <div>
          <label htmlFor="headCount"></label>
          <input className='in'
            type="headCount"
            id="headCount"
            value={headCount}
            placeholder='Head Count'
            onChange={(e) => setHeadCount(e.target.value)}
            required
          />
          
        </div>
        <div>
          <label htmlFor="description"></label>
          <input className='inputt'
            type="description"
            id="description"
            value={description}
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          
        </div>
        <div>
        </div>
        <div>
        <Link to="/dashboard">
          <button id='btn'>Book</button>
            </Link>
        </div>
      </form>

    </div>
    
    </>
  );
};


export default Events;
