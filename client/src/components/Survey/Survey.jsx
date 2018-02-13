import React, { Component } from 'react'; 
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Card, CardTitle, Navbar, NavItem, Modal } from 'react-materialize';
import styles from './Survey.css';

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <section>
                <h3 className="Thin">Taste</h3>
                
                <h5>How would you rate the food at the restaurant?</h5>
                
                
               <Row> 
               <Col s={2} className='grid-example'>
               <a class="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">😍</i></a>
               </Col>
               <Col s={2} className='grid-example'>
               <a class="btn-floating btn-large waves-effect waves-light yellow"><i class="material-icons">🙂</i></a>
               </Col> 
               <Col s={2} className='grid-example'>
               <a class="btn-floating btn-large waves-effect waves-light grey"><i class="material-icons">😐</i></a>
               </Col> 
               <Col s={2} className='grid-example'>
               <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">🙁</i></a>
               </Col> 
               <Col s={2} className='grid-example'>
               <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">😠</i></a>
               </Col> 
            </Row>


            </section>
        )
    }


}
export default Survey;

