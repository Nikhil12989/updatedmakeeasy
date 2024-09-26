import React from 'react';

const Uprofile = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:pt-4 bg-gray-100 min-h-[90vh]">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 p-6 text-white flex flex-col sm:flex-row items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-sm">Software Engineer</p>
            <p className="text-sm text-gray-200 mt-1">john.doe@example.com</p>
          </div>
        </div>

        {/* User Info */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-gray-700">About Me</h2>
            <p className="mt-2 text-sm text-gray-600">
              I'm a passionate software engineer with a love for building scalable web applications. I enjoy learning new technologies and improving my skills every day.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-700">Contact Information</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Address:</strong> 1234 Main St, City, Country</li>
              <li><strong>Website:</strong> www.johndoe.com</li>
            </ul>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="bg-gray-50 p-6 border-t flex justify-end space-x-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600">
            Edit Profile
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-400">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uprofile;
