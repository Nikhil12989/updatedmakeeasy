import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'; // Import the simpler icon
import { useAuth } from '../../context/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import axios from 'axios';

const Food_manufacturing = () => {
  const [auth] = useAuth(); // Use authentication context

  const [formData, setFormData] = useState({
    licenseRequireYears: "",
    fullName: "",
    businessName: "",
    natureOfBusiness: "",
    ownerQualification: "",
    mobileNumber: "",
    email: "",
    businessAddress: "",
    aadharCard: null,
    panCard: null,
    photo: null,
    electricBill: null,
    rentAgreement: null,
    signature: null,
    Equipment: null,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  // Check if user is authenticated
  if (!auth.token) {
    toast.error('Please login to fill out the form.');
    return;
  }
    // Create FormData object
    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        // Use 'documents.' prefix for file inputs to match backend
        form.append(key.startsWith('aadharCard') ? 'documents.aadharCard' :
          key.startsWith('panCard') ? 'documents.panCard' :
            key.startsWith('photo') ? 'documents.photo' :
              key.startsWith('electricBill') ? 'documents.electricBill' :
              key.startsWith('rentAgreement') ? 'documents.rentAgreement' :
              key.startsWith('uddyamAadhar') ? 'documents.uddyamAadhar' :
              key.startsWith('shopActLicense') ? 'documents.shopActLicense' :
                key, formData[key]);
      }
    }

    try {
      // Post form data to API
      const response = await axios.post('http://localhost:5000/api/foodManufacturingLicense/createFoodManufacturingLicense', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${auth.token}` // Use backticks for string interpolation
        }
      });

      // Notify user of success
      toast.success('Application submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting application.');
    }
  };


  return (
    <div>
      <Header />
      {/* Page Title */}
      
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Food Manufacturing License</h1>

          {/* Refund message */}
          <style jsx>{`
      @keyframes intenseBlink {
        0%, 100% { opacity: 1; color: #f20000; }
        20% { opacity: 1; color: #000000; }
      }
    `}</style>
          <h1
            className="
        text-lg md:text-xl font-bold underline underline-offset-8 
        mb-2 lg:mb-0 lg:ml-4 
        animate-[intenseBlink_1s_ease-in-out_infinite]
      "
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>

          {/* Breadcrumbs */}
          <nav className="breadcrumbs mt-2 lg:mt-0">
            <ol className="flex space-x-2 lg:space-x-4 text-sm items-center">
              <li className="flex items-center">
                <AiFillHome className="mr-1 text-base hover:underline" />
                <Link to={'/'} className="text-black hover:underline text-base">Home</Link>
              </li>
              <li className="text-black">/</li>
              <li className="flex items-center">
                <AiOutlineAppstore className="mr-1 text-base" />
                <Link to={'/all_service'} className="text-black hover:underline text-base">All Services</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Food Manufacturing License -
          </h2>
        </div> <br /> <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* licenseRequireYears */}
          <div className="form-group">
            <label htmlFor="licenseRequireYears" className="block text-gray-600 font-semibold mb-2">License Required Years</label>
            <select
              name="licenseRequireYears"
              id="licenseRequireYears"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.licenseRequireYears}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select License Required Years</option>
              {/* Add options as per your requirement */}
              <option value="year1">Food License (1 year)</option>
              <option value="year2">Food License (2 year)</option>
              <option value="year3">Food License (3 year)</option>
              <option value="year5">Food License (5 year)</option>
            </select>
          </div>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="block text-gray-600 font-semibold mb-2"> Owner Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Business Name */}
          <div className="form-group">
            <label htmlFor="businessName" className="block text-gray-600 font-semibold mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Nature of Business */}
          <div className="form-group">
            <label htmlFor="natureOfBusiness" className="block text-gray-600 font-semibold mb-2">Nature of Business</label>
            <input
              type="text"
              name="natureOfBusiness"
              id="natureOfBusiness"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.natureOfBusiness}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Owner Qualification */}
          <div className="form-group">
            <label htmlFor="ownerQualification" className="block text-gray-600 font-semibold mb-2">Owner Qualification</label>
            <input
              type="text"
              name="ownerQualification"
              id="ownerQualification"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.ownerQualification}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="contactNumber" className="block text-gray-600 font-semibold mb-2">Contact Number</label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Id */}
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email Id</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Business Address */}
          <div className="form-group">
            <label htmlFor="businessAddress" className="block text-gray-600 font-semibold mb-2">Business Address</label>
            <input
              type="text"
              name="businessAddress"
              id="businessAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.businessAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Upload Required Documents -
          </h2>
        </div>

        {/* File Uploads */}
        <div className="mt-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">PAN Card</label>
              <input
                type="file"
                name="panCard"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Electric Bill</label>
              <input
                type="file"
                name="electricBill"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Rent Agreement</label>
              <input
                type="file"
                name="rentAgreement"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Signature</label>
              <input
                type="file"
                name="signature"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Equipment Blue Print</label>
              <input
                type="file"
                name="blueprint"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    <ToastContainer/>
      <Footer />
    </div>
  )
}

export default Food_manufacturing
