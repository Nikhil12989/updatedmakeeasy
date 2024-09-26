import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Nidhi_registration_lic = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Nidhi Company Registration</h1>

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
            Nidhi Company Registration- Easier Than You Can Think


          </h2>
          <h3 className='pt-4 text-base font-semibold'>Our Expert consultation will help you to get the Trademark registration online seamlessly from the government.
          </h3>
          <p className='pt-4'>With the Prompt Action of CA/CS, Register Your Nidhi Company Quickly but Flawlessly

          </p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
            <h1 className="text-2xl font-bold mb-4 mt-3">
              Nidhi Company Registration in India Online

            </h1>
            <p className="mb-4">
              A Nidhi Company is a type of Non-Banking Financial Company (NBFC) dedicated to lending or borrowing money to all its members as required. According to the Nidhi Rules, 2014, members can borrow money against tangible collateral such as property mortgage, gold, etc. Nidhi companies have to register under the Companies Act, 2013.
            </p>
            <p className="mb-4">The conception of Nidhi Company was initiated to practice thrift amongst its members, receiving deposits and lending money for mutual benefit. A Nidhi company is regulated by the Ministry of Corporate Affairs but it does not need to receive any license from the Reserve Bank of India (RBI). </p>
            <p className="mb-4">
              These companies will be registered as public limited companies, and you can mention them as “Nidhi Limited” following the names of the companies. If you like to Register a Nidhi company, we can assist you. We have dedicated CA/CS services for your customized needs. So, what are you waiting for? Contact us today.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Nidhi_registration_lic
