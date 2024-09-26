import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const LLP_winding_up = () => {
  return (
    <div>
    <Header />
    {/* Page Title */}
    <div className="page-title py-6 bg-slate-300" data-aos="fade">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Title */}
        <h1 className=" text-black text-xl md:text-2xl font-semibold">LLP Winding up

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
        Apply for Complete LLP Winding Up & Get Approval from the Govt. of India and Registrar of Companies (ROC) 

        </h2>
        <h3 className='pt-4 text-base font-semibold'>Get 360° Online Assistance from India’s Recommended CA Panel in the Complete & Quick LLP Closure and Winding Up Process
        </h3>
      </div>
      <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Form */}

        <Common_form />

        {/* Right side - Content */}
        <div>
          <p className="mb-4">
          
           The Govt. of India has enacted the Limited Liability Partnership (LLP) Settlement Scheme, 2020, that overviews the LLP related issues in the country. Get the country’s recommended CA Panel’s assistance from <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span>™ 
           to complete the LLP Closure / Winding Up procedure following the provisions of the Scheme, LLP Act, 2008, and the Registrar of Companies (ROC).</p>

          <h1 className="text-2xl font-bold mb-4 mt-3">
          Reasons for Winding Up a LLP
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p>By filing the Form-24 of Limited Liability Partnership (Amendments) Rules, 2017, a concerned personnel can close down an LLP. The frequent reasons are namely:</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>✔ Not having 2 Directors/Partners on the Board
              </li>
              <li>✔ Economic Condition</li>
              <li>✔ Low Profits</li>
              <li>✔ Tough Competition</li>
              <li>✔ Management Issue</li>
              <li>✔ Lack of Capital</li>
              <li>✔ Unanticipated Event</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </div>  
  )
}

export default LLP_winding_up
