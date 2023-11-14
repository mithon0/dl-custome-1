import React from 'react';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import img from "../../assets/banner/banner2.jpg"
import { IoChatbubbleOutline, IoHeartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaEnvelope, FaFacebookF, FaTwitter } from 'react-icons/fa';
import about_author from "../../assets/about_author.jpeg"
import post1 from "../../assets/blog/post1.jpg"
import post2 from "../../assets/blog/post2.jpg"

const BlogDetails = () => {
    return (
        <section className='bg-[#F3F3F3]'>
   <CommonBanner  img={img} title="LA MARATHON: EVERYTHING A RUNNER SHOULD KNOW"/> 

<div className='flex items-start justify-center w-full my-14 flex-col lg:flex-row gap-10 px-4 lg:px-10'>

<div className='w-full'>
<div className='blog-card'>


<div className='flex items-center gap-2'>
    <span>Jul 25, 2017</span>
    <span className='border-r  h-4'></span>
    <span className='inline-flex items-center gap-1 hover:text-primary cursor-pointer'><IoChatbubbleOutline /> 2</span>
    <span className='border-l  h-4'></span>
    <span className='inline-flex items-center gap-1 hover:text-primary cursor-pointer'><IoHeartOutline /> 4</span>
</div>

{/* Blog details  */}
<div className='mt-8'>
<div className='relative cursor-pointer'>
    <img src="https://run-gran.themerex.net/wp-content/uploads/2017/07/post-2-760x428.jpg" alt="Blog Img" className='lg:w-[80%]'/>

    <div className='absolute top-0 w-full lg:w-[80%] h-full hover:bg-secondary hover:bg-opacity-40 bg-transparent transition-all duration-300'>

    </div>
    </div>

    <p className='lg:w-[80%] mt-8 text-gray-500 ff'>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.

Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam bibendum lacus quis nulla dignissim faucibus. Sed mauris enim, bibendum at purus aliquet, maximus molestie tortor. Sed faucibus et tellus eu sollicitudin. Sed fringilla malesuada luctus.</p>
</div>
<div className='flex justify-between items-center mt-10'>
    <div className='flex gap-2'>
        <h1 className='text-sm'>TAGS:</h1>
        <p className='text-sm text-[#888585] hover:text-blue-400 transition-all duration-500'>shoes,sports</p>
    </div>
    <div className='flex gap-10'>
        <FaTwitter className='bg-white text-4xl p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500'/>
        <FaFacebookF className='bg-white text-4xl p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500'/>
        <FaEnvelope className='bg-white text-4xl p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500'/>
    </div>
</div>


</div>

{/* Author details */}
<div className='blog-card mt-20 bg-white p-7 flex gap-5 items-center'>

<div>
    <img src={about_author} alt="" />
</div>
<div>
    <h5 className='text-sm text-[#5a5959] ff'>About Author</h5>
    <h1 className='text-xl font-bold'>CINDY JEFFERSON</h1>
    <p className='text-[#5a5959] mt-2 ff'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
</div>



</div>

{/* YOU MAY ALSO LIKE */}
<div className='my-10'>
    <h1 className='text-3xl font-bold mb-10'>YOU MAY ALSO LIKE</h1>
    <div className='flex gap-4'>
        <div>
            <img src={post1} alt="" />
            <p className='text-center text-xs mt-5'>MAY 28, 2017</p>
            <h1 className='font-bold text-xl text-center'>MOTIVATION IN YOUR LIFE AND WORK</h1>
        </div>
        <div>
            <img src={post2} alt="" />
            <p className='text-center text-xs mt-5'>JUN 18, 2017</p>
            <h1 className='font-bold text-xl text-center'>THE ROLE OF A COACH IN OUR LIVES</h1>
        </div>
    </div>
</div>

{/* comment section */}


{/* .................... */}


{/* leave a comment section */}
<div className='my-20'>
    <h1 className='text-2xl font-bold'>LEAVE A COMMENT</h1>
    <div className='flex items-center gap-2'>
        <input type="text" className='px-4 py-6 border w-full rounded-full bg-[#F3F3F3] ff' placeholder='YOUR NAME*' />
        <input type="text" className='px-4 py-6 border w-full rounded-full bg-[#F3F3F3] ff' placeholder='YOUR EMAIL*'/>
    </div>
    <div className='flex gap-2 mt-5'>
        <input type="checkbox" />
        <p className='text-sm text-[#5a5959] ff'>By using this form you agree with the storage and handling of your data by this website. </p>
    </div>
    <div>
        <input type="text" className='w-full px-5 border py-20 rounded-3xl bg-[#F3F3F3] ff' placeholder='YOUR COMMENT*' />
    </div>
    <div className='flex gap-2 mt-5'>
        <input type="checkbox" />
        <p className='text-sm text-[#5a5959] ff'>By using this form you agree with the storage and handling of your data by this website. </p>
    </div>
    <div className='flex justify-end'>
        <button className='px-8 py-6 border bg-[#B7B7B7] rounded-full text-white'>LEAVE A COMMENT</button>
    </div>
</div>


<div>

</div>
</div>

<div className='flex flex-col lg:w-[35%]'>

<div className='cart-card px-6 py-10 bg-white shadow-md space-y-5 flex flex-col'>
<h1 className='text-3xl font-semibold'>CATEGORIES</h1>
<p className='inline-flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300'><IoMdArrowDropright /> 2017 Trends</p>

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
    <p>Jul 25, 2017</p>
</div>
</div>

<div className='flex gap-4'>
<img src="https://run-gran.themerex.net/wp-content/uploads/2017/07/post-2-150x150.jpg" alt="" className='w-24'/>

<div className='flex flex-col gap-4 hover:text-primary cursor-pointer'>
    <p>La Marathon: Everything a Runner Should Know</p>
    <p>Jul 25, 2017</p>
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

export default BlogDetails;