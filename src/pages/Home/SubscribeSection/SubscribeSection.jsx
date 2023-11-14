import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';

const SubscribeSection = () => {
    return (
       <section className='my-14'>
<div className='bg-primary py-10 flex items-center justify-center'>

<div className='w-full flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-40'>

<div className='relative w-full'>
<p><IoCalendarOutline className='w-32 h-32 text-white opacity-40'/></p>
<p className='absolute top-[43%] whitespace-nowrap text-3xl font-bold text-white'>
STAY TUNED WITH UPDATES</p>
</div>

<div className='w-full flex gap-4'>
<input type="text" placeholder='ENTER YOUR EMAIL' className='bg-primary px-10 py-3 border border-white outline-none text-white rounded-r-full rounded-l-full placeholder:text-xs placeholder:text-white'/>

<button className='bg-white px-7 rounded-2xl text-primary font-bold'>Sign Up</button>

</div>
</div>

</div>
       </section>
    );
};

export default SubscribeSection;