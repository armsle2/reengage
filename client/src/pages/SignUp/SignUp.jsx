import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input } from 'react-materialize';
import styles from './SignUp.css';

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
           <Section>
                <Row>
                    <Col s={8} className='center-align offset-l2'>
                        <h1>Sign Up Below</h1>
                    </Col>
                </Row>
                <Row>
                        <Col s={5}>
                        </Col>
                        <Input s={1}
                        name='group1' 
                        type='radio' 
                        value='green' 
                        label='Customer' 
                        className='with-gap' 
                        />
                        <Input s={1}
                        name='group1' 
                        type='radio' 
                        value='green' 
                        label='Business' 
                        className='with-gap' 
                        />
                </Row>
                <Row>
                        <Col s={2}>
                        </Col>
                        <Input s={4}
                        name = "firstName"
                        label="First Name"
                        placeholder="First name" 
                        value={this.state.firstName} 
                        onChange={e => this.change(e)}
                        />
                        <Input s={4}
                        name = "lastName"
                        label="Last Name"
                        placeholder="last name" 
                        value={this.state.lastName} 
                        onChange={e => this.change(e)}
                        />
                </Row>
                <Row>
                        <Col s={3}>
                        </Col>
                        <Input s={6}
                        name = "email"
                        label="Email"
                        placeholder="email" 
                        value={this.state.email} 
                        onChange={e => this.change(e)}
                        />
                </Row>
                <Row>
                        <Col s={3}>
                        </Col>
                        <Input s={6}
                        name = "password"
                        label="Password"
                        type='password'
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={e => this.change(e)}
                        />
                </Row>
                <Row>
                        <Col s={5}>
                        </Col>
                        <Button s={2} waves='light' node='a' href='/UserHomepage'>
                        Create Account 
                        <Icon right>check</Icon>
                        </Button>

                </Row>
            </Section>
       );
   }
}