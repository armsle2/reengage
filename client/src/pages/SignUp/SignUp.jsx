import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Modal } from 'react-materialize';
import styles from './SignUp.css';
import API from "../../utils/API";

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

   handleCustomerSubmit = e => {
       e.preventDefault();
            if(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password ) {
            API.saveCustomer({
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: ""
            })
            .catch(err => console.log(err));
        } 
    }
    
    handleCompanySubmit = e => {
        e.preventDefault();
        if(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password ) {
            API.saveCompany({
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: ""
            })
            .catch(err => console.log(err));
        }
    }

   render(){
       return(
           <Section>
                <Row>
                    <Col s={8} className='center-align offset-l2'>
                        <h1>Sign Up Below</h1>
                    </Col>
                </Row>
                <Row>
                        <Col s={4}>
                        </Col>
                        <Modal
                            header='Customers Sign Up'
                            trigger={<Button>Customer Sign Up</Button>}>
                            <Section>
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
                                        <Col s={3}>
                                        </Col>
                                        <Button s={2} onClick={this.handleCustomerSubmit}>                                        
                                        Create Customer Account 
                                        <Icon right>check</Icon>
                                        </Button>

                                </Row>
                            </Section>
                        </Modal>
                        <Modal
                            header='Comapany Sign Up'
                            trigger={<Button>Company Sign Up</Button>}>
                            <Section>
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
                                        <Col s={3}>
                                        </Col>
                                        <Button s={2}  onClick={this.handleCompanySubmit}>                                      
                                        Create Company Account 
                                        <Icon right>check</Icon>
                                        </Button>

                                </Row>
                            </Section>
                        </Modal>
                </Row>
            </Section>
       );
   }
}