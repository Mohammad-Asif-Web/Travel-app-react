import React from 'react'
import "./LoginStyle.css"

function Login() {
  return (
    <div>
      <a href="/" className='text-4xl block text-center font-bold text-[#01959a] mt-10'>Trippy</a>
      <div className="container flex gap-5 flex-wrap p-2 my-0 mx-auto w-max[800px] items-center mt-20">
        <div className="flex-1 p-1 text-center w-full h-[500px]">
          <img src="https://images.unsplash.com/photo-1573481214476-b644c8e2203d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
        <div className="form flex-1 p-1">
          <h2 className='text-4xl font-bold text-center mb-7 text-[#01959a]'>Log In</h2>
          <form>
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="password" name="password" placeholder="Your Password" required />
            <input type="submit" value="Log In" />
          </form>
          <span className='block text-center text-sm'>Don't Have an Account</span>
          <a href="/signup" className='flex items-center justify-center gap-3 text-2xl'>Create a new one</a>
        </div>
      </div>
  </div>
  )
}
export default Login;