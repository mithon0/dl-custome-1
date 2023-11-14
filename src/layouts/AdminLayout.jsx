import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { HiAdjustmentsHorizontal, HiArrowRightOnRectangle, HiChevronDown, HiOutlineHome } from "react-icons/hi2";
import { IoIosCart, IoIosLogIn } from 'react-icons/io';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { useState } from 'react';

const AdminLayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = <>

        <li className='my-2'>
            <NavLink to="/admin/overview" className={({ isActive }) => (isActive ? "bg-white px-3 py-2 text-xl text-black" : "navDefault brandFont")}> Overview </NavLink>
        </li>

        <li className='my-2'>
            <NavLink to="/admin/quote-request" className={({ isActive }) => (isActive ? "bg-white px-3 py-2 text-xl text-black" : "navDefault brandFont")}>Quote Request</NavLink>
        </li>

        <li className='my-2'>
            <NavLink to="/admin/team-order" className={({ isActive }) => (isActive ? "bg-white px-3 py-2 text-xl text-black" : "navDefault brandFont")}> Team Order Request </NavLink>
        </li>

        <li className='my-2'>
            <NavLink to="/admin/team-store-request" className={({ isActive }) => (isActive ? "bg-white px-3 py-2 text-xl text-black" : "navDefault brandFont")}>Team Store Request</NavLink>
        </li>

    </>

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center mt-20 lg:mt-0">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-primary text-white flex flex-col justify-center">
                        {/* Sidebar content here */}
                        {
                            navItems
                        }
                    </ul>

                </div>

                {/* mobile responsive start*/}

                <div className="navbar-end flex lg:hidden ml-3">
                    <label className="btn btn-circle swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* hamburger icon */}
                        <svg onClick={() => setIsOpen(!isOpen)} className="swap-off fill-primary " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        {/* close icon */}
                        <svg onClick={() => setIsOpen(!isOpen)} className="swap-on fill-error " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>


                    <ul className={`${isOpen ? "absolute top-16 left-0 space-y-5 flex flex-col items-center bg-[#ffffff] bg-opacity-80 w-full py-6 transition-all duration-300" : "absolute -top-[500px] left-0 space-y-5 flex flex-col items-center bg-success bg-opacity-40 w-full py-6 transition-all duration-300"}`}>
                        {
                            navItems
                        }
                    </ul>

                </div>

                {/* mobile responsive end*/}


            </div>
        </div>
    );
};

export default AdminLayout;