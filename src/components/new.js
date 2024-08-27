import React from 'react';
import image1 from '../assets/images/Group 37.png';
import { Instagram, LinkedIn, YouTube, Facebook, Twitter, Telegram } from '@mui/icons-material';

const New = () => {
  return (
    <div className='relative flex justify-center items-center min-h-screen bg-gray-100'>
      <img src={image1} alt='background' className='w-full h-auto object-cover' />
      <div className='absolute inset-0 flex flex-col justify-between items-start p-8 text-white'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-start mt-32 ml-36'>
            <button className='outline text-white py-2 px-6 rounded-full font-semibold'>
              Contact us
            </button>
          </div>
          
          <div className='flex space-x-4 mt-6 ml-20'>
            <Instagram fontSize='large' />
            <LinkedIn fontSize='large' />
            <YouTube fontSize='large' />
            <Telegram fontSize='large' />
            <Twitter fontSize='large' />
            <Facebook fontSize='large' />
          </div>
        </div>

        <div className='flex w-full gap-10 justify-end mt-auto mb-48'>
          <div className='flex flex-col items-start mr-40'>
            <ul className='space-y-2'>
              <li>Select your Course</li>
              <li>Apply for Admission</li>
              <li>Become a Partner</li>
              <li>Join our team</li>
            </ul>
          </div>
          <div className='flex flex-col items-start mr-20'>
            <ul className='space-y-2'>
              <li>Apply for Institutions</li>
              <li>About us</li>
              <li>Privacy policy</li>
              <li>Students Reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;