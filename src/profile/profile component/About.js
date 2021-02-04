import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap'
const About=()=> { 
    return ( 
    <Container  id="about">
        <h2>About <span style={{color:"cyan"}}>Me</span></h2>
        <Row className="d-flex justify-content-md-center">
            <Col >
            <Card className="card" >
                <Card.Img variant="top" src="/images/teacher.png" className="toppart"/>
                <Card.Body>
                    <Card.Title><h5>Pioneer High School</h5></Card.Title>
                </Card.Body>
            </Card>
            </Col>
            <Col >
                <Card className="card" >
                <Card.Img variant="top" src="/images/think.png" className="toppart"/>
                <Card.Body>
                    <Card.Title><h5>Preparatory cycle Physics-Chemistry</h5></Card.Title>
                </Card.Body>
            </Card>
            </Col>
            <Col >
            <Card className="card" >
                <Card.Img variant="top" src="/images/graduated.png" className="toppart"/>
                <Card.Body>
                    <Card.Title><h5>Engineering school of Gabes</h5></Card.Title>
                </Card.Body>
            </Card>
            </Col>
            <Col >
            <Card className="card" >
                <Card.Img variant="top" src="/images/girl.png" className="toppart"/>
                <Card.Body>
                    <Card.Title><h5>Go MyCode</h5></Card.Title>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container> 
    );
}
export default About;