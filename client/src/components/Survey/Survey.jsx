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
                <hr/>  
                <br/>
                <h5>How would you rate the food at the restaurant?</h5>
                <br/>
                
               {/*<Row> 
               <Col s={2} className='grid-example'>
               <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">😍</i></a>
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
               </Row> */}


  <form action="#">

  <div className="cc-selector">
{/*heart eyes emoji */}
  <input id="emoji" type="radio" name="credit-card" value="5" />
  <label className="drinkcard-cc emoji" htmlFor="emoji"></label>    
{/*smile emoji */} 
  <input id="smileEmoji" type="radio" name="credit-card" value="4" />
  <label className="drinkcard-cc smileEmoji" htmlFor="smileEmoji"></label>
{/*neutral emoji */}  
  <input id="neutralEmoji" type="radio" name="credit-card" value="3" />
  <label className="drinkcard-cc neutralEmoji" htmlFor="neutralEmoji"></label>
{/*mild frown emoji */}  
<input id="frownEmoji" type="radio" name="credit-card" value="2" />
<label className="drinkcard-cc frownEmoji" htmlFor="frownEmoji"></label> 
{/*angry emoji */}  
<input id="angryEmoji" type="radio" name="credit-card" value="1" />
<label className="drinkcard-cc angryEmoji" htmlFor="angryEmoji"></label>   
</div>

</form>


    </section>
        )
    }
}
export default Survey;

