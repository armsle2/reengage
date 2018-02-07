import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast } from 'react-materialize';
import '../styles/SignIn.css';


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
        <Section>
            <Parallax className='parallax1' imageSrc="https://iso.500px.com/wp-content/uploads/2015/11/photo-129299193.jpg"/>  
                <Section>
                    <Row>
                        <form>
                            <Col s={6} className='offset-l3'>
                                <input 
                                    label="email"
                                    name="email"
                                    type="email"
                                    placeholder="email" 
                                    value={this.state.email} 
                                    onChange={e => this.change(e)}
                                />
                            </Col>
                            <Col s={6} className='offset-l3'>
                                <input 
                                    label="password"
                                    name="password"
                                    type="password"
                                    placeholder="password" 
                                    value={this.state.password} 
                                    onChange={e => this.change(e)}
                                />
                            </Col>
                            <Col s={6} className='buttons center-align offset-l3'>
                                <Button waves='light'>
                                    Sign In 
                                    <Icon right>send</Icon>
                                </Button>
                                <Button waves='light'>
                                     Sign Up 
                                    <Icon right>assignment</Icon>
                                </Button>
                            </Col>
                        </form>
                    </Row>
                </Section>

        </Section>  
       );
   }
}
