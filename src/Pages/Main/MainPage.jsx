import React, { useCallback, useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Header from '../../Components/Header';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import { RxTriangleDown } from 'react-icons/rx';
import MobileMenu from '../../Components/MobileMenu';
import MainLogo from '../../images/default-blue.png';
import AccoutMenu from '../../Components/AccoutMenu';
import MainBillboard from '../../Components/MainBillboard';
import MovieList from '../../Components/MovieList';
import { MainNavigation } from './MainNavigation';
import MyList from './MyList';

const MainPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [accountMenuTimeout, setAccountMenuTimeout] = useState(null);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(accountMenuTimeout);
    setShowAccountMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowAccountMenu(false);
    }, 100);
    setAccountMenuTimeout(timeout);
  };

  const handleAccountMenuEnter = () => {
    clearTimeout(accountMenuTimeout);
  };

  const handleAccountMenuLeave = () => {
    setShowAccountMenu(false);
  };

  const [selectedItem, setSelectedItem] = useState('Home');
  const [myList, setMyList] = useState([]);
  const addToMyList = (movie) => {
    setMyList((prevList) => [...prevList, movie]);
  };

  useEffect(() => {
    return () => {
      clearTimeout(accountMenuTimeout);
    };
  }, [accountMenuTimeout]);

  return (
    <div className="bg-black">
      <Header>
        <div className="w-full fixed z-10">
          <div className="px-4 md:px-16 py-4 flex flex-row items-center transition duration-500 bg-transparent">
            <img className="h-4 lg:h-6" src={logo} alt="logo" />
            <MainNavigation selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            <div
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
            >
              <p className="text-white text-sm">Browse</p>
              <BsChevronDown className="text-white transition" />
              <MobileMenu visible={showMobileMenu} />
            </div>
            <div className="flex flex-row ml-auto gap-7 items-center">
              <div className="text-gray-200 text-2xl hover:text-gray-300 cursor-pointer transition">
                <AiOutlineSearch />
              </div>
              <div className="text-gray-200 text-xl hover:text-gray-300 cursor-pointer transition">
                <BiBell />
              </div>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex flex-row items-center gap-2 cursor-pointer relative"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md overflow-hidden">
                  <img src={MainLogo} alt="mainLogo" />
                </div>
                <RxTriangleDown
                  className={`text-xl text-white fill-white transition ${
                    showAccountMenu ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                {showAccountMenu && (
                  <AccoutMenu
                    visible={showAccountMenu}
                    onMouseEnter={handleAccountMenuEnter}
                    onMouseLeave={handleAccountMenuLeave}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Header>
      {selectedItem === 'My List' ? (
        <MyList myList={myList} />
      ) : (
        <>
          <MainBillboard />
          <MovieList title="Trending Now" myList={myList} addToMyList={addToMyList} />
        </>
      )}
    </div>
  );
};

export default MainPage;
