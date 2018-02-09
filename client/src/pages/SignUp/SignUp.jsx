import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Modal } from 'react-materialize';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import styles from './SignUp.css';
import API from "../../utils/API";

export default class SignUp extends React.Component {
   state = {
       firstName: "",
       lastName: "",
       userName: "",
       companyName: "",
       email: "",
       password: "",
       phoneNumber: "",
       redirect_user: false,
       redirect_comp: false,
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
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    userName: this.state.userName,
                    email: this.state.email,
                    password: this.state.password,
                    phoneNumber: this.state.phoneNumber
                })
                .then((response) => {
                    this.setState({ redirect_user: true });
                    console.log(response)
                })
                .catch(err => console.log(err));
         }
         
    }
    
    handleCompanySubmit = e => {
        e.preventDefault();
        if(this.state.companyName && this.state.email && this.state.password ) {
            API.saveCompany({
                companyName: this.state.companyName,
                email: this.state.email,
                password: this.state.password
            })
            .then((response) => {
                alert(response._id)
                this.setState({ redirect_comp: true });
                console.log(response)
            })
            .catch(err => console.log(err));
        }
        
    }

   render(){
       const { redirect_user } = this.state;
       const { redirect_comp } = this.state;
       if (redirect_user) {
           return <Redirect to='/userhomepage'/>
       }
       if (redirect_comp) {
           return <Redirect to='/bushomepage'/>
       }
       return(
           <Section>
                <Row>
                    <Col s={8} className='center-align offset-l2'>
                        <h2>Sign Up Below</h2>
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
                                        name = "userName"
                                        label="userName"
                                        placeholder="userName" 
                                        value={this.state.userName} 
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
                                        <Input s={6}
                                        name = "phoneNumber"
                                        label="Phone Number"
                                        type='tel'
                                        placeholder="Phone Number" 
                                        value={this.state.phoneNumber} 
                                        onChange={e => this.change(e)}
                                        />
                                </Row>
                                <Row>
                                        <Button className="modal-action modal-close" onClick={this.handleCustomerSubmit}>                                        
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
                                        <Col s={3}>
                                        </Col>
                                        <Input s={6}
                                        name = "companyName"
                                        label="Company Name"
                                        placeholder="Company Name" 
                                        value={this.state.companyName} 
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
                                        <Button s={2} className="modal-action modal-close" onClick={this.handleCompanySubmit}>                                      
                                        Create Company Account 
                                        <Icon right>check</Icon>
                                        </Button>

                                </Row>
                            </Section>
                        </Modal>
                </Row>
                <Row>
                    <Col s={4} className="center-align offset-l4">
                        <h4 className="sign-in-txt">Already have an Account? Go login</h4>
                        <Button node='a' href='/#' waves='light'>
                            Back to Login 
                        </Button> 
                    </Col>
                </Row>
                <Row>
                    <Parallax className="parallax" imageSrc="https://i.unu.edu/media/ourworld.unu.edu-en/article/8564/Champions_of_Cumbria_Human_Landscapes1.jpg"/>
                </Row>
            </Section>
       );
   }
}
