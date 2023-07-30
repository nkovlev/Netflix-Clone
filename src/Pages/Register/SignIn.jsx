import React, { useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import logo from '../../images/logo.png';
import back from '../../images/hero.jpg';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isLearnMoreClicked, setLearnMoreClicked] = useState(false);

  const handleLearnMoreClick = () => {
    setLearnMoreClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        localStorage.setItem('lastUser', email);
        navigate('/main');
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
        setEmail('');
        setPassword('');
      });
  };

  useEffect(() => {
    const lastUser = localStorage.getItem('lastUser');
    if (lastUser) {
      setEmail(lastUser);
    }
  }, []);

  return (
    <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      <Header>
        <div className="pt-10 pl-10 xs:bg-black xs:pl-14 md:bg-transparent">
          <Link to={'/'}><img src={logo} alt="logo" className='h-11' /></Link>
        </div>
      </Header>
      <div className="flex justify-center">
        <div className="bg-black px-16 py-10  xs:mb-0 md:mb-20 self-center lg:w-2/5 lg: max-w-md md:w-3/5 md:max-w-md rounded-md xs:w-screen xs:max-w-full xs:h-full">
          <h2 className='text-white text-3xl font-semibold pb-5'>Sign In</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div class="relative">
                <input type="email" id="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}
                class="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-red-500 transition-colors duration-500"
                />
              </div>
              <div className='relative mb-5'>
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-red-500 transition-colors duration-500" />
                <label htmlFor="password" className="absolute top-0 left-0 px-3 py-1 text-gray-500 text-xs font-semibold transition-all duration-300" />
              </div>
              <div className='mb-20'>
                {loading ? (
                  <button type="submit" disabled className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
                    <ClipLoader color={"white"} loading={loading} size={24} />
                  </button>
                ) : (
                <button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
                  Sign In
                </button>
                )}
              </div>
              <div className="flex gap-2">
                <p className='text-gray-400'>New to Netflix?</p>
                <p className='text-white hover:underline' onClick={() => navigate('/register')}>Sign up now</p>
              </div>
              <p className='text-gray-400 font-light text-sm '>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <span className={`${isLearnMoreClicked ? 'text-black' : 'text-blue-500'} hover:underline`} 
                onClick={handleLearnMoreClick}> Learn more.</span>
              </p>
              <p className={`font-light text-sm ${isLearnMoreClicked ? 'text-gray-400' : 'text-black'}`}>
                The information collected by Google reCAPTCHA is subject to the Google 
                <a href="https://policies.google.com/privacy" target='blank' className={`${isLearnMoreClicked ? 'text-blue-500' : 'text-black'} hover:underline`}> Privacy Policy </a>
                  and  
                <a href="https://policies.google.com/terms" target='blank' className={`${isLearnMoreClicked ? 'text-blue-500' : 'text-black'} hover:underline`}> Terms of Service
                </a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
              </p>
            </form>
        </div>
      </div>
      <Footer>
      <div className="w-full bg-black md:bg-opacity-70 xs:bg-opacity-100">
        <div className="pt-10 pb-10 max-w-max pl-10">
          <div className="flex gap-1">
            <p className='text-gray-400'>Questions? Call</p>
            <a href="tel:+380685268410" className='text-gray-400 underline'>+380685268410</a>
          </div>
          <div className="grid grid-rows-5 lg:grid-cols-3 gap-2 pt-7 gap-x-60 xs:grid-cols-1 ">
            <a href=" " className='text-gray-400 underline'>FAQ</a>
            <a href=" " className='text-gray-400 underline'>Media Center</a>
            <a href=" " className='text-gray-400 underline'>Ways to Watch</a>
            <a href=" " className='text-gray-400 underline'>Cookie Preferences</a>
            <a href=" " className='text-gray-400 underline'>Spped Test</a>

            <a href=" " className='text-gray-400 underline'>Help Center</a>
            <a href=" " className='text-gray-400 underline'>Investor Relations</a>
            <a href=" " className='text-gray-400 underline'>Terms of Use</a>
            <a href=" " className='text-gray-400 underline'>Corporate Information</a>
            <a href=" " className='text-gray-400 underline'>Legal Notices</a>

            <a href=" " className='text-gray-400 underline'>Account</a>
            <a href=" " className='text-gray-400 underline'>Jobs</a>
            <a href=" " className='text-gray-400 underline'>Privacy</a>
            <a href=" " className='text-gray-400 underline'>Contact Us</a>
            <a href=" " className='text-gray-400 underline'>Only on Netflix</a>
          </div>
          <p className='text-gray-400 pt-5'> Netflix Clone by Mykyta Kovlev</p>
        </div>
      </div>
    </Footer>
    </div>
  );
};

export default SignIn;
