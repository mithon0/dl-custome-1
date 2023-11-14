import React from 'react';
import img from "../../assets/banner/HomePage.webp"
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import { Carousel } from 'react-responsive-carousel';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
const TeamStore = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const res = await axios.post('https://run-gran-server-flax.vercel.app/team-store', data)
        if (res.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Your team order is recorded!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    }
    return (
        <section className=''>
            <CommonBanner
                img={img}
                title="Set Up Your Private Team Shop"
            ></CommonBanner>

            <Carousel className='text-center   ' autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true} showStatus={false}>
                <div>
                    <p className='text-primary pt-20'>Shaun Packard, Oklahoma</p>
                    <p className='w-1/2 text-center mx-auto text-black  text-xl pb-10'>

                        Shaun Packard, Oklahoma

                        “ Strife Killed this for us. We were looking for a company that offered  private team stores with NO CLOSE date, customizations and no minimum orders quantities. They made it quick and easy, fulfilled the parents/fan gear for us so..it was such an easy process, I can't thank them enough "
                    </p>
                </div>
                <div>
                    <p className='text-[#28FFE9] pt-20'>Shaun Packard, Oklahoma</p>
                    <p className='w-1/2 text-center text-black mx-auto  text-xl pb-10'>

                        Shaun Packard, Oklahoma

                        “ Strife Killed this for us. We were looking for a company that offered  private team stores with NO CLOSE date, customizations and no minimum orders quantities. They made it quick and easy, fulfilled the parents/fan gear for us so..it was such an easy process, I can't thank them enough "
                    </p>
                </div>



            </Carousel>
            <div>
                <h1 className='text-5xl text-center font-bold text-black mt-16'>Benefits of having your own private store</h1>
                <div className='md:mx-20 grid  grid-cols-1 lg:grid-cols-3 ms-2'>
                    <div className='text-center mx-4'>
                        <h1 className='text-xl font-bold mt-10'>Open All Year Long</h1>
                        <p className='font-thin text-black mt-10 ff'>With Strife Sports, you decide the close date of your private store. If you want to leave it open all year, that is completely fine and will be NO EXTRA cost.</p>
                    </div>
                    <div className='text-center mx-4'>
                        <h1 className='text-xl font-bold mt-10'>Perfect For Coaches</h1>
                        <p className='font-thin text-black mt-10 ff'>Coaches, gone are the days of having to run the order spreadsheet and track down money/orders for parent gear. With your private team store, parents can order any of your gear at any time and we will ship it directly to them.</p>
                    </div>
                    <div className='text-center mx-4'>
                        <h1 className='text-xl font-bold mt-10'>Customizable</h1>
                        <p className='font-thin text-black mt-10 ff'>Get your player's name/number on your gear for NO EXTRA cost!</p>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className='mt-20'>
                <h1 className='text-5xl font-bold text-center text-black '>FREE Private Team Store</h1>
                <p className='w-1/2 mx-auto mt-5 font-semibold text-center'>With orders over $2,500 you will have the option for a FREE private team store. You can still choose to purchase a private store with you initial order for a one-time fee and no annual fees. </p>
            </div>

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
                        <label className='fontSecondary text-lg text-primary'>Team Name</label>
                        <input type='text' placeholder='Team name'
                            {...register("teamName", { required: true })}
                            aria-invalid={errors.phone ? "true" : "false"}
                            className='inputField' name='teamName' />
                        {errors.phone?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone Number is required</p>}
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

                <input type="submit" value="Submit" className='btnPrimary lg:w-[40%] mx-auto' />
            </form>

        </section>
    );
};

export default TeamStore;