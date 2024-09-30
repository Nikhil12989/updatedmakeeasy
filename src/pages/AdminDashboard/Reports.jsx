import React from 'react'

const Reports = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ">
                Payment History
            </h2>
            {/* Certificate Name and Application Status Dropdowns */}
            <div className="mx-5 mb-4 flex flex-col md:flex-row gap-4">
                <div className="flex flex-col">
                    <label htmlFor="certificateName" className="text-gray-700 mb-2">Certificate Name*</label>
                    <select id="certificateName" className="border border-gray-300 rounded-md p-2">
                        <option value="">--Select Certificate Name--</option>
                        <option value="voterCard">Voter Card</option>
                        <option value="shopAct">Shop Act</option>
                        <option value="learningDL">Learning DL</option>
                        <option value="companyGST">Company GST</option>
                        <option value="individualGST">Individual GST</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="applicationStatus" className="text-gray-700 mb-2">Application Status*</label>
                    <select id="applicationStatus" className="border border-gray-300 rounded-md p-2">
                        <option value="">--Select Application Status--</option>
                        <option value="inProgress">In-Progress</option>
                        <option value="completed">Completed</option>
                        <option value="rejected">Rejected</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>

            {/* Table with Scrollable View */}
            <div className="overflow-x-auto mx-5 mt-10">
                <table className="min-w-full bg-white  border-collapse">
                    <thead>
                        <tr className='bg-gradient-to-r from-blue-500 to-blue-950'>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">New</th>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">Application-Type</th>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">Created By</th>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">Applicant</th>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">Status</th>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">Created On</th>
                            <th className=" text-white text-left py-2 px-4 whitespace-nowrap">Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Repeat this tr block for each row */}
                        <tr className="border-b hover:bg-gray-100 transition duration-300">
                            <td className="py-2 px-4 text-center">1</td>
                            <td className="py-2 px-4 text-blue-600 cursor-pointer hover:font-bold">voter Card..</td>
                            <td className="py-2 px-4">Keshav Kulthe</td>
                            <td className="py-2 px-4">Tushar Ramesh Sonawane</td>
                            <td className="py-2 px-4">IN-PROGRESS</td>
                            <td className="py-2 px-4">9/1/2024, 2:38:46 PM</td>
                            <td className="py-2 px-4">9/1/2024</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports
