import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function NavBar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className='lg:hidden block absolute top-14 w-full left-0 right-0 bg-gray-100 shadow-xl text-gray-900 transition'>
      <ul className='text-center text-xl p-10'>
        <Link smooth duration={300} to="About" style={{ textDecoration: 'none', color: '#fff' }}>
          <li className='my-3 py-3 text-gray-900 hover:bg-gray-300 hover:rounded'>About</li>
        </Link>
        <Link smooth duration={300} to="Nominations" style={{ textDecoration: 'none', color: '#fff' }}>
          <li className='my-3 py-3 text-gray-900 hover:bg-gray-300 hover:rounded'>Nominations</li>
        </Link>
        <Link smooth duration={300} to="Events" style={{ textDecoration: 'none', color: '#fff' }}>
          <li className='my-3 py-3 text-gray-900 hover:bg-gray-300 hover:rounded'>Events</li>
        </Link>
        <Link smooth duration={300} to="TermsandConditions" style={{ textDecoration: 'none', color: '#fff' }}>
          <li className='my-3 py-3 text-gray-900 hover:bg-gray-300 hover:rounded'>Terms & Conditions</li>
        </Link>
        <button 
          onClick={() => navigate("/Forms/RegForm")} // Navigate to the RegForm route
          className='border-2 text-gray-100 bg-gray-800 hover:bg-white hover:text-gray-700 hover:border-gray-700 rounded-xl mt-2 mb-[-10px] px-4 py-2'
        >
          Register Now
        </button>
      </ul>
    </div>
  );

  return (
    <nav className='bg-amber-50 sticky top-0 z-50'>
      <div className='h-5vh flex justify-between z-50 text-gray-800 py-[12px] px-10 lg:px-20'>
        <div className='flex items-center'>
          <span className='text-3xl font-bold'>KLA 24</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 justify-end font-normal hidden items-center'>
          <div className='flex'>
            <ul className='flex gap-8 lg:gap-12 items-center text-[15px] lg:text-[18px]'>
              <Link smooth duration={300} to="About" style={{ textDecoration: 'none', color: '#fff' }}>
                <li className='hover:text-gray-900 text-gray-700 md:mt-3 md:mb-[-10px] transition border-b-2 border-gray-100 hover:border-gray-900 cursor-pointer'>About</li>
              </Link>
              <Link smooth duration={300} to="Nomination" style={{ textDecoration: 'none', color: '#fff' }}>
                <li className='hover:text-gray-900 text-gray-700 md:mt-3 md:mb-[-10px] transition border-b-2 border-gray-100 hover:border-gray-900 cursor-pointer'>Nominations</li>
              </Link>
              <Link smooth duration={300} to="Events" style={{ textDecoration: 'none', color: '#fff' }}>
                <li className='hover:text-gray-900 text-gray-700 md:mt-3 md:mb-[-10px] transition border-b-2 border-gray-100 hover:border-gray-900 cursor-pointer'>Events</li>
              </Link>
              <Link smooth duration={300} to="TermsandConditions" style={{ textDecoration: 'none', color: '#fff' }}>
                <li className='hover:text-gray-900 text-gray-700 md:mt-3 md:mb-[-10px] transition border-b-2 border-gray-100 hover:border-gray-900 cursor-pointer'>Terms & Conditions</li>
              </Link>
              <button 
                onClick={() => navigate("/Forms/RegForm")} // Navigate to the RegForm route
                className='text-gray-100 font-semibold bg-gray-800 hover:bg-gray-900 hover:text-gray-200 rounded-xl mt-2 mb-[-10px] px-4 py-2'
              >
                Register Now
              </button>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
