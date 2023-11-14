import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import InputField from '../../components/InputField/InputField';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import img from '../../assets/banner/shopBanner2.webp';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const res = await axios.post('https://run-gran-server-flax.vercel.app/contact', data);
        if (res.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Your Message is noted. We will reply you ASAP !',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <section>
            <CommonBanner
                img={img}
                title="Contact Us"
            ></CommonBanner>

            <div className='my-16 flex flex-col-reverse text-center gap-20 lg:flex-row lg:justify-evenly'>
                {/* form box */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SectionTitle
                        title="SEND MESSAGE"
                        subTitle="HAVE A QUESTION?"
                    ></SectionTitle>

                    <div className='mt-16 flex gap-12 mb-8'>

                        <div className='flex flex-col gap-2'>
                            <input type='text' placeholder='Enter Your Name'
                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                                className='inputField' />
                            {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <input type='email' placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                className='inputField' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'> Email is required </p>}
                        </div>

                    </div>

                    <div className='flex flex-col'>
                        <textarea rows="6" cols="50" placeholder='Enter Your Contact Message'
                            {...register("message", { required: true })}
                            aria-invalid={errors.message ? "true" : "false"}
                            className='inputField resize-none' />
                        {errors.message?.type === 'required' && <p role="alert" className='text-error font-medium'> Message is required </p>}
                    </div>

                    <div className='my-9 flex justify-end'>
                        <button input type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary group-hover:h-full ">
                            </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                                Submit
                            </span></button>
                    </div>

                </form>

                {/* find us */}
                <div>
                    <SectionTitle
                        title="ADDRESS"
                        subTitle="FIND US"
                    ></SectionTitle>

                    <div className='mt-16'>
                        <p className='pb-1'>Location : </p>
                        <p className='text-[#888585]'>Fort Worth, TX, United States</p>
                        <p className='pt-6'>Contact : </p>
                        <p className='text-[#888585]'>+1 254-733-9705</p>
                        <p className='pt-6'>Email : </p>
                        <p className='text-primary hover:cursor-pointer'> info@dlcustomstx.com </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;