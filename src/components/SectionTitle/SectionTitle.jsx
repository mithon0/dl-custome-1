import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='title'>
            <p className='text-primary fontSecondary text-center my-5 text-lg'>{subTitle}</p>
            <p className='text-secondary text-4xl lg:text-6xl font-bold text-center'>{title}</p>
        </div>
    );
};

export default SectionTitle;