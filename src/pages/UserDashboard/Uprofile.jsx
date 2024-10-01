import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth'; // Adjust the import path based on your project structure
import axios from 'axios';
import logo from "../../assets/logo.png";
const Uprofile = () => {
  const [auth, setAuth] = useAuth();
  const { user } = auth; // Destructure the user from the auth context
  const [profileData, setProfileData] = React.useState(null); // State to hold profile data

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://192.168.1.50:5000/api/auth/profile', {
          headers: {
            Authorization:  `Bearer ${auth.token}` // Use token from context
          },
        });
        setProfileData(response.data.user);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    if (auth.token) {
      fetchUserProfile();
    }
  }, [auth.token]); // Dependency on token

  return (
    <div className="">
      <h2 className="mt-6 mb-6 mx-5 text-2xl text-white text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300">
        User Profile Details
      </h2>
      <div className='flex flex-col items-center justify-center'>

        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-200 to-blue-500 p-6 text-white flex justify-center items-center">
            <div className="w-auto h-24 overflow-hidden flex justify-center items-center">
              <img
                src={logo}
                alt="Make Easy Documents Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* User Info */}
          <div className="flex p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">


            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h1 className="text-2xl font-bold">{profileData ? profileData.firstname + ' ' + profileData.lastname : 'Loading...'}</h1>
              <p className="text-sm text-gray-200 mt-1">{profileData ? profileData.email : 'Loading...'}</p>
              <p className="text-xl">User Of Make Easy Documents </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-700">Contact Information</h2>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li><strong>Phone:</strong> {profileData ? profileData.phone : 'Loading...'}</li>
                <li><strong>Address:</strong> {profileData ? profileData.address : 'Loading...'}</li>
                <li><strong>Website:</strong> {profileData ? profileData.website : 'Loading...'}</li>
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
    </div>
  );
};

export default Uprofile;