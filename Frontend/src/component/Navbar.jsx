import React from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* Logo */}
      <img src={assets.logo} className='w-36' alt='Logo' />

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink 
          to='/' 
          className='flex flex-col items-center gap-1 hover:text-black'
          activeClassName='text-black'
        >
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:block' />
        </NavLink>

        <NavLink 
          to='/collection' 
          className='flex flex-col items-center gap-1 hover:text-black'
          activeClassName='text-black'
        >
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:block' />
        </NavLink>

        <NavLink 
          to='/about' 
          className='flex flex-col items-center gap-1 hover:text-black'
          activeClassName='text-black'
        >
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:block' />
        </NavLink>

        <NavLink 
          to='/contact' 
          className='flex flex-col items-center gap-1 hover:text-black'
          activeClassName='text-black'
        >
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:block' />
        </NavLink>
      </ul>

      {/* Right Side (Icons) */}
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />

        {/* Profile Icon with Dropdown */}
        <div className='relative group'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='Profile' />
          
          <div className='hidden group-hover:block absolute right-0 mt-4 z-10'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
          <p className=''></p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
