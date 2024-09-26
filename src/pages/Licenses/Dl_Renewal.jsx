import React, { useState } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

const RenewalLicense = () => {
  const [auth] = useAuth(); // Use authentication context
  const [formData, setFormData] = useState({
    application_type: '',
    formPrice: '',
    fullName: '',
    state: '',
    rto: '',
    permanentLicenseNumber: '',
    vehicleType: '',
    fatherOrHusbandFullName: '',
    gender: '',
    dateOfBirth: '',
    qualification: '',
    bloodGroup: '',
    email: '',
    emergencyContact: '',
    district: '',
    taluka: '',
    rejectedNote: '',
    submitNote: '',
    completedNote: '',
    rejectedAt: '',
    submittedAt: '',
    completedAt: '',
    documents: {
      addressProof: null,
      adharCard: null,
      drivingLicense: null,
      passportPhoto: null,
      signature: null,
      medicalCertificate: null,
    },
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      documents: { ...prevData.documents, [name]: files[0] },
    }));
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
      if (key !== 'documents') {
        form.append(key, formData[key]);
      } else {
        for (const docKey in formData.documents) {
          if (formData.documents[docKey] !== null) {
            form.append(`documents.${docKey}`, formData.documents[docKey]);
          }
        }
      }
    }

    try {
      // Post form data to API
      const response = await axios.post('http://192.168.1.49:5000/api/renewalLicense/createRenewalDL', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${auth.token}`,
        },
      });

      // Notify user of success
      toast.success('Renewal application submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting renewal application.');
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-black text-xl md:text-2xl font-semibold">Renewal Driving License</h1>
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li>
                <Link to={'/'} className="text-black hover:underline hover:text-black text-base">
                  Home
                </Link>
              </li>
              <li className="text-black">/</li>
              <li>
                <Link to={'/driving_Lic'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" />
                </Link>
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
          <h2 className="text-green-600 font-semibold text-2xl">- Renewal Driving License -</h2>
        </div>
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Application Type */}
          <div className="form-group">
            <label htmlFor="application_type" className="block text-gray-600 font-semibold mb-2">Application Type</label>
            <input
              type="text"
              name="application_type"
              id="application_type"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.application_type}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Form Price */}
          <div className="form-group">
            <label htmlFor="formPrice" className="block text-gray-600 font-semibold mb-2">Form Price</label>
            <input
              type="number"
              name="formPrice"
              id="formPrice"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.formPrice}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="block text-gray-600 font-semibold mb-2">Full Name</label>
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

          {/* State */}
          <div className="form-group">
            <label htmlFor="state" className="block text-gray-600 font-semibold mb-2">Select State</label>
            <select
              name="state"
              id="state"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select State</option>
              <option value="State1">State1</option>
              <option value="State2">State2</option>
            </select>
          </div>

          {/* RTO */}
          <div className="form-group">
            <label htmlFor="rto" className="block text-gray-600 font-semibold mb-2">Select RTO</label>
            <select
              name="rto"
              id="rto"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.rto}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select RTO</option>
              <option value="RTO1">RTO1</option>
              <option value="RTO2">RTO2</option>
            </select>
          </div>

          {/* Permanent License Number */}
          <div className="form-group">
            <label htmlFor="permanentLicenseNumber" className="block text-gray-600 font-semibold mb-2">Permanent License Number</label>
            <input
              type="text"
              name="permanentLicenseNumber"
              id="permanentLicenseNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.permanentLicenseNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Vehicle Type */}
          <div className="form-group">
            <label htmlFor="vehicleType" className="block text-gray-600 font-semibold mb-2">Select Vehicle Type</label>
            <select
              name="vehicleType"
              id="vehicleType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="motorcycle">Motor Cycle</option>
              <option value="twowheeler">Two Wheeler</option>
              <option value="fourwheeler">Four Wheeler</option>
              <option value="fourwheelerTR">Four Wheeler TR</option>
              <option value="fourPlusTwo">Four + Two Wheeler</option>
            </select>
          </div>

          {/* Medical Certificate */}
          <div className="form-group">
            <label htmlFor="medicalCertificate" className="block text-gray-600 font-semibold mb-2">Medical Certificate</label>
            <input
              type="file"
              name="medicalCertificate"
              id="medicalCertificate"
              className="w-full border border-gray-300 rounded"
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Button */}
          <div className="form-group mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RenewalLicense;
