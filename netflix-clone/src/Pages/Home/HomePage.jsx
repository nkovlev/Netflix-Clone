import React from 'react';
import logo from '../../images/hero.jpg';
import Header from '../../Components/Header';
import arrow from './arrowRight.svg'

const HomePage = () => {
return (
<>
    <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${logo})` }}>
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <Header />
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className='text-white font-bold text-5xl '>Unlimited movies, TV shows, and more</h1>
                <p className='text-white text-3xl'>Watch anywhere. Cancel anytime.</p>
                <p className='text-white text-xl'>Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div class="flex items-center px-6 py-6 gap-3">
                    <div class="relative mx-auto w-full max-w-md">
                        <input type="text" name="username" id="username" required
                            class="box-border w-full py-4 px-20 h-14 text-base outline-none bg-gray-500 opacity-30 text-white placeholder-gray-400 focus:placeholder-transparent focus:bg-gray-600 focus:ring-2 focus:ring-white focus:border-transparent rounded" />
                        <label
                            class="floating-label absolute top-1/4 left-5 text-base cursor-text transition-all duration-100 ease-linear text-white font-semibold"
                            for="username">Email or Phone Number</label>
                    </div>
                    <button class="bg-red-600 text-white font-bold px-10 rounded flex items-center justify-center h-14 text-2xl whitespace-nowrap">
                        Get Started
                        <img src={arrow} alt="arrow" class="ml-1 w-8 h-8" />
                    </button>

                </div>
            </div>
        </div>
        <p>gdfgdfg</p>
        <h1>dfsdfsdf</h1>
    </div>
</>
);
};

export default HomePage;