import React, { Component } from 'react'; 
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Card } from 'react-materialize';
import '../styles/UserHomepage.css';


class UserHomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
           <Section>
               <Navbar fixed className="navbar" brand='Engage' right>
	                <NavItem href='/BusHomepage'>Current Rewards</NavItem>
	                <NavItem href='/#'>Pending Rewards</NavItem>
                    <NavItem href='/#'>Redeemed Rewards</NavItem>
                    <NavItem href='/#'>My Account</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>

           </Section>
        )
    }
}

export default UserHomepage;