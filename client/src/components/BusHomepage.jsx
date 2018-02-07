import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Navbar, NavItem } from 'react-materialize';
import '../styles/BusHomepage.css';

export default class BusHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render(){
        return(
            <Section>
                <Navbar fixed className="navbar" brand='Engage' right>
	                <NavItem href='/BusHomepage'>My Locations</NavItem>
	                <NavItem href='/#'>Survey Data</NavItem>
                    <NavItem href='/#'>Current Surveys</NavItem>
                    <NavItem href='/#'>Coupons/Rewards</NavItem>
                </Navbar>
                <Section>
                    I need a forEach funtion here that will loop over all locations for this business and gather the appropirate data and place it in a card.
                </Section>
            </Section>
        )
    }
}