import React, { Component } from 'react';
import logo from './tier-logo.svg';
import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {

    render() {
        return (
            <nav className="nav-bar">
                <img src={logo} className="App-logo" alt="logo" />
            </nav>
        );
    }

}

export default NavBar;
