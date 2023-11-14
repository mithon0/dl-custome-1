import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../../../assets/logos/DL_Customs_Logo_2022.png"

const Footer = () => {
  return (
    <footer className='bg-neutral'>
      <div className="w-full flex items-center justify-center p-4 bg-neutral text-neutral-content max-w-7xl mx-auto">
        <div className="w-full items-center justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 gap-10">
          <div className='inline-flex items-center gap-2'>
            <Link to="/" className='border border-base-100 px-4 py-4 rounded-full hover:bg-base-100 hover:text-primary transition-all duration-500'><FaFacebookF className='w-7 h-7' /></Link>
            <p>Facebook</p>
          </div>

          <div className='inline-flex items-center gap-2'>
            <Link to="/" className='border border-base-100 px-4 py-4 rounded-full hover:bg-base-100 hover:text-primary transition-all duration-500'><FaTwitter className='w-7 h-7' /></Link>
            <p>Twitter</p>
          </div>

          <div className='inline-flex items-center gap-2'>
            <Link to="/" className='border border-base-100 px-4 py-4 rounded-full hover:bg-base-100 hover:text-primary transition-all duration-500'><FaInstagram className='w-7 h-7' /></Link>
            <p>Instagram</p>
          </div>

          <div className='inline-flex items-center gap-2'>
            <Link to="/" className='border border-base-100 px-4 py-4 rounded-full hover:bg-base-100 hover:text-primary transition-all duration-500'><FaYoutube className='w-7 h-7' /></Link>
            <p>Youtube</p>
          </div>

          <div className='inline-flex items-center gap-2'>
            <Link to="/" className='border border-base-100 px-4 py-4 rounded-full hover:bg-base-100 hover:text-primary transition-all duration-500'><FaPinterestP className='w-7 h-7' /></Link>
            <p>Pinterest</p>
          </div>
        </div>
      </div>

      <div className="border-t max-w-7xl mx-auto"></div>
      <div className="footer p-10 bg-neutral text-base-100 max-w-7xl mx-auto">
        <aside>
          <Link to="/">
            <img src={logo} alt="Logo" className='w-52' />
          </Link>
          <p className='font-extralight'>Ipsa quae ab illo inventore veritatis et quasi sunt <br /> explicabo. Ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</p>
        </aside>
        <nav>
          <header className="footer-title">Links</header>
          <Link to="/" className="font-normal text-base-100 hover:text-primary hover:underline">Home</Link>
          <Link to="/shop-all" className="font-normal text-base-100 hover:text-primary hover:underline">Shop All</Link>
          <Link to="/our-work" className="font-normal text-base-100 hover:text-primary hover:underline">Our Work</Link>
          <Link to="/contact" className="font-normal text-base-100 hover:text-primary hover:underline">Contact Us</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to="/about-us" className="font-normal text-base-100 hover:text-primary hover:underline">About us</Link>
          <Link to="/testimonial" className="font-normal text-base-100 hover:text-primary hover:underline">Testimonial</Link>
          <Link to="/privacy-policy" className="font-normal text-base-100 hover:text-primary hover:underline">Privacy policy</Link>
          <Link to="/terms-of-use" className="font-normal text-base-100 hover:text-primary hover:underline">Terms of use</Link>
        </nav>

        <nav>
          <header className="footer-title">CONTACTS</header>
          <p>Location: <span className='text-primary'>Fort Worth, TX, United States </span></p>
          <p>Email: <a href="mailto:info@dlcustomstx.com" className='text-primary'>info@dlcustomstx.com</a></p>
          <p>Phone: <a href="tel:+1 254-733-9705" className='text-primary'>+1 254-733-9705</a></p>
        </nav>
      </div>
      <div className="border-t max-w-7xl mx-auto"></div>
      <div className="footer footer-center p-4 bg-neutral text-base-100 max-w-7xl mx-auto">
        <aside>
          <p>Copyright © 2023 - All right reserved by Ena Ema Technologies</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;