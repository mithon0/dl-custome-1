import React from 'react';
import ShopProdcutOrder from '../../../components/ShopProdcutOrder/ShopProdcutOrder';
import './ServiceSection.css'
import visitShop from '../../../assets/sections/visitShop.webp' 
import ourWork from '../../../assets/sections/image.webp'
import teamOrder from '../../../assets/sections/teamOrder.webp'
const ServiceSection = () => {
    return (
        <div className='container mx-auto justify-center flex gap-4 flex-wrap '>
            <ShopProdcutOrder
                productName="Visit Shop"
                productDiscountPercent=" "
                backgroundImage={visitShop}
            ></ShopProdcutOrder>

            <ShopProdcutOrder
                productName="Recent Work"
                productDiscountPercent=" "
                backgroundImage= {ourWork}
            ></ShopProdcutOrder>

            <ShopProdcutOrder
                productName="Team Orders"
                productDiscountPercent=" "
                backgroundImage= {teamOrder}
            ></ShopProdcutOrder>

        </div>
    );
};

export default ServiceSection;