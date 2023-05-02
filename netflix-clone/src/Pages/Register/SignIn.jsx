import React, { useState } from 'react';
import { ClipLoader } from "react-spinners";
import Header from '../../Components/Header'
import logo from '../../images/logo.png';
import back from '../../images/hero.jpg';
import { Link } from 'react-router-dom';



const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
          setName('');
          setEmail('');
          setPassword('');
        }, 2000); 
    
    };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      <Header>
        <div className="pt-10 pl-10">
          <Link to={'/'}><img src={logo} alt="logo" className='h-11' /></Link>
        </div>
      </Header>
      <div className="h-100 flex justify-center items-center mt-44">
        <div className="w-full max-w-lg p-10 bg-black">
          <h2 className='text-white text-3xl font-semibold pb-5'>Sign In</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input type="email" name="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-800 bg-opacity-50 text-white border-b-2 border-gray-700 focus:outline-none focus:border-red-600 py-2" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-800 bg-opacity-50 text-white border-b-2 border-gray-700 focus:outline-none focus:border-red-600 py-2" />
            </div>
            <div>
              {loading ? (
                  <button type="submit" disabled className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
                  <ClipLoader color={"white"} loading={loading} size={24} />
                </button>
              ) : (
                <button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
