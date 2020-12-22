import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizzaaaa</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar
