import React from 'react';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        fetch('https://run-gran-server-flax.vercel.app/users')
            .then(res => res.json())
            .then(data => setClientData(data))
    }, [])


    return (
        <div className='w-full h-screen'>

            <AdminHeader></AdminHeader>


            {/* table part */}

            <div className='mt-20 mb-8'>
                <h1 className='text-center my-8 text-xl'> Visualisation Of Client Data  </h1>

                <div className="">
                    <table className="table ml-3 mr-3 border-2 overflow-x-auto overflow-y-auto">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white opacity-75 font-bold'>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                clientData.map((cd, index) => {
                                    <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={cd.photoUrl} alt="User image" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">  
                                                    {cd.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                           {cd?.phone}
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;