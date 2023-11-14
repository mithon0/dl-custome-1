import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {

  return (
    <div className='mb-16 shadow-md w-full'>
      <Link className='' to={`/product/${data?.id}`}>
        <img src={data?.imageUrl} alt="" className='lg:w-56 h-52 mx-auto' />

        <div className='mt-4 px-5 text-center'>
          <p className='text-xl font-semibold hover:text-primary'>{data?.productName}</p>

          <div className='flex items-center justify-center w-full mt-5'>
            <Rating
              style={{ maxWidth: 80 }}
              value={4}
              readOnly
            />
          </div>
          <p className='my-4 text-2xl font-extrabold text-[#888585]'> ${data?.productPrice}</p>

          <Link to={`/product/${data?.id}`}
          >
            <button className='mb-10 btnPrimary'
            >Get Quote</button></Link>
        </div>
      </Link>
    </div>
  );
};

export default Card;