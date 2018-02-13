import React from "react";
import { format } from "path";
import {Button, Icon, Section, Row, Col, Parallax, Toast, Input, Navbar, NavItem, Card, CardTitle, Table, Modal} from 'react-materialize';
import styles from "./BusHomepage.css";
import API from "../../utils/API";
import RewardModal from '../../components/Modals/RewardModal'

export default class BusHomepage extends React.Component {
    state = {
        company: {},
        rewards: [],
        surveys: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    loadSurveys = () => {
        API.getSurveys()
        .then(res => 
        this.setState({surveys: res.data, })
        )
        .catch(err => console.log(err));
    };

    handleAddSurvey = event => {
        event.preventDefault();
        if (this.state.title && this.state.question1 && this.state.rewardChoice) {
          API.createSurvey(this.state.company._id, {
            title: this.state.title,
            questions: [this.state.question1, this.state.question2, this.state.question3],
            reward: this.state.rewardChoice
          })
            .then(res => this.loadCompanyInfo())
            .catch(err => console.log(err));
        }
        console.log(this)
    };

    activateSurvey = (surveyId) => {
        API.activateSurvey({
            companyId: this.state.company._id,
            surveyId: surveyId
        })
        .then(res => this.loadCompanyInfo())
        .catch(err => console.log(err))
    }

    loadRewards = () => {
        API.getRewards()
        .then(res => 
        this.setState({rewards: res.data, })
        )
        .catch(err => console.log(err));
    };

    handleAddReward = event => {
        // event.preventDefault();
            console.log(this.state.rewardTitle, this.state.rewardDescription)

        if (this.state.rewardTitle && this.state.rewardDescription) {
          API.createReward(this.state.company._id, {
            title: this.state.rewardTitle,
            description: this.state.rewardDescription,
            company: this.state.company._id
          })
            .then(res => this.loadCompanyInfo())
            .catch(err => console.log(err));
        }
    };

    surveyAverage = (arr) => {
        const surveySums = arr.map(result => this.getArrAverage(result))

        const surveyAvg = Math.round(this.getArrAverage(surveySums));
        return this.rating(surveyAvg);
    };

    questionAverage = (arr, questionNum) => {
       const feedback = arr.map((result, index) => result[questionNum-1]);
       const avg = Math.round(this.getArrAverage(feedback));
       return this.rating(avg);
    }

    getArrAverage = (arr) => {
        function getSum(total, num) {
            return total + num
        }
        return arr.reduce(getSum)/arr.length;
    }

    rating = (avg) => {
        if(avg >= 4 && avg <= 5){
            return '😍';
        }
        if(avg >= 3 && avg < 4){
            return '🙂';
        }
        if(avg >= 2 && avg < 3){
            return '😐';
        }
        if(avg >= 1 && avg < 2){
            return '🙁';
        }
        if(avg >= 0 && avg < 1){
            return '😠';
        }
    }

    loadCompanyInfo = () => {
        const companyId = this.props.match.params.id;
        API.getCompany(companyId) 
        .then(res => {
            console.log(res)
            this.setState({ 
                company: res.data,
                rewards: res.data.rewards,
                surveys: res.data.surveys
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.loadCompanyInfo();
    }
    
    render(){
        return(
            <Section>
                <Button floating fab='horizontal' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}>
                   <Button floating icon='card_giftcard' className='green'/>
                    <Button floating icon='note_add' className='blue'/>
                </Button>
                <Navbar fixed className="navbar" brand='Engage' right>
	                <NavItem href='#'>My Account</NavItem>
	                <NavItem href='#'>Survey Data</NavItem>
                    <NavItem href='#CurrentSurveys'>Current Surveys</NavItem>
                    <NavItem href='#Rewards'>Coupons/Rewards</NavItem>
                    <NavItem href='/#'>Logout</NavItem>
                </Navbar>
                <Section>
                    <Row>
                        <Col s={12} m={8} l={6} className="offset-l3">                        
                            <Card header={<CardTitle reveal image={"https://www.topbusinessjournal.com/wp-content/uploads/2016/11/data-science-illustration-%C2%ADFeature_1290x688_MS.jpg"} waves='light'/>}
                                title={`${this.state.company.companyName} Survey Data`}
                                reveal={
                                    <Section>
                                        <Table centered hoverable bordered>
                                            <thead>
                                                <tr>
                                                    <th data-field="type">Survey Name</th>
                                                    <th data-field="views"># Completed</th>
                                                    <th data-field="rating">Average Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.surveys.map(survey => (
                                                    <tr key={survey._id}>
                                                        <td>{survey.title}</td>
                                                        <td>{survey.customersCompleted.length}</td>
                                                        { survey.feedback.length > 0 ? <td className='avg-emoji'>{this.surveyAverage(survey.feedback)}</td> : <td>Not Data Yet</td>}
                                                        <td><Modal
                                                            header={`${survey.title} Data`}
                                                            trigger={<Button>View Info</Button>}>
                                                            <Table centered hoverable bordered>
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th data-field="type">Questions</th>
                                                                        <th data-field="rating">Average Rating</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                            {survey.questions.map((question, index) => (
                                                                <tr key={index + 1}>
                                                                    <td>{index + 1}</td> 
                                                                    <td>{question}</td>
                                                                     { survey.feedback.length > 0 ? <td className='avg-emoji'>{this.questionAverage(survey.feedback)}</td> : <td>Not Data Yet</td>}
                                                                </tr>
                                                                ))}
                                                            </tbody>
                                                            </Table>
                                                        </Modal></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                    <a name="CurrentSurveys"></a>
                    <Row>
                         <div className="spacer"></div>       
                    </Row>
                    <Row>                    
                        <Col s={12} m={8} l={6} className="offset-l3">                        
                            <Card header={<CardTitle reveal image={"https://www.surveymonkey.com/business/images/Group-52x-fb512d9b.svg?1513791835"} waves='light'/>}
                                title={`${this.state.company.companyName} Current Surveys`}
                                reveal={
                                    <Section>
                                        <Table centered hoverable bordered>
                                           
                                            <tbody>
                                            {this.state.surveys.map(survey => (
                                                <tr key={survey._id}>
                                                    <td>
                                                        {survey.title}
                                                    </td>
                                                    <td>
                                                        <Modal
                                                            header={survey.title}
                                                            trigger={<Button>View</Button>}>
                                                            <Table centered hoverable bordered>
                                                                <tbody>
                                                            {survey.questions.map((question, index) => (
                                                                <tr key={index + 1}>
                                                                    <td>{question}</td>
                                                                </tr>
                                                                ))}
                                                                <tr>
                                                                    <td>
                                                                    {survey.reward}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            </Table> 
                                                        </Modal>
                                                    </td>
                                                    <td>
                                                        {survey._id == this.state.company.activeSurvey ? 'Active' : (
                                                                <Button 
                                                                    className='red' 
                                                                    onClick={() => this.activateSurvey(survey._id)}>Activate
                                                                </Button>
                                                            )}
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        
                                        {this.state.rewards.length ?
                                        <Col s={8} className='offset-s3 btn-style'> 
                                            <Modal
                                                header='Add a Survey'
                                                trigger={<Button className='blue'>Add Survey</Button>}>
                                                    <Section>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Title"
                                                                    name="title"
                                                                    type="text"
                                                                    className='offset-l3'
                                                                    defaultValue={this.state.title} 
                                                                    onChange={this.handleInputChange}
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Question 1"
                                                                    name="question1"
                                                                    type="text"
                                                                    className='offset-l3' 
                                                                    defaultValue={this.state.question1} 
                                                                    onChange={this.handleInputChange}
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Question 2"
                                                                    name="question2"
                                                                    type="text"
                                                                    className='offset-l3' 
                                                                    defaultValue={this.state.question2} 
                                                                    onChange={this.handleInputChange}
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Question 3"
                                                                    name="question3"
                                                                    type="text"
                                                                    className='offset-l3' 
                                                                    defaultValue={this.state.question3} 
                                                                    onChange={this.handleInputChange}
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6} 
                                                                    type='select' 
                                                                    label='Choose A Reward'
                                                                    name="rewardChoice"
                                                                    className='offset-l3'
                                                                    value={this.state.rewardChoice}
                                                                    onChange={this.handleInputChange}>
                                                                <option>Select A Reward</option>
                                                                {this.state.rewards.map(reward =>(
                                                                    <option value={reward._id} key={reward._id}>{reward.title}</option>
                                                                    ))}
                                                                </Input>
                                                        </Row>
                                                        <Row>
                                                            <Col s={4} className="center-align modal-close offset-l4">
                                                                <Button onClick={this.handleAddSurvey} waves='light'>
                                                                    Add Survey 
                                                                    <Icon right>send</Icon>
                                                                </Button>                                   
                                                            </Col>
                                                        </Row>
                                                </Section>
                                            </Modal>
                                            </Col>
                                           : (  
                                           <div>
                                           <p style={{textAlign: 'center'}}>Please create  a reward before adding a survey</p>
                                        <Col s={8} className='offset-s3 btn-style'> 

                                           <Modal
                                                header='Add a Reward'
                                                trigger={ <Button className='blue'>Add Reward</Button>}
                                                >
                                                    <Section>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Title"
                                                                    name="rewardTitle"
                                                                    type="text"
                                                                    className='offset-l3'
                                                                    defaultValue={this.state.rewardTitle}
                                                                    onChange={this.handleInputChange}
                                                                           
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Description"
                                                                    name="rewardDescription"
                                                                    type="text"
                                                                    className='offset-l3' 
                                                                    defaultValue={this.state.rewardDescription}
                                                                    onChange={this.handleInputChange}
                                                                   
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={4} className="center-align modal-close offset-l4">
                                                                <Button onClick={this.handleAddReward} waves='light'>
                                                                    Add Reward 
                                                                    <Icon right>send</Icon>
                                                                </Button>                              
                                                            </Col>
                                                        </Row>
                                                </Section>
                                            </Modal>
                                            </Col>
                                            </div>
                                            ) 
                                        }
                                            
                                        
                                    </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                    <a name="Rewards"></a>
                    <Row>
                        <div className="spacer"></div>      
                    </Row>
                    <Row>
                        <Col s={12} m={8} l={6} className="offset-l3">                        
                            <Card header={<CardTitle reveal image={"https://mcclatchy.nextbee.com/idahostatesman/img/rewards-logo.png"} waves='light'/>}
                                title={`${this.state.company.companyName} Coupons/Rewards`}
                                reveal={
                                    <Section>
                                        <Table centered hoverable bordered>
                                            <thead>
                                                <tr>
                                                    <th data-field="id">Coupon</th>
                                                    <th data-field="name">Value</th>
                                                    <th data-field="price">Redeemed</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {this.state.rewards.map(reward => (
                                                    <tr key={reward._id}>
                                                        <td>{reward.title}</td>
                                                        <td></td>
                                                        <td>{reward.customers.length}</td>
                                                        <td>
                                                            <Modal
                                                            header={`${reward.title} Data`}
                                                            trigger={<Button>Edit</Button>}>
                                                            <Section>
                                                                <Row>
                                                                    <Col s={3}></Col>
                                                                        <Input s={6}
                                                                            label='Title'
                                                                            name="editRewardTitle"
                                                                            type="text"
                                                                            className='offset-l3'
                                                                            defaultValue={reward.title}
                                                                            onChange={this.handleInputChange}
                                                                           
                                                                        />
                                                                </Row>
                                                                <Row>
                                                                    <Col s={3}></Col>
                                                                        <Input s={6}
                                                                            label="Description"
                                                                            name="editRewardDescription"
                                                                            type="text"
                                                                            className='offset-l3' 
                                                                            defaultValue={reward.description}
                                                                            onChange={this.handleInputChange}
                                                                           
                                                                            
                                                                        />
                                                                </Row>
                                                                <Row>
                                                                    <Col s={4} className="center-align offset-l4">
                                                                        <Button onClick={this.handleAddReward} waves='light'>
                                                                            Add Reward 
                                                                            <Icon right>send</Icon>
                                                                        </Button>                                   
                                                                    </Col>
                                                                </Row>
                                                            </Section>
                                                            </Modal>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <Col s={8} className='offset-s3 btn-style'>
                                            <Modal
                                                header='Add a Reward'
                                                trigger={ <Button className='blue'>Add Reward</Button>}
                                                >
                                                    <Section>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Title"
                                                                    name="rewardTitle"
                                                                    type="text"
                                                                    className='offset-l3'
                                                                    defaultValue={this.state.rewardTitle}
                                                                    onChange={this.handleInputChange}
                                                                           
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={3}></Col>
                                                                <Input s={6}
                                                                    label="Description"
                                                                    name="rewardDescription"
                                                                    type="text"
                                                                    className='offset-l3' 
                                                                    defaultValue={this.state.rewardDescription}
                                                                    onChange={this.handleInputChange}
                                                                   
                                                                />
                                                        </Row>
                                                        <Row>
                                                            <Col s={4} className="center-align modal-close offset-l4">
                                                                <Button onClick={this.handleAddReward} waves='light'>
                                                                    Add Reward 
                                                                    <Icon right>send</Icon>
                                                                </Button>                              
                                                            </Col>
                                                        </Row>
                                                </Section>
                                            </Modal>
                                        </Col>
                                    </Section>
                                }>
                            </Card>
                        </Col>
                    </Row>
                </Section>
            </Section>
        )
    }
}