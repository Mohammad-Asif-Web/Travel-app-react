import React from 'react'
import "./SignupStyle.css"
import { FaArrowLeft } from "react-icons/fa";

function Signup() {
  return (
    <div className="container flex gap-5 flex-wrap p-2 my-0 mx-auto w-max[800px] items-center mt-20">

      <div className="flex-1 p-1 text-center w-full h-[500px]">
        <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="form flex-1 p-1">
        <h2 className='text-4xl font-bold text-center mb-7 text-[#01959a]'>Sign Up</h2>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="password" name="password" placeholder="Your Password" required />
          <input type="submit" value="Sign Up" />
        </form>
        <a href="/" className='flex items-center justify-center gap-3 text-xl'><FaArrowLeft className='text-[#01959a]' /> Back to Home</a>
      </div>
      
    </div>
  )
}
export default Signup;