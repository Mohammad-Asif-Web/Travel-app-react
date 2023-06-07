import React from 'react'
import "./DestinationStyle.css"
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className='destination'>
        <h1 className='text-center'>Destination Page</h1>
        <p className='text-center'>Tours give you the opportunity to live</p>

        <DestinationData />

    </div>
  )
}
export default Destination;