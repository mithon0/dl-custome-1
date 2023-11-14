import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { IoPlay } from 'react-icons/io5';
import { HiXMark } from 'react-icons/hi2';

const WhyUs = () => {
  return (
    <section className='my-14 bg-primary bg-opacity-5 py-20 px-6 lg:px-14'>
      <SectionTitle title="WHY CHOOSE US" subTitle="BENEFITS" />

      <div className='flex flex-col lg:flex-row gap-20 my-20 items-center justify-center'>

        <div className='w-[60%] lg:w-[30%] flex flex-col gap-10'>
          <div className='relative'>
            <h1 className='text-7xl font-bold text-gray-400 opacity-50'>01</h1>

            <Link to="/" className='absolute top-[20%] hover:text-primary flex items-center justify-between gap-5'>
              <p className='text-lg font-semibold whitespace-nowrap'>Personalization:</p>
              <span className='border-t-2 w-20 border-secondary'></span>
            </Link>

            <p className='text-sm'>Offering custom sports wear allows customers to personalize their apparel, whether it's adding their name, team logo, or specific design elements. Personalized items create a sense of uniqueness and identity, appealing to those who want to stand out.</p>

          </div>

          <div className='relative'>
            <h1 className='text-7xl font-bold text-gray-400 opacity-50'>02</h1>

            <Link to="/" className='absolute top-[20%] hover:text-primary flex items-center justify-between gap-5'>
              <p className='text-lg font-semibold whitespace-nowrap'>Quality and Performance:</p>
              <span className='border-t-2 w-20 border-secondary'></span>
            </Link>

            <p className='text-sm'>Emphasize the quality and performance features of your sports wear. If your products are made from high-quality materials, provide comfort, durability, and are designed for optimal performance during sports activities, customers are more likely to choose your brand over others.</p>

          </div>
        </div>

        <div className='w-[85%] h-80 lg:w-[500px] border border-primary lg:h-[420px] rounded-full  px-7 lg:px-10 py-8'>

          <div className='border border-primary w-full h-full rounded-full p-10'>

            <div className='w-full h-full rounded-full flex items-center justify-center relative'>
              <img src="https://us.shop.realmadrid.com/cdn/shop/products/RMCFMZ0131-08_500x480.jpg?v=1689089795" alt="" className='w-full h-full rounded-full' />

              <label htmlFor="my_modal_6" className='absolute bg-white px-6 py-6 rounded-full bg-opacity-40 hover:bg-primary cursor-pointer hover:bg-opacity-75'><IoPlay className='h-7 w-7 text-[#FFFFFF]' /></label>

            </div>

          </div>

        </div>

        <div className='w-[60%] lg:w-[30%] flex flex-col gap-10'>
          <div className='relative'>
            <h1 className='text-7xl font-bold text-gray-400 opacity-50 text-end'>03</h1>

            <Link to="/" className='absolute top-[20%] hover:text-primary flex items-center justify-between right-0'>
              <span className='border-t-2 w-14 border-secondary'></span>
              <p className='text-lg font-semibold whitespace-nowrap'>Team Spirit and Unity:</p>

            </Link>

            <p className='text-sm'>Custom sports wear is often associated with team sports and promotes a sense of unity and team spirit. Whether it's for a school team, a corporate sports event, or an amateur league, people appreciate the camaraderie that comes with wearing matching, customized apparel.</p>

          </div>

          <div className='relative'>
            <h1 className='text-7xl font-bold text-gray-400 opacity-50 text-end'>04</h1>

            <Link to="/" className='absolute top-[20%] hover:text-primary flex items-center justify-end right-0'>
              <span className='border-t-2 w-14 border-secondary'></span>
              <p className='text-lg font-semibold whitespace-nowrap'>Brand Reputation and Trust:</p>

            </Link>

            <p className='text-sm'>Establishing a positive brand reputation builds trust among customers. If your brand is known for delivering top-notch custom sports wear, has positive reviews, and is associated with reputable sports teams or events, customers are more likely to choose your products with confidence.</p>

          </div>
        </div>

      </div>

      <div className='text-center'>
        <Link to="/about" className='border border-primary px-20 py-4 bg-primary text-white rounded-r-full rounded-l-full  hover:bg-white hover:text-primary transition-all duration-500'>More About Us</Link>
      </div>



      {/* Video Modal */}

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal w-full overflow-hidden">
        <div className="modal-box max-w-5xl h-96 p-0 overflow-hidden">
          <div className='w-full h-full'>
            <div className='w-full h-full'>
              <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix)" width="100%" height="100%" src="https://www.youtube.com/embed/WTJSt4wP2ME?si=qiIECGYEyCUM_bp0" id="widget6"></iframe>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="absolute top-2 right-2 cursor-pointer hover:text-error">
              <HiXMark className='w-7 h-7 text-error' />
            </label>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyUs;