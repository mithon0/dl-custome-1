import React from 'react';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import img from '../../assets/banner/HomePage.webp';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import InputField from '../../components/InputField/InputField';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const TeamOrder = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {

        const fullName = data.firstName + " " + data.lastName;

        const { email, hereAboutUs, phone, players, productType, teamName } = data;

        const postData = {
            userName: fullName,
            email, hereAboutUs, phone, players, productType, teamName
        };

        //    console.log(postData);

        const res = await axios.post('https://run-gran-server-flax.vercel.app/team-order', postData)
        if (res.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Your Details Sent!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }

    }

    return (
        <section>
            <CommonBanner
                img={img}
                title="Team Order" style={{ height: '700px' }}
            ></CommonBanner>
            <div>
                <h1 className='text-5xl font-bold text-center'>Why Choose Run Gran?</h1>
                <p className='text-center text-primary mt-5'>It's Simple, Quality Products with the best art out there!</p>
                <p className='text-center w-1/2 mx-auto text-xl mt-3'>If you aren't choosing sublimation for your team's custom gear, you're wasting money. It may cost a little more, but the quality is top notch and it'll last a long time. It won't fade, peel or crack...why go any other route?</p>
                <div className='flex justify-center mt-10 '>
                    <Link to='/trial' className='font-bold p-2 bg-[#E1144A] hover:bg-[#53212e] transition-all duration-500 text-white rounded shadow-2xl'>Start My Order</Link>
                </div>
            </div>
            <div className='mt-20'>
                <SectionTitle
                    title="Order Your Team Kit!"
                    subTitle="Start Order"
                ></SectionTitle>





                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[80%] lg:w-[50%] mx-auto my-20'>
                    <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>First Name:</label>
                            <input type='text' placeholder='Enter First Name'
                                {...register("firstName", { required: true })}
                                aria-invalid={errors.firstName ? "true" : "false"}
                                className='inputField' />
                            {errors.firstName?.type === 'required' && <p role="alert" className='text-error font-medium'>First Name is required</p>}
                        </div>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>Last Name:</label>
                            <input type='text' placeholder='Enter Your Last Name'
                                {...register("lastName", { required: true })}
                                aria-invalid={errors.lastName ? "true" : "false"}
                                className='inputField' />
                            {errors.lastName?.type === 'required' && <p role="alert" className='text-error font-medium'>Last Name is required</p>}
                        </div>


                    </div>

                    <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>Email:</label>
                            <input type='email' placeholder='Enter Email'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                className='inputField' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
                        </div>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>Phone:</label>
                            <input type='tel' placeholder='Enter Phone Number'
                                {...register("phone", { required: true })}
                                aria-invalid={errors.phone ? "true" : "false"}
                                className='inputField' />
                            {errors.phone?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone Number is required</p>}
                        </div>


                    </div>

                    <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>Team Name:</label>
                            <input type='text' placeholder='Team Name'
                                {...register("teamName", { required: true })}
                                aria-invalid={errors.teamName ? "true" : "false"}
                                className='inputField' />
                            {errors.teamName?.type === 'required' && <p role="alert" className='text-error font-medium'>Team Name is required</p>}
                        </div>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>How many players?</label>
                            <input type='number' placeholder='Players Number'
                                {...register("players", { required: true })}
                                aria-invalid={errors.players ? "true" : "false"}
                                className='inputField' />
                            {errors.players?.type === 'required' && <p role="alert" className='text-error font-medium'>Players Number is required</p>}
                        </div>


                    </div>

                    <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>What products are you interested in?</label>
                            <select {...register("productType", { required: true })} className='inputField font-semibold'>
                                <option defaultValue=""></option>
                                <option value="Long Sleeve Jersey">Long Sleeve Jersey</option>
                                <option value="Racerback Jersey">Racerback Jersey</option>
                                <option value="Full Button Baseball Jersey">Full Button Baseball Jersey</option>
                                <option value="Basketball Set">Basketball Set</option>
                                <option value="Baseball Pants">Baseball Pants</option>
                                <option value="5 Pocket Microfiber Shorts">5 Pocket Microfiber Shorts</option>
                                <option value="BP/Side Line Shorts">BP/Side Line Shorts</option>
                                <option value="1/4 Microfiber Batting Jacket">1/4 Microfiber Batting Jacket</option>
                                <option value="Hoodie">Hoodie</option>
                                <option value="Parents Shirts/Shorts">Parents Shirts/Shorts</option>
                                <option value="Team Hat">Team Hat</option>
                            </select>
                            {errors.productType?.type === 'required' && <p role="alert" className='text-error font-medium'>Product Type is required</p>}
                        </div>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>How did you hear about us?</label>
                            <select {...register("hereAboutUs", { required: true })} className='inputField font-semibold'>
                                <option defaultValue=""></option>
                                <option value="Google">Google</option>
                                <option value="Friend">Friend</option>
                                <option value="Full Button Baseball Jersey">Social Media</option>
                                <option value="Basketball Set">Other</option>
                            </select>
                            {errors.hereAboutUs?.type === 'required' && <p role="alert" className='text-error font-medium'>Please select one.</p>}
                        </div>




                    </div>


                    <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>

                        <div className='w-full flex flex-col space-y-2'>
                            <label className='fontSecondary text-lg text-primary'>Comments</label>
                            <textarea rows={5} cols={5} placeholder="Didn't see what you're looking for?"
                                {...register("firstName")}
                                className='inputField' />

                        </div>
                    </div>







                   


                    <button input type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary group-hover:h-full ">
                        </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                            <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                            Submit
                        </span></button>
                </form>

            </div>
        </section>
    );
};

export default TeamOrder;