import React from 'react';
import ProfileCard from './ProfileCard';

import { Github_API_USER, Github_UserName, options } from '../constants';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        bio: '',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(Github_API_USER + Github_UserName, options);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div className='profile-container'>
        <ProfileCard data={userInfo} />
      </div>
    );
  }
}

export default ProfileClass;
