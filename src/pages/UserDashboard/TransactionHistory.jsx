import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Sample data
const transactions = [
    { id: 1, date: '2024-09-01', time: '11:25 AM', transactionID:'1425369874526', amount: '$100.00' },
    { id: 2, date: '2024-09-05', time: '11:25 AM', transactionID:'1425369874526', amount: '$200.00' },
    { id: 3, date: '2024-09-10', time: '11:25 AM', transactionID:'1425369874526', amount: '$300.00' },
    { id: 4, date: '2024-09-15', time: '11:25 AM', transactionID:'1425369874526', amount: '$400.00' },
    { id: 5, date: '2024-09-20', time: '11:25 AM', transactionID:'1425369874526', amount: '$500.00' },
    { id: 6, date: '2024-09-25', time: '11:25 AM', transactionID:'1425369874526', amount: '$600.00' },
    { id: 7, date: '2024-09-30', time: '11:25 AM', transactionID:'1425369874526', amount: '$700.00' },
    { id: 8, date: '2024-10-01', time: '11:25 AM', transactionID:'1425369874526', amount: '$800.00' },
    { id: 9, date: '2024-10-05', time: '11:25 AM', transactionID:'1425369874526', amount: '$900.00' },
    { id: 10, date: '2024-10-10', time: '11:25 AM', transactionID:'1425369874526', amount: '$1000.00' },
    { id: 11, date: '2024-10-15', time: '11:25 AM', transactionID:'1425369874526', amount: '$1100.00' },
    { id: 12, date: '2024-10-20', time: '11:25 AM', transactionID:'1425369874526', amount: '$1200.00' },
    { id: 13, date: '2024-10-25', time: '11:25 AM', transactionID:'1425369874526', amount: '$1300.00' },
    { id: 14, date: '2024-10-30', time: '11:25 AM', transactionID:'1425369874526', amount: '$1400.00' },
    { id: 15, date: '2024-11-01', time: '11:25 AM', transactionID:'1425369874526', amount: '$1500.00' },
    // Add more sample data as needed
];

const rowsPerPage = 10;

const TransactionHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(transactions.length / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentTransactions = transactions.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-md p-4">
                <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50 border-b border-gray-300">
                            <tr>
                                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">ID</th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">Date</th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">Time</th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">Transaction ID</th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentTransactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="px-2 py-3 text-sm text-gray-900 border-r border-gray-300">{transaction.id}</td>
                                    <td className="px-2 py-3 text-sm text-gray-700 border-r border-gray-300">{transaction.date}</td>
                                    <td className="px-2 py-3 text-sm text-gray-700 border-r border-gray-300">{transaction.time}</td>
                                    <td className="px-2 py-3 text-sm text-gray-700 border-r border-gray-300">{transaction.transactionID}</td>
                                    <td className="px-2 py-3 text-sm text-gray-700">{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Controls */}
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 mb-2 sm:mb-0"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span className="ml-2">Previous</span>
                    </button>
                    <span className="text-gray-700 mb-2 sm:mb-0">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    >
                        <span className="mr-2">Next</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
