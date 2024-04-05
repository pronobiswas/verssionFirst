import { useState } from 'react';
import './App.css';

import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import LoginForm from './Component/LogInForm/LoginForm';
import RegestionForm from './Component/RegestionForm/RegestionForm';
import Mysliders from './Component/SliderComponent/Mysliders';
import Addversment from './Component/Addversment/Addversment';




function App() {

  let [showModal , setShowModal] = useState(false);

 let handleBtn=()=>{
  setShowModal(true)
  
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
      <LoginForm show = {showModal} hide={setShowModal}></LoginForm>
      <section id="AddComponent">

        <nav className="menuwarpper">

          <ul className='cataGoryTxt'>
            
            {/* ==================basavara============ */}
            <li className="catagoryTxtItem">
              <a href="#">বাসা <span>ভাড়া</span></a>
              <div className="subCatagory">
                <ul className="subCatagoryList">
                  <li className="subCatagoryListItem"> স্টুডেন্ট অ্যান্ড ব্যাচেলর বাসা</li>
                  <li className="subCatagoryListItem">ফ্যামিলি বাসা</li>
                  <li className="subCatagoryListItem">ফ্ল্যাট অ্যান্ড এপার্টমেন্ট</li>
                </ul>
              </div>
            </li>
            {/* ===============hotel vara========== */}
            <li className="catagoryTxtItem">
              <a href="#">হোটেল  <span>ভাড়া</span> </a>
              {/* <div className="subCatagory">
                <ul className="subCatagoryList">
                  <li className="subCatagoryListItem"> স্টুডেন্ট অ্যান্ড ব্যাচেলর বাসা</li>
                  <li className="subCatagoryListItem">ফ্যামিলি বাসা</li>
                  <li className="subCatagoryListItem">ফ্ল্যাট অ্যান্ড এপার্টমেন্ট</li>
                </ul>
              </div> */}
              </li>

            <li className="catagoryTxtItem"><a href="#">
              গাড়ি  <span>ভাড়া</span> </a>
              <div className="subCatagory">
                <ul className="subCatagoryList">
                  <li className="subCatagoryListItem"> প্রাইভেট কার</li>
                  <li className="subCatagoryListItem">বাস অ্যান্ড ট্রাক</li>
                  <li className="subCatagoryListItem">বাইক অ্যান্ড সিএনজি </li>
                </ul>
              </div>
            </li>

            <li className="catagoryTxtItem">
              <a href="#">দোকান <span>ভাড়া</span> </a>
              <div className="subCatagory">
                <ul className="subCatagoryList">
                  <li className="subCatagoryListItem"> স্টোর অ্যান্ড শোরুম </li>
                  <li className="subCatagoryListItem">গোডাউন</li>
                  <li className="subCatagoryListItem">মার্কেট </li>
                </ul>
              </div>
            </li>

            <li className="catagoryTxtItem">
              <a href="#">ডেকরেশন <span>ভাড়া</span> </a>
            </li>

            <li className="catagoryTxtItem"><a href="#">অন্যান <span>ভাড়া</span> </a></li>
            <li className="catagoryTxtItem"><a href="#">
              সেবা <span></span> </a>
              <div className="subCatagory">
                <ul className="subCatagoryList">
                  <li className="subCatagoryListItem"> রেস্টুরেন্ট সার্ভিস</li>
                  <li className="subCatagoryListItem">টিউটর-সার্ভিস</li>
                  <li className="subCatagoryListItem">নার্সিং-সার্ভিস</li>
                  <li className="subCatagoryListItem">ওয়ার্ক অ্যান্ড সার্ভিস</li>
                </ul>
              </div>
            </li>
          </ul>

        </nav>
       
      </section>
      {/* <Mysliders/> */}
      <Addversment show = {showModal} hide={setShowModal}/>
    </>
  )
}

export default App
