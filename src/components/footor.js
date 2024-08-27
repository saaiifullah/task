import React from 'react';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import TikTokIcon from '@mui/icons-material/TikTok';
import logo from '../assets/images/Web  1.png'

const Footer = () => {
  return (
    <div className='relative bg-gray-200'>
      <div className="bg-teal-600 text-white w-full h-64 flex justify-around items-center relative z-10" style={{ clipPath: 'polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)' }}>
        <div className='flex flex-col items-center'>
          <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} className='rounded-lg'>
            Contact us
          </Button>
          <div className='flex mt-4'>
            {/* <TikTokIcon className='mx-2' /> */}
            <InstagramIcon className='mx-2' />
            <LinkedInIcon className='mx-2' />
            <YouTubeIcon className='mx-2' />
            <FacebookIcon className='mx-2' />
            {/* <TwitterIcon className='mx-2' /> */}
          </div>
          <div className='mt-6'>
            <img src={logo} alt="LOGO" className='h-16 w-full' />
          </div>
        </div>
        <div>
          <h1>Select your Course</h1>
          <h1>Apply for Admission</h1>
          <h1>Become a Partner</h1>
          <h1>Join our team</h1>
        </div>
        <div>
          <h1>Apply for Institutions</h1>
          <h1>About us</h1>
          <h1>Privacy policy</h1>
          <h1>Students Reviews</h1>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
