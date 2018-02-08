import React, { Component } from 'react'; 
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Card, CardTitle, Navbar, NavItem, Modal } from 'react-materialize';
import styles from './UserHomepage.css';
import Survey from '../Survey/Survey' 

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
	                <NavItem href='/UserHomepage'>Current Rewards</NavItem>
	                <NavItem href='/#'>Pending Rewards</NavItem>
                    <NavItem href='/UserHomepage/#redeemReward'>Redeemed Rewards</NavItem>

                    <NavItem href='/#'>My Account</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>
                
                <Section>
                    <Row>
                        <Col s={12} m={8} l={4} className="offset-l1">
                            <Card 
                                header={<CardTitle reveal image={"https://img1.10bestmedia.com/Images/Photos/329093/p-blacks_54_990x660.jpg"} waves='light'/>}
                                title="Blacks BBQ"
                                reveal={
                                <Section>
                                <p>Come and get a free Banana Puddin' with your combo!</p>
                                <Row>
                                    <Col l={1} className="offset-l1">
                                    <Modal
                                        header='Here You Go!'
                                        trigger={<Button>Redeem</Button>}>
                                    <p>sQwFy47</p>
                                    </Modal>
                                    </Col>
                                </Row>
                                </Section>
                                }>
                            </Card>
                        </Col>
                        <Col s={12} m={8} l={4} className="offset-l1">
                            <Card 
                                header={<CardTitle reveal image={"https://img1.10bestmedia.com/Images/Photos/329093/p-blacks_54_990x660.jpg"} waves='light'/>}
                                title="Blacks BBQ"
                                reveal={
                                <Section>
                                <p>Come and get a free Banana Puddin' with your combo!</p>
                                <Row>
                                    <Col l={1} className="offset-l1">
                                    <Modal
                                        header='Here You Go!'
                                        trigger={<Button>Redeem</Button>}>
                                    <p>sQwFy47</p>
                                    </Modal>
                                    </Col>
                                </Row>
                                </Section>
                                }>
                            </Card>
                        </Col>
                        <Col s={12} m={8} l={5} >
                            <Card 
                                header={<CardTitle reveal image={"http://nz.businessdirectoryformobile.com/blog/wp-content/uploads/2014/08/Hell-Pizza-Papamoa-2.jpg"} waves='light'/>}
                                title="Rays Pizza"
                                reveal={
                                <Section>
                                <p>BOGO on slices before 3PM!</p>
                                <Row>
                                    <Col l={2} className="offset-l2">
                                    <Modal
                                        header='Here You Go!'
                                        trigger={<Button>Redeem</Button>}>
                                    <p>kjghjkgkj67</p>
                                </Modal>
                                    </Col>
                                </Row>
                                </Section>
                                }>
                            </Card>
                            <div>{
                                this.state.click == true ? 
                                <h1> 0 </h1>
                                :
                                <h1> 1 </h1>

                            } </div>
                            <button href='#' onClick={this.onPress}> Click me </button>
                        </Col>
                        <Col s={12} m={8} l={5} >
                            <Card 
                                header={<CardTitle reveal image={"http://nz.businessdirectoryformobile.com/blog/wp-content/uploads/2014/08/Hell-Pizza-Papamoa-2.jpg"} waves='light'/>}
                                title="Rays Pizza"
                                reveal={
                                <Section>
                                <p>BOGO on slices before 3PM!</p>
                                <Row>
                                    <Col l={1} className="offset-l1">
                                    <Modal
                                        header='Here You Go!'
                                        trigger={<Button>Redeem</Button>}>
                                    <p>kjghjkgkj67</p>

                                </Modal>
                                    </Col>
                                </Row>
                                </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                    <Section>
                        <Row>
                        <Col s={12} m={10} l={10} >
                            <a id="redeemReward">
                            </a>
                                
                                <Card 
                                header={<CardTitle reveal image={"http://nz.businessdirectoryformobile.com/blog/wp-content/uploads/2014/08/Hell-Pizza-Papamoa-2.jpg"} waves='light'/>}
                                title="Pending Rewards"
                                reveal={
                                <Section>
                                <p>To claim your reward please fill out this quick survery</p>
                                <Row>
                                    <Col l={2} className="offset-l2">
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
                    </Section>
                </Section>

           </Section>
        )
    }
}

export default UserHomepage;