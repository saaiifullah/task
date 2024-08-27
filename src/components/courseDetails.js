import React from 'react';
import image1 from '../assets/images/Group 24.png';
import image2 from '../assets/images/Group 25.png';
import image3 from '../assets/images/Group 26.png';
import image4 from '../assets/images/Group 27.png';
import image5 from '../assets/images/Group 28.png';
import image6 from '../assets/images/Group 29.png';
import image7 from '../assets/images/Group 30.png';

const CourseDetails = () => {
  return (
    <div className='relative p-4 sm:p-8 min-h-screen'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='rounded-2xl w-full md:w-1/2 relative'>
            <img src={image1} alt='BS Programs' className='w-full h-auto rounded-2xl' />
          </div>
          <div className='rounded-2xl w-full md:w-1/2 relative'>
            <img src={image2} alt='MS & PhD Programs' className='w-full h-auto rounded-2xl' />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-6'>
          <div className='rounded-2xl w-full sm:w-1/3 relative'>
            <img src={image3} alt='Short Courses' className='w-full h-auto rounded-2xl' />
          </div>
          <div className='rounded-2xl w-full sm:w-1/3 relative'>
            <img src={image4} alt='Coaching Academy' className='w-full h-auto rounded-2xl' />
          </div>
          <div className='rounded-2xl w-full sm:w-1/3 relative'>
            <img src={image5} alt='Test & Interview Preparation' className='w-full h-auto rounded-2xl' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='rounded-2xl w-full md:w-1/2 relative'>
            <img src={image6} alt='BS Programs' className='w-full h-auto rounded-2xl' />
          </div>
          <div className='rounded-2xl w-full md:w-1/2 relative'>
            <img src={image7} alt='MS & PhD Programs' className='w-full h-auto rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
