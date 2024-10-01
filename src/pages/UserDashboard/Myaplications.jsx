
import React, { useState } from 'react';

const applications = [
    { id: 1, applicationName: 'Application One',createdDate: '2024-09-01',time:'4:00PM', status: 'Completed', updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 2, applicationName: 'Application Two',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 3, applicationName: 'Application Three',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 4, applicationName: 'Application Four',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 5, applicationName: 'Application Five',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 6, applicationName: 'Application Six',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 7, applicationName: 'Application Seven',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 8, applicationName: 'Application Eight',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 9, applicationName: 'Application Nine',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected', updateddate: '2024-09-01',updatedtime:'2:30 PM'},
    { id: 10, applicationName: 'Application Ten',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 11, applicationName: 'Application Eleven',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 12, applicationName: 'Application Twelve',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected', updateddate: '2024-09-01',updatedtime:'2:30 PM'},
    { id: 13, applicationName: 'Application Thirteen',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed', updateddate: '2024-09-01',updatedtime:'2:30 PM'},
    { id: 14, applicationName: 'Application Fourteen',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending', updateddate: '2024-09-01',updatedtime:'2:30 PM'},
    { id: 15, applicationName: 'Application Fifteen', createdDate: '2024-09-01',time:'4:00PM', status: 'Rejected',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 16, applicationName: 'Application Sixteen',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 17, applicationName: 'Application Seventeen',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 18, applicationName: 'Application Eighteen',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 19, applicationName: 'Application Nineteen',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed', updateddate: '2024-09-01',updatedtime:'2:30 PM'},
    { id: 20, applicationName: 'Application Twenty',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 21, applicationName: 'Application Twenty-One',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 22, applicationName: 'Application Twenty-Two',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 23, applicationName: 'Application Twenty-Three',createdDate: '2024-09-01',time:'4:00PM',  status: 'Pending',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
    { id: 24, applicationName: 'Application Twenty-Four',createdDate: '2024-09-01',time:'4:00PM',  status: 'Rejected', updateddate: '2024-09-01',updatedtime:'2:30 PM'},
    { id: 25, applicationName: 'Application Twenty-Five',createdDate: '2024-09-01',time:'4:00PM',  status: 'Completed',updateddate: '2024-09-01',updatedtime:'2:30 PM' },
];

const statusStyles = {
    Pending: 'bg-yellow-200 text-yellow-800 py-1 px-2 text-xs font-semibold rounded',
    Completed: 'bg-green-200 text-green-800 py-1 px-2 text-xs font-semibold rounded',
    Rejected: 'bg-red-200 text-red-800 py-1 px-2 text-xs font-semibold rounded',
};

const MyApplications = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    const totalPages = Math.ceil(applications.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = applications.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Applications</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">ID</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Application Name</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Created Date</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Time</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Status</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Updated Date</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Updated Time</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {currentItems.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">{app.id}</td>
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">{app.applicationName}</td>
                                    <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 border border-gray-300">{app.createdDate}</td>
                                    <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 border border-gray-300">{app.time}</td>
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">
                                        <span className={statusStyles[app.status]}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 border border-gray-300">{app.updateddate}</td>
                                    <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 border border-gray-300">{app.updatedtime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="mt-6 flex justify-between items-center space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-gray-700 font-medium">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyApplications;
