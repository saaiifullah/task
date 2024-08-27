import React from 'react';
import logo from '../assets/images/Web  1.png'
import { AccountCircle } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src={logo} alt='logo'  />
      </div>
      <div className='flex gap-10 items-center'>
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
    </div>
  );
}

export default Navbar;
