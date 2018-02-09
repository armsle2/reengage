import React, { Component } from 'react'; 
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Card, CardTitle, Navbar, NavItem, Modal, Table, Preloader } from 'react-materialize';
import styles from './UserHomepage.css';
import Survey from '../../components/Survey';
import API from "../../utils/API";

class UserHomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: true
        }
        this.onPress = this.onPress.bind(this);
    }
    onPress(){
        this.setState({
            click: !this.state.click
        })
    }

    render() {
        return (
           <Section>
                <Navbar fixed className="navbar topbar" brand='Engage' right>
	                <NavItem href='#'>Current Rewards</NavItem>
	                <NavItem href='#PendingRewards'>Pending Rewards</NavItem>
                    <NavItem href='#RedeemedRewards'>Redeemed Rewards</NavItem>

                    <NavItem href='#'>My Account</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>              
                <Section>
                    <a name="CurrentRewards"></a>
                    <Row>
                        <Col s={12} m={8} l={12}>
                            <h4>Current Rewards</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} m={8} l={3}>
                            <Card 
                                header={<CardTitle reveal image={"https://img1.10bestmedia.com/Images/Photos/329093/p-blacks_54_990x660.jpg"} waves='light'/>}
                                title="Blacks BBQ"
                                reveal={
                                <Section>
                                <p>Come and get a free Banana Puddin' with your combo!</p>
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
                        <Col s={12} m={8} l={3}>
                            <Card 
                                header={<CardTitle reveal image={"https://static1.squarespace.com/static/5579bed8e4b0df98f1c1ab91/5579f181e4b00bee14b0f77f/563d0b5ee4b0c12808d4db7f/1447428363744/Burger-joint.jpg?form"} waves='light'/>}
                                title="Bob's Burgers"
                                reveal={
                                <Section>
                                <p>Upgrade your Burger to "Cardiac Arrest" for free!</p>
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
                                                                <Preloader flashing size='big'/>
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
                        <Col s={12} m={8} l={3}>
                            <Card 
                                header={<CardTitle reveal image={"http://nz.businessdirectoryformobile.com/blog/wp-content/uploads/2014/08/Hell-Pizza-Papamoa-2.jpg"} waves='light'/>}
                                title="Rays Pizza"
                                reveal={
                                    <Section>
                                    <p>BOGO on slices before 3PM!</p>
                                        <Row>
                                            <Col l={12} className="center-align">
                                            <br></br> 
                                            <br></br>
                                            <br></br>                               
                                                <Modal className="center-align"
                                                    header='Here You Go!'
                                                    trigger={<Button>Redeem</Button>}>
                                                    <Section className="modal-content">
                                                        <p>kjghjkgkj67</p>
                                                        <Row>
                                                            <Col s={4}>
                                                                <Preloader flashing size='big'/>
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
                        <Col s={12} m={8} l={3} >
                            <Card 
                                header={<CardTitle reveal image={"https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/52/5523e8ee-b30f-5b8c-b849-868d381ac387/52c2fb1819089.image.jpg"} waves='light'/>}
                                title="Tuesday's Tacos"
                                reveal={
                                    <Section>
                                    <p>Free quacamole with pitcher of beer!</p>
                                        <Row>
                                            <Col l={12} className="center-align">
                                            <br></br> 
                                            <br></br>
                                            <br></br>                               
                                                <Modal 
                                                    header='Here You Go!'
                                                    trigger={<Button>Redeem</Button>}>
                                                    <Section className="modal-content">
                                                        <p>a65d4fas5</p>
                                                        <Row>
                                                            <Col s={4}>
                                                                <Preloader flashing size='big'/>
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
                            <Col s={12} m={8} l={4} >                     
                                <Card 
                                header={<CardTitle reveal image={"https://img1.10bestmedia.com/Images/Photos/329093/p-blacks_54_990x660.jpg"} waves='light'/>}
                                title="Tell us what you think!"
                                reveal={
                                    <Section>
                                    <p>To claim your reward please fill out this quick survery</p>
                                        <Row>
                                            <Col l={12} className="center-align">
                                            <br></br> 
                                            <br></br>
                                            <br></br>   
                                            <Modal
                                                trigger={<Button>Survey</Button>}>
                                                <Survey/>
                                            </Modal>
                                            </Col>
                                        </Row>
                                    </Section>
                                }>
                                </Card>  
                            </Col>
                            <Col s={12} m={8} l={4} >                     
                                <Card 
                                header={<CardTitle reveal image={"https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/52/5523e8ee-b30f-5b8c-b849-868d381ac387/52c2fb1819089.image.jpg"} waves='light'/>}
                                title="Tell us what you think!"
                                reveal={
                                    <Section>
                                    <p>To claim your reward please fill out this quick survery</p>
                                        <Row>
                                            <Col l={12} className="center-align">
                                                <br></br> 
                                                <br></br>
                                                <br></br> 
                                                <Modal
                                                    trigger={<Button>Survey</Button>}>
                                                    <Survey/>
                                                </Modal>
                                            </Col>
                                        </Row>
                                    </Section>
                                }>
                                </Card>  
                            </Col>
                            <Col s={12} m={8} l={4} >                     
                                <Card 
                                    header={<CardTitle reveal image={"http://nz.businessdirectoryformobile.com/blog/wp-content/uploads/2014/08/Hell-Pizza-Papamoa-2.jpg"} waves='light'/>}
                                    title="Tell us what you think!"
                                    reveal={
                                    <Section>
                                    <p>To claim your reward please fill out this quick survery</p>
                                        <Row>
                                            <Col l={12} className="center-align">
                                                <br></br> 
                                                <br></br>
                                                <br></br> 
                                                <Modal
                                                    trigger={<Button>Survey</Button>}>
                                                    <Survey/>
                                                </Modal>
                                            </Col>
                                        </Row>
                                    </Section>
                                    }>
                                </Card>  
                            </Col>
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