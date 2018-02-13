import React from "react";
import {format} from "path";
import {
    Button,
    Icon,
    Section,
    Row,
    Col,
    Parallax,
    Toast,
    Input,
    Modal
} from 'react-materialize';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import styles from './SignUp.css';
import API from "../../utils/API";
import images from "../../images/hybrid-437269.jpg"
import logo from "../../logo/engage.png"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const style = {
    margin: 5,
    logo: {
        margin: '-2% 25% -2% 25%',
        width: '50%',
        paddingTop: '5%'
    },
    headline: {
        margin: 10,
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 200,
        textAlign: 'center'
    },
    paper: {
        height: '50%',
        width: '70%',
        margin: 30,
        textAlign: 'center',
        display: 'inline-block'
    },
    signUp: {
        margin: 10,
        paddingTop: 2,
    },
    signIn: {
        marginTop: 0
    }
};

export default class SignUp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        companyName: "",
        email: "",
        password: "",
        phoneNumber: "",
        redirect_userId: "",
        redirect_compId: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCustomerSubmit = e => {
        e.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password) {
            API
                .saveCustomer({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber
            })
                .then((response) => {
                    this.setState({redirect_user: true});
                    console.log(response)
                })
                .catch(err => console.log(err));
        }

    }

    handleCompanySubmit = e => {
        e.preventDefault();
        if (this.state.companyName && this.state.email && this.state.password) {
            API
                .saveCompany({companyName: this.state.companyName, email: this.state.email, password: this.state.password})
                .then((response) => {
                    this.setState({redirect_compId: response.data._id});
                    console.log(response)
                })
                .catch(err => console.log(err));
        }

    }

    render() {
        const {redirect_userId, redirect_compId} = this.state;
        if (redirect_userId) {
            return <Redirect to='/userhomepage'/>
        }
        if (redirect_compId) {
            return <Redirect to={`/bushomepage/${this.state.redirect_compId}`}/>
        }
        return (
            <Section>
                <Section>
                    <Col s={12} m={8} l={6}>
                        <div>
                            <img style={style.logo} className="logosize" image src={logo}/>
                        </div>
                    </Col>
                    <div>
                        <Col s={4} m={4} l={4} className="center-align offset-l4">

                            <Paper style={style.paper} zDepth={1}>
                                <Tabs value={this.state.value} onChange={this.handleChange}>

                                    <Tab icon={<FontIcon className="material-icons">face</FontIcon>} label="Customer" value="a">
                                        <div>
                                            <h2 style={style.headline}>Customer Sign Up</h2>
                                            <Row>
                                                <Col s={2} l={2}></Col>
                                                <Input
                                                    s={4}
                                                    name="firstName"
                                                    label="First Name"
                                                    value={this.state.firstName}
                                                    onChange={e => this.change(e)}/>
                                                <Input
                                                    s={4}
                                                    name="lastName"
                                                    label="Last Name"
                                                    value={this.state.lastName}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                            <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Email"
                                                    name="email"
                                                    type="email"
                                                    className='offset-l3'
                                                    value={this.state.email}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                            <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    className='offset-l3'
                                                    value={this.state.password}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                                <Col s={4} className="center-align offset-l4 offset-s3">
                                                    <RaisedButton label="Sign Up" primary={true} style={style.signUp}/>
                                                </Col>
                                            </Row>

                                                <Col s={4} className="center-align offset-l4">
                                                    <p style={style.signIn}>Already have an Account? {< FlatButton href = '/' label = "Login" primary = {
                                                            true
                                                        }
                                                        style = {
                                                            style
                                                        } />}</p>
                                                </Col>

                                        </div>
                                    </Tab>
                                    <Tab icon={<FontIcon className="material-icons">store</FontIcon>} label="Company" value="b">
                                        <div>
                                            <h2 style={style.headline}> Company Sign Up</h2>
                                            <Row>
                                            <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Company Name"
                                                    name="companyName"
                                                    type="text"
                                                    className='offset-l3'
                                                    value={this.state.companyName}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                            <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Email"
                                                    name="email"
                                                    type="email"
                                                    className='offset-l3'
                                                    value={this.state.email}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                            <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    className='offset-l3'
                                                    value={this.state.password}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                                <Col s={4} className="center-align offset-l4 offset-s3">
                                                    <RaisedButton label="Sign Up" primary={true} style={style.signUp}/>
                                                </Col>
                                            </Row>

                                                <Col s={4} className="center-align offset-l4">
                                                    <p style={style.signIn}>Already have an Account? {< FlatButton href = '/' label = "Login" primary = {
                                                            true
                                                        }
                                                        style = {
                                                            style
                                                        } />}</p>
                                                </Col>

                                        </div>
                                    </Tab>
                                </Tabs>
                            </Paper>
                        </Col>
                    </div>

                </Section>
            </Section>
        );
    }
}
