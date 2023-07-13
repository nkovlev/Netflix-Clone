import React, { useState } from 'react';
import acclogo from '../images/default-blue.png';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const AccountInfo = () => {
  const [autoplay1, setAutoplay1] = useState(true);
  const [autoplay2, setAutoplay2] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAutoplay1Change = () => {
    setAutoplay1(!autoplay1);
  };

  const handleAutoplay2Change = () => {
    setAutoplay2(!autoplay2);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/main');
    }, 2000);
  };

  return (
    <div className='w-screen h-full bg-black flex justify-center'>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <ClipLoader color="red" loading={loading} size={50} />
        </div>
      ) : null}
      <div className="flex w-2/5 h-full">
        <div>
          <p className='text-6xl text-white max-w-md pt-20 mb-2'>Edit Profile</p>
          <hr className="border border-t border-neutral-600" />
          <div className="flex mt-6 gap-3">
            <div className="w-40">
              <img src={acclogo} alt="acclogo" className='w-28 h-28 cursor-pointer rounded-md' />
            </div>
            <div>
              <input type="text" placeholder='Name' className='w-full text-white py-2 pl-2 bg-neutral-600 mb-5' />
              <p className='text-neutral-400 text-xl font-light mb-3'>Game Handle:</p>
              <p className='text-white font-light text-sm mb-3'>Your handle is a unique name that'll be used for playing with other Netflix members across all Netflix Games.</p>
              <input type="text" placeholder='Create Game Handle' className='w-full text-white py-2 pl-2 bg-neutral-600 mb-8' />
              <hr className="border border-t border-neutral-600 mb-5" />
              <p className='text-neutral-400 text-xl font-light mb-4'>Maturity Settings:</p>
              <p className='text-white font-semibold text-sm py-2 pl-3 bg-neutral-700 w-40 mb-4'>All Maturity Ratings</p>
              <p className='text-white font-light mb-7'>Show titles of <b>all maturity ratings</b> for this profile</p>
              <button className='w-20 py-1 text-center bg-transparent border border-neutral-600 text-neutral-600 font-light hover:border-white hover:text-white mb-7'>Edit</button>
              <hr className="border border-t border-neutral-600 mb-5" />
              <p className='text-neutral-400 text-xl font-light mb-3'>Autoplay Controls:</p>
              <label htmlFor="autoplay1" className="flex items-center cursor-pointer mb-2">
                <input type="checkbox" id="autoplay1" className="hidden" checked={autoplay1} onChange={handleAutoplay1Change} />
                <div className="w-8 h-8 border border-neutral-600 mr-2">
                  {autoplay1 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-white">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-white font-light text-sm">Autoplay next episode in a series on all devices.</span>
              </label>

              <label htmlFor="autoplay2" className="flex items-center cursor-pointer mb-5">
                <input type="checkbox" id="autoplay2" className="hidden" checked={autoplay2} onChange={handleAutoplay2Change} />
                <div className="w-8 h-8 border border-neutral-600 mr-2">
                  {autoplay2 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-white">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-white font-light text-sm">Autoplay previews while browsing on all devices.</span>
              </label>
            </div>
          </div>
          <hr className="border border-t border-neutral-600 mb-5" />
          <div className="flex gap-3">
          <button className='py-2 px-6 text-center bg-white  text-black font-semibold hover:bg-red-600 hover:text-white mb-7' onClick={handleClick}>Save</button>
          <button className='py-2 px-7 text-center bg-transparent border border-neutral-600 text-neutral-600 font-normal hover:border-white hover:text-white mb-7' onClick={handleClick}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
