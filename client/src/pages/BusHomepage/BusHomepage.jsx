import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Navbar, NavItem, Card, CardTitle, Table, Modal} from 'react-materialize';
import styles from "./BusHomepage.css";
import API from "../../utils/API";

export default class BusHomepage extends React.Component {
    state = {
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    loadSurveys = () => {
        API.getSurveys()
        .then(res => 
        this.setState({surveys: res.data, })
        )
        .catch(err => console.log(err));
    };

    handleAddSurvey = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveSurvey({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadSurveys())
            .catch(err => console.log(err));
        }
      };

      loadRewards = () => {
        API.getRewards()
        .then(res => 
        this.setState({rewards: res.data, })
        )
        .catch(err => console.log(err));
    };

    handleAddRewards = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveReward({
          
          })
            .then(res => this.loadRewards())
            .catch(err => console.log(err));
        }
      };
    
    
    render(){
        return(
            <Section>
                <Navbar fixed className="navbar" brand='Engage' right>
	                <NavItem href='#'>My Account</NavItem>
	                <NavItem href='#'>Survey Data</NavItem>
                    <NavItem href='#CurrentSurveys'>Current Surveys</NavItem>
                    <NavItem href='#Rewards'>Coupons/Rewards</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>
                <Section>
                    <Row>
                        <Col s={12} m={8} l={6} className="offset-l3">                        
                            <Card header={<CardTitle reveal image={"https://www.topbusinessjournal.com/wp-content/uploads/2016/11/data-science-illustration-%C2%ADFeature_1290x688_MS.jpg"} waves='light'/>}
                                title="Survey Data"
                                reveal={
                                    <Section>
                                        <Table centered hoverable bordered>
                                            <thead>
                                                <tr>
                                                    <th data-field="type">Survey Type</th>
                                                    <th data-field="views"># Completed</th>
                                                    <th data-field="rating">Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Service</td>
                                                    <td>7</td>
                                                    <td>😍</td>
                                                </tr>
                                                <tr>
                                                    <td>Experience</td>
                                                    <td>4</td>
                                                    <td>😊</td>
                                                </tr>
                                                <tr>
                                                    <td>Atmosphere</td>
                                                    <td>9</td>
                                                    <td>😕</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                    <a name="CurrentSurveys"></a>
                    <Row>
                         <div className="spacer"></div>       
                    </Row>
                    <Row>                    
                        <Col s={12} m={8} l={6} className="offset-l3">                        
                            <Card header={<CardTitle reveal image={"https://www.surveymonkey.com/business/images/Group-52x-fb512d9b.svg?1513791835"} waves='light'/>}
                                title="Current Surveys"
                                reveal={
                                    <Section>
                                        <Table centered hoverable bordered>
                                            <thead>
                                                <tr>
                                                    <th data-field="id">Location</th>
                                                    <th data-field="name">Surveys</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Northpointe</td>
                                                    <td>
                                                        <Modal
                                                            header='Northpointe Survey'
                                                            trigger={<Button>View Survey</Button>}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                                        </Modal>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lakeside</td>
                                                    <td>
                                                        <Modal
                                                            header='Lakeside Survey'
                                                            trigger={<Button>View Survey</Button>}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                                        </Modal>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Midtown</td>
                                                    <td>
                                                        <Modal
                                                            header='Midtown Survey'
                                                            trigger={<Button>View Survey</Button>}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                                        </Modal>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Modal
                                            header='Add a Survey'
                                            trigger={<Button>Add a Survey</Button>}>
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
                                                                onChange={this.handleInputChange}
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
                                                                onChange={this.handleInputChange}
                                                            />
                                                    </Row>
                                                    <Row>
                                                        <Col s={4} className="center-align offset-l4">
                                                            <Button onClick={this.handleAddSurvey} waves='light'>
                                                                Sign In 
                                                                <Icon right>send</Icon>
                                                            </Button>                                   
                                                        </Col>
                                                    </Row>
                                            </Section>
                                        </Modal>
                                    </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                    <a name="Rewards"></a>
                    <Row>
                        <div className="spacer"></div>      
                    </Row>
                    <Row>
                        <Col s={12} m={8} l={6} className="offset-l3">                        
                            <Card header={<CardTitle reveal image={"https://mcclatchy.nextbee.com/idahostatesman/img/rewards-logo.png"} waves='light'/>}
                                title="Coupons/Rewards"
                                reveal={
                                    <Section>
                                        <Table centered hoverable bordered>
                                            <thead>
                                                <tr>
                                                    <th data-field="id">Coupon</th>
                                                    <th data-field="name">Value</th>
                                                    <th data-field="price">Redeemed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>BOGO Pizza Slice</td>
                                                    <td>$2.25</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>1/2 off Ice Cream Cone</td>
                                                    <td>$.75</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>Free Combo Upgrade</td>
                                                    <td>$2.75</td>
                                                    <td>7</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Modal
                                            header='Add a Reward'
                                            trigger={<Button>Add a Reward</Button>}>
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
                                                                onChange={this.handleInputChange}
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
                                                                onChange={this.handleInputChange}
                                                            />
                                                    </Row>
                                                    <Row>
                                                        <Col s={4} className="center-align offset-l4">
                                                            <Button onClick={this.handleAddReward} waves='light'>
                                                                Sign In 
                                                                <Icon right>send</Icon>
                                                            </Button>                                   
                                                        </Col>
                                                    </Row>
                                            </Section>
                                        </Modal>
                                    </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                </Section>
            </Section>
        )
    }
}