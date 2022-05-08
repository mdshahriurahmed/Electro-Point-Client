import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" sticky='top' className='bg'>
            <Container>
                <Navbar.Brand as={Link} to='/'><img src={logo} height="28px" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">

                        {
                            user ?
                                <>
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                                    <Nav.Link as={Link} to='/manageInventory'>Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to='/addNewItem'>Add Item</Nav.Link></>

                                :
                                <>
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                                    <Nav.Link as={Link} to='/manageInventory'>Manage Inventory</Nav.Link>
                                </>
                        }

                    </Nav>
                    <Nav>

                        {user ?
                            <Nav.Link as={Link} to='/login' onClick={handleSignOut}>Sign Out</Nav.Link>
                            // <button onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link as={Link} to='/login'>Log in</Nav.Link>}

                        <Nav.Link className='border border-white border-1 rounded ' as={Link} to='/signup'>
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >



    );
};

export default Header;