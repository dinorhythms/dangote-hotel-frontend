import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong>Dangote</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/dashboard" activeClassName="activeClass">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/rooms" activeClassName="activeClass">Rooms</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <   MDBNavLink to="/reservation" activeClassName="activeClass">Reservations</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/service" activeClassName="active">Services</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <NavLink exact={true} to="/logout" className="border border-light rounded mr-1 nav-link Ripple-parent" activeClassName="activeClass"><MDBIcon fab icon="github" className="mr-2"/>Logout</NavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;