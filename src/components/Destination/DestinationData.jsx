import React, { Component } from 'react'
import "./DestinationStyle.css"

class DestinationData extends Component {
  render() {
    return (
        <div className={this.props.classname}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="image">
                <img src={this.props.img1} alt="des_img1" />
                <img src={this.props.img2} alt="des_img2" />
            </div>
        </div>
    )
  }
}
export default DestinationData;