// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaAlignRight } from 'react-icons/fa';

export default function Nav() {
  // const [toggle, setToggle] = useState(false);

  return (
    <div className='navbar-container'>
      <header className='brand-container'>
        <Link to='/'>
          <h1 className='brand'>'Shine</h1>
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
      </nav>
    </div>
  );
}
