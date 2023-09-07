import { useState } from 'react';
import Logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useOnline from '../Hooks/useOnline';
import { useSelector } from 'react-redux';
import { SWIGGY_LOGO } from '../constants';

const Title = () => (
  <a href='/'>
    <img data-testid='logo' className='logo' src={SWIGGY_LOGO} alt='Logo' />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/instamart'>Instamart</Link>
          </li>
          <li>
            <Link to='/cart'>
              <i className='shopping-cart'>
                <FaShoppingCart /> -{' '}
                <span data-testid='cart' className='items-count'>
                  {cartItems.length}
                </span>
              </i>
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className='logout-btn'
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className='login-btn' onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
          <li data-testid='online-status'>
            {isOnline ? '🟢nline' : '🔴ffline'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
