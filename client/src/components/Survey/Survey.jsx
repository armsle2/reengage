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

                {this.props.question.map(question => {

                  

                  return (

                      <div>
                        <h5>{question}</h5>
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


                      </div>
                    )
                  

            })}



 

    </section>
        )
    }
}
export default Survey;

