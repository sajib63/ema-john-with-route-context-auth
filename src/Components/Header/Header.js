import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <Link to=''>{user?.email}</Link>

      <div>

        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>

        {
          user?.uid ? <Link onClick={logOut} >Log Out</Link>
            :
            <>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/login'>Login</Link>
            </>

        }


      </div>
    </nav>

  );
};

export default Header;