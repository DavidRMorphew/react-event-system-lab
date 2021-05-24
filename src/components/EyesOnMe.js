// Code EyesOnMe Component Here
import React, { Component } from 'react'
class EyesOnMe extends Component {
    
    handleFocus = (e) => {
        console.log('Good!')
    }

    handleBlur = (e) => {
        console.log('Hey! Eyes on me!')
    }
    
    render(){
        return(
            <div>eyesonme
                <button className="btn" onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
            </div>
        )
    }
}
export default EyesOnMe