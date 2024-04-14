import { Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from '../logo.png'; 
import git from '../git.png'

class LandingNavBar extends Component {

    state = {}

    render() {
        return(
            <Navbar>
                <Navbar.Brand as={Link} to="/">
                    <div style={{width:'70px', height:'140px'}}>
                        <img style={{width:'55px', height:'55px'}} src={logo} alt="Logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="https://github.com/AksheetDUTTA123/Google_Mhacks_Project2024">
                <div className="logo-container">
        <img style={{width:'50px', height:'50px'}} src={git} alt="git" />
      </div>
                </Navbar.Brand>
                {/* <div className="ml-auto pr-5 pt-3">
                    <Navbar.Text>
                        <ul>
                            {this.props.buttons}
                        </ul>
                    </Navbar.Text>
                </div> */}
            </Navbar>
        );
    }
}

LandingNavBar.defaultProps = {
    buttons: []
}

export default LandingNavBar;