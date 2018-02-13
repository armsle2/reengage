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
import styles from './SignIn.css';

import images from "../../images/hybrid-437269.jpg"
import logo from "../../logo/engage.png"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import API from "../../utils/API";
import FontIcon from 'material-ui/FontIcon';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

const style = {
    margin: 5,
    logo: {
        margin: '-2% 25% -2% 25%',
        width: '50%',
        paddingTop: '5%'
    },
    headline_customer: {
        margin: 25,
        fontSize: 24,
        paddingTop: 16,
        paddingLeft: 5,
        marginBottom: 12,
        fontWeight: 200,
        textAlign: 'center'
    },
    headline_company: {
        margin: 25,
        fontSize: 24,
        paddingTop: 16,
        paddingRight: 5,
        marginBottom: 12,
        fontWeight: 200,
        textAlign: 'center'
    },
    paper: {
        height: '50%',
        width: '60%',
        marginTop: 30,
        textAlign: 'center',
        display: 'inline-block'
    },
    signIn: {
        margin: 10
    }
};

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a'
        };
    }

    handleChange = (value) => {
        this.setState({value: value});
    };

    state = {
        email: "",
        password: "",
        userId: "",
        redirect: false
    };
    change = e => {
        this.setState({
          value: value,
        });
      };
    


   state = {
       email: "",
       password: ""
   };
   change = e =>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }    
   
   onSubmitCustomer = (e) => {
    e.preventDefault();
    if(this.state.email && this.state.password){
        API.loginCustomer({
        email: this.state.email,
        password: this.state.password
        }).then((response)=> {
            console.log(response);
            this.setState({userId: response.data});
        })
    }

   }
    

  onSubmitCompany = (e) => {
    e.preventDefault();
    if(this.state.email && this.state.password){
        API.loginCompany({
        email: this.state.email,
        password: this.state.password
        }).then((response)=> {
            console.log(response);
            this.setState({companyId: response.data});
        })
        .catch(err => console.log(err));
    }

   } 
   render(){
    //    const { redirect } = this.state;
    //    const { redirect_comp } = this.state;
       if (this.state.userId) {
        console.log('userId is set')
           return <Redirect to={`/userhomepage/${this.state.userId}`} />
       }
       if (this.state.companyId) {
           return <Redirect to={`/bushomepage/${this.state.companyId}`} />
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
            <RaisedButton onClick={e => this.onSubmitCustomer(e)}label="Sign In" primary={true} style={style.signUp} />
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
        <RaisedButton onClick={e => this.onSubmitCompany(e)} label="Sign In" primary={true} style={style.signUp} />
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
        <span>Not Engaging yet?<FlatButton href='/SignUp' label="Sign Up" primary={true} style={style} />
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