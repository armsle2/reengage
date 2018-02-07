import React, { Component } from 'react'; 
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input } from 'react-materialize';
import '../styles/UserHomepage.css';


class UserHomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <h1>This is my User Homepage!</h1>
        )
    }
}

export default UserHomepage;