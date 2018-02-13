import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Modal } from 'react-materialize';
import styles from './SignIn.css';
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";







export default class SignIn extends React.Component {
   state = {
       email: "",
       password: "",
       userId: "",
       companyID: "",
       redirect: false
   };
   change = e =>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }    
   
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.email && this.state.password){
            API.login({
            email: this.state.email,
            password: this.state.password
            }).then((response)=> {
                console.log(response);
                this.setState({userId: response.data});
            })
            .catch(err => console.log(err));
        }
    }

    onSubmitBus = (e) => {
        e.preventDefault();
        if(this.state.email && this.state.password){
            API.companyLogin({
            email: this.state.email,
            password: this.state.password
            }).then((response)=> {
                console.log(response);
                this.setState({companyID: response.data});
            })
            .catch(err => console.log(err));
        }
    }
 
   render(){
    //    const { redirect } = this.state;
    //    const { redirect_comp } = this.state;
       if (this.state.userId) {
           return <Redirect to={`/UserHomepage/${this.state.userId}`} />
       }
       if (this.state.companyID) {
           return <Redirect to={`/BusHomepage/${this.state.userId}`}/>
       }
       return(
        <Section>
            <Parallax className='parallax' imageSrc="http://www.freegreatpicture.com/files/photo105/52413-landscape.jpg"/>  
                <Section class="form">
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
                                        <Col s={4} className="center-align offset-l4 modal-action modal-close">
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
                                        <Col s={4} className="center-align offset-l4 modal-action modal-close">
                                            <Button onClick={e => this.onSubmitBus(e)} node='a' href='/BusHomepage' waves='light'>
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
