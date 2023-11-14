import React from 'react';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const UserInformation = () => {
    const { user } = useAuth();
    const [quote, setQuote] = useState([]);
    const [store, setStore] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://run-gran-server-flax.vercel.app//quote?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setQuote(data))
    }, [])


    useEffect(() => {
        fetch(`https://run-gran-server-flax.vercel.app/team-order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setStore(data))
    }, [])


    useEffect(() => {
        fetch(`https://run-gran-server-flax.vercel.app/team-store?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    useEffect(() => {
        fetch(`https://run-gran-server-flax.vercel.app/team-store?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setQuote(data))
    }, [])

    return (
        <div>
            <AdminHeader></AdminHeader>

            <div className='my-16'>

                <h1 className='font-bold text-xl text-primary text-center underline'> User Information Summary </h1>


                {/* all qoutes info */}
                <div className='my-8'>
                    <h3 className='text-center text-lg font-bold my-4'> All Quotes </h3>

                    <div className="overflow-auto h-56 w-[95%] mx-auto border-2">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-primary text-white opacity-75 font-bold'>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Quantity</th>
                                    <th>Product Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    quote.map((qt, index) => {
                                        <tr>
                                            <th>
                                                {index + 1}
                                            </th>

                                            <td> {qt.userName} </td>
                                            <td> {qt.email} </td>
                                            <td> {qt.quantity} </td>
                                            <td> {qt.productSize} </td>

                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>


                {/* all Store Request */}
                <div className='my-8'>
                    <h3 className='text-center text-lg font-bold my-4'> All Quotes Request </h3>

                    <div className="overflow-auto h-56 w-[95%] mx-auto border-2">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-primary text-white opacity-75 font-bold'>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Team Name</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    store.map((qt, index) => {
                                        <tr>
                                            <th>
                                                {index + 1}
                                            </th>

                                            <td> {qt.firstName} </td>
                                            <td> {qt.lastName} </td>
                                            <td> {qt.email} </td>
                                            <td> {qt.teamName} </td>
                                            <td> {qt.comments} </td>

                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* all Team Order */}
                <div className='my-8'>
                    <h3 className='text-center text-lg font-bold my-4'> All Team Orders Info </h3>

                    <div className="overflow-auto h-56 w-[95%] mx-auto border-2">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-primary text-white opacity-75 font-bold'>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Name</th>
                                    <th> Email </th>
                                    <th> Here About Us </th>
                                    <th> Phone </th>
                                    <th> Players </th>
                                    <th> Product Type </th>
                                    <th> Team Name </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    store.map((qt, index) => {
                                        <tr>
                                            <th>
                                                {index + 1}
                                            </th>

                                            <td> {qt.userName} </td>
                                            <td> {qt.email} </td>
                                            <td> {qt.hereAboutUs} </td>
                                            <td> {qt.phone} </td>
                                            <td> {qt.players} </td>
                                            <td> {qt.productType} </td>
                                            <td> {qt.teamName} </td>

                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default UserInformation;