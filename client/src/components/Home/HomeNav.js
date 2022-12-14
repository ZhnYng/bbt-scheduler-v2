import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../components/Brand';

export default function NavigationBar(){
    return(
        <Navbar expand="lg" 
        className='fs-4 flex-grow-1 px-lg-5 px-3'>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Brand href="/" className='m-0'>
                <Brand/>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className='flex-column align-items-end'>
                <Nav>
                    <Nav.Link href="/home" className='mx-4'>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/rewards" className='mx-4'>
                        Rewards
                    </Nav.Link>
                    <Nav.Link href="/settings" className='mx-4'>
                        Settings
                    </Nav.Link>
                    <Nav.Link href="/logout" onClick={()=>localStorage.clear()} className='mx-4'>
                        Log Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
