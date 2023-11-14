import React from 'react';
import Banner from './Banner/Banner';
import ServiceSection from './ServiceSection/ServiceSection';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import WhyUs from './WhyUs/WhyUs';
import BlogSection from './BlogSection/BlogSection';
import NewProd from './NewProd/NewProd';
import SubscribeSection from './SubscribeSection/SubscribeSection';

const Home = () => {
    return (
        <section>
            <Banner />
            <ServiceSection />
            <FeaturedProduct />
            <WhyUs />
            <BlogSection />
            <NewProd />
            <SubscribeSection />
        </section>
    );
};

export default Home;