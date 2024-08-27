import React from 'react';
import image1 from '../assets/images/Group 33.png';
import image2 from '../assets/images/Group 34.png';
import image3 from '../assets/images/Group 35.png';

const Partners = () => {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 lg:p-12'>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <h2 className='text-3xl sm:text-4xl mb-4 sm:mb-0'>
          <span className='text-teal-400 font-bold'>Our</span> Partners
        </h2>
        <button className='bg-teal-400 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-base sm:text-xl md:text-2xl font-bold ml-0 sm:ml-4'>
          Apply for the Partnership
        </button>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8'>
        <div className='relative w-full sm:w-[506px] h-auto sm:h-[410px] rounded-[20px] sm:rounded-[50px]'>
          <img src={image2} alt='Institutions' className='w-full h-full object-cover rounded-[20px] sm:rounded-[50px]' />
        </div>
        <div className='relative w-full sm:w-[495px] h-auto sm:h-[410px] rounded-[20px] sm:rounded-[50px]'>
          <img src={image1} alt='Jobs and Internships' className='w-full h-full object-cover rounded-[20px] sm:rounded-[50px]' />
        </div>
        <div className='relative w-full sm:w-[514px] h-auto sm:h-[410px] rounded-[20px] sm:rounded-[50px]'>
          <img src={image3} alt='Startups & Grants Opportunity' className='w-full h-full object-cover rounded-[20px] sm:rounded-[50px]' />
        </div>
      </div>
    </div>
  );
}

export default Partners;
