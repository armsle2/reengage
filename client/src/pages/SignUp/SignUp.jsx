import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Modal } from 'react-materialize';
import styles from './SignUp.css';
import API from "../../utils/API";
import images from "../../images/hybrid-437269.jpg"
import logo from "../../logo/engage.png"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


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
        height: 500,
        width: 600,
        margin: 30,
        textAlign: 'center',
        display: 'inline-block',
    },
    signUp:{
        margin: 10,
    },

  };
  
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
    <Col s={6} className="center-align offset-l4">
    <div>
        <h5>Reward yourself.</h5>
    </div>
</Col>

  <div>
  <Col s={4} className="center-align offset-l4">
 {/*Rectangle background */}
   <Paper style={style.paper} zDepth={1}>        
      <Tabs
      value={this.state.value}
      onChange={this.handleChange}
    >
     
      <Tab label="Customer" value="a">
        <div>
          <h2 style={style.headline}>Customer Sign Up</h2>
          <Row>
            <Col s={3}>
            </Col>
            <Input s={3}
            name = "firstName"
            label="First Name"
            value={this.state.firstName} 
            onChange={e => this.change(e)}
            />
            <Input s={3}
            name = "lastName"
            label="Last Name"
            value={this.state.lastName} 
            onChange={e => this.change(e)}
            />
          </Row>  
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
          <h2 style={style.headline}>Company Sign Up</h2>
          <Row>
            <Col s={3}>
            </Col>
            <Input s={3}
            name = "firstName"
            label="First Name"
            value={this.state.firstName} 
            onChange={e => this.change(e)}
            />
            <Input s={3}
            name = "lastName"
            label="Last Name"
            value={this.state.lastName} 
            onChange={e => this.change(e)}
            />
          </Row>  
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
		<p className="sign-in-txt">Already have an Account? Go login {<FlatButton href='/#' label="Sign In" primary={true} style={style} />}</p> 
	</Col>
</Row>
</div>     

  </Section>
</Section>
       );
   }
}
