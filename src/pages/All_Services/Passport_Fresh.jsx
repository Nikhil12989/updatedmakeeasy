import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';

const Passport_Fresh = () => {
  const [formData, setFormData] = useState({
    typeOfApplication: "",
    fullName: "",
    mobileNumber: "",
    aadharNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    maritalStatus: "",
    educationQualification: "",
    fatherFullName: "",
    motherFullName: "",
    spouseFullName: "",
    presentAddress: "",
    permanentAddress: "",
    policeStation: "",
    emergencyContactFullName: "",
    emergencyContactNumber: "",
    emergencyContactAddress: "",
    aadharCard: null,
    panCard: null,
  });

  
  const [auth] = useAuth();


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
      toast.error('Please login to submit the form.');
      return;
    }

    // Create FormData object
    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        form.append(
          key.startsWith('aadharCard') ? 'documents.aadharCard' :
            key.startsWith('photo') ? 'documents.photo' :
              key.startsWith('signature') ? 'documents.signature' :
                key.startsWith('photo') ? 'documents.photo' :
                  key.startsWith('schoolLC') ? 'documents.schoolLC' :
                    key.startsWith('religionChangeAffidavit') ? 'documents.religionChangeAffidavit' :
                      key,
          formData[key]
        );
      }
    }

    try {
      // Post form data to API
      const response = await axios.post(
        'http://192.168.1.50:5000/api/freshPassport/createfresh-passport',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${auth.token}`
          }
        }
      );

      // Notify user of success
      toast.success('Company Registration submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting Company Registration.');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };



  return (
    <div>
      <Header />
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-black text-xl md:text-2xl font-semibold">Fresh Passport </h1>
          <style jsx>{`
            @keyframes intenseBlink {
              0%, 100% { opacity: 1; color: #f20000; }
              20% { opacity: 1; color: #000000; }
            }
          `}</style>
          <h1
            className="text-lg md:text-xl font-bold underline underline-offset-8 mb-2 lg:mb-0 lg:ml-4 animate-[intenseBlink_1s_ease-in-out_infinite]"
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li><Link to={'/'} className="text-black hover:underline hover:text-black text-base">Home</Link></li>
              <li className="text-black">/</li>
              <li>
                <Link to={'/passport'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" />
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Fresh Passport -</h2>
      </div>

      <form className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10" onSubmit={handleSubmit}>

        <div className="flex flex-col sm:flex-row sm:justify-between mt-10 pb-6">
          
          <h2 className="text-green-600 font-semibold text-xl text-center sm:text-left">
            Service Charge : <span className='text-red-600' id='formprice'>₹ 200 </span>
          </h2>

        </div>

        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label htmlFor="typeOfApplication" className="block text-gray-600 font-semibold mb-2">Type of Application</label>
            <select
              name="typeOfApplication"
              id="typeOfApplication"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.typeOfApplication}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Type of Application</option>
              <option value="normal">Normal</option>
              <option value="tatkal">Tatkal</option>
            </select>
          </div>

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

          <div className="form-group">
            <label htmlFor="mobileNumber" className="block text-gray-600 font-semibold mb-2">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="aadharNumber" className="block text-gray-600 font-semibold mb-2">Aadhar Number</label>
            <input
              type="text"
              name="aadharNumber"
              id="aadharNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="placeOfBirth" className="block text-gray-600 font-semibold mb-2">Place Of Birth</label>
            <input
              type="text"
              name="placeOfBirth"
              id="placeOfBirth"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.placeOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="maritalStatus" className="block text-gray-600 font-semibold mb-2">Marital Status</label>
            <select
              name="maritalStatus"
              id="maritalStatus"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widow">Widow</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="educationQualification" className="block text-gray-600 font-semibold mb-2">Education Qualification</label>
            <input
              type="text"
              name="educationQualification"
              id="educationQualification"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.educationQualification}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Father, Mother, and Spouse Full Name */}
          <div className="form-group">
            <label htmlFor="fatherFullName" className="block text-gray-600 font-semibold mb-2">Father's Full Name</label>
            <input
              type="text"
              name="fatherFullName"
              id="fatherFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fatherFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motherFullName" className="block text-gray-600 font-semibold mb-2">Mother's Full Name</label>
            <input
              type="text"
              name="motherFullName"
              id="motherFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.motherFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="spouseFullName" className="block text-gray-600 font-semibold mb-2">Spouse's Full Name</label>
            <input
              type="text"
              name="spouseFullName"
              id="spouseFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.spouseFullName}
              onChange={handleInputChange}
            />
          </div>

          {/* Present and Permanent Address */}
          <div className="form-group">
            <label htmlFor="presentAddress" className="block text-gray-600 font-semibold mb-2">Present Address</label>
            <input
              type="text"
              name="presentAddress"
              id="presentAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.presentAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="permanentAddress" className="block text-gray-600 font-semibold mb-2">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              id="permanentAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Police Station */}
          <div className="form-group">
            <label htmlFor="policeStation" className="block text-gray-600 font-semibold mb-2">Police Station</label>
            <input
              type="text"
              name="policeStation"
              id="policeStation"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.policeStation}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Emergency Contact Information */}
          <div className="form-group">
            <label htmlFor="emergencyContactFullName" className="block text-gray-600 font-semibold mb-2">Emergency Contact Full Name</label>
            <input
              type="text"
              name="emergencyContactFullName"
              id="emergencyContactFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.emergencyContactFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emergencyContactNumber" className="block text-gray-600 font-semibold mb-2">Emergency Contact Number</label>
            <input
              type="text"
              name="emergencyContactNumber"
              id="emergencyContactNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.emergencyContactNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emergencyContactAddress" className="block text-gray-600 font-semibold mb-2">Emergency Contact Address</label>
            <input
              type="text"
              name="emergencyContactAddress"
              id="emergencyContactAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.emergencyContactAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <h2 className="text-green-600 font-semibold text-2xl text-center mb-6">- Upload Documents -</h2>
        {/* File Upload Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="form-group">
            <label htmlFor="aadharCard" className="block text-gray-600 font-semibold mb-2">Upload Aadhar Card</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="panCard" className="block text-gray-600 font-semibold mb-2">Upload Pan Card</label>
            <input
              type="file"
              name="panCard"
              id="panCard"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
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

export default Passport_Fresh
