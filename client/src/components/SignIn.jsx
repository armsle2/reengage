import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input } from 'react-materialize';
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
                        <Col s={3}></Col>
                        <Input s={6}
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="email" 
                            className='offset-l3'
                            value={this.state.email} 
                            onChange={e => this.change(e)}
                        />
                    </Row>
                    <Row>
                        <Col s={3}></Col>
                            <Input s={6}
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="password"
                                className='offset-l3' 
                                value={this.state.password} 
                                onChange={e => this.change(e)}
                            />
                    </Row>
                    <Row>
                        <Col s={4} className="center-align offset-l4">
                            <Button onClick={e => this.onSubmit(e)} node='a' href='/UserHomepage' waves='light'>
                                Sign In 
                                <Icon right>send</Icon>
                            </Button>
                            <Button node='a' href='/SignUp' waves='light'>
                                Sign Up 
                                <Icon right>assignment</Icon>
                            </Button>
                        </Col>
                    </Row>
                </Section>
        </Section>  
       );
   }
}
