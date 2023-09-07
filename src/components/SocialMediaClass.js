import { Component } from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import {
  LinkedIn_Profile,
  Github_Profile,
  Twitter_Profile,
  Email,
} from '../constants';

class SocialMediaClass extends Component {
  render() {
    return (
      <div className='social-media'>
        <a href={LinkedIn_Profile} className='linkedin' target='_blank'>
          <AiFillLinkedin />
        </a>
        <a href={Github_Profile} className='github' target='_blank'>
          <AiFillGithub />
        </a>
        <a href={Twitter_Profile} className='twitter' target='_blank'>
          <AiOutlineTwitter />
        </a>
        <a href={Email} className='email' target='_blank'>
          <BiLogoGmail />
        </a>
      </div>
    );
  }
}

export default SocialMediaClass;
