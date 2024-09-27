import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const ApplicationPermanent = () => {
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [files, setFiles] = useState({}); // State for files
  const statusEnum = ['In-Progress', 'Submitted', 'Rejected', 'Completed']; // Enum values for status
  
  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/permanentLicense/getPermanentDL/${id}`);
        console.log('API Response:', response.data); // Log full response data
        setLicenseData(response.data);
      } catch (err) {
        console.error('Error fetching license data:', err);
        setError('Error fetching license data');
      } finally {
        setLoading(false);
      }
    };

    fetchLicenseData();
  }, [id]);

  const handleFileChange = (event) => {
    const { name, files: selectedFiles } = event.target;
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: selectedFiles[0], // Store the first file
      }));
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    // Append all license data
    formData.append('rejectedNote', licenseData.rejectedNote);
    formData.append('Status', licenseData.Status); // Add Status to formData

    // Append files
    for (const [key, value] of Object.entries(files)) {
      formData.append(`documents.${key}`, value); // Append files with correct keys
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/permanentLicense/updatePermanentLicense/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error updating license:", error);
      toast.error("Failed to update license.");
    }
  };

  const renderImage = (imageData) => {
    if (imageData && imageData.contentType && imageData.data && imageData.data.data) {
      const byteArray = new Uint8Array(imageData.data.data); // Convert to Uint8Array
      const base64String = btoa(String.fromCharCode(...byteArray)); // Convert to Base64
      return `data:${imageData.contentType};base64,${base64String}`;
    }
    return null;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!licenseData) return <div>No data found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Permanent License Application</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* License Data Display */}
        <div>
          <p><strong>Full Name:</strong> {licenseData.fullName}</p>
          <p><strong>RTO:</strong> {licenseData.rto}</p>
          <p><strong>Learning License Number:</strong> {licenseData.learningLicenseNumber}</p>
          <p><strong>Vehicle Type:</strong> {licenseData.vehicleType}</p>
          <p><strong>Father/Husband Name:</strong> {licenseData.fatherOrHusbandFullName}</p>
          <p><strong>Gender:</strong> {licenseData.gender}</p>
          <p><strong>Date of Birth:</strong> {new Date(licenseData.dateOfBirth).toLocaleDateString()}</p>
        </div>
        <div>
          <p><strong>Qualification:</strong> {licenseData.qualification}</p>
          <p><strong>Blood Group:</strong> {licenseData.bloodGroup}</p>
          <p><strong>Email:</strong> {licenseData.email}</p>
          <p><strong>Emergency Contact:</strong> {licenseData.emergencyContact}</p>
          <p><strong>State:</strong> {licenseData.state}</p>
          <p><strong>District:</strong> {licenseData.district}</p>
          <p><strong>Taluka:</strong> {licenseData.taluka}</p>
        </div>
      </div>

      {/* Application Status */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Application Status</h2>
        <p><strong>Submitted At:</strong> {licenseData.submitedAt || 'Not submitted'}</p>
        <p><strong>Completed At:</strong> {licenseData.CompletedAt || 'Not completed'}</p>
        <p><strong>Rejected At:</strong> {licenseData.rejectedAt || 'Not rejected'}</p>
        {licenseData.rejectedNote && <p><strong>Rejection Note:</strong> {licenseData.rejectedNote}</p>}
      </div>

      {/* Documents Display */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Documents</h2>
        <div className="grid grid-cols-2 gap-4">
          {licenseData.documents ? (
            Object.entries(licenseData.documents).map(([key, value]) => (
              <div key={key} className="border p-2">
                <h3 className="font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                {value && value.data ? (
                  <img
                    src={renderImage(value)} // Pass the whole value object
                    alt={key}
                    className="max-w-full h-auto"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'fallback_image_url'; }} // Ensure fallback URL is specified
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            ))
          ) : (
            <p>No documents available</p>
          )}
        </div>
      </div>

      {/* Form to update the license */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Update License Application</h1>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Status:</label>
              <select
                name="Status"
                value={licenseData.Status}
                onChange={(e) => setLicenseData({ ...licenseData, Status: e.target.value })}
                required
              >
                {statusEnum.map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Conditionally render Rejection Note */}
          {licenseData.Status === 'Rejected' && (
            <div className="mt-4">
              <label>Rejection Note:</label>
              <input
                type="text"
                name="rejectedNote"
                value={licenseData.rejectedNote || ''}
                onChange={(e) => setLicenseData({ ...licenseData, rejectedNote: e.target.value })}
                required
              />
            </div>
          )}

          {/* File inputs for documents */}
         

          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Update License
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ApplicationPermanent;
