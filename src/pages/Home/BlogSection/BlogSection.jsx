import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import "./blog.css"
import { Link } from 'react-router-dom';
import { IoCaretDown, IoCaretDownOutline } from 'react-icons/io5';

const BlogSection = () => {
    return (
        <section className='my-14'>
            <SectionTitle title="Jersey Journals" subTitle="Blog" />


            <div className='mt-12 flex items-center justify-center px-6'>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                    <Link className='blog-card relative flex w-full h-full items-end justify-center'>
                        <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2268c7baa79446589e0919001caab17_9366/NYC_Running_Singlet_Gender_Neutral_Black_IK6884_HM1.jpg" alt="Blog Img" className='img w-full h-96' />

                        <div className='px-5 py-4 blog-content w-full'>
                            <h1 className='font-bold text-white text-3xl'>The Evolution of Team Jerseys: From Tradition to Trendsetting</h1>
                            <p className='text-white flex items-center justify-center my-3 arrow-down'><IoCaretDownOutline className='h-6 w-6' /></p>

                            <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto read-btn'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Read Tip <IoCaretDown /></span>
                            </Link>
                        </div>
                    </Link>

                    <Link className='blog-card relative flex w-full h-full items-end justify-center'>
                        <img src="https://www.rei.com/media/5d7bdc09-f7e6-4987-965e-2357e23fd1ad.jpg" alt="Blog Img" className='img w-full h-96' />

                        <div className='px-5 py-4 blog-content w-full'>
                            <h1 className='font-bold text-white text-3xl'>The Evolution of Team Jerseys: From Tradition to Trendsetting</h1>
                            <p className='text-white flex items-center justify-center my-3 arrow-down'><IoCaretDownOutline className='h-6 w-6' /></p>

                            <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto read-btn'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Read Tip <IoCaretDown /></span>
                            </Link>
                        </div>
                    </Link>

                    <Link className='blog-card relative flex w-full h-full items-end justify-center'>
                        <img src="https://i.pinimg.com/736x/e0/ea/1d/e0ea1df4f56f206b2267c4b63a706815.jpg" alt="Blog Img" className='img w-full h-96' />

                        <div className='px-5 py-4 blog-content w-full'>
                            <h1 className='font-bold text-white text-3xl'>The Evolution of Team Jerseys: From Tradition to Trendsetting</h1>
                            <p className='text-white flex items-center justify-center my-3 arrow-down'><IoCaretDownOutline className='h-6 w-6' /></p>

                            <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto read-btn'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Read Tip <IoCaretDown /></span>
                            </Link>
                        </div>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default BlogSection;