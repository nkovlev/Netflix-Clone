import React from 'react';
import back from '../../images/hero.jpg';
import arrow from './arrowRight.svg'
import imac from './iMac 27-inch Mockup.png'
import ipad from './iPad Pro Right View Mockup.png'
import laptop from './New Macbook Pro Mockup Front View.png'
import { Link } from "react-router-dom";
import Header from '../../Components/Header';
import logo from '../../images/logo.png'
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Questions from './Questions';
import Footer from '../../Components/Footer'

const HomePage = () => {
const [email, setEmail] = useState('');
return (
<>
<div className=' w-screen h-screen bg-cover bg-center overflow-x-hidden' style={{ backgroundImage: `url(${back})` }}>
  <div className="bg-black w-full h-full bg-opacity-50">
    <Header>
      <div className="flex justify-around pt-5 items-center">
        <img src={logo} alt="logo" className=' xs:h-6 sm:h-8 lg:h-11' />
        <Link className=' bg-red-600 text-white xs:px-4 xs:py-1 sm:px-6 sm:py-2 lg:px-6 lg:py-2 cursor-pointer rounded font-semibold' to={'/signin'}>Sign In</Link>
      </div>
    </Header>
<div className="flex flex-col justify-center items-center h-screen">
<h1 className="text-white font-bold text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sm:text-3xl xs:text-3xl xs:max-w-md xs:text-center sm:max-w-full ">
  Unlimited movies, TV shows, and more
</h1>
<p className="text-white text-3xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl xs:text-xl mt-3 mb-3">
  Watch anywhere. Cancel anytime.
</p>
<p className="text-white text-xl lg:text-lg xl:text-xl 2xl:text-2xl xs:text-lg xs:max-w-md xs:text-center sm:max-w-full">
  Ready to watch? Enter your email to create or restart your membership.
</p>

  <div className="flex items-center px-6 py-6 gap-3">
    <Formik
      initialValues={{ useremail: '' }}
      validationSchema={Yup.object().shape({
        useremail: Yup.string()
          .required('Required')
          .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/, 'Invalid email')
      })}
    >
      {({ errors, touched, handleChange, isValid }) => (
        <Form className="flex gap-3 xs:flex-col lg:flex-row">
          <div className="relative mx-auto w-full max-w-md">
            <Field
              placeholder="Enter your Email"
              type="text"
              name="useremail"
              id="useremail"
              value={email}
              onChange={(e) => {
                handleChange(e);
                setEmail(e.target.value);
              }}
              className={`box-border w-full py-4 pr-40 pl-5 pt-4 h-14 outline-none bg-transparent ring-2 ${
                errors.useremail && touched.useremail ? 'ring-red-500' : 'ring-gray-400'
              } text-white font-semibold placeholder-gray-400 focus:placeholder-transparent focus:ring-2 focus:ring-white focus:border-transparent rounded`}
            />
            {errors.useremail && touched.useremail && <div className="text-red-500 flex">{errors.useremail}</div>}
          </div>
          <Link
            className={`bg-red-600 text-white font-bold px-10 rounded flex items-center justify-center h-14 text-2xl whitespace-nowrap`}
            to={!isValid || !email ? '' : `/register?userEmail=${email}`}
          >
            Get Started
            <img src={arrow} alt="arrow" className="ml-1 w-8 h-8" />
          </Link>
        </Form>
      )}
    </Formik>
  </div>
</div>

  </div>
  <div className="bg-black w-100">
    <div className='h-3 w-full bg-slate-400 opacity-20'></div>
    <div className="flex justify-around items-center xs:flex-col lg:flex-row">
      <div className='xs:max-w-full lg:max-w-sm xs:text-center lg:text-start'>
        <h1 className='text-white font-bold 2xl:text-5xl xs:text-2xl pb-3 xs:pt-20 xs:pb-5'>Enjoy on your TV</h1>
        <p className='text-white 2xl:text-2xl xs:text-base xs:max-w-sm'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <img src={imac} alt="laptp" className='2xl:w-90 2xl:h-80 lg:my-40 xs:my-20 xs:h-60 lg:h-72' />
    </div>
    <div className='h-3 w-full bg-slate-400 opacity-20'></div>
    <div className="flex justify-around items-center  xs:flex-col-reverse lg:flex-row">
      <img src={ipad} alt="laptp" className='2xl:w-90 2xl:h-80 lg:my-40 xs:my-20 xs:h-60 lg:h-72' />
      <div className='xs:max-w-full lg:max-w-sm xs:text-center lg:text-start'>
        <h1 className='text-white font-bold 2xl:text-5xl xs:text-2xl pb-3 xs:pt-20 xs:pb-5'>Download your shows to watch offline</h1>
        <p className='text-white 2xl:text-2xl xs:text-base xs:max-w-sm'>Save your favorites easily and always have something to watch.</p>
      </div>
    </div>
    <div className='h-3 w-full bg-slate-400 opacity-20'></div>
    <div className="flex justify-around items-center xs:flex-col lg:flex-row">
      <div className='xs:max-w-full lg:max-w-sm xs:text-center lg:text-start'>
        <h1 className='text-white font-bold 2xl:text-5xl xs:text-2xl xs:pt-20 xs:pb-5'>Watch everywhere</h1>
        <p className='text-white 2xl:text-2xl xs:text-base xs:max-w-sm'>Stream unlimited movies and TV shows on your<br></br>phone, tablet, laptop, and TV.</p>
      </div>
      <img src={laptop} alt="laptp" className='2xl:w-90 2xl:h-80 lg:my-40 xs:my-20 xs:h-60 lg:h-72' />
    </div>
    <div className='h-3 w-full bg-slate-400 opacity-20'></div>
    <Questions />
    <div className='h-3 w-full bg-slate-400 opacity-20 mt-20'></div>
    <Footer>
      <div className="w-full">
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
</div>
</>
);
};

export default HomePage;