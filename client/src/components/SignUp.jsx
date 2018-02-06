import React from "react";
import { format } from "path";

export default class SignUp extends React.Component {
   state = {
       firstName: "",
       lastName: "",
       username: "",
       email: "",
       password: ""
   };
   change = e =>{
       this.setState({
           [e.target.name]:e.target.value
       })
   } 
   onSubmit
   render(){
       return(
           <form>
                <input 
                name = "firstName"
                placeholder="First name" 
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                />
                <br/>
                <input 
                name = "lastName"
                placeholder="last name" 
                value={this.state.lastName} 
                onChange={e => this.change(e)}
                />
                <br/>
                <input 
                name = "email"
                placeholder="email" 
                value={this.state.email} 
                onChange={e => this.change(e)}
                />
                <br/>
                <input 
                name = "password"
                type  = 'password'
                placeholder="password" 
                value={this.state.password} 
                onChange={e => this.change(e)}
                />
           </form>
       );
   }
}