import React from 'react';

const Formprice = () => {
    return (
        <div className='flex-1'>
            <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ">
                Form Price
            </h2>
            <div className="p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b text-left text-gray-600">Form Name</th>
                                <th className="py-2 px-4 border-b text-left text-gray-600">Old Price</th>
                                <th className="py-2 px-4 border-b text-left text-gray-600">New Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Form 1</td>
                                <td className="py-2 px-4 border-b">₹100</td>
                                <td className="py-2 px-4 border-b">₹120</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="py-2 px-4 border-b">Form 2</td>
                                <td className="py-2 px-4 border-b">₹150</td>
                                <td className="py-2 px-4 border-b">₹170</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Form 3</td>
                                <td className="py-2 px-4 border-b">₹200</td>
                                <td className="py-2 px-4 border-b">₹220</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Formprice;
