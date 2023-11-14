import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../StartMyOrder/StartMyOrder.css"
import { FaPlus } from 'react-icons/fa';
const StartMyOrder = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='pb-20'>
            <h1 className='text-7xl font-bold text-center text-primary pt-5 '>CUSTOM <span className='text-black'>ART ORDER</span></h1>


            {/*form  */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[80%] lg:w-[50%] mx-auto my-10'>

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
                        <label className='fontSecondary text-lg text-primary'>Address</label>
                        <input type='text' placeholder='Address'
                            {...register("Address", { required: true })}
                            aria-invalid={errors.Address ? "true" : "false"}
                            className='inputField' name='Address' />
                        {errors.teamName?.type === 'required' && <p role="alert" className='text-error font-medium'>Team Name is required</p>}
                    </div>
                    <div className='w-full flex flex-col space-y-2'>
                        <label className='fontSecondary text-lg text-primary'>Team Name:</label>
                        <input type='text' placeholder='Team Name'
                            {...register("teamName", { required: true })}
                            aria-invalid={errors.teamName ? "true" : "false"}
                            className='inputField' />
                        {errors.teamName?.type === 'required' && <p role="alert" className='text-error font-medium'>Team Name is required</p>}
                    </div>
                </div>

                <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>
                    <div className='w-full flex flex-col space-y-2'>
                        <label className='fontSecondary text-lg text-primary'>How many players?</label>
                        <input type='number' placeholder='Players Number'
                            {...register("players", { required: true })}
                            aria-invalid={errors.players ? "true" : "false"}
                            className='inputField' />
                        {errors.players?.type === 'required' && <p role="alert" className='text-error font-medium'>Players Number is required</p>}
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
                        <label className='fontSecondary text-lg text-primary'>Design Idea</label>
                        <textarea name='DesignIdea' rows={5} cols={5} placeholder="Design Idea:Please dicribe what you want your design to look like in as much details as possible."
                            {...register("Design Idea")}
                            className='inputField' />

                    </div>
                </div>
                {/* uploads */}

                <div className='flex items-center  flex-col lg:flex-row gap-5 w-full'>
                    <div className='w-full flex '>

                        <input type='file' placeholder='upload file'
                            id='file' className='' />
                        <label for="file" className='border text-center px-5 gap-2 py-2 shadow w-full justify-center flex items-center border-[#E1144A] text-[#E1144A]'>Upload File <FaPlus></FaPlus></label>
                    </div>
                    <div className='w-full flex  '>

                        <input type='file' placeholder='upload file'
                            id='file' className='' />
                        <label for="file" className='border text-center px-5 gap-2 py-2 shadow w-full justify-center flex items-center border-[#E1144A] text-[#E1144A]'>Upload File <FaPlus></FaPlus></label>
                    </div>
                    <div className='w-full flex '>

                        <input type='file' placeholder='upload file'
                            id='file' className='' />
                        <label for="file" className='border text-center px-5 gap-2 py-2 shadow w-full justify-center flex items-center border-[#E1144A] text-[#E1144A]'>Upload File <FaPlus></FaPlus></label>
                    </div>
                </div>
                <div className='flex items-center flex-col lg:flex-row gap-5 w-full'>
                    <div className='w-full flex '>

                        <input type='file' placeholder='upload file'
                            id='file' className='' />
                        <label for="file" className='border text-center px-5 gap-2 py-2 shadow w-full justify-center flex items-center border-[#E1144A] text-[#E1144A]'>Upload File <FaPlus></FaPlus></label>
                    </div>
                    <Link className='btnPrimary w-full mx-auto text-center' type='submit' value="submit">GO TO CHECKOUT</Link>
                    <div className='w-full flex '>

                        <input type='file' placeholder='upload file'
                            id='file' className='' />
                        <label for="file" className='border text-center px-5 gap-2 py-2 shadow w-full justify-center flex items-center border-[#E1144A] text-[#E1144A]'>Upload File <FaPlus></FaPlus></label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StartMyOrder;