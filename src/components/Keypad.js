// Code Keypad Component Here
import React, { Component } from 'react'
class Keypad extends Component {
    
    handleKeyUp = (e) => {
        console.log(`Entering password...`)
    }
    
    render(){
        return(
            <div>Keypad
                <input onKeyUp={this.handleKeyUp} type="password" />
            </div>
        )
    }
}
export default Keypad