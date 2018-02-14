import React, { Component } from 'react'; 
import {Section, Row, tbody, Table, tr, th, td, thead, Navbar, NavItem } from 'react-materialize';
import styles from './RedeemRewards.css';

class RedeemRewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
           <Section>
                <Navbar fixed className="navbar" brand='Engage' right>
	                <NavItem href='/UserHomepage'>Current Rewards</NavItem>
	                <NavItem href='/#'>Pending Rewards</NavItem>
                    <NavItem href='./RedeemRewards/RedeemRewards' active>Redeemed Rewards</NavItem>
                    <NavItem href='/#'>My Account</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>
                <Section>
                    <Row>
                    <Table>
                    <thead>
                        <tr>
                            <th data-field="id">Merchant</th>
                            <th data-field="name">Deal</th>
                            <th data-field="price">Date</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        <tr>
                            <td>Rays Pizza</td>
                            <td>Buy one get one free on slice of pizza.</td>
                            <td>10/02/2017</td>
                        </tr>
                        <tr>
                            <td>McDonalds</td>
                            <td>25% off any combo.</td>
                            <td>11/02/2017</td>
                        </tr>
                        <tr>
                            <td>Pizza Hut</td>
                            <td>Free breadsticks with any Medium Pizza</td>
                            <td>12/02/2017</td>
                        </tr>
                    </tbody>
                </Table>
                    </Row>
                </Section>

           </Section>
        )
    }
}

export default RedeemRewards;