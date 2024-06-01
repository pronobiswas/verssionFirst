import React from 'react'
import { useState } from 'react';
import '../../App.css';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src="pic.png" alt="png" />
            </div>
            <div className="mid">
              <div className="location">
                <h4>location</h4>
                <div className="locationDropDwon">
                  <ul>
                    <li>
                      hello world
                      <div className="widghtGet">
                        <ul>
                          <li>side out menu</li>
                          <li>side out menu</li>
                          <li>side out menu</li>
                        </ul>
                      </div>

                    </li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                  </ul>
                </div>
              </div>
              
              <input type="text" placeholder='search'/>
              <span className='searchIcon'> <CiSearch /></span>
            </div>
            
            <div className="add">
              <div className="langTogle">
                en/bn
              </div>
              <a href='' className='addBtn' >adds here</a>
              <a href='/login' className='login'><span><FaUserCircle /></span>login</a>
            </div>

          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Header
