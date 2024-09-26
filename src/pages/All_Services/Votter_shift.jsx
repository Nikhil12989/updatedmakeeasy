import React ,{useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';

const Votter_shift = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    emailId: "",
    placeOfBirth: "",
    birthState: "",
    birthDistrict: "",
    relation: "",
    relationName: "",
    fullAddress: "",
    tehsil: "",
    relationPincode: "",
    livingAddressSince: "",
    oldVoterId: "",
    previousConstituencyState: "",
    previousConstituency: "",
    aadharCard: null,
    panCard: null,
    passport: null,
    photo: null,
    signature: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
    <Header />
    <div className="page-title py-6 bg-slate-300" data-aos="fade">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <h1 className="text-black text-xl md:text-2xl font-semibold">
        Shift Voter ID </h1>
        <h1 className="text-lg md:text-xl font-bold underline underline-offset-8 mb-2 lg:mb-0 lg:ml-4 animate-pulse">
        100% Fees Refundable, if Service is not Completed!
        </h1>
        <nav className="breadcrumbs">
          <ol className="flex space-x-4 text-sm">
            <li><Link to={'/'} className="text-black hover:underline hover:text-black text-base">Home</Link></li>
            <li className="text-black">/</li>
            <li>
              <Link to={'/votter_id'} className="flex items-center text-black hover:underline hover:text-black text-base">
                Go Back
                <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" />
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <form className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10" onSubmit={handleSubmit}>
      
      {/* Applicant Details Section */}
      <div className="mt-10 text-center pb-6">
        <h2 className="text-green-600 font-semibold text-2xl">- Shift Voter ID -</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
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
          <label htmlFor="emailId" className="block text-gray-600 font-semibold mb-2">Email Id</label>
          <input
            type="email"
            name="emailId"
            id="emailId"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.emailId}
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
          <label htmlFor="birthState" className="block text-gray-600 font-semibold mb-2">Birth State</label>
          <input
            type="text"
            name="birthState"
            id="birthState"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.birthState}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthDistrict" className="block text-gray-600 font-semibold mb-2">Birth District</label>
          <input
            type="text"
            name="birthDistrict"
            id="birthDistrict"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.birthDistrict}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="relation" className="block text-gray-600 font-semibold mb-2">Relation</label>
          <select
            name="relation"
            id="relation"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.relation}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Relation</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="relationName" className="block text-gray-600 font-semibold mb-2">Relation Name</label>
          <input
            type="text"
            name="relationName"
            id="relationName"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.relationName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fullAddress" className="block text-gray-600 font-semibold mb-2">Full Address</label>
          <input
            type="text"
            name="fullAddress"
            id="fullAddress"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.fullAddress}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="relationPincode" className="block text-gray-600 font-semibold mb-2">Pincode</label>
          <input
            type="text"
            name="relationPincode"
            id="relationPincode"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.relationPincode}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="livingAddressSince" className="block text-gray-600 font-semibold mb-2">Living At Current Address Since</label>
          <input
            type="text"
            name="livingAddressSince"
            id="livingAddressSince"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.livingAddressSince}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="oldVoterId" className="block text-gray-600 font-semibold mb-2">Old Voter ID Number</label>
          <input
            type="text"
            name="oldVoterId"
            id="oldVoterId"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.oldVoterId}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="previousConstituencyState" className="block text-gray-600 font-semibold mb-2">Previous Constituency State</label>
          <input
            type="text"
            name="previousConstituencyState"
            id="previousConstituencyState"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.previousConstituencyState}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="previousConstituency" className="block text-gray-600 font-semibold mb-2">Previous Constituency</label>
          <input
            type="text"
            name="previousConstituency"
            id="previousConstituency"
            placeholder=" - - - "
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            value={formData.previousConstituency}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* File Upload Section */}
      <div className="mt-10">
        <h2 className="text-green-600 font-semibold text-2xl text-center mb-6">Upload Documents</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label htmlFor="aadharCard" className="block text-gray-600 font-semibold mb-2">Aadhar Card</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="panCard" className="block text-gray-600 font-semibold mb-2">PAN Card</label>
            <input
              type="file"
              name="panCard"
              id="panCard"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="passport" className="block text-gray-600 font-semibold mb-2">Passport</label>
            <input
              type="file"
              name="passport"
              id="passport"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo" className="block text-gray-600 font-semibold mb-2">Photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signature" className="block text-gray-600 font-semibold mb-2">Signature</label>
            <input
              type="file"
              name="signature"
              id="signature"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-2 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
        >
          Submit
        </button>
      </div>
    </form>
    
    <Footer />
  </div>
  )
}

export default Votter_shift
