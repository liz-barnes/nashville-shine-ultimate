import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to='/' className='brand'>
        'Shine
      </Link>
      <div className="navbar-items">
        <Link to='/about' className='navbar-item'>about</Link>
        <Link to='/roster' className='navbar-item'>roster</Link>
        <Link to='/schedule' className='navbar-item'>schedule</Link>
        <Link to='/highlights' className='navbar-item'>highlights</Link>
        <Link to='/contact' className='navbar-item'>contact</Link>
      </div>
    </nav>
  );
}
