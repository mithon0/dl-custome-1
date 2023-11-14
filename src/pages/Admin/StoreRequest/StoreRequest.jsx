import React, { useEffect, useState } from 'react';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';

const StoreRequest = () => {
    const [storeReq, setStoreReq] = useState([]);

    useEffect(() => {
        fetch('https://run-gran-server-flax.vercel.app/team-store')
            .then(res => res.json())
            .then(data => setStoreReq(data))
    }, [])


    console.log(storeReq);

    return (
        <div className='w-full h-screen'>
            <AdminHeader></AdminHeader>

            {/* table part */}

            <div className='mt-20 mb-8'>
                <h1 className='text-center my-8 text-xl'> Team Store Data  </h1>

                <div className="">
                    <table className="table ml-3 mr-3 border-2 overflow-x-auto overflow-y-auto">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white opacity-75 font-bold'>
                                <th>
                                    #
                                </th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Team Name</th>
                                <th>Comments</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                storeReq.map((qtreq, index) => {
                                    <tr>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {qtreq.firstName || "Not Available"}
                                        </td>
                                        <td>
                                            {qtreq.lastName || "Not Available"}
                                        </td>
                                        <td>{qtreq.email}</td>
                                        <td>{qtreq.teamName}</td>
                                        <td>{qtreq.comments}</td>
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

export default StoreRequest;