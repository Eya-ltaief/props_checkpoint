import React from 'react';
import { Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation=()=>{ 
    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" className="flex items py-3" fixed="top" variant="dark">
            <Navbar.Brand href="#home" className="title"><span style={{color:"aquamarine"}}>Aya</span> Letaief <span style={{color:"aquamarine"}}>.</span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="navbar-nav ml-auto" >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigation;