import React from "react";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Navbar, NavItem, Card, CardTitle, Table, Modal} from 'react-materialize';

const RewardModal = (props, {inputChange, title, description, addReward}) => (

	<Modal
        header='Add a Reward'
        trigger={ <Button floating icon='card_giftcard' className='green' /> }
        >
            <Section>
                <Row>
                    <Col s={3}></Col>
                        <Input s={6}
                            label="Title"
                            name="rewardTitle"
                            type="text"
                            className='offset-l3'
                            defaultValue={title}
                            onChange={inputChange}
                                   
                        />
                </Row>
                <Row>
                    <Col s={3}></Col>
                        <Input s={6}
                            label="Description"
                            name="rewardDescription"
                            type="text"
                            className='offset-l3' 
                            defaultValue={description}
                            onChange={inputChange}
                           
                        />
                </Row>
                <Row>
                    <Col s={4} className="center-align modal-close offset-l4">
                        <Button {...props} waves='light'>
                            Add Reward 
                            <Icon right>send</Icon>
                        </Button>                              
                    </Col>
                </Row>
        </Section>
    </Modal>

)

export default RewardModal;
