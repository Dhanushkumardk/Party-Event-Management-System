import React from 'react'
import { Navbar } from '../Components/Navbar'
// import "../assets/css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='main'>
                <div className='home-container'>
                    <div className='home-l'>
                        <p className='home-title primary'>Party Event Management</p>
                        <p className='home-data'>
                        Welcome to Party Event Management, where we turn dreams into unforgettable celebrations! Your vision, our expertise
                        </p>
                        <div className='lee1'>
                        <div className='lee'>
                        <Link to="/events">
                          <button class="arrow-button">Book Events<span class="arrow"></span></button>
                          </Link>
                    </div>
                        </div>
                    </div>
                    <div className='home-r'>
                        <img src='https://cdn.dribbble.com/users/1021976/screenshots/2423268/1st-shot.gif' className='home-r-img'/>
                    </div>

                </div>
        </div>
    </>
  )

}
