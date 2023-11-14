import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiAdjustmentsHorizontal, HiArrowRightOnRectangle, HiChevronDown, HiOutlineHome } from "react-icons/hi2";
import { IoIosCart, IoIosLogIn } from 'react-icons/io';
import { BiSolidUserRectangle } from 'react-icons/bi';
import "./Nav.css"
import logo from "../../../assets/logos/DL_Customs_Logo_2022.png"
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user, logOut} = useAuth();


    const handleOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'logout successful!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const navItems = <>

        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont")}>Home</NavLink>
        </li>


        <div className="dropdown dropdown-hover py-0 pl-2 cursor-pointer brandFont ml-2 lg:ml-0 z-50">
            <label tabIndex={0} className="inline-flex items-center gap-1 navDefault">Shop <HiChevronDown className='w-5 h-4 text-primary' /></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow shadow-slate-100 bg-black bg-opacity-90 rounded w-60 top-10 -left-14 z-50 brandFont space-y-3">

                <li><NavLink to="/shop-all" className={({ isActive }) => (isActive ? "navActive border-b rounded-none" : "navDefault border-b rounded-none")}>Shop All</NavLink></li>


                <li><NavLink to="/buy-ins" className={({ isActive }) => (isActive ? "navActive border-b rounded-none" : "navDefault border-b rounded-none")}>Buy INs</NavLink></li>

                <li><NavLink to="/clearance" className={({ isActive }) => (isActive ? "navActive border-b rounded-none" : "navDefault rounded-none")}>Clearance</NavLink></li>


            </ul>
        </div>

        <li>
            <NavLink to="/our-work" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont")}>Our Work</NavLink>
        </li>
        <li>
            <NavLink to="/team-Order" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont")}>Team Order</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont")}>Contact Us</NavLink>
        </li>
        <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont")}>Blog</NavLink>
        </li>
        {
            user ? <div className="dropdown dropdown-hover py-4 pl-2 cursor-pointer navDefault brandFont ml-2 lg:ml-0">
                <label tabIndex={0} className="inline-flex items-center gap-1">Profile <HiChevronDown className='w-5 h-4 text-primary' /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow shadow-slate-300 bg-base-100 rounded w-72 lg:w-80 top-10 -left-14 z-50 brandFont space-y-3">

                    {/* <li><NavLink to={isAdmin ? "/dashboard/manage-user-orders" : "/dashboard/user-order-history"} className={({ isActive }) => (isActive ? "navActive border-b rounded-none" : "navDefault border-b rounded-none")}>Dashboard</NavLink></li> */}

                    <Link to="/user-profile" className='my-btn-sec inline-flex items-center gap-1 py-2 pl-4'> User Profile <BiSolidUserRectangle className='w-5 h-5'/></Link>

                    <button className='my-btn-sec inline-flex items-center gap-1 py-2 pl-4'>Sign Out <HiArrowRightOnRectangle className='w-5 h-5' onClick={handleOut}/></button>


                </ul>
            </div> : <li>
                <NavLink to="/signIn" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont inline-flex items-center gap-2")}>Sign In<IoIosLogIn className='h-7 w-7' /></NavLink>
            </li>
        }

<li>
            <NavLink to="/team_store" className={({ isActive }) => (isActive ? "navActive brandFont text-gradient" : "navDefault brandFont")}>Team Store</NavLink>
        </li>


    </>

    return (
        <section className='bg-black bg-opacity-90 text-white sticky top-0 z-50'>

            <nav className='max-w-7xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to="/">
                            <img src={logo} alt="Logo"  className='w-52'/>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <Link to="/trial" className="inline-flex items-center gap-2 px-3 bg-primary text-white py-1 rounded-l-2xl rounded-r-2xl">
                            Get Quote
                        </Link>
                    </div>
                    <div className="navbar-end flex lg:hidden">
                        <label className="btn btn-circle swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* hamburger icon */}
                            <svg onClick={() => setIsOpen(!isOpen)} className="swap-off fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                            {/* close icon */}
                            <svg onClick={() => setIsOpen(!isOpen)} className="swap-on fill-error" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </label>


                        <ul className={`${isOpen ? "absolute top-16 left-0 space-y-5 flex flex-col items-center bg-neutral text-white w-full py-6 transition-all duration-300" : "absolute -top-[500px] left-0 space-y-5 flex flex-col items-center bg-success bg-opacity-40 w-full py-6 transition-all duration-300"}`}>
                            {navItems}
                            <Link to="/trial" className="inline-flex items-center gap-2 px-3 bg-primary text-white py-1 rounded-l-2xl rounded-r-2xl">
                                <IoIosCart className='h-5 w-5' /> Cart
                            </Link>
                        </ul>

                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Navbar;