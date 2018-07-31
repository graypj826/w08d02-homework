import React, { Component } from "react";

class Login extends Component {
    constructor(){
        
        super();

        this.State= {
            username: "username",
            password: "password"
        }
    
        
    }
    
    
    handleChange = (e) => {
       this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.login(this.state.username);
    }

    
    render(){
       return(
            <div>
                <h1> Poke-nomics! Also Login. </h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="username" placeholder="username" 
                    onChange={this.handleChange}/> 
                    <input type="password" name="password" placeholder="
                    password" onChange={this.handleChange}/> 
                    <input type="submit" value="Login"/> 
                </form>
            </div>
        )
    }
}



export default Login;