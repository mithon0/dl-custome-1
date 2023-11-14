import React from 'react';

const RightSIdeCard = ({ title, des }) => {
    return (
        <div className='p-4 bg-white border-b-2 h-64 w-60 lg:h-80 lg:w-80 mx-auto lg:mx-0'>
            <h1 className='text-xl font-bold text-center p-6'>{title}</h1>
            <p className='py-3'> {des} </p>
        </div>

    );
};

export default RightSIdeCard;