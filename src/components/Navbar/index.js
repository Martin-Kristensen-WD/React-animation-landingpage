import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'; 


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav 
            initial={{ y: -250}}
            animate={{ y: -10}}
            transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}>

                <NavLink to='/'>Pizza & Sweet's</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar; 
