import React, { useEffect } from 'react';
import Header from './Header'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

const AccountLeave = () => {

const navigate = useNavigate();

const handleClick = () => {
    navigate('/');
};

useEffect(() => {
    const timeoutId = setTimeout(() => {
        navigate('/');
    }, 30000);

    return () => clearTimeout(timeoutId);
}, [navigate]);

return (
    <div className='w-screen h-screen bg-black'>
        <Header>
        <div className="flex justify-between h-28 items-center">
            <Link to={'/'}><img src={logo} alt="logo" className='h-11 ml-10' /></Link>
            <Link className=' bg-red-600 text-white px-6 py-2 cursor-pointer rounded mr-10' to={'/signin'}>Sign In</Link>
        </div>
        </Header>
        <div className="w-full flex items-center justify-center">
            <div className="w-1/3 h-96 bg-white">
                <h1 className='text-3xl font-semibold ml-10 mt-10'>Leaving So Soon?</h1>
                <p className=' ml-10 mt-10 max-w-sm'>Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.</p>         
                <p className='ml-10 mt-10 max-w-xs'>You’ll be redirected to Netflix.com in 30 seconds.</p>
                <button className='w-96 h-10 bg-blue-600 ml-10 mt-6 text-white' onClick={handleClick}>Go Now</button>
            </div>
        </div>
    </div>
)
}

export default AccountLeave