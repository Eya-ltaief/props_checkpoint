import React from 'react';
import PropTypes from "prop-types";
import { Container,Row,Col,Button} from 'react-bootstrap'


const Profile=(props)=> { 
    const styleProfile ={marginTop: "75%",color: "cyan",
    letterSpacing: "0.1em"}
    const styleIntroduction ={marginTop: "-65%",
    marginLeft: "75%",
    letterSpacing: "0.1em",color: "gainsboro",
    textAlign: "left",
    justifyContent: "left"}
    return ( 
    <Container fluid="lg" className="d-flex justify-content-between" id="content">
        <Row>
            <Col>
                <div className="FirstName" style={styleProfile}>
                    <h3 style={{color:"gainsboro"}}>{props.name}</h3> 
                    <hr/><br />
                    <br /><h3>Portfolio <span style={{color:"cyan"}}>.</span></h3>
                    <br />
                    <Button variant="outline-secondary" className="button" onClick={()=>handleName(props)}><h6>Contact me</h6></Button>{' '}
                </div>
            </Col>
            <Col>{props.children}</Col>
            <Col>
                <div className="introduction" style={styleIntroduction}>
                    <h3>Introduction</h3><hr /><br /><br />
                    <h5>Electrical Automation Engineer, <br />learning {props.profession} at {props.bio}</h5>
                </div>
            </Col>
        </Row>
    </Container>
            );
}
const handleName = (props) => {
    alert(`Welcome to my portfolio I am ${props.name}`);
};

Profile.defaultProps = {
name : "Aya Letaief",
bio:"GoMycode", 
profession:"Developer"
};

Profile.prototype={
    name: PropTypes.stringisRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    handleName: PropTypes.func
}

export default Profile;