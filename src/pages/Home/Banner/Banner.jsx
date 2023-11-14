import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/HomePage.webp'
import banner2 from '../../../assets/banner/shopBanner1.webp'
import banner3 from '../../../assets/banner/shopBanner2.webp'

const Banner = () => {
    return (
        <section className='mb-14 '>
            <Carousel className='text-center' autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true} showStatus={false}>

                <div >

                    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                        <div className="w-full  ">
                            <img className="hidden lg:block" src={banner1} />

                        </div>
                        <div className="w-full lg:w-1/2">
                            <h1 className="py-4 text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white uppercase">Sports Wear Collection</h1>


                            <button className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary group-hover:h-full ">
                                </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                                    Shop now
                                </span></button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                    <div className="w-full  ">
                        <img className="hidden lg:block" src={banner2} />

                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="py-4 text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white uppercase">Sports Wear Collection</h1>


                        <button className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary group-hover:h-full ">
                            </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                                Shop now
                            </span></button>
                    </div>
                </div>

                <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                    <div className="w-full  ">
                        <img className="hidden lg:block" src={banner3} />

                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="py-4 text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white uppercase">Sports Wear Collection</h1>


                        <button className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary group-hover:h-full ">
                            </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                                Shop now
                            </span></button>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;