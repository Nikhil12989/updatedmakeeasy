import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const Application_permanent = () => {
  const { id } = useParams(); // Extract id from URL parameters
  const [licenseData, setLicenseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Correctly render image
// Correctly render image
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
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Application Status</h2>
        <p><strong>Submitted At:</strong> {licenseData.submitedAt || 'Not submitted'}</p>
        <p><strong>Completed At:</strong> {licenseData.CompletedAt || 'Not completed'}</p>
        <p><strong>Rejected At:</strong> {licenseData.rejectedAt || 'Not rejected'}</p>
        {licenseData.rejectedNote && <p><strong>Rejection Note:</strong> {licenseData.rejectedNote}</p>}
      </div>
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
    </div>
  );
};

export default Application_permanent;
