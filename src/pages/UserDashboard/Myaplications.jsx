import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const statusStyles = {
    "In-Progress": 'bg-yellow-200 text-yellow-800 py-1 px-2 text-xs font-semibold rounded',
    "Completed": 'bg-green-200 text-green-800 py-1 px-2 text-xs font-semibold rounded',
    "Rejected": 'bg-red-200 text-red-800 py-1 px-2 text-xs font-semibold rounded',
};

const MyApplications = () => {
    const [applications, setApplications] = useState([]); // State to hold all applications data
    const [filteredApplications, setFilteredApplications] = useState([]); // State for filtered applications
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    const [auth] = useAuth(); // Use the Auth context to get user data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.50:5000/api/getAll/Form11');
                
                // Log the response to check if the data is correct
                console.log('API Response:', response.data);
                
                // Assuming API returns an array of applications
                if (Array.isArray(response.data)) {
                    setApplications(response.data);
                    
                    // Check if user is available in auth context
                    if (auth.user && auth.user._id) {
                        // Filter the applications based on user ID
                        const filtered = response.data.filter(item => item.user === auth.user._id);
                        setFilteredApplications(filtered);
                    } else {
                        setError('User information is not available');
                    }
                } else {
                    setError('Unexpected data format');
                }
                setLoading(false); // Set loading to false when data is fetched
            } catch (err) {
                console.error('API Error:', err);
                setError('Failed to fetch applications');
                setLoading(false);
            }
        };

        fetchData();
    }, [auth]); // Include auth in the dependency array

    const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredApplications.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div>{error}</div>; // Show error message

    return (
        <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Applications</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Application Name</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">First Name</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Last Name</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Email</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Created Date</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Status</th>
                                <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase border border-gray-300">Updated Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {currentItems.map((app) => (
                                <tr key={app._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">{app.application_type}</td> {/* Display application name */}
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">{auth.user.firstname}</td>
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">{auth.user.lastname}</td>
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">{auth.user.email}</td>
                                    <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 border border-gray-300">{new Date(app.createdAt).toLocaleDateString()}</td>
                                    <td className="px-4 py-3 text-sm text-gray-800 border border-gray-300">
                                        <span className={statusStyles[app.Status]}>
                                            {app.Status}
                                        </span>
                                    </td>
                                    <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 border border-gray-300">{new Date(app.updatedAt).toLocaleDateString()}</td>
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
