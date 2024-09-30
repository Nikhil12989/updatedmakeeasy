import React from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Userdetails = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <h2 className="mt-6 mb-6 mx-5 text-2xl text-white text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300">
                User Details
            </h2>

            {/* Container holding the table with overflow-x-auto to make table scrollable */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-x-auto w-full max-w-[23rem] sm:max-w-full" // Set max width for mobile and full width for larger screens
            >
                <table className="w-full min-w-[700px] mx-auto text-sm md:text-md lg:text-lg bg-white shadow-md rounded-lg border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-950">
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Sr no</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Name</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Username</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Email</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Address</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Mobile No</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Date</th>
                            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-[#3f4b74]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                View Image
                            </td>
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                19/09/2022 - 11:00 to 13:00
                            </td>
                            <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                19/09/2022 - 11:00 to 13:00
                            </td>
                            <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                            </td>

                        </tr>
                        {/* Additional rows can follow the same structure */}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
};

export default Userdetails;
