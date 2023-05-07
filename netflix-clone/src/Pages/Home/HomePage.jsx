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

const handleSubmit = (values) => {
// выполнить действия при отправке формы, например отправить данные в Firebase
console.log(values);
}

const HomePage = () => {
const [email, setEmail] = useState('');
return (
<>
	<div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${back})` }}>
		<div className="bg-black w-full h-full lg:bg-opacity-50 ">
			<Header>
				<div className="flex justify-around pt-5 items-center">
					<img src={logo} alt="logo" className='h-11' />
					<Link className=' bg-red-600 text-white px-6 py-2 cursor-pointer rounded' to={'/signin'}>Sign In</Link>
				</div>
			</Header>
			<div className="flex flex-col justify-center items-center h-screen">
				<h1 className='text-white font-bold text-5xl '>Unlimited movies, TV shows, and more</h1>
				<p className='text-white text-3xl mt-4 mb-4'>Watch anywhere. Cancel anytime.</p>
				<p className='text-white text-xl'>Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className="flex items-center px-6 py-6 gap-3">
					<Formik initialValues={{ username: '' }} onSubmit={handleSubmit} validationSchema={Yup.object().shape({ username: Yup.string() .required('Required') .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/, 'Invalid email' ) })}>
						{({ errors, touched, handleChange, isValid }) => (
						<Form className='flex gap-3'>
							<div className="relative mx-auto w-full max-w-md">
								<Field placeholder="Enter your Email" type="text" name="username" id="username" value={email} onChange={(e)=> {
									handleChange(e)
									setEmail(e.target.value)
									}}
									className={`box-border w-full py-4 pr-40 pl-5 pt-4 h-14 outline-none bg-transparent ring-2 ${errors.username && touched.username ? 'ring-red-500' : 'ring-gray-400'} text-white font-semibold placeholder-gray-400 focus:placeholder-transparent focus:ring-2 focus:ring-white focus:border-transparent rounded`}
									/>
									{errors.username && touched.username && (
									<div className="text-red-500 flex">{errors.username}</div>
									)}
							</div>
							<Link className={`bg-red-600 text-white font-bold px-10 rounded flex items-center justify-center h-14 text-2xl whitespace-nowrap`} to={(!isValid || !email) ? '' : `/register?userEmail=${email}`}>
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
			<div className="flex justify-around">
				<div className="my-60">
					<h1 className='text-white font-bold text-5xl pb-3'>Enjoy on your TV</h1>
					<p className='text-white text-2xl'>Watch on Smart TVs, Playstation, Xbox,<br></br> Chromecast, Apple TV, Blu-ray players, and more.</p>
				</div>
				<img src={imac} alt="laptp" className='w-90 h-80 my-36' />
			</div>
			<div className='h-3 w-full bg-slate-400 opacity-20'></div>
			<div className="flex justify-around">
				<img src={ipad} alt="laptp" className='w-90 h-80 my-40' />
				<div className="my-60">
					<h1 className='text-white font-bold text-5xl pb-3'>Download your shows<br></br> to watch offline</h1>
					<p className='text-white text-2xl'>Save your favorites easily and always have <br></br> something to watch.</p>
				</div>
			</div>
			<div className='h-3 w-full bg-slate-400 opacity-20'></div>
			<div className="flex justify-around">
				<div className="my-60">
					<h1 className='text-white font-bold text-5xl pb-3'>Watch everywhere</h1>
					<p className='text-white text-2xl'>Stream unlimited movies and TV shows on your<br></br>phone, tablet, laptop, and TV.</p>
				</div>
				<img src={laptop} alt="laptp" className='w-90 h-80 my-36' />
			</div>
			<div className='h-3 w-full bg-slate-400 opacity-20'></div>
			<Questions />
			<div className='h-3 w-full bg-slate-400 opacity-20 mt-20'></div>
			<Footer>
				<div className="w-full">
					<div className="pt-10 pb-10 pl-20">
						<div className="flex gap-1">
							<p className='text-gray-400'>Questions? Call</p>
							<a href="tel:+380685268410" className='text-gray-400 underline'>+380685268410</a>
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