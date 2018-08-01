import React, { Component } from "react"
   
class Pokemon extends Component {
    constructor(){
        super()
        
        this.state ={
            pokemons : []
        }
    }
    getPokemon = async () => {
        try{
            const pokemon = await fetch("http://pokeapi.salestock.net/api/v2/pokemon/")
            //I had to use the above url because the other pokemon url encountered a CORS error and I couldn't find a way to get around it with ReactJS that I was confident implementing.
            const pokemonJson = await pokemon.json();
            console.log(pokemonJson, "<--- this is pokemonJson")
            const pokemonResults = pokemonJson.results;
            console.log(pokemonResults)
            return pokemonResults;

        }catch (err){
            console.log("there's been an error in the catch block", err)
            return err
        }
    }
    componentDidMount(){
        this.getPokemon().then((data) =>  (this.setState({pokemons: data}))
        )
    }
   
    render(){
        console.log("this is the pokemon --->",this.state.pokemons)
        console.log("trying to sort through pokemon", this.state.pokemons[0])
        const pokemonList = this.state.pokemons.map((pokemon, i) =>{
            return <li key={i}>{pokemon.name}</li>
        })
        return(
            <div>
                <h1> Pikachu! </h1>
                {pokemonList}
            </div>
        )
    }
}

export default Pokemon