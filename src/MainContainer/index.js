import React, { Component } from "react"
import Pokemon from "../Pokemon/"

class MainContainer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h1> Welcome to your Pokedex, {this.props.username} </h1>
                <h2> Your Current Poke Team is: </h2>
                <Pokemon />
            </div> 
        )
    }

}

export default MainContainer