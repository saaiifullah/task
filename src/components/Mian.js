import React from 'react';
import background from '../assets/images/Captureccc.png';
import group20 from '../assets/images/Group 20.png';
import second from '../assets/images/WhatsApp Image 2024-06-08 at 08.07.png';
import image1 from '../assets/images/Group 19.png';
import image2 from '../assets/images/Group 21.png';
import image3 from '../assets/images/Group 22.png';
import Visa from './visa';
import CourseDetails from './courseDetails';
import Partners from './partners';
import Admission from './admission';
import Footor from './footor';
import New from './new';
import bg2 from '../assets/images/Rectangle 3.png'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const Main = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${background})` }}>
      {/* Main content */}
      <div className="flex flex-col items-center mt-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl font-bold mb-10 text-center">
          Connecting People to Education
        </h1>

        {/* Search box */}
        <div className="bg-teal-700 bg-opacity-80 rounded-full p-2 w-full max-w-4xl mx-auto">
          <div className="hidden md:flex md:flex-wrap md:gap-2 md:justify-center mb-2">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">All</button>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-teal-500 transition">Courses</button>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-teal-500 transition">Uni, Colleges & Schools</button>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-teal-500 transition">Hostels & Share Rooms</button>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-teal-500 transition">Academies</button>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-teal-500 transition">Scholarships</button>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-teal-500 transition">Internships</button>
          </div>
          <TextField
  variant="outlined"
  placeholder="Search for courses, uni & colleges and information"
  fullWidth
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon style={{ color: 'white' }} />
      </InputAdornment>
    ),
    className: 'bg-teal-600 text-white rounded-full',
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '9999px', // This ensures a fully rounded shape
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
    '& .MuiInputBase-input': {
      padding: '10px 14px 10px 0', // Adjust padding to your preference
      paddingLeft: '48px', // Increase left padding to accommodate the search icon
    },
    '& .MuiInputAdornment-root': {
      marginLeft: '16px', // Adjust the position of the search icon
    },
  }}
/>
        </div>
      

        <p className="text-white text-xl mt-8 text-center">
          Apply to Any University, College, School and Hostel
        </p>
      </div>

     
      <div>
  <img src={bg2} alt='bg2' />

  <div className='flex absolute top-64'>
    <div className="w-[60%] h-auto rounded-tl-[50px] overflow-hidden ml-4">
      <img src={group20} alt="group20" />
    </div>

    <div className="mt-[150px] w-[395px] h-[300px] mr-10">
      <img src={second} alt="second" />
    </div>

    <div className="mt-[150px] w-[200px] h-[180px] bg-black text-white p-4 ml-4">
      <h1 className="text-3xl font-sans">Opportunity</h1>
      <p className="text-sm mt-2">
        Want to start your own University or Institute? Get expert advice and a detailed feasibility report. Let's make your vision a reality!
      </p>
    </div>
  </div>

  {/* Numbers below the images */}
  <div className="absolute top-full mt-40 flex flex-col items-center justify-center p-10 px-4 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
      <div className='bg-teal-200 w-full h-[200px] flex flex-col items-center justify-center'>
        <h1 className="text-3xl sm:text-4xl text-white">90</h1>
        <p className="text-white">Scholarships</p>
      </div>
      <div className='bg-teal-200 w-full h-[200px] flex flex-col items-center justify-center'>
        <h1 className="text-3xl sm:text-4xl text-white">1099</h1>
        <p className="text-white">New Admissions</p>
      </div>
      <div className='bg-teal-200 w-full h-[200px] flex flex-col items-center justify-center'>
        <h1 className="text-3xl sm:text-4xl text-white">209</h1>
        <p className="text-white">Total Institutions</p>
      </div>
      <div className='bg-teal-200 w-full h-[200px] flex flex-col items-center justify-center'>
        <h1 className="text-3xl sm:text-4xl text-white">333</h1>
        <p className="text-white">Hostels</p>
      </div>
    </div>

    <div className='flex flex-col lg:flex-row gap-4 w-full mt-6'>
      <div className="w-full h-[380px] lg:w-1/3 p-2">
        <img src={image1} alt='Admission Application' className='w-full h-[380px] object-cover' />
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <img src={image2} alt='Find Your City' className='w-full h-auto object-cover' />
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <img src={image3} alt='Scholarships' className='w-full h-auto object-cover' />
      </div>
    </div>
  </div>
</div>

      {/* Create account button */}
      <div className="absolute top-4 right-4">
        <button className="rounded-full bg-teal-500 text-white px-6 py-2">
          Create Your account
        </button>
      </div>

     

      <Visa />
      <CourseDetails />
      <Partners />
      <Admission /> 
    
       <New /> 
    </div>
  );
};

export default Main;
