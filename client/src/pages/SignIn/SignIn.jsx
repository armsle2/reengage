import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Modal } from 'react-materialize';
import styles from './SignIn.css';






export default class SignIn extends React.Component {
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
            <Parallax className='parallax' imageSrc="http://www.freegreatpicture.com/files/photo105/52413-landscape.jpg"/>  
                <Section>
                    <Row>
                        <Col s={4} >
                        </Col>
                        <Col className="center-align">
                            <h4 className="sign-in-txt">Engage</h4>
                            <Modal
                                header='Customers Sign In'
                                trigger={<Button>Customer Sign In</Button>}>
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
                                        </Col>
                                    </Row>
                                </Section>
                            </Modal>
                            <Modal
                                header='Company Sign In'
                                trigger={<Button>Company Sign In</Button>}>
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
                                            <Button onClick={e => this.onSubmit(e)} node='a' href='/BusHomepage' waves='light'>
                                                Sign In 
                                                <Icon right>send</Icon>
                                            </Button>                                   
                                        </Col>
                                    </Row>
                                </Section>
                            </Modal>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={4} className="center-align offset-l4">
                                <h4 className="sign-in-txt">Not Engaging yet? Sign Up below</h4>
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
