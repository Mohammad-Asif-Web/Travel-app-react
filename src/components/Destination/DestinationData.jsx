import React, { Component } from 'react'
import "./DestinationStyle.css"

class DestinationData extends Component {
  render() {
    return (
        <div className="first-des">
            <div className="des-text">
                <h2>Taal Volcano, Batangas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto, nobis unde incidunt nisi cumque repellendus, blanditiis veniam magni iste dolore labore. Ex necessitatibus facilis voluptas sit, pariatur quae itaque officia aliquid molestias distinctio eligendi sed perferendis veritatis, non doloremque exercitationem? Temporibus vero id, ullam consectetur dolorum similique quam officia?</p>
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="des" />
                <img src="https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="des" />
            </div>
        </div>
    )
  }
}
export default DestinationData;