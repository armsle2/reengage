import React, { Component } from 'react'; 
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Card, CardTitle, Navbar, NavItem, Modal, Table, Preloader } from 'react-materialize';
import styles from './UserHomepage.css';
import Survey from '../../components/Survey';
import API from "../../utils/API";
import logo from "../../logo/engagePink.png";



class UserHomepage extends Component {
    state = {
        customer: {rewards:[], surveys:[]},
        rewards: [],
        surveys: []
    }

    loadCustomerInfo = () => {
        const userId = this.props.match.params.id;
        API.getCustomer(userId, sessionStorage.getItem('token'))
        .then(res => {
            this.setState({customer: res.data});
            this.rewardInfo();
            this.surveyInfo();
            console.log(this.state.customer);
        })
        .catch(err => console.log(err))
    }

    rewardInfo = () => {
        this.state.customer.rewards.map(reward => (
            API.getOneReward(reward._id)
            .then(res => { 
                this.setState({rewards:[...this.state.rewards, res.data]})
            })
            .catch(err => console.log(err))
        )) 
        
        console.log(this.state.rewards.length)

    }

    surveyInfo = () => {
        this.state.customer.surveys.map(survey => (
            API.getOneSurvey(survey._id)
            .then(res => { 
                this.setState({surveys:[...this.state.surveys, res.data]})
                console.log(this.state.surveys)
            })
            .catch(err => console.log(err))
        )) 
        
        console.log(this.state.surveys.length)

    }

    // setCompanyInfo = () => {
    //     this.setState
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    componentWillMount(){
        const token = sessionStorage.getItem('token');
        this.setState({token})
        this.loadCustomerInfo()
    }

    componentDidMount() {
        console.log(this.state)
    }

    render() {
        return (
           <Section>
                <Navbar fixed className="navbar topbar" brand={<img src={logo} className="cssTop" />} right>
                
	                <NavItem href='#'>Current Rewards</NavItem>
	                <NavItem href='#PendingRewards'>Pending Rewards</NavItem>
                    <NavItem href='#RedeemedRewards'>Redeemed Rewards</NavItem>

                    <NavItem href='#'>My Account</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>              
                <Section>
                    <h2>{`Hey ${this.state.customer.firstName}`}</h2>
                    <a name="CurrentRewards"></a>
                    <Row>
                        <Col s={12} m={8} l={12}>
                            <h4>Current Rewards</h4>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.rewards.map(reward => (
                            <Col s={12} m={8} l={3}>
                                <Card 
                                    header={<CardTitle reveal image={"https://img1.10bestmedia.com/Images/Photos/329093/p-blacks_54_990x660.jpg"} waves='light'/>}
                                    title={reward.company.companyName}
                                    reveal={
                                    <Section>
                                    <h3>{reward.title}</h3>
                                    <p>{reward.description}</p>
                                        <Row>
                                            <Col l={12} className="center-align">
                                            <br></br> 
                                            <br></br>
                                            <br></br>                                            
                                                    <Modal className="center-align"
                                                        header='Here You Go!'
                                                        trigger={<Button>Redeem</Button>}>
                                                        <Section className="modal-content">
                                                            <p>sQwFy47</p>
                                                            <Row>
                                                                <Col s={4}>
                                                                    <Preloader className="count-down" flashing size='big'/>
                                                                </Col>
                                                            </Row>
                                                        </Section>
                                                    </Modal>                                       
                                            </Col>
                                        </Row>
                                    </Section>
                                    }>
                                </Card>
                            </Col>

                        ))}
                        </Row>
                       
                    <Section>
                        <a name="PendingRewards"></a>
                        <Row>
                            <div className="spacer2"></div>       
                        </Row>
                        <Row>
                            <Col s={12} m={8} l={12}>
                                <h4>Pending Rewards</h4>
                            </Col>
                        </Row>
                        <Row>
                           {this.state.surveys.map(survey => (
                                <Col s={12} m={8} l={4} >                     
                                    <Card 
                                    header={<CardTitle reveal image={"https://img1.10bestmedia.com/Images/Photos/329093/p-blacks_54_990x660.jpg"} waves='light'/>}
                                    title={survey.company.companyName}
                                    reveal={
                                        <Section>
                                        <h3>{survey.reward.title}</h3>
                                        <p>To claim your reward please fill out this quick survery</p>
                                            <Row>
                                                <Col l={12} className="center-align">
                                                <br></br> 
                                                <br></br>
                                                <br></br>   
                                                <Modal
                                                    trigger={<Button>Survey</Button>}>
                                                    <Survey question={survey.questions}/>
                                                </Modal>
                                                </Col>
                                            </Row>
                                        </Section>
                                    }>
                                    </Card>  
                                </Col>

                            ))}
                        </Row>
                        <a name="RedeemedRewards"></a>
                        <Row>
                            <div className="spacer2"></div>       
                        </Row>
                        <Row>
                            <Col s={12} m={8} l={12}>
                                <h4>Redeemed Rewards</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={8} l={8} className="offset-l2"> 
                                <br></br>
                                <br></br>                       
                                <Table centered hoverable bordered>
                                    <thead>
                                        <tr>
                                            <th data-field="comp-id">Company</th>
                                            <th data-field="coup-id">Coupon</th>
                                            <th data-field="value">Value</th>
                                            <th data-field="date">Redeemed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ray's Pizza</td>
                                            <td>BOGO Pizza Slice</td>
                                            <td>$2.25</td>
                                            <td>2/5/2018</td>
                                        </tr>
                                        <tr>
                                            <td>I SCREAM!</td>
                                            <td>1/2 off Ice Cream Cone</td>
                                            <td>$.75</td>
                                            <td>1/25/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Bob's Burgers</td>
                                            <td>Free Combo Upgrade</td>
                                            <td>$2.75</td>
                                            <td>1/15/2018</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Section>
                </Section>
           </Section>
        )
    }
}

export default UserHomepage;