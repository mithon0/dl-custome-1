import React, { useEffect, useState } from 'react';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';

const OrderRequest = () => {
    const [orderReq, setOrderReq] = useState([]);
    
    useEffect(() => {
        fetch('https://run-gran-server-flax.vercel.app/team-order')
            .then(res => res.json())
            .then(data => setOrderReq(data))
    }, [])

    console.log(orderReq);

    return (
        <div className='w-full h-screen'>
            <AdminHeader></AdminHeader>

            {/* table part */}

            <div className='mt-20 mb-8'>
                <h1 className='text-center my-8 text-xl'> Team Order Request  </h1>

                <div className="">
                    <table className="table ml-3 mr-3 border-2 overflow-x-auto overflow-y-auto">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white opacity-75 font-bold'>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Players</th>
                                <th>Product Type</th>
                                <th>Team Name</th>
                                <th>Here About Us</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderReq.map((qtreq, index) => {
                                    <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {qtreq.userName || "Not Available"}
                                        </td>
                                        <td>
                                            {qtreq.email || "Not Available"}
                                        </td>
                                        <td>{qtreq.phone}</td>
                                        <td>{qtreq.players}</td>
                                        <td>{qtreq.productType}</td>
                                        <td>{qtreq.teamName}</td>
                                        <td>{qtreq.hereAboutUs}</td>

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

export default OrderRequest;