import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import AccountLogo from '../images/default-blue.png';
import { BsPerson } from 'react-icons/bs'

const AccountMenu = ({ visible }) => {
    const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={AccountLogo} alt="accountlogo" />
          <p className="text-white text-sm group-hover/item:underline">Username</p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <BsPerson className='fill-white w-8 text-xl text-gray-400'/>
          <p className="text-white text-sm group-hover/item:underline">Account</p>
        </div>
        <hr className="bg-gray-600 border-0 h-px" />
        <div className=" text-center text-white text-sm hover:underline" onClick={handleSignOut}>
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
