import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import img from '../assets/logo.png';

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className='profile-section'>
        {show ? (
          <>
            <Link to={'/about'}>
              {' '}
              <button
                className='about-profile-btn'
                onClick={() => setShow(false)}
              >
                Hide Founder Profile
              </button>{' '}
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to='profile'>
            <button className='about-profile-btn' onClick={() => setShow(true)}>
              Show Founder Profile
            </button>
          </Link>
        )}
      </div>
      <div className='about-restaurant-section'>
        <div className='about-text'>
          <h3>About US</h3>
          <p>
            "Swiggy" is a notable online food delivery platform that has
            revolutionized how individuals access and relish their preferred
            meals. Established in India, "Swiggy" connects customers with an
            extensive array of restaurants, providing a diverse range of
            cuisines through a user-friendly app and website. Through its
            effective delivery system, real-time order tracking, and smooth
            payment options, "Swiggy" has emerged as a preferred solution for
            convenient and hassle-free food delivery. The platform's dedication
            to customer contentment and dependable service has established it as
            a reliable choice for millions, addressing their culinary yearnings
            and gastronomic needs with efficiency and ease.
          </p>
          <p>
            "Swiggy" has significantly impacted the food delivery landscape as
            an innovative online platform. Founded in India, this platform
            seamlessly connects diners to an extensive array of eateries,
            offering a diverse culinary experience through its intuitive app and
            website. The platform's streamlined delivery system, coupled with
            its real-time order tracking and seamless payment options, has
            established "Swiggy" as a preferred choice for convenient and
            efficient food delivery. With an unwavering commitment to customer
            satisfaction and reliable service, "Swiggy" has garnered the trust
            of countless individuals, effectively catering to their gastronomic
            preferences and ensuring a delightful culinary journey.
          </p>
        </div>
        <div className='restaurant-img'>
          <img src={img} alt='Logo Image' />
        </div>
      </div>
    </div>
  );
};
export default About;
