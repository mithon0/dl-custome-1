import React from 'react';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import { useState } from 'react';
import { useEffect } from 'react';

const QuoteRequest = () => {

    const [quoteReq, setQuoteReq] = useState([])

    useEffect(() => {
        fetch('https://run-gran-server-flax.vercel.app/quote')
            .then(res => res.json())
            .then(data => setQuoteReq(data))
    }, [])

    console.log(quoteReq);

    if(quoteReq.length === 0){
        return "loading";
    }


    return (
        <div className='w-full h-screen'>

            <AdminHeader></AdminHeader>

            {/* table part */}

            <div className='mt-20 mb-8'>
                <h1 className='text-center my-8 text-xl'> ALL Quote Request  </h1>

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
                                <th>Size</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            
                            {
                                quoteReq.map((qtreq, index) => {
                                    <tr>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {qtreq.userName || "Not Available"}
                                        </td>
                                        <td>
                                            {qtreq.email || "Not Available"}
                                        </td>
                                        <td>{qtreq.quantity}</td>
                                        <td>{qtreq.productSize}</td>

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

export default QuoteRequest;