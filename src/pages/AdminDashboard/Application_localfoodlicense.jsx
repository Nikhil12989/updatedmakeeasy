import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Application_localfoodlicense = () => {
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [files, setFiles] = useState({});
  const [showDocument, setShowDocument] = useState(null);
  const statusEnum = ['In-Progress', 'Submitted', 'Rejected', 'Completed'];

 
  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/permanentLicense/getPermanentDL/${id}`);
        setLicenseData(response.data);
      } catch (err) {
        setError('Error fetching license data');
      } finally {
        setLoading(false);
      }
    };

    fetchLicenseData();
  }, [id]);
 

  
  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('rejectedNote', licenseData.rejectedNote);
    formData.append('Status', licenseData.Status);

    for (const [key, value] of Object.entries(files)) {
      formData.append(`documents.${key}`, value);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/permanentLicense/updatePermanentLicense/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Failed to update license.');
    }
  };


  const renderImage = (imageData) => {
    if (imageData && imageData.contentType && imageData.data && imageData.data.data) {
      const byteArray = new Uint8Array(imageData.data.data);
      const base64String = btoa(String.fromCharCode(...byteArray));
      return `data:${imageData.contentType};base64,${base64String}`;
    }
    return null;
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!licenseData) return <div>No data found</div>;



  return (
    <div>Application_localfoodlicense</div>
  )
}

export default Application_localfoodlicense