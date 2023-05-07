import React, { useCallback } from 'react'
import back from '../../images/hero.jpg';
import logo from '../../images/logo.png'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useState } from 'react';
import MobileMenu from '../../Components/MobileMenu';
import MainLogo from '../../images/default-blue.png'
import AccoutMenu from '../../Components/AccoutMenu';


const MainPage = () => {

  // const [selectedItem, setSelectedItem] = useState('Home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  return (
    <div className='bg-zinc-900 h-full overflow-x-hidden'>
          <Header>
                <div className="w-full fixed z-40">
                  <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
                  <img className='h-4 lg:h-7' src={logo} alt="logo" />
                  <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>Home</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>TV Shows</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>Movies</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>New & Popular</p>
                    <p className='text-white cursor-pointer hover:text-fray-300 transition font-light'>My List</p>
                  </div>
                  <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative ">
                    <p className='text-white text-sm'>Browse</p>
                    <BsChevronDown className='text-white transition'/>
                    <MobileMenu visible={showMobileMenu}/>
                  </div>
                  <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                      <BsSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                      <BsBell/>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                      <div className="w-6 h-6  lg:w-10 lg:h-10 rounded-md overflow-hidden">
                        <img src={MainLogo} alt="mainLogo" />
                      </div>
                      <BsChevronDown className='text-white transition'/>
                      <AccoutMenu visible/>
                    </div>
                  </div>
                  </div>
                </div>
          </Header>
    </div>
    );
}

export default MainPage