import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Link } from 'react-router-dom';

// Register ChartJS modules
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  // Sample data for charts
  const pieData = {
    labels: ['Sales', 'Marketing', 'Development', 'Support'],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ['#03ac26', '#fe3600', '#3498db', '#f39c12'],
        hoverBackgroundColor: ['#029c22', '#f23400', '#2980b9', '#e67e22'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 7000, 8000],
        backgroundColor: '#03ac26',
        borderColor: '#029c22',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Dashboard Header */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
  <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Dashboard</h1>
  <Link 
  to="/dashboard/allServices" 
  className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg border border-transparent hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4 sm:mt-0"
>
  See All Services
</Link>

</div>


    {/* Advertisement Blogs - Responsive Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
  {/* Blog Post 1 */}
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
    <img src="path/to/image1.jpg" alt="Boost Your Sales" className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">How to Boost Your Sales</h3>
    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Tips and strategies to increase your revenue effectively.</p>
    <a href="/blog/boost-sales" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition">Read More</a>
  </div>
  
  {/* Blog Post 2 */}
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
    <img src="path/to/image2.jpg" alt="Understanding User Growth" className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Understanding User Growth</h3>
    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Learn how to track and analyze new user trends.</p>
    <a href="/blog/user-growth" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition">Read More</a>
  </div>

  {/* Blog Post 3 */}
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
    <img src="path/to/image3.jpg" alt="Maximizing Revenue Streams" className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Maximizing Revenue Streams</h3>
    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Explore different methods to enhance your revenue streams.</p>
    <a href="/blog/revenue-streams" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition">Read More</a>
  </div>
</div>

{/* Featured Advertisements - Responsive Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
  {/* Advertisement 1 */}
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col">
    <img src="path/to/ad-image1.jpg" alt="New Product Launch" className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h3 className="text-sm sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">New Product Launch</h3>
    <p className="text-gray-600 mb-4">Discover our latest product that will transform your business operations.</p>
    <a href="/advertisements/product-launch" className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition">Learn More</a>
  </div>

  {/* Advertisement 2 */}
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col">
    <img src="path/to/ad-image2.jpg" alt="Special Discount Offer" className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h3 className="text-sm sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">Special Discount Offer</h3>
    <p className="text-gray-600 mb-4">Get exclusive discounts on our services for a limited time only.</p>
    <a href="/advertisements/discount-offer" className="bg-red-500 text-white px-4 py-2 rounded-lg text-center hover:bg-red-600 transition">Grab the Deal</a>
  </div>
</div>


      {/* Table Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Transaction ID</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Date</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Amount</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-xs sm:text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">TXN12345</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">2023-09-12</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">$300.00</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">
                  <span className="bg-green-200 text-green-600 py-1 px-2 sm:px-3 rounded-full text-xs">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">TXN12346</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">2023-09-13</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">$150.00</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">
                  <span className="bg-yellow-200 text-yellow-600 py-1 px-2 sm:px-3 rounded-full text-xs">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">TXN12347</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">2023-09-14</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">$500.00</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">
                  <span className="bg-red-200 text-red-600 py-1 px-2 sm:px-3 rounded-full text-xs">
                    Failed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
