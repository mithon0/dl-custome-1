import React, { useState } from 'react';
import img from '../../../assets/login/register.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField/InputField';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { HiArrowSmallLeft } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
const token = import.meta.env.VITE_IMAGE_TOKEN;


const Register = () => {
    const { updateUser, signUp, userVerify } = useAuth();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => {
        const image = data.photo;
        // console.log(image[0]);
        const formData = new FormData();
        formData.append("image", image[0])


        const password = data.password;
        const confirmPassword = data.confirmPassword;
        if (password.length < 6) {
            return setError("Password must be six characters in length")
        }
        if (password !== confirmPassword) {
            return setError("Password doesn't match")
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            return setError("At least one upper case include in your password")
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            return setError("At least one special character include in your password")
        }



        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(ResData => {

                if (ResData) {
                    const newUser = {
                        email: data.email,
                        name: data.name,
                        phone: data.phone,
                        gender: data.gender,
                        
                    }


                    signUp(data?.email, data?.password)
                        .then((res) => {
                            const loggedUser = res.user;

                            updateUser(loggedUser, data?.name )
                                .then(async () => {
                                    userVerify()
                                        .then(async () => {
                                            const res = await axios.post('https://run-gran-server-flax.vercel.app/users', newUser);

                                            if (res.data.insertedId > 0) {
                                                navigate(from, { replace: true })
                                                Swal.fire({
                                                    title: 'Success!',
                                                    text: 'Sign up successful and check your email to verify!',
                                                    icon: 'success',
                                                    confirmButtonText: 'Ok'
                                                })
                                            }
                                        })
                                })


                        })
                        .catch(error => {
                            Swal.fire({
                                title: 'Error!',
                                text: error.message,
                                icon: 'error',
                                confirmButtonText: 'Cool'
                            })

                        })

                }

            })

        console.log(data);


    }


    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    return (
        <section className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-4/5 mx-auto rounded-xl my-14 border-2'>

            {/* left part */}
            <div className='p-8 w-full lg:w-1/2 border-r-2 bg-white'>
                <Link to="/" className='inline-flex items-center gap-2 fontSecondary text-xl font-bold text-primary'><HiArrowSmallLeft className='h-6 w-6' />Back</Link>
                <img src={img} alt="" className='w-2/3 mx-auto' />
                <p className='mt-7 text-center'> Already Have An Account ? </p>

                <div className='text-center my-5 text-xs'>
                    <Link className='text-center' to="/signIn">
                        <button className='px-8 py-2 border border-primary text-base rounded-r-full rounded-l-full text-primary hover:text-white  hover:bg-primary transition-all duration-300'>Sign In</button>
                    </Link>
                </div>

            </div>

            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white'>
                <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Create An Account
                </h1>
                <p className='text-center'> Become a member to get your desire jersey </p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-10'>


                    <input type='text' placeholder='Enter Your Name'
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                        className='inputField' />
                    {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}



                    <input type='email' placeholder='Enter Your Email'
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        className='inputField' />
                    {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}

                    <input type='tel' placeholder='Enter Your Number'
                        {...register("phone", { required: true })}
                        aria-invalid={errors.phone ? "true" : "false"}
                        className='inputField' />
                    {errors.phone?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone is required</p>}

                    <div className='inline-flex items-center w-full relative'>
                        <input type={type} placeholder='Enter Your Password'
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                            className='inputField' />
                        <div className='absolute right-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                            }
                        </div>
                    </div>
                    {errors.password && <p role="alert" className='text-error font-medium'>{errors.password?.message}</p>}

                    <div className='inline-flex items-center'>
                        <input type="password" placeholder='Confirm Password'
                            {...register("confirmPassword", { required: "Confirm Password is required" })}
                            aria-invalid={errors.confirmPassword ? "true" : "false"}
                            className='inputField' />
                    </div>
                    {errors.confirmPassword && <p role="alert" className='text-error font-medium'>{errors.confirmPassword?.message}</p>}


                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />




                 


                    <p className='my-3 font-semibold text-red-600'>{error}</p>

                    <button input type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary group-hover:h-full ">
                        </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                            Sign Up  </span></button>
                </form>

                

            </div>

        </section>
    );
};

export default Register;