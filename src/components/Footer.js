import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='footer-container'>
      <h3>
        Made With ❤️ by {''}
        <a
          href='https://www.linkedin.com/in/ybsharan/'
          target='_blank'
          className='footer-dev-name'
          rel='noreferrer'
        >
          Sharan
        </a>
      </h3>
      <h3>Copyright ©️ 2023 Food Chili. All Rights Reserved.</h3>
      <h3>
        {user.name} - {user.email}
      </h3>
    </div>
  );
};

export default Footer;
