import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import CommonBanner from '../CommonBanner/CommonBanner';
import img from '../../assets/banner/banner2.jpg';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import ReactImageZoom from 'react-image-zoom';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import FeaturedProduct from '../../pages/Home/FeaturedProduct/FeaturedProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import axios from 'axios';
import Auth from '../../Auth/Auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {
    const [tabName, setTabName] = useState("description")
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const data = useLoaderData();
    const [data, setData] = useState({});
    const { id } = useParams();
    // console.log(typeof(id));
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [value, setValue] = useState(0);
    const { user } = useAuth();
    // const props = {
    //     width:
    //         400,
    //     zoomPosition:
    //         "original",
    //     img:
    //         data?.imageUrl,
    //     height:
    //         300,
    //     scale:
    //         1.1
    // };

    useEffect(() => {
        // const res = await axios.get(`https://run-gran-server-flax.vercel.app/product/${id}`)
        fetch(`https://run-gran-server-flax.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    // useEffect(async () => {
    //     const res = await axios.get("https://run-gran-server-flax.vercel.app/products")
    //     setFeaturedProduct(res.data.data);
    // }, [])



    if (value < 0) {
        alert("You can not select less than 0")
        setValue(0);
    }

    const onSubmit = (data) => {
        console.log(data);
        const { productSize } = data;

        const postData = {
            userName: user?.displayName,
            email: user?.email,
            quantity: value,
            productSize: productSize
        }

        axios.post('https://run-gran-server-flax.vercel.app/quote', postData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Order Successfully Placed !! ',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }



    return (
        <div className="">
            <CommonBanner
                img={img}
                title={`Shop | Sale | ${data?.productName}`}
            ></CommonBanner>

            {/* content part */}
            <div className='my-16 flex flex-col space-y-8 lg:flex-row lg:gap-8 w-[90%] lg:w-[75%] mx-auto lg:space-y-0'>

                {/* image div */}
                <div className='w-full lg:w-1/2 overflow-hidden'>
                    {/* <img src={data?.imageUrl} className='h-[80%]' alt="" /> */}
                    <Zoom>
                        <img
                            alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                            src={data?.imageUrl}
                            width="500"
                            className=' py-24 px-3'
                        />
                    </Zoom>
                </div>

                {/* description div */}
                <div className='w-full'>
                    <h1 className='font-bold pb-3'> $ {data?.productPrice} </h1>
                    <p> {data?.productDescription} </p>

                    <h1 className='pt-5 pb-1 font-bold'>Color : </h1>

                    <p className='pl-3'>Available Colors : {data?.productColor}</p>

                    <h1 className='pt-5 pb-4 font-bold'>Quantity With Size: </h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='flex items-center gap-10 pb-3 pl-6'>

                            <input type="number" className="px-6 py-2 rounded-md bg-primary bg-opacity-20 focus:outline focus:outline-accent  disabled:cursor-not-allowed placeholder:text-sm placeholder:text-white disabled:opacity-25"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />

                            <div className='w-full flex flex-col space-y-2'>

                                <select {...register("productSize", { required: true })} className='inputField font-semibold'>
                                    <option defaultValue=""></option>
                                    <option value="Long Sleeve Jersey">Long Sleeve Jersey</option>

                                    <option value="Racerback Jersey">Racerback Jersey</option>

                                    <option value="Full Button Baseball Jersey">Full Button Baseball Jersey</option>

                                    <option value="Basketball Set">Basketball Set</option>

                                    <option value="Baseball Pants">Baseball Pants</option>

                                    <option value="5 Pocket Microfiber Shorts">5 Pocket Microfiber Shorts</option>
                                </select>
                                {errors.productType?.type === 'required' && <p role="alert" className='text-error font-medium'>Product Type is required</p>}
                            </div>


                            <button className='btnPrimary'
                                disabled={value > 0 ? false : true}
                            > Get Quote </button>
                        </p>
                    </form>

                    <div className='py-3 pl-6'>
                        <p>SKU : N/A </p>
                        <p>Category : sale </p>
                        <p> Tags: apparel, cross, running, speed </p>
                        <p> Product ID: {data?.id} </p>
                    </div>


                </div>

            </div>

            {/* tab item */}

            <div className='tab-container w-[95%] lg:w-[75%] mx-auto my-14 flex items-center gap-3 lg:gap-10'>

                <div onClick={() => setTabName("description")} className={`lg:px-10 px-4 rounded lg:py-3 py-1  lg:rounded-l-full lg:rounded-r-full  text-center cursor-pointer ${tabName === "description" ? "bg-primary text-white" : "bg-gray-200 text-primary"}`}>
                    Description
                </div>

                <div onClick={() => setTabName("Additional information")} className={`lg:px-10 px-4 rounded lg:py-3 py-1 lg:rounded-l-full lg:rounded-r-full  text-center whitespace-nowrap cursor-pointer ${tabName === "Additional information" ? "bg-primary text-white" : "bg-gray-200 text-primary"}`}>
                    Additional information
                </div>

                <div onClick={() => setTabName("Reviews")} className={`lg:px-10 px-4 rounded lg:py-3 py-1 lg:rounded-l-full lg:rounded-r-full  text-center cursor-pointer ${tabName === "Reviews" ? "bg-primary text-white" : "bg-gray-200 text-primary"}`}>
                    Reviews(0)
                </div>
            </div>

            {/* Tab container */}

            <div className='my-14 w-[95%] lg:w-[75%] mx-auto'>
                {
                    tabName === "description" ? <div>{data?.productDescription}</div> : tabName === "Additional information" ?
                        <div>
                            <p className='text-2xl'>ADDITIONAL INFORMATION</p>
                        </div> : <div>
                            <p className='text-2xl'>Reviews </p>
                        </div>
                }
            </div>

            {/* more products */}

            {/* 
            
            <h1 className='mt-8 mb-5 font-bold text-2xl pl-28 hidden lg:block'> Related Products : </h1>

            <div className='my-16 w-[80%] mx-auto hidden lg:block'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        featuredProduct?.map((prod, indx) => <SwiperSlide key={indx} className='mb-16 shadow-md w-full'>
                            <Link className='' to={`/product/${prod?.id}`}>
                                <img src={prod?.imageUrl} alt="" className='w-56 h-52' />

                                <div className='mt-4 px-5 text-center'>
                                    <p className='text-xl font-semibold hover:text-primary'>{prod?.productName}</p>

                                    <div className='flex items-center justify-center w-full mt-5'>

                                    </div>
                                    <p className='my-4 text-2xl font-extrabold text-[#888585]'> ${prod?.productPrice}</p>

                                    <button className='mb-10 btnPrimary'>Buy Now</button>

                                </div>
                            </Link>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div> 
            
            
            */}


        </div>
    );
};

export default ProductDetails;