import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from 'reactstrap';

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='navbar-container'>
      {/* <header className='brand-container'>
        <Link to='/' className='brand'>
          <h1>'Shine</h1>
        </Link>
        <p className='city'>Nashville, TN</p>
      </header> */}
      <Navbar color="light" light expand="md" className={isOpen ? 'justify-content-between color-nav' : 'justify-content-between color-nav bg-transparent'}>
      <NavbarBrand href="/" className="mr-auto">
        <Link to='/' className='brand'>
          <h1>'Shine</h1>
        </Link>
        <p className='city'>Nashville, TN</p>
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto navbar' navbar>
            <NavItem>
              <Link to='/roster' className='navbar-item'>roster</Link>
            </NavItem>
            <NavItem>
              <Link to='/schedule' className='navbar-item'>schedule</Link>
            </NavItem>
            <NavItem>
              <Link to='/highlights' className='navbar-item'>highlights</Link>
            </NavItem>
            <NavItem>
              <Link to='/contact' className='navbar-item'>contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/* <header className='brand-container'>
        <Link to='/' className='brand'>
          <h1>'Shine</h1>
        </Link>
        <p className='city'>Nashville, TN</p>
      </header>
      <nav className='navbar'>
        <div className='navbar-items'>
          <Link to='/about' className='navbar-item'>about</Link>
          <Link to='/roster' className='navbar-item'>roster</Link>
          <Link to='/schedule' className='navbar-item'>schedule</Link>
          <Link to='/highlights' className='navbar-item'>highlights</Link>
          <Link to='/contact' className='navbar-item'>contact</Link>
        </div>
      </nav> */}
    </div>
  );
}
