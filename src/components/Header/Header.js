import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
  <Navbar className="nav-bar" expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} >Maura</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav>
        <NavLink style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} to='/project' className='nav-link'>Projects</NavLink>
        <NavLink style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} to='/contact' className='nav-link'>Contact</NavLink>
        <NavLink style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} to='/about' className='nav-link'>Slugs</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
