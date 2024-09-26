import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Reviews = () => {
  return (
    <div>
      <Header />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Customer Reviews</h1>
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-500">
                  {/* You can use star icons or any rating component here */}
                  ★★★★☆
                </span>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-500">
                  {/* You can use star icons or any rating component here */}
                  ★★★★★
                </span>
              </div>
            </div>
            
            {/* Add more reviews as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
