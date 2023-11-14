import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const NewProd = () => {
    const [featuredProduct, setFeaturedProduct] = useState([]);

    useEffect(()=>{
        fetch("https://run-gran-server-flax.vercel.app/products")
        .then(res=>res.json())
        .then(data=>setFeaturedProduct(data))
    },[])
    return (
        <section className='my-14  overflow-hidden'>

<SectionTitle title="NEW PRODUCTS" subTitle="SHOP"/>

<div className='mt-14 relative w-[80%] mx-auto hidden lg:block'>
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
            featuredProduct?.map((prod, indx)=><SwiperSlide key={indx} className='mb-16 shadow-md w-full'>
              <Link className='' to={`/product/${prod?.id}`}>
                <img src={prod?.imageUrl} alt="" className='w-56 h-60 mx-auto'/>

                <div className='mt-4 px-5 text-center'>
                <p className='text-xl font-semibold hover:text-primary'>{prod?.productName}</p>

<div className='flex items-center justify-center w-full mt-5'>
<Rating
      style={{ maxWidth: 80 }}
      value={4}
      readOnly
    />
</div>
                <p className='my-4 text-2xl font-extrabold text-[#888585]'> ${prod?.productPrice}</p>

                <Link to={`/get-quote/${prod?.id}`}>
                    <button className='mb-10 btnPrimary'>Get Quote</button>
                  </Link>

                </div>
              </Link>
            </SwiperSlide>)
        }
      </Swiper>
</div>


<div className='mt-14 relative w-[70%] mx-auto lg:hidden'>
<Swiper
        slidesPerView={1}
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
            featuredProduct?.map((prod, indx)=><SwiperSlide key={indx} className='mb-16 shadow-md w-full'>
              <Link className=''>
                <img src={prod?.imageUrl} alt="" className='w-72 h-52 '/>

                <div className='mt-4 px-5 text-center'>
                <p className='text-xl font-semibold hover:text-primary'>{prod?.productName}</p>

<div className='flex items-center justify-center w-full mt-5'>
<Rating
      style={{ maxWidth: 80 }}
      value={4}
      readOnly
    />
</div>
                <p className='my-4 text-2xl font-extrabold text-[#888585]'> ${prod?.productPrice}</p>

<button className='mb-10 btnPrimary'>Buy Now</button>

                </div>
              </Link>
            </SwiperSlide>)
        }
      </Swiper>
</div>

        </section>
    );
};

export default NewProd;