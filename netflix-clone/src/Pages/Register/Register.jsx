import React from 'react'
import logo from '../../images/logo.png';
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';

const Register = () => {

    const params = new URLSearchParams(window.location.search);
    const userEmail = params.get('userEmail');
    return (
    <>
        <Header>
                <div className="flex justify-between h-28 items-center">
                    <Link to={'/'}><img src={logo} alt="logo" className='h-11 pl-10' /></Link>
                    <Link to={'/signin'} className='font-semibold text-xl 0 pr-10 hover:underline'>Sign In</Link>
                </div>
            <div className='h-0.5 w-full bg-slate-400 opacity-20'></div>
        </Header>
        <div className="max-w-md mx-auto">
            <div className="">
                <h1 className='text-black font-semibold text-3xl mt-10'>Sign Up to start watch your favorites movies</h1>
                <p className='text-black mt-5 mb-5 text-xl'>Enter your password and you'll be watching in no time.</p>
                <p>Email</p>
                <p className='font-bold mb-4'>{userEmail}</p>
                <input type="text" className='ring-1 ring-black w-full p-4 mb-4' placeholder='Enter your password'/>
                <p className='text-blue-700 hover:underline cursor-pointer mb-4'>Forgot your password?</p>
                <Link className='flex items-center justify-center w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded'>Next</Link>
            </div>
        </div>
    </>
)
}

export default Register
