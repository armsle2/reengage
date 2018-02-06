import React from "react";
import { format } from "path";

export default class Form extends React.Component {
   state = {
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
