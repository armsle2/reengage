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
       username: "",
       companyName: "",
       email: "",
       password: "",
       phoneNumber: ""
   };


    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   handleCustomerSubmit = e => {
       e.preventDefault();
            if(this.state.firstName && this.state.lastName && this.state.username && this.state.email && this.state.password ) {
                console.log(this.state)
                API.createCustomer({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    phoneNumber: this.state.phoneNumber
                })
                .then((response) => {
                    this.setState({ redirect_userId: response.data._id });

                    console.log(response)
                })
                .catch(err => console.log(err));
        }

    }

    handleCompanySubmit = e => {
        e.preventDefault();
        console.log(this.state)
        if(this.state.companyName && this.state.email && this.state.password ) {
            API.createCompany({
                companyName: this.state.companyName,
                email: this.state.email,
                password: this.state.password
            })
            .then((response) => {
                this.setState({ redirect_compId: response.data._id });
                console.log(response)
            })
            .catch(err => console.log(err));      
        }

    }
   render(){
       const { redirect_userId, redirect_compId } = this.state;
       if (redirect_userId) {
           return <Redirect to={`/userhomepage/${this.state.redirect_userId}`}/>
       }
       if (redirect_compId) {
           return <Redirect to={`/bushomepage/${this.state.redirect_compId}`}/>
       }
       return(
        <Section>
        {/*<AppBar
           title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
        />*/}
      <img className="parallax" src={images}/>
      <Section>
      <Col s={12} m={8} l={6}>
          <div>
              <img style={style.logo} className="logosize" src={logo}/>
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
            <Col s={3}>
            </Col>
            <Input s={6}
            name = "username"
            label="Username"
            value={this.state.username} 
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
          <RaisedButton onClick={this.handleCustomerSubmit} label="Sign Up" primary={true} style={style.signUp} />
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
            <Input s={6}
            name = "companyName"
            label="Company Name"
            value={this.state.companyName} 
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
          <RaisedButton onClick={this.handleCompanySubmit} label="Sign Up" primary={true} style={style.signUp} />
          </Col>
          </Row>
      
        </div>
      </Tab>
    </Tabs>
</Paper>
</Col>
<Row>
	<Col s={4} className="center-align offset-l4">

         <div className="sign-in-txt">
            <span>Already have an Account? Go login <FlatButton href='/' label="Sign In" primary={true} style={style} />
            </span>
        </div>
	</Col>
</Row>
</div>     
           
  </Section>
</Section>
       );
   }

}
