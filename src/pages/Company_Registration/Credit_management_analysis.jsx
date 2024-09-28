import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Credit_management_analysis = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Credit Management Analysis

          </h1>

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

      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">
          Faster Credit Management Analysis by Expert CA/CS
          </h2>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
<h1 className='text-center font-semibold text-xl'>Fundamentals of Credit Management Analysis Report</h1>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-10">
              <br />
              <p> A Credit Management Analysis Report is of great importance to firms that offer credit to customers. It involves a complete assessment of credit management practices to assist the businesses in risk identification, cash flow improvement and profitability enhancement. By following the suggestions made in such reports, enterprises are able to fine-tune their credit policies, resulting in better yields. </p>
              <br />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Credit_management_analysis
