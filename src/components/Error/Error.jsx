import React from 'react'
import "./ErrorStyle.css"

function Error() {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col error-body'>
        <h1 className='text-5xl text-center text-red-500'>Unexpected Application Error!</h1>
        <h2 className='text-5xl text-center text-red-500 my-5'>404: Error Not Found</h2>
        
        <p className='text-white text-3xl'>👋 Hey developer,  <span>Fix It!</span></p>
    </div>
  )
}
export default Error;