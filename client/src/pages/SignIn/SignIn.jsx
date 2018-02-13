import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Modal } from 'react-materialize';
import styles from './SignIn.css';

import images from "../../images/hybrid-437269.jpg"
import logo from "../../logo/engage.png"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";



const style = {
    margin: 5,
    logo: {
        margin: '0 25% 0 25%',
        width: '50%',
        paddingTop: '5%',
        
    },
    headline: {
        margin:25,
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 200,
      },
    paper:{
        height: 400,
        width: 600,
        margin: 50,
        textAlign: 'center',
        display: 'inline-block',
    },
    signUp:{
        margin: 10,
    },

  };
  
export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
        };
      }
    
      handleChange = (value) => {
        this.setState({
          value: value,
        });
      };
    


   state = {
       email: "",
       password: "",
       userId: "",
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
            this.state.redirect=true;
            this.state.userId = response.data;
        })
        .catch(err => console.log(err));
    }

   }
 
   render(){
    //    const { redirect } = this.state;
    //    const { redirect_comp } = this.state;
       if (this.state.redirect) {
           return <Redirect to={`/UserHomepage/${this.state.userId}`} />
       }
    //    if (redirect_comp) {
    //        return <Redirect to='/bushomepage'/>
    //    }
       return(
        <Section>
          {/*<AppBar
             title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
          />*/}
        <img className="parallax" image src={images}/>
        <Section>
        <Col s={12} m={8} l={6}>
            <div>
                <img style={style.logo} className="logosize" image src={logo}/>
            </div>
            </Col>
    <div>
    <Col s={4} className="center-align offset-l4">

     <Paper style={style.paper} zDepth={1}>        
        <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
     
            
        <Tab label="Customer" value="a">
          <div>
            <h2 style={style.headline}>Customer Sign In</h2>

            <Row>
            
                <Col s={3}></Col>
                <Input s={6}
                    label="Email"
                    name="email"
                    type="email"
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
                    className='offset-l3' 
                    value={this.state.password} 
                    onChange={e => this.change(e)}
                />
            </Row>
            <Row>
            <Col s={4} className="center-align offset-l6">
            <RaisedButton label="Sign Up" primary={true} style={style.signUp} />
            </Col>
            </Row>
        
          </div>
        </Tab>
        <Tab label="Company" value="b">
          <div>
            <h2 style={style.headline}>Company Sign In</h2>
            <Row>
            
            <Col s={3}></Col>
            <Input s={6}
                label="Email"
                name="email"
                type="email"
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
                className='offset-l3' 
                value={this.state.password} 
                onChange={e => this.change(e)}
            />
        </Row>
        <Row>
        <Col s={4} className="center-align offset-l6">
        <RaisedButton label="Sign Up" primary={true} style={style.signUp} />
        </Col>
        </Row>
          </div>
        </Tab>
      </Tabs>
</Paper>
</Col>
<Row>
    <Col s={4} className="center-align offset-l4">
        <p className="sign-in-txt">Not Engaging yet? {<FlatButton href='/SignUp' label="Sign Up" primary={true} style={style} />}</p>
    </Col>
</Row>
</div>     

    </Section>
</Section>  

            
       );
   }
}