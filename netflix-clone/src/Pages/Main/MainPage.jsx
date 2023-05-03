import React from 'react'
import back from '../../images/hero.jpg';
import logo from '../../images/logo.png'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';


const MainPage = () => {


  // const [selectedItem, setSelectedItem] = useState('Home');
  
  return (
    <div className='bg-zinc-900 h-full overflow-x-hidden'>
          <Header>
                <div className="w-full fixed z-40">
                  <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
                  <img className='h4 lg:h-7' src={logo} alt="logo" />
                  <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>Home</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>TV Shows</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>Movies</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>New & Popular</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>My List</p>
                  </div>
                  </div>
                </div>
          </Header>
    </div>
    );
}

export default MainPage