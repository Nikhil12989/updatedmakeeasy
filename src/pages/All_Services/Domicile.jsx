import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const Gazzette_name_change = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    casteType: "",
    email: "",
    address: "",
    gender: "",
    dateOfBirth: "",
    oldName: "",
    newName: "",
    reasonForChange: "",
    aadharCard: null,
    photo: null,
    signature: null,
    schoolLC: null,
    nameChangeAffidavit: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    
    // Append text fields
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'string') {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Append file fields
    ['aadharCard', 'photo', 'signature', 'schoolLC', 'nameChangeAffidavit'].forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('http://192.168.1.50:5000/api/nameChangeGazette/createGazetteNameChange', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully:', response.data);
      // Redirect or show success message
      navigate('/success'); // Adjust this route as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        {/* ... (keep the existing page title code) ... */}
      </div>
      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Domicile Certificate -
          </h2>
        </div> <br /> <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Mobile Number */}
          <div className="form-group">
            <label htmlFor="mobileNumber" className="block text-gray-600 font-semibold mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Select Type of Caste */}
          <div className="form-group">
            <label htmlFor="casteType" className="block text-gray-600 font-semibold mb-2">Select Type Of Caste</label>
            <select
              name="casteType"
              id="casteType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.casteType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Type Of Caste</option>
              <option value="Open">Open / OBC</option>
              <option value="SC">SC</option>
              <option value="SBC">SBC</option>
              <option value="ST">ST</option>
              <option value="VJ">VJ</option>
              <option value="NT">NT</option>
            </select>
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
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address" className="block text-gray-600 font-semibold mb-2">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="block text-gray-600 font-semibold mb-2">Gender</label>
            <select
              name="gender"
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dateOfBirth" className="block text-gray-600 font-semibold mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Old Name */}
          <div className="form-group">
            <label htmlFor="oldName" className="block text-gray-600 font-semibold mb-2">Old Name</label>
            <input
              type="text"
              name="oldName"
              id="oldName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.oldName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* New Name */}
          <div className="form-group">
            <label htmlFor="newName" className="block text-gray-600 font-semibold mb-2">New Name</label>
            <input
              type="text"
              name="newName"
              id="newName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.newName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Reason for Change */}
          <div className="form-group md:col-span-2">
            <label htmlFor="reasonForChange" className="block text-gray-600 font-semibold mb-2">Reason For Change</label>
            <textarea
              name="reasonForChange"
              id="reasonForChange"
              rows="4"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.reasonForChange}
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
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Passport Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Signature</label>
              <input
                type="file"
                name="signature"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">School LC</label>
              <input
                type="file"
                name="schoolLC"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Name Change Affidavit</label>
              <input
                type="file"
                name="nameChangeAffidavit"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
                required
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

      <Footer />
    </div>
  );
};

export default Gazzette_name_change;