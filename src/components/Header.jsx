import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const handleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    console.log(isMenuOpen);

  return (
    <>
    
    <nav className='bg-primary text-white h-16 border-b-4 border-yellow-300 flex justify-between'>
      <section className='flex'>
        <img className='w-14 mt-2 mb-2 ml-4' src="src\assets\logo2.png" alt="logo" />
        <h2 className='pt-4 ml-2 text-2xl font-semibold'>BookMyKitchen</h2>
      </section>

      <section className='hidden md:flex space-x-10 mr-5 font-medium'>
        <ul className='flex pt-5 gap-14'>
          <li>Home</li>
          <li>Kitchen</li>
          <li>Dashboard</li>
        </ul>

        <button className='bg-secondary m-3 pr-2 pl-2 ml-10 border whitespace-nowrap'>
          Get Started
        </button>
      </section>

       {isMenuOpen ? <img onClick={handleIsMenuOpen} className='m-3 w-10 h-10 md:hidden' src="src\assets\close.png" alt="menu-icon" /> 
       :
       <img onClick={handleIsMenuOpen} className='m-3 w-10 h-10 md:hidden' src="src\assets\menu-bar.png" alt="menu-icon" />
       }
    </nav>

     {isMenuOpen &&  <section className='bg-primary align-middle  font-medium text-white text-center pt-3 pb-3 md:hidden'>
        <ul className='flex flex-col space-y-1'>
         <li>Home</li>
          <li>Kitchen</li>
          <li>Dashboard</li>
        </ul>

        <button className='bg-secondary pr-2 pl-2 mt-2 border whitespace-nowrap'>
          Get Started
        </button>
      </section>}
    </>
  );
};

export default Header;
