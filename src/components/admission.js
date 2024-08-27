import React from 'react';
import image1 from '../assets/images/WhatsApp Image 2024-06-07 at 2.08.png';
import image2 from '../assets/images/WhatsApp Image 2024-06-07 at 2.20.png';
import image3 from '../assets/images/WhatsApp Image 2024-06-07 at 2.47.png';
import image4 from '../assets/images/Group 35.png';
import { WhatsApp } from '@mui/icons-material';

const Admission = () => {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='w-full bg-teal-600 p-4 rounded-md mb-6'>
        <h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
          Easy Steps for Admission
        </h2>
        <p className='text-base sm:text-lg text-white'>
          1. Choose Course and Institute 2. Submit Application 3. After Confirmation Pay Online 
          <span className='text-xl sm:text-2xl text-green-400 ml-2'>"Apply Now"</span>
        </p>
      </div>

      <div>
        <h2 className='text-3xl sm:text-4xl mb-6'>
          <span className='text-teal-600 font-bold'>Events</span> and Open Days
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <img src={image3} alt='Event 1' className='w-full h-auto mb-2 rounded-lg' />
            <p className='text-sm sm:text-base'>
              In March 2023, CISCO BRAINS Institute Peshawar, in collaboration with Admissionsuc, held an event with the Chairman of HEC as the chief guest, along with the CISCO Country Director and the Rector of BRAINS.
            </p>
          </div>
          <div className='flex flex-col'>
            <img src={image1} alt='Event 2' className='w-full h-auto mb-2 rounded-lg' />
            <p className='text-sm sm:text-base'>
              In 2018-19, AUSC sent 70 students in the first round and 100 students in the second round on scholarships for MS programs to Sichuan University of Science and Technology in China.
            </p>
          </div>
          <div className='flex flex-col'>
            <img src={image2} alt='Event 3' className='w-full h-auto mb-2 rounded-lg' />
            <p className='text-sm sm:text-base'>
              In May 2024, the Department of Management Sciences at COMSATS University Islamabad, Attock Campus, hosted an event for startups.
            </p>
          </div>
        </div>

        <div className='flex w-full mt-8'>
          <img src={image4} alt='image4' className='w-full h-auto rounded-lg' />
        </div>

        <div className='flex items-center justify-between w-full h-24 rounded-lg p-4 mt-6 bg-teal-600 text-white text-lg sm:text-xl lg:text-2xl'>
          <h1 className='flex-1'>Live Chat <br /> WhatsApp</h1>
          <WhatsApp className='text-white' style={{ fontSize: '3rem' }} />
        </div>
      </div>
    </div>
  );
}

export default Admission;
