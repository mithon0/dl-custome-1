import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/DL_Customs_MAIN_LOGO_red_black_-_landscape.png';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const AdminHeader = () => {
    const { user, logOut } = useAuth();


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


    return (
        <>
            <header className="navbar w-[95%] mx-auto py-5">

                <div className="navbar-start">
                    <img src={logo} alt="Logo" className='w-52' />
                </div>

                <div className="navbar-end hidden lg:flex">
                    <Link to="/" className="inline-flex items-center gap-2 px-3 bg-primary text-white py-1 rounded-l-2xl rounded-r-2xl"
                        onClick={handleOut}
                    >
                        LogOut
                    </Link>
                </div>

            </header>

            <hr />
        </>
    );
};

export default AdminHeader;