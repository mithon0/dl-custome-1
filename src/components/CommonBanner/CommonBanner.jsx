import React from 'react';

const CommonBanner = ({ img, title,c }) => {
   
    return (
        
        <div className={`relative mb-14 `}>
            <img src={img} className='w-full h-72 lg:h-[600px]' alt="" />
            <div className='absolute top-0 h-full w-full bg-secondary bg-opacity-60 flex items-center justify-center'>
            <h1 className={`lg:text-5xl text-white text-4xl p-4 rounded font-bold fontSecondary ${c}`}> D.L. Customs |  {title} </h1>
            </div>
        </div>
        
    );
};

export default CommonBanner; 