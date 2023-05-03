import React from 'react'
import back from '../../images/hero.jpg';
import logo from '../../images/logo.png'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${back})` }}>
        <div className="bg-black w-full h-full lg:bg-opacity-50 ">
          <Header>
                <div className="flex justify-between h-28 items-center">
                    <Link to={'/'}><img src={logo} alt="logo" className='h-11 pl-10' /></Link>
                    <Link to={'/signin'} className='font-semibold text-xl 0 pr-10 hover:underline'>Sign In</Link>
                </div>
          </Header>
          <h1 className='text-white text-3xl font-bold'>Main Page</h1>
        </div>
      </div>
    </>
    );
}

export default MainPage