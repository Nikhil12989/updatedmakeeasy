import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const One_person_company = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">One Person Company
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
          <h2 className="text-2xl lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">One Person Company (OPC) Registration - Online Process 
          </h2>
          <h3 className='pt-4 text-base font-semibold'>Register a one person company registration online in India within 7 – 10 days. Get expert help from <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span> in OPC registration.


          </h3>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
            
            <p className="mt-10 mb-4">With the introduction of the Companies Act, 2013 the concept of the One Person Company came into existence to motivate the small traders and entrepreneurs who has the potentiality to start their own business and build up their own identity. The biggest advantages of starting a One Person Company are that only one person is required to start the business.</p>
            
            <p className="mb-4">An entrepreneur can be the master of their own domain in case of One Person Company (OPC). Wherein in case of Private Limited Company or LLP, minimum of two members is needed to be incorporated..</p>
            
            <p className="mb-4">One Person Company was introduced in the J.J Report to create empowerment for the entrepreneurs where they can give a shape to their ideas. As there is a progress in the use of information technology and growth in the service sector in India, government has launched the concept of OPC.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default One_person_company
