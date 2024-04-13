import { Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from '../log.png' // handshake logo

class LandingNavBar extends Component {

    state = {}

    render() {
        return(
            <Navbar>
                <Navbar.Brand>
                    <div style={{width:'100px', height:'100px'}}>
                        <img style={{width:'100px', height:'100px'}} src={logo} />
                    </div>
                    
                </Navbar.Brand>
                <div className="ml-auto pr-5 pt-3">
                    <Navbar.Text>
                        <ul>
                            {this.props.buttons}
                        </ul>
                    </Navbar.Text>
                </div>
               
            </Navbar>
        );
    }
}

LandingNavBar.defaultProps = {
    buttons: []
}

export default LandingNavBar;