import React, { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';

const Section = ({ title, description, isVisible, toggleSection }) => {
  return (
    <div className='accordion-card'>
      <h3>
        <span>{title}</span>
      </h3>
      <button className='accordion-btn' onClick={toggleSection}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p className='acc-desc'>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const toggleSection = (sectionName) => {
    if (visibleSection === sectionName) {
      setVisibleSection(null); // Close the section if it's already open
    } else {
      setVisibleSection(sectionName); // Open the clicked section
    }
  };

  return (
    <div>
      <div className='accordion'>
        <h4>
          <span>Instamart Accordion</span>
        </h4>
        <Section
          title={'Can I edit my order?'}
          description={
            'In order to edit your order, please click on "Help" and then "I wantto modify items in my order". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.'
          }
          isVisible={visibleSection === 'about'}
          toggleSection={() => toggleSection('about')}
        />
        <Section
          title={'I want to cancel my order'}
          description={
            'In order to cancel your order, please click on "Help" and then "I want to cancel my order". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.'
          }
          isVisible={visibleSection === 'team'}
          toggleSection={() => toggleSection('team')}
        />
        <Section
          title={'Is there a minimum order value?'}
          description={
            'We have no minimum order value and you can order for any amount. '
          }
          isVisible={visibleSection === 'careers'}
          toggleSection={() => toggleSection('careers')}
        />
      </div>
      <div className='useContext-data-retrive'>
        <h2>
          <span>Context API</span>
        </h2>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
        <p>
          Note : If you change in input box , it will reflect here and in all
          other section including footer.
          <h4>
            {user.name} - {user.email}
          </h4>
        </p>
      </div>
    </div>
  );
};

export default Instamart;
