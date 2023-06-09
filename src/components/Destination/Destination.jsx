import React from 'react'
import "./DestinationStyle.css"
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className='destination'>
        <h1 className='text-center'>Destination Page</h1>
        <p className='text-center'>Tours give you the opportunity to live</p>

        <DestinationData 
          classname="first-des"
          heading="Taal Volcano, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto, nobis unde incidunt nisi cumque repellendus, blanditiis veniam magni iste dolore labore. Ex necessitatibus facilis voluptas sit, pariatur quae itaque officia aliquid molestias distinctio eligendi sed perferendis veritatis, non doloremque exercitationem? Temporibus vero id, ullam consectetur dolorum similique quam officia?"
          img1="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          img2="https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />

        <DestinationData 
          classname="first-des-reverse"
          heading="Mt. Daguldul, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto, nobis unde incidunt nisi cumque repellendus, blanditiis veniam magni iste dolore labore. Ex necessitatibus facilis voluptas sit, pariatur quae itaque officia aliquid molestias distinctio eligendi sed perferendis veritatis, non doloremque exercitationem? Temporibus vero id, ullam consectetur dolorum similique quam officia?"
          img1="https://images.unsplash.com/photo-1439393161192-32360eb753f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          img2="https://plus.unsplash.com/premium_photo-1670055126633-f409ab387cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />

    </div>
  )
}
export default Destination;