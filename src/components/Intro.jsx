import React from 'react'
import { Form, NavLink } from 'react-router-dom'
const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
        <Form
        method='post'
        >
        <input type="text"
         name="userName"
         placeholder='What is your name?'
         aria-label='Your Name'
           /> 
        </Form>
      </div>
    </div>
  )
}

export default Intro