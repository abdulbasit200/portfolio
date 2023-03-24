import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Name"/>
            <label>Email</label>
            <input type="text" placeholder="Email"/>
            <label>Subject</label>
            <input type="text" placeholder="Subject"/>
            <label>Message </label>
            <textarea rows="6" placeholder="Type Your Messsage Here."/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form