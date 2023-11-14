import React, { useEffect, useState } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { IoChevronUpOutline } from 'react-icons/io5';

const Main = () => {
   const [buttonVisible,setButtonVisible] = useState(true)
  const location = useLocation();

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      {location.pathname.includes("signIn") || location.pathname.includes("signUp") ? "" : <Navbar />}
      {/* <Navbar /> */}

      <div className="fixed bottom-12 right-0 lg:bottom-0 lg:right-0 m-8 z-50 border border-primary text-white transition-all duration-500 bg-primary cursor-pointer px-1 py-1" onClick={scrollToTop}>
        <span><IoChevronUpOutline className='h-6 w-6' /></span>
      </div>

      <div className=''>
        <Outlet />
      </div>
      {location.pathname.includes("signIn") || location.pathname.includes("signUp") ? "" : <Footer />}
    </section>
  );
};

export default Main;