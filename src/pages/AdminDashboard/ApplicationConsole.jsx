import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";

const Applicationconsole = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [applicationType, setApplicationType] = useState("");
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getAll/Form11",
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        const modifiedData = response.data.map((item) => ({
          id: item._id,
          application_type: item.application_type,
          applicantName: item.fullName,
          status: item.status || "inProgress",
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }));

        setAllData(modifiedData);
        setFilteredData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth.token]);

  const filterData = () => {
    let filtered = allData;

    if (applicationType) {
      filtered = filtered.filter(
        (item) => item.application_type === applicationType
      );
    }

    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchData(value);

    const searchResults = allData.filter((item) =>
      item.applicantName.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(searchResults);
  };

  useEffect(() => {
    filterData();
  }, [applicationType]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleApplicationTypeClick = (applicationType, id) => {
    switch (applicationType) {
      case "Voter Card":
        navigate(`/admin/application_votercard/${id}`);
        break;
      case "Shop Act":
        navigate(`/admin/application_shopact/${id}`);
        break;
      case "Learning DL":
        navigate(`/admin/application_learningdl/${id}`);
        break;
      case "Company GST":
        navigate(`/admin/application_companygst/${id}`);
        break;
      case "Individual GST":
        navigate(`/admin/application_individualgst/${id}`);
        break;
      case "Local Food License":
        navigate(`/admin/application_localfoodlicense/${id}`);
        break;
      case "Company PAN":
        navigate(`/admin/application_companypan/${id}`);
        break;
      default:
        console.log("Unknown application type:", applicationType);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <h2 className="mt-6 mb-6 ml-5 text-2xl text-white bg-blue-900 p-8 rounded-lg shadow-lg transition-transform duration-300">
        Application Console
      </h2>

      <div className="mx-5 mb-4">
        <div className="flex flex-col">
          <label htmlFor="certificateName" className="text-gray-700 mb-2">
            Certificate Name*
          </label>
          <select
            id="certificateName"
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => setApplicationType(e.target.value)}
          >
            <option value="">--Select Certificate Name--</option>
            <option value="Voter Card">Voter Card</option>
            <option value="Shop Act">Shop Act</option>
            <option value="Learning DL">Learning DL</option>
            <option value="Company GST">Company GST</option>
            <option value="Individual GST">Individual GST</option>
            <option value="Local Food License">Local Food License</option>
            <option value="Company PAN">Company PAN</option>
          </select>
        </div>
      </div>
      <div className="mx-5 mb-4">
        <input
          type="text"
          value={searchData}
          onChange={handleSearch}
          placeholder="Search by applicant name"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="overflow-x-auto mx-5 mt-10">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-950">
              <th className="text-white text-left py-2 px-4 whitespace-nowrap">
                New
              </th>
              <th className="text-white text-left py-2 px-4 whitespace-nowrap">
                Application Type
              </th>
              <th className="text-white text-left py-2 px-4 whitespace-nowrap">
                Applicant
              </th>
              <th className="text-white text-left py-2 px-4 whitespace-nowrap">
                Status
              </th>
              <th className="text-white text-left py-2 px-4 whitespace-nowrap">
                Created On
              </th>
              <th className="text-white text-left py-2 px-4 whitespace-nowrap">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-2 px-4 text-center">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td
                    className="py-2 px-4 text-blue-600 cursor-pointer hover:font-bold"
                    onClick={() =>
                      handleApplicationTypeClick(item.application_type, item.id)
                    }
                  >
                    {item.application_type}
                  </td>
                  <td className="py-2 px-4">{item.applicantName}</td>
                  <td className="py-2 px-4">{item.status}</td>
                  <td className="py-2 px-4">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4">
                    {new Date(item.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-2">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className={`mx-1 px-4 py-2 text-white bg-blue-500 rounded-md ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`mx-1 px-4 py-2 text-white bg-blue-500 rounded-md ${
              currentPage === i + 1 ? "bg-blue-700" : ""
            }`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`mx-1 px-4 py-2 text-white bg-blue-500 rounded-md ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Applicationconsole;
