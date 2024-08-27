import React, { useState } from 'react';
import logo from '../assets/images/Web  1.png';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative flex justify-between items-center p-4 bg-white shadow'>
      <div>
        <img src={logo} alt='logo' className='h-10' />
      </div>
      <div className='hidden md:flex gap-10 items-center'>
        <button>
          <a href='#'><span>.</span>Home</a>
        </button>
        <button>
          <a href='#'><span>.</span>Undergraduate</a>
        </button>
        <button>
          <a href='#'><span>.</span>Graduate</a>
        </button>
        <button>
          <a href='#'><span>.</span>Short Courses</a>
        </button>
        <button>
          <a href='#'><span>.</span>Hostel</a>
        </button>
        <button>
          <a href='#'><span>.</span>Internships-job</a>
        </button>
        <button className='flex items-center'>
          <a href='#'><span>.</span>Sign</a>
          <AccountCircle style={{ marginLeft: '8px', fontSize: '24px' }} />
        </button>
      </div>

      {/* Toggle Button for Mobile */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50'>
          <div className='flex flex-col items-center p-4'>
            <button className='w-full text-left'>
              <a href='#'><span>.</span>Home</a>
            </button>
            <button className='w-full text-left'>
              <a href='#'><span>.</span>Undergraduate</a>
            </button>
            <button className='w-full text-left'>
              <a href='#'><span>.</span>Graduate</a>
            </button>
            <button className='w-full text-left'>
              <a href='#'><span>.</span>Short Courses</a>
            </button>
            <button className='w-full text-left'>
              <a href='#'><span>.</span>Hostel</a>
            </button>
            <button className='w-full text-left'>
              <a href='#'><span>.</span>Internships-job</a>
            </button>
            <button className='flex items-center w-full text-left'>
              <a href='#'><span>.</span>Sign</a>
              <AccountCircle style={{ marginLeft: '8px', fontSize: '24px' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;