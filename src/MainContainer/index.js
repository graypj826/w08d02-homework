import React, { Component } from "react"

class MainContainer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h1> Welcome to your Pokedex, {this.props.username} </h1>
            </div>  
        )
    }

}

export default MainContainer