import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)
  let handleBtn = ()=>{
  

  }
  

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
              <button className='addBtn'>adds here</button>
              <button onClick={handleBtn} className='login'><span><FaUserCircle /></span>login</button>
            </div>

          </nav>
        </div>
      </header>
      <section id="AddComponent">
        <ul className='cataGoryTxt'>
          <li className="catagoryTxtItem"><a href="#">Lorem, ipsum dolor.</a></li>
          <li className="catagoryTxtItem"><a href="#">Lorem, ipsum dolor.</a></li>
          <li className="catagoryTxtItem"><a href="#">Lorem, ipsum dolor.</a></li>
          <li className="catagoryTxtItem"><a href="#">Lorem, ipsum dolor.</a></li>
          <li className="catagoryTxtItem"><a href="#">Lorem, ipsum dolor.</a></li>
          <li className="catagoryTxtItem"><a href="#">Lorem, ipsum dolor.</a></li>
        </ul>
       
      </section>
      
    </>
  )
}

export default App
