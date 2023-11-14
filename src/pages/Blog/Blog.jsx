import React from 'react';
import CommonBanner from '../../components/CommonBanner/CommonBanner';

import img from "../../assets/banner/shopBanner3.webp"
import { IoMdArrowDropright } from 'react-icons/io';
import { IoChatbubbleOutline, IoHeartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
<section>
   <CommonBanner img={img} title="Blog"/> 

<div className='flex items-start justify-center w-full my-14 flex-col lg:flex-row gap-10 px-4 lg:px-10'>

<div className='w-full'>
<div className='blog-card'>
<h1 className='font-bold text-5xl text-secondary mb-14 hover:text-primary transition-all duration-500'>LA MARATHON: EVERYTHING A RUNNER SHOULD KNOW</h1>

<div className='flex items-center gap-2'>
    <span>Jul 25, 2023</span>
    <span className='border-r  h-4'></span>
    <span className='inline-flex items-center gap-1 hover:text-primary cursor-pointer'><IoChatbubbleOutline /> 2</span>
    <span className='border-l  h-4'></span>
    <span className='inline-flex items-center gap-1 hover:text-primary cursor-pointer'><IoHeartOutline /> 4</span>
</div>


<div className='mt-8'>
<div className='relative cursor-pointer'>
    <img src="https://run-gran.themerex.net/wp-content/uploads/2017/07/post-2-760x428.jpg" alt="Blog Img" className='lg:w-[80%]'/>

    <div className='absolute top-0 w-full lg:w-[80%] h-full hover:bg-secondary hover:bg-opacity-40 bg-transparent transition-all duration-300'>

    </div>
    </div>

    <p className='lg:w-[80%] mt-8 text-gray-500'>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor…</p>
</div>

<div className='mt-10'>
    <Link className='btnPrimary' to="/blog_details">Read More</Link>

</div>

</div>


<div className='blog-card mt-20'>
<h1 className='font-bold text-5xl text-secondary mb-14 hover:text-primary transition-all duration-500'>HAGG LAKE RUNS – 10.5 MILE</h1>

<div className='flex items-center gap-2'>
    <span>Jul 25, 2023</span>
    <span className='border-r  h-4'></span>
    <span className='inline-flex items-center gap-1 hover:text-primary cursor-pointer'><IoChatbubbleOutline /> 2</span>
    <span className='border-l  h-4'></span>
    <span className='inline-flex items-center gap-1 hover:text-primary cursor-pointer'><IoHeartOutline /> 4</span>
</div>


<div className='mt-8'>
    <div className='relative cursor-pointer'>
    <img src="https://run-gran.themerex.net/wp-content/uploads/2017/07/post-1-760x428.jpg" alt="Blog Img" className='lg:w-[80%]'/>

    <div className='absolute top-0 w-full lg:w-[80%] h-full hover:bg-secondary hover:bg-opacity-40 bg-transparent transition-all duration-300'>

    </div>
    </div>

    <p className='lg:w-[80%] mt-8 text-gray-500'>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor…</p>
</div>

<div className='mt-10'>
<button className='btnPrimary'>Read More</button>
</div>

</div>
</div>

<div className='flex flex-col lg:w-[35%]'>

<div className='cart-card px-6 py-10 bg-white shadow-md space-y-5 flex flex-col'>
<h1 className='text-3xl font-semibold'>CATEGORIES</h1>
<p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> 2023 Trends</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Healthy Eating</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Sportswear Guide</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Training Tips</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> Upcoming Marathons</p>

</div>

<div className='border-t'></div>


<div className='cart-card px-6 py-10 bg-white shadow-md space-y-2 flex flex-col'>
<h1 className='text-3xl font-semibold my-3'>SEARCH</h1>

<form className='relative'>
    <input type="text" className='px-5 py-3 rounded-r-full rounded-l-full outline-none border border-primary placeholder:text-sm placeholder:font-light w-full' placeholder='Search'/>
    <span className='absolute top-[37%] right-5'><IoSearchOutline className='h-4 w-4 text-primary'/></span>
</form>

</div>


<div className='border-t'></div>


<div className='cart-card px-6 py-10 bg-white shadow-md space-y-2 flex flex-col'>
<h1 className='text-3xl font-semibold my-3'>RECENT POSTS</h1>

<div className='flex flex-col gap-5'>
<div className='flex gap-4'>
<img src="https://run-gran.themerex.net/wp-content/uploads/2017/07/post-2-150x150.jpg" alt="" className='w-24'/>

<div className='flex flex-col gap-4 hover:text-primary cursor-pointer'>
    <p>La Marathon: Everything a Runner Should Know</p>
    <p>Jul 25, 2023</p>
</div>
</div>

<div className='flex gap-4'>
<img src="https://run-gran.themerex.net/wp-content/uploads/2017/07/post-2-150x150.jpg" alt="" className='w-24'/>

<div className='flex flex-col gap-4 hover:text-primary cursor-pointer'>
    <p>La Marathon: Everything a Runner Should Know</p>
    <p>Jul 25, 2023</p>
</div>
</div>
</div>

</div>



<div className='border-t'></div>

<div className='cart-card px-6 py-10 bg-white shadow-md space-y-2 flex flex-col'>
<h1 className='text-3xl font-semibold my-3'>TAGS</h1>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Apparel</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Clothing</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Cross</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Marathon</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Running</p>

<p className='inline-flex items-center gap-2 cursor-pointer hover:text-white hover:bg-primary text-primary bg-gray-100 py-2 px-5 transition-all duration-300 uppercase w-32 text-center text-sm'>Seed</p>

</div>
</div>

</div>
</section>
    );
};

export default Blog;