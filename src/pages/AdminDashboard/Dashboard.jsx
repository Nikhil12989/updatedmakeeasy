import React from 'react';
import {
    FaBell, FaQuestionCircle, FaVideo, FaTasks, FaDollarSign,
    FaCheckCircle, FaSpinner, FaUsers, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope
} from 'react-icons/fa';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Learning License', count: 24 },
    { name: 'Renewal License', count: 18 },
    { name: 'Permanent License', count: 22 },
    { name: 'GST', count: 30 },
    { name: 'Gazette', count: 14 },
    { name: 'Shop Act', count: 20 },
    { name: 'Domicile', count: 16 },
];

const Dashboard = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <h2 className="mt-6 mb-6 ml-5 text-2xl  text-white bg-blue-900 p-8 rounded-lg shadow-lg transition-transform duration-300">
                Empower Your Decisions with the Admin Dashboard
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                <div className='bg-blue-50 border border-blue-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaBell className='text-blue-600 text-3xl mr-4' />
                    <div className='p-6'>
                        <h3 className='font-semibold text-xl text-blue-600 p-3 rounded-xl'>Forms In-Progress</h3>
                    </div>
                </div>
                <div className='bg-yellow-50 border border-yellow-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaQuestionCircle className='text-yellow-600 text-3xl mr-4' />
                    <div className='p-6'>
                        <h3 className='text-xl font-semibold text-yellow-600'>Forms Submitted</h3>
                    </div>
                </div>
                <div className='bg-green-50 border border-green-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaVideo className='text-green-600 text-3xl mr-4' />
                    <div className='p-6'>
                        <h3 className='text-xl font-semibold text-green-600'>Forms Completed</h3>
                    </div>
                </div>
                <div className='bg-purple-50 border border-purple-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaTasks className='text-purple-600 text-3xl mr-4' />
                    <div className='p-6'>
                        <h3 className='text-xl font-semibold text-purple-600'>Payment History</h3>
                    </div>
                </div>
                <div className='bg-orange-50 border border-orange-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaDollarSign className='text-orange-600 text-3xl mr-4' />
                    <div className='p-6'>
                        <h3 className='text-xl font-semibold text-orange-600'>Application Status</h3>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

export default Dashboard