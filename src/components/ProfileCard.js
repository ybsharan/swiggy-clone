import { Component } from 'react';
import SocialMediaClass from './SocialMediaClass';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, avatar_url, bio } = this.props.data;
    return (
      <div className='founder-profile-card'>
        <h2>About me</h2>
        <div className='user-image'>
          <img src={avatar_url} alt={name} />
        </div>
          <h3>{name}</h3>
          <p>{bio}</p>
          <SocialMediaClass />
      </div>
    );
  }
}

export default ProfileCard;
