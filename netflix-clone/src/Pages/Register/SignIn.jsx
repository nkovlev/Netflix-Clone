import React, { useState } from 'react';
import { ClipLoader } from "react-spinners";
import Header from '../../Components/Header'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      <Header>
        <div className="pt-10 pl-10">
          <Link to={'/'}><img src={logo} alt="logo" className='h-11' /></Link>
        </div>
      </Header>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg: max-w-md rounded-md w-full">
          <h2 className='text-white text-3xl font-semibold pb-5'>Sign In</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div class="relative">
  <input
    type="email"
    id="email"
    placeholder=""
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    class="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-red-500 transition-colors duration-500"
  />
  <label
    htmlFor="email"
    class="absolute top-0 left-3 px-3 py-1 text-gray-500 text-xs font-semibold transition-all duration-300"
  >
    Email
  </label>
</div>
            <div className='relative mb-5'>
              <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-red-500 transition-colors duration-500" />
              <label
          htmlFor="password"
          className="absolute top-0 left-0 px-3 py-1 text-gray-500 text-xs font-semibold transition-all duration-300"
        />
            </div>
            <div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
