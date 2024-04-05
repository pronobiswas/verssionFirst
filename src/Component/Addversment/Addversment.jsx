import React from 'react'
import './addversmentStyle.css'
import './style.scss'

const Addversment = ({ShowAdssForm , hideAddsFrom}) => {

  let handleCloseSpan =()=>{
    hideAddsFrom(false)
  };
  return (
    <>
    {
      ShowAdssForm &&
    <section id='addsSubmitFrom'>
      <div className="addsFormContainer">

        <div className="addsFormContainerWarpper">
          <span onClick={handleCloseSpan} className="postClose">X</span>

          <div className="inputGrup">

            <div className="adsUserInputs">

              <div className="inputformBox">
                <div className="labels">
                  <label htmlFor="xx">Name</label>
                </div>
                <div className="inputs">
                  <input type="text" />
                </div>
              </div>
              <div className="inputformBox">
                <div className="labels">
                  <label htmlFor="xx">address</label>
                </div>
                <div className="inputs">
                  <input type="text" />
                </div>
              </div>
              <div className="inputformBox">
                <div className="labels">
                  <label htmlFor="xx">catagory</label>
                </div>
                <div className="inputs">
                  <select name="" id="">
                    <option value="option">option</option>
                    <option value="option">option</option>
                    <option value="option">option</option>
                    <option value="option">option</option>
                    <option value="option">option</option>
                  </select>
                </div>
              </div>
              <div className="inputformBox">
                <div className="labels">
                  <label htmlFor="xx">location</label>
                </div>
                <div className="inputs">
                  <input type="text" />
                </div>
              </div>
              <div className="inputformBox">
                <div className="labels">
                  <label htmlFor="xx">contact</label>
                </div>
                <div className="inputs">
                  <input type="text" />
                </div>
              </div>

            </div>
            <div className="mediaInput">
              <div className="pic"></div>
            </div>

          </div>

          <div className="inputGroopTwo">
            <h3>write a proper description about your app</h3>
            <textarea name="" id="" cols="73" rows="10"></textarea>
            <button>post here</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore fugit rerum dolore eveniet. Id iste in ab ratione distinctio.</p>
          </div>

        </div>

      </div>
    </section>
    }
    </>
  )
}

export default Addversment
